import { useRef, useCallback, useState, useMemo } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  Link,
  Code,
  Strikethrough,
  Underline,
  Eye,
  EyeOff,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
}

interface FormatAction {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  shortcut: string;
  prefix: string;
  suffix: string;
  placeholder: string;
}

const formatActions: FormatAction[] = [
  {
    icon: Bold,
    label: "Negrito",
    shortcut: "Ctrl+B",
    prefix: "**",
    suffix: "**",
    placeholder: "texto em negrito",
  },
  {
    icon: Italic,
    label: "Itálico",
    shortcut: "Ctrl+I",
    prefix: "*",
    suffix: "*",
    placeholder: "texto em itálico",
  },
  {
    icon: Strikethrough,
    label: "Tachado",
    shortcut: "Ctrl+S",
    prefix: "~~",
    suffix: "~~",
    placeholder: "texto tachado",
  },
  {
    icon: Underline,
    label: "Sublinhado",
    shortcut: "Ctrl+U",
    prefix: "<u>",
    suffix: "</u>",
    placeholder: "texto sublinhado",
  },
  {
    icon: Code,
    label: "Código",
    shortcut: "Ctrl+`",
    prefix: "`",
    suffix: "`",
    placeholder: "código",
  },
  {
    icon: Link,
    label: "Link",
    shortcut: "Ctrl+K",
    prefix: "[",
    suffix: "](url)",
    placeholder: "texto do link",
  },
];

// Função para converter markdown para HTML
const parseMarkdown = (text: string): string => {
  if (!text) return "";

  let html = text
    // Escapar HTML primeiro
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // Depois aplicar formatação markdown
    // Links [texto](url)
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-primary underline hover:text-primary/80" target="_blank" rel="noopener noreferrer">$1</a>'
    )
    // Negrito **texto**
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    // Itálico *texto*
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    // Tachado ~~texto~~
    .replace(/~~([^~]+)~~/g, "<del>$1</del>")
    // Sublinhado <u>texto</u> (já escapado, então precisamos reverter)
    .replace(/&lt;u&gt;([^&]+)&lt;\/u&gt;/g, "<u>$1</u>")
    // Código `texto`
    .replace(
      /`([^`]+)`/g,
      '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>'
    )
    // Quebras de linha
    .replace(/\n/g, "<br />");

  return html;
};

const RichTextEditor = ({
  value,
  onChange,
  placeholder = "Digite seu texto...",
  rows = 3,
  className = "",
}: RichTextEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [showPreview, setShowPreview] = useState(false);

  const parsedContent = useMemo(() => parseMarkdown(value), [value]);

  const applyFormat = useCallback(
    (action: FormatAction) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = value.substring(start, end);
      const textToWrap = selectedText || action.placeholder;

      const before = value.substring(0, start);
      const after = value.substring(end);
      const newText = `${before}${action.prefix}${textToWrap}${action.suffix}${after}`;

      onChange(newText);

      // Reposicionar cursor
      setTimeout(() => {
        textarea.focus();
        if (selectedText) {
          textarea.setSelectionRange(
            start + action.prefix.length,
            start + action.prefix.length + textToWrap.length
          );
        } else {
          textarea.setSelectionRange(
            start + action.prefix.length,
            start + action.prefix.length + action.placeholder.length
          );
        }
      }, 0);
    },
    [value, onChange]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.ctrlKey || e.metaKey) {
        let action: FormatAction | undefined;

        switch (e.key.toLowerCase()) {
          case "b":
            action = formatActions.find((a) => a.label === "Negrito");
            break;
          case "i":
            action = formatActions.find((a) => a.label === "Itálico");
            break;
          case "k":
            action = formatActions.find((a) => a.label === "Link");
            break;
          case "u":
            action = formatActions.find((a) => a.label === "Sublinhado");
            break;
          case "`":
            action = formatActions.find((a) => a.label === "Código");
            break;
        }

        if (action) {
          e.preventDefault();
          applyFormat(action);
        }
      }
    },
    [applyFormat]
  );

  return (
    <div className="space-y-2">
      {/* Formatting Toolbar */}
      <div className="flex flex-wrap gap-1 p-1 bg-muted/30 border border-border rounded-md">
        <TooltipProvider delayDuration={300}>
          {formatActions.map((action) => (
            <Tooltip key={action.label}>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-background"
                  onClick={() => applyFormat(action)}
                >
                  <action.icon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs">
                <p>
                  {action.label}{" "}
                  <span className="text-muted-foreground">({action.shortcut})</span>
                </p>
              </TooltipContent>
            </Tooltip>
          ))}

          <div className="w-px bg-border mx-1" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant={showPreview ? "secondary" : "ghost"}
                size="sm"
                className="h-8 w-8 p-0 hover:bg-background"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top" className="text-xs">
              <p>{showPreview ? "Ocultar preview" : "Mostrar preview"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex-1" />

        <div className="flex items-center text-xs text-muted-foreground pr-2">
          {showPreview ? "Preview" : "Markdown"}
        </div>
      </div>

      {/* Editor / Preview */}
      {showPreview ? (
        <div
          className={`min-h-[${rows * 1.5}rem] p-3 bg-background border border-border rounded-md prose prose-sm max-w-none dark:prose-invert`}
          style={{ minHeight: `${rows * 1.5}rem` }}
        >
          {value ? (
            <div
              dangerouslySetInnerHTML={{ __html: parsedContent }}
              className="text-foreground leading-relaxed"
            />
          ) : (
            <p className="text-muted-foreground italic">{placeholder}</p>
          )}
        </div>
      ) : (
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={rows}
          className={`bg-background font-mono text-sm ${className}`}
        />
      )}

      {/* Live preview strip (always visible when not in full preview mode) */}
      {!showPreview && value && (
        <div className="p-2 bg-muted/20 border border-border/50 rounded-md">
          <div className="flex items-center gap-2 mb-1">
            <Eye className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground font-medium">
              Preview ao vivo
            </span>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: parsedContent }}
            className="text-sm text-foreground leading-relaxed"
          />
        </div>
      )}

      {/* Help text */}
      {!showPreview && !value && (
        <div className="text-xs text-muted-foreground space-x-3">
          <span>
            <strong>**negrito**</strong>
          </span>
          <span>
            <em>*itálico*</em>
          </span>
          <span>
            <code className="bg-muted px-1 rounded">`código`</code>
          </span>
          <span>[link](url)</span>
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;
