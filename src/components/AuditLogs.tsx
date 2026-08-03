import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefreshCw, Shield, AlertTriangle, Info, XCircle } from "lucide-react";

interface AuditLog {
  id: string;
  event_type: string;
  event_action: string;
  identifier: string | null;
  user_id: string | null;
  ip_address: string | null;
  metadata: Record<string, any>;
  severity: string;
  created_at: string;
}

const AuditLogs = () => {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  const fetchLogs = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from("audit_logs")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(100);

      if (filter !== "all") {
        query = query.eq("severity", filter);
      }

      const { data, error } = await query;

      if (error) throw error;
      setLogs((data as AuditLog[]) || []);
    } catch (error) {
      console.error("Error fetching audit logs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [filter]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "error":
        return (
          <Badge variant="destructive" className="gap-1">
            <XCircle className="h-3 w-3" />
            Erro
          </Badge>
        );
      case "warn":
        return (
          <Badge variant="secondary" className="gap-1 bg-yellow-500/20 text-yellow-700 dark:text-yellow-400">
            <AlertTriangle className="h-3 w-3" />
            Aviso
          </Badge>
        );
      default:
        return (
          <Badge variant="outline" className="gap-1">
            <Info className="h-3 w-3" />
            Info
          </Badge>
        );
    }
  };

  const getActionLabel = (action: string) => {
    switch (action) {
      case "blocked_attempt":
        return "Tentativa bloqueada";
      case "user_blocked":
        return "Usuário bloqueado";
      case "high_attempt_count":
        return "Muitas tentativas";
      case "auth_login":
        return "Login";
      case "auth_signup":
        return "Cadastro";
      default:
        return action;
    }
  };

  const maskIdentifier = (identifier: string | null) => {
    if (!identifier) return "-";
    if (identifier.includes("@")) {
      const [local, domain] = identifier.split("@");
      return `${local.slice(0, 2)}***@${domain}`;
    }
    return identifier.slice(0, 4) + "***";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <h2 className="font-display text-xl font-semibold">Logs de Auditoria</h2>
        </div>
        <div className="flex items-center gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Filtrar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="error">Erros</SelectItem>
              <SelectItem value="warn">Avisos</SelectItem>
              <SelectItem value="info">Info</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" onClick={fetchLogs} disabled={loading}>
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          </Button>
        </div>
      </div>

      {logs.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          {loading ? "Carregando..." : "Nenhum log encontrado"}
        </div>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-40">Data/Hora</TableHead>
                <TableHead className="w-24">Severidade</TableHead>
                <TableHead className="w-32">Tipo</TableHead>
                <TableHead className="w-40">Ação</TableHead>
                <TableHead>Identificador</TableHead>
                <TableHead>Detalhes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-mono text-xs">
                    {formatDate(log.created_at)}
                  </TableCell>
                  <TableCell>{getSeverityBadge(log.severity)}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{log.event_type}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">
                    {getActionLabel(log.event_action)}
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {maskIdentifier(log.identifier)}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground max-w-xs truncate">
                    {log.metadata?.action && (
                      <span className="mr-2">
                        Ação: <strong>{log.metadata.action}</strong>
                      </span>
                    )}
                    {log.metadata?.attempts && (
                      <span>
                        Tentativas: <strong>{log.metadata.attempts}</strong>
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        Logs são mantidos por 90 dias. Exibindo os últimos 100 registros.
      </p>
    </div>
  );
};

export default AuditLogs;
