import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import RichTextEditor from "./RichTextEditor";
import DOMPurify from "dompurify";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Plus,
  Trash2,
  GripVertical,
  Type,
  AlignLeft,
  List,
  Quote,
  ImageIcon,
  Tag,
  X,
  Eye,
  Edit3,
} from "lucide-react";

// Formata texto com markdown para HTML (mesma lógica do BlogPost)
const formatContent = (text: string | undefined): string => {
  if (!text) return '';
  
  let formatted = text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary underline hover:text-primary/80" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/~~([^~]+)~~/g, '<del>$1</del>')
    .replace(/__([^_]+)__/g, '<u>$1</u>')
    .replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(/\n/g, '<br>');
  
  return DOMPurify.sanitize(formatted, { 
    ALLOWED_TAGS: ['strong', 'em', 'u', 'br', 'b', 'i', 'a', 'del', 'code'],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class']
  });
};

export interface ContentBlock {
  type: "header" | "title" | "paragraph" | "list" | "quote" | "image";
  category?: string;
  content?: string;
  items?: string[];
  image?: string;
  id?: string;
}

interface ContentBlockEditorProps {
  blocks: ContentBlock[];
  onChange: (blocks: ContentBlock[]) => void;
}

const blockTypes = [
  { type: "header" as const, icon: Tag, label: "Cabeçalho de Seção" },
  { type: "title" as const, icon: Type, label: "Título" },
  { type: "paragraph" as const, icon: AlignLeft, label: "Parágrafo" },
  { type: "list" as const, icon: List, label: "Lista" },
  { type: "quote" as const, icon: Quote, label: "Citação" },
  { type: "image" as const, icon: ImageIcon, label: "Imagem" },
];

