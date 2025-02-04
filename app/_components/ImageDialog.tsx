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
  aspectRatio?: "square" | "auto" | "video";
  width?: number;
  height?: number;
  previewHeight?: string;
  className?: string;
}

export default function ImageDialog({
  image,
  alt,
  title,
  description,
  aspectRatio = "square",
  width = 600,
  height = 400,
  previewHeight = "h-48",
  className = "",
}: ImageDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const aspectRatioClasses = {
    square: "aspect-square",
    auto: "aspect-auto",
    video: "aspect-video",
  };

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
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full">
        <DialogTitle className="sr-only">
          {title || `${alt} Preview`}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {description || `Expanded view of ${alt}`}
        </DialogDescription>
        <div className={`relative w-full ${aspectRatioClasses[aspectRatio]}`}>
          <Image
            src={image}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
