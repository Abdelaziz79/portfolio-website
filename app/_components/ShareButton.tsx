"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  description: string;
  url?: string;
}

export default function ShareButton({
  title,
  description,
  url,
}: ShareButtonProps) {
  const sharePost = async () => {
    const shareData = {
      title,
      text: description,
      url: url || window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast({
          description: "Post shared successfully",
        });
      } else {
        await navigator.clipboard.writeText(
          `${shareData.title}\n${shareData.text}\n${shareData.url}`
        );
        toast({
          description: "Link copied to clipboard",
        });
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        toast({
          variant: "destructive",
          description: "Failed to share post",
        });
      }
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={sharePost}>
      <Share2 className="h-4 w-4" />
    </Button>
  );
}
