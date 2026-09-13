// File: portfolio-website/app/_components/ImageDialog.tsx

"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

interface ImageDialogProps {
  image: string;
  alt: string;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
  previewHeight?: string;
  className?: string;
  priority?: boolean;
}

export default function ImageDialog({
  image,
  alt,
  title,
  description,
  width = 600,
  height = 400,
  previewHeight = "h-48",
  className = "",
  priority = false,
}: ImageDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          className={`relative ${previewHeight} overflow-hidden cursor-pointer group ${className}`}
        >
          <Image
            src={image}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full bg-background border-border p-6">
        <DialogTitle className="sr-only">
          {title || `${alt} Preview`}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {description || `Expanded view of ${alt}`}
        </DialogDescription>
        <div className="relative w-full flex items-center justify-center overflow-hidden rounded-md">
          <Image
            src={image}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[80vh] object-contain"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}