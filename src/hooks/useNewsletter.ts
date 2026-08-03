import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export const useNewsletter = (source: string = "hero") => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkRateLimit = async (identifier: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.functions.invoke('check-rate-limit', {
        body: {
          identifier,
          action: 'newsletter_subscribe',
          maxAttempts: 3,
          windowMinutes: 60,
          blockMinutes: 60
        }
      });

      if (error) {
        console.error('Rate limit check error:', error);
        // On error, allow the request (fail open for UX, but log for monitoring)
        return true;
      }

      if (!data.allowed) {
        toast({
          title: "Limite de tentativas excedido",
          description: data.message || "Tente novamente mais tarde.",
          variant: "destructive",
        });
        return false;
      }

      return true;
    } catch (error) {
      console.error('Rate limit error:', error);
      return true; // Fail open
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setIsLoading(true);

    try {
      // Check rate limit using email as identifier
      const emailLower = email.trim().toLowerCase();
      const allowed = await checkRateLimit(emailLower);
      
      if (!allowed) {
        setIsLoading(false);
        return;
      }

      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: emailLower, source });

      if (error) {
        if (error.code === "23505") {
          // Unique constraint violation - email already exists
          toast({
            title: "Você já está inscrito! 😊",
            description: "Este email já faz parte da nossa newsletter.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Bem-vindo à newsletter! 🎉",
          description: "Você receberá as últimas novidades sobre IA.",
        });
      }

      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Erro ao inscrever",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    isLoading,
    handleSubscribe,
  };
};
