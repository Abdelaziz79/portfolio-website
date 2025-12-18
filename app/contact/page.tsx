"use client";

import { links } from "@/app/_constants/links";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Loader2,
  Mail,
  MessageCircle,
  MessageSquare,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = t("nameRequired");
      isValid = false;
    } else if (name.trim().length < 3) {
      newErrors.name = t("nameError");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = t("emailRequired");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = t("emailError");
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = t("messageRequired");
      isValid = false;
    } else if (message.trim().length < 10) {
      newErrors.message = t("messageError");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      toast.error(t("fixMessage"));
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast.success(t("messageSent"));
        setName("");
        setEmail("");
        setMessage("");
        setErrors({ name: "", email: "", message: "" });
      } else {
        toast.error(t("messageFailed"));
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(t("networkError"));
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: t("email"),
      href: `mailto:${links.gmail}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: `https://wa.me/${links.phone}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: links.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      href: links.github,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="grid lg:grid-cols-[2fr,1fr] gap-12">
        {/* Left: Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 "
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6" />
              <h1 className="text-3xl font-bold">{t("contact")}</h1>
            </div>
            <p className="text-muted-foreground">{t("contactDescription")}</p>
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  {t("name")}
                </label>
                <Input
                  id="name"
                  placeholder={t("namePlaceholder")}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  disabled={isLoading}
                  className={`bg-card ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {t("email")}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  disabled={isLoading}
                  className={`bg-card ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                {t("message")}
              </label>
              <Textarea
                id="message"
                placeholder={t("messagePlaceholder")}
                rows={8}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors({ ...errors, message: "" });
                }}
                disabled={isLoading}
                maxLength={1000}
                className={`resize-none bg-card ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message ? (
                <p className="text-xs text-red-500">{errors.message}</p>
              ) : (
                <p className="text-xs text-muted-foreground text-right">
                  {message.length}/1000
                </p>
              )}
            </div>

            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              size="lg"
              className="w-full sm:w-auto px-8"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  {t("sending")}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  {t("send")}
                </>
              )}
            </Button>
          </div>
        </motion.div>

        {/* Right: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-lg font-semibold mb-4">{t("getInTouch")}</h2>
            <p className="text-sm text-muted-foreground mb-6">
              {t("getInTouchDescription")}
            </p>
          </div>

          <div className="space-y-3">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
              >
                <div className="p-2 rounded-md bg-primary/10">
                  <method.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">{method.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