// Gerar ID único para cada bloco
const generateBlockId = () => `block-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// Garantir que todos os blocos tenham IDs
const ensureBlockIds = (blocks: ContentBlock[]): ContentBlock[] => {
  return blocks.map((block) => ({
    ...block,
    id: block.id || generateBlockId(),
  }));
};

interface SortableBlockProps {
  block: ContentBlock;
  index: number;
  onUpdate: (index: number, updates: Partial<ContentBlock>) => void;
  onRemove: (index: number) => void;
  onAddListItem: (blockIndex: number) => void;
  onUpdateListItem: (blockIndex: number, itemIndex: number, value: string) => void;
  onRemoveListItem: (blockIndex: number, itemIndex: number) => void;
  onImageUpload: (blockIndex: number, file: File) => void;
  uploading: number | null;
  fileInputRef: (el: HTMLInputElement | null) => void;
}

const SortableBlock = ({
  block,
  index,
  onUpdate,
  onRemove,
  onAddListItem,
  onUpdateListItem,
  onRemoveListItem,
  onImageUpload,
  uploading,
  fileInputRef,
}: SortableBlockProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: block.id! });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const getBlockLabel = (type: ContentBlock["type"]) => {
    return blockTypes.find((b) => b.type === type)?.label || type;
  };

  const getBlockIcon = (type: ContentBlock["type"]) => {
    const IconComponent = blockTypes.find((b) => b.type === type)?.icon || AlignLeft;
    return <IconComponent className="h-4 w-4" />;
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-muted/50 border border-border rounded-lg p-4 ${
        isDragging ? "shadow-lg ring-2 ring-primary/20" : ""
      }`}
    >
      {/* Block Header */}
      <div className="flex items-center gap-2 mb-3">
        <div
          {...attributes}
          {...listeners}
          className="flex items-center gap-1 text-muted-foreground cursor-grab active:cursor-grabbing hover:text-foreground transition-colors p-1 -m-1 rounded"
        >
          <GripVertical className="h-5 w-5" />
          {getBlockIcon(block.type)}
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          {getBlockLabel(block.type)}
        </span>
        <div className="flex-1" />
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-destructive hover:text-destructive"
          onClick={() => onRemove(index)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Block Content */}
      {block.type === "header" && (
        <Input
          value={block.category || ""}
          onChange={(e) => onUpdate(index, { category: e.target.value })}
          placeholder="Ex: DEU BOA, DEU RUIM, IA NA PRÁTICA..."
          className="bg-background"
        />
      )}

      {block.type === "title" && (
        <Input
          value={block.content || ""}
          onChange={(e) => onUpdate(index, { content: e.target.value })}
          placeholder="Título da seção"
          className="bg-background font-semibold"
        />
      )}

      {block.type === "paragraph" && (
        <RichTextEditor
          value={block.content || ""}
          onChange={(content) => onUpdate(index, { content })}
          placeholder="Digite o parágrafo..."
          rows={4}
        />
      )}

      {block.type === "list" && (
        <div className="space-y-2">
          {block.items?.map((item, itemIndex) => (
            <div key={itemIndex} className="flex items-center gap-2">
              <span className="text-primary">•</span>
              <Input
                value={item}
                onChange={(e) => onUpdateListItem(index, itemIndex, e.target.value)}
                placeholder="Item da lista..."
                className="bg-background flex-1"
              />
              {(block.items?.length || 0) > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-destructive"
                  onClick={() => onRemoveListItem(index, itemIndex)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onAddListItem(index)}
            className="mt-2"
          >
            <Plus className="h-4 w-4 mr-1" />
            Adicionar item
          </Button>
          <div className="text-xs text-muted-foreground mt-2 p-2 bg-background/50 rounded border border-border/50">
            <p className="font-medium mb-1">Formatação disponível:</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              <span><code className="bg-muted px-1 rounded">**texto**</code> → <strong>negrito</strong></span>
              <span><code className="bg-muted px-1 rounded">*texto*</code> → <em>itálico</em></span>
              <span><code className="bg-muted px-1 rounded">__texto__</code> → <u>sublinhado</u></span>
            </div>
          </div>
        </div>
      )}

      {block.type === "quote" && (
        <RichTextEditor
          value={block.content || ""}
          onChange={(content) => onUpdate(index, { content })}
          placeholder="Digite a citação..."
          rows={2}
          className="italic"
        />
      )}

      {block.type === "image" && (
        <div>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onImageUpload(index, file);
            }}
          />

          {block.image ? (
            <div className="relative">
              <img
                src={block.image}
                alt="Conteúdo"
                className="w-full h-40 object-cover rounded-lg border border-border"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8"
                onClick={() => onUpdate(index, { image: "" })}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div
              onClick={() => {
                const input = document.querySelector(
                  `input[data-block-index="${index}"]`
                ) as HTMLInputElement;
                input?.click();
              }}
              className="w-full h-32 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-muted transition-colors"
            >
              {uploading === index ? (
                <div className="animate-pulse text-muted-foreground">Enviando...</div>
              ) : (
                <>
                  <ImageIcon className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Clique para enviar imagem</p>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ContentBlockEditor = ({ blocks, onChange }: ContentBlockEditorProps) => {
  const [uploading, setUploading] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});

  // Garantir que blocos tenham IDs
  const blocksWithIds = ensureBlockIds(blocks);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (over && active.id !== over.id) {
      const oldIndex = blocksWithIds.findIndex((b) => b.id === active.id);
      const newIndex = blocksWithIds.findIndex((b) => b.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        const newBlocks = arrayMove(blocksWithIds, oldIndex, newIndex);
        onChange(newBlocks);
      }
    }
  };

  const addBlock = (type: ContentBlock["type"]) => {
    const newBlock: ContentBlock = { type, id: generateBlockId() };

    switch (type) {
      case "header":
        newBlock.category = "";
        break;
      case "title":
      case "paragraph":
      case "quote":
        newBlock.content = "";
        break;
      case "list":
        newBlock.items = [""];
        break;
      case "image":
        newBlock.image = "";
        break;
    }

    onChange([...blocksWithIds, newBlock]);
  };

  const updateBlock = (index: number, updates: Partial<ContentBlock>) => {
    const newBlocks = [...blocksWithIds];
    newBlocks[index] = { ...newBlocks[index], ...updates };
    onChange(newBlocks);
  };

  const removeBlock = (index: number) => {
    onChange(blocksWithIds.filter((_, i) => i !== index));
  };

  const addListItem = (blockIndex: number) => {
    const block = blocksWithIds[blockIndex];
    if (block.type === "list" && block.items) {
      updateBlock(blockIndex, { items: [...block.items, ""] });
    }
  };

  const updateListItem = (blockIndex: number, itemIndex: number, value: string) => {
    const block = blocksWithIds[blockIndex];
    if (block.type === "list" && block.items) {
      const newItems = [...block.items];
      newItems[itemIndex] = value;
      updateBlock(blockIndex, { items: newItems });
    }
  };

  const removeListItem = (blockIndex: number, itemIndex: number) => {
    const block = blocksWithIds[blockIndex];
    if (block.type === "list" && block.items && block.items.length > 1) {
      updateBlock(blockIndex, {
        items: block.items.filter((_, i) => i !== itemIndex),
      });
    }
  };

  const handleImageUpload = async (blockIndex: number, file: File) => {
    setUploading(blockIndex);
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `content-${Date.now()}.${fileExt}`;
      const filePath = `content/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("post-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("post-images").getPublicUrl(filePath);

      updateBlock(blockIndex, { image: publicUrl });
      toast({ title: "Imagem enviada!" });
    } catch (error: any) {
      toast({
        title: "Erro ao enviar imagem",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(null);
    }
  };

  const activeBlock = activeId
    ? blocksWithIds.find((b) => b.id === activeId)
    : null;

  return (
    <div className="space-y-4">
      {/* Toggle between Editor and Preview */}
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <Button
          variant={!showPreview ? "default" : "outline"}
          size="sm"
          onClick={() => setShowPreview(false)}
          className="gap-2"
        >
          <Edit3 className="h-4 w-4" />
          Editor
        </Button>
        <Button
          variant={showPreview ? "default" : "outline"}
          size="sm"
          onClick={() => setShowPreview(true)}
          className="gap-2"
        >
          <Eye className="h-4 w-4" />
          Preview
        </Button>
      </div>

      {showPreview ? (
        /* Live Preview Mode */
        <div className="bg-background rounded-lg border border-border p-6">
          {blocksWithIds.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>Nenhum conteúdo para visualizar.</p>
              <p className="text-sm">Adicione blocos no modo Editor.</p>
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              {blocksWithIds.map((section, index) => {
                switch (section.type) {
                  case "header":
                    return (
                      <div key={index} className="my-8">
                        <div className="inline-block px-4 py-1.5 text-sm font-bold tracking-wide uppercase bg-primary text-primary-foreground rounded-full">
                          {section.category || "SEÇÃO"}
                        </div>
                      </div>
                    );
                  case "title":
                    return (
                      <h2 key={index} className="font-display text-2xl md:text-3xl font-bold text-primary mt-2 mb-4">
                        {section.content || "Título da seção"}
                      </h2>
                    );
                  case "paragraph":
                    return (
                      <p 
                        key={index} 
                        className="text-foreground leading-relaxed mb-4 whitespace-pre-line"
                        dangerouslySetInnerHTML={{ 
                          __html: formatContent(section.content) || '<span class="text-muted-foreground italic">Parágrafo vazio...</span>'
                        }}
                      />
                    );
                  case "list":
                    return (
                      <ul key={index} className="space-y-3 mb-6">
                        {section.items?.length ? section.items.map((item, i) => (
                          <li 
                            key={i} 
                            className="flex items-start gap-2 text-foreground"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span dangerouslySetInnerHTML={{ 
                              __html: formatContent(item) || '<span class="text-muted-foreground italic">Item vazio</span>'
                            }} />
                          </li>
                        )) : (
                          <li className="text-muted-foreground italic">Lista vazia...</li>
                        )}
                      </ul>
                    );
                  case "quote":
                    return (
                      <blockquote key={index} className="bg-muted rounded-lg p-6 my-6 border-l-4 border-primary">
                        <p className="text-foreground italic">
                          {section.content || <span className="text-muted-foreground">Citação vazia...</span>}
                        </p>
                      </blockquote>
                    );
                  case "image":
                    return section.image ? (
                      <div key={index} className="my-8 rounded-xl overflow-hidden">
                        <img 
                          src={section.image} 
                          alt=""
                          className="w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div key={index} className="my-8 rounded-xl bg-muted flex items-center justify-center h-40 border-2 border-dashed border-border">
                        <span className="text-muted-foreground">Imagem não definida</span>
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          )}
        </div>
      ) : (
        /* Editor Mode */
        <>
          {/* Blocks List with Drag and Drop */}
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={blocksWithIds.map((b) => b.id!)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-3">
                {blocksWithIds.map((block, index) => (
                  <SortableBlock
                    key={block.id}
                    block={block}
                    index={index}
                    onUpdate={updateBlock}
                    onRemove={removeBlock}
                    onAddListItem={addListItem}
                    onUpdateListItem={updateListItem}
                    onRemoveListItem={removeListItem}
                    onImageUpload={handleImageUpload}
                    uploading={uploading}
                    fileInputRef={(el) => {
                      fileInputRefs.current[index] = el;
                    }}
                  />
                ))}
              </div>
            </SortableContext>

            <DragOverlay>
              {activeBlock ? (
                <div className="bg-muted/80 border-2 border-primary rounded-lg p-4 shadow-xl opacity-90">
                  <div className="flex items-center gap-2">
                    <GripVertical className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">
                      {blockTypes.find((b) => b.type === activeBlock.type)?.label}
                    </span>
                  </div>
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>

          {/* Add Block Buttons */}
          <div className="border border-dashed border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-3 text-center">
              Adicionar bloco:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {blockTypes.map(({ type, icon: Icon, label }) => (
                <Button
                  key={type}
                  variant="outline"
                  size="sm"
                  onClick={() => addBlock(type)}
                  className="gap-1"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Button>
              ))}
            </div>
            
            {/* Formatting Help */}
            <div className="mt-4 p-3 bg-muted/30 rounded-lg border border-border/50">
              <p className="text-sm font-medium text-muted-foreground mb-2">📝 Atalhos de formatação:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <code className="bg-background px-1.5 py-0.5 rounded border">**texto**</code>
                  <span>→</span>
                  <strong>negrito</strong>
                </div>
                <div className="flex items-center gap-2">
                  <code className="bg-background px-1.5 py-0.5 rounded border">*texto*</code>
                  <span>→</span>
                  <em>itálico</em>
                </div>
                <div className="flex items-center gap-2">
                  <code className="bg-background px-1.5 py-0.5 rounded border">__texto__</code>
                  <span>→</span>
                  <u>sublinhado</u>
                </div>
                <div className="flex items-center gap-2">
                  <code className="bg-background px-1.5 py-0.5 rounded border">~~texto~~</code>
                  <span>→</span>
                  <del>tachado</del>
                </div>
                <div className="flex items-center gap-2">
                  <code className="bg-background px-1.5 py-0.5 rounded border">`código`</code>
                  <span>→</span>
                  <code className="bg-muted px-1 rounded">código</code>
                </div>
                <div className="flex items-center gap-2">
                  <code className="bg-background px-1.5 py-0.5 rounded border">[link](url)</code>
                  <span>→</span>
                  <span className="text-primary underline">link</span>
                </div>
              </div>
            </div>
          </div>

          {blocks.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>Nenhum bloco de conteúdo ainda.</p>
              <p className="text-sm">Clique nos botões acima para adicionar conteúdo.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ContentBlockEditor;
