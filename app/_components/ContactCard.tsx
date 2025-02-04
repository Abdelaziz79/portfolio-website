"use client";

import { links } from "@/app/_constants/links";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

function ContactCard() {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Card className="max-w-2xl mx-auto border border-border/50">
        <CardHeader>
          <CardTitle>{t("contactInformation")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Email */}
            <a
              href={`mailto:${links.gmail}`}
              className="flex flex-col gap-1 items-center justify-center p-4 hover:bg-muted/50 rounded-lg transition-colors"
            >
              <Mail className="h-8 w-8 text-primary" />
              <span className="text-muted-foreground text-sm">
                {t("email")}
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${links.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 items-center justify-center p-4 hover:bg-muted/50 rounded-lg transition-colors"
            >
              <MessageCircle className="h-8 w-8 text-primary" />
              <span className="text-muted-foreground text-sm">whatsapp</span>
            </a>

            {/* LinkedIn */}
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 items-center justify-center p-4 hover:bg-muted/50 rounded-lg transition-colors"
            >
              <Linkedin className="h-8 w-8 text-primary" />
              <span className="text-muted-foreground text-sm">linkedin</span>
            </a>

            {/* GitHub */}
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 items-center justify-center p-4 hover:bg-muted/50 rounded-lg transition-colors"
            >
              <Github className="h-8 w-8 text-primary" />
              <span className="text-muted-foreground text-sm">github</span>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ContactCard;
