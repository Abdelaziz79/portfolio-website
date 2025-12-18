"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Image as ImageIconLucide,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  screenshots: string[];
  selectedIndex: number;
  imageErrors: boolean[];
  projectTitle: string;
  onClose: () => void;
  onNavigatePrevious: () => void;
  onNavigateNext: () => void;
  onSelectImage: (index: number) => void;
  onImageError: (index: number) => void;
}

export default function ImageModal({
  isOpen,
  screenshots,
  selectedIndex,
  imageErrors,
  projectTitle,
  onClose,
  onNavigatePrevious,
  onNavigateNext,
  onSelectImage,
  onImageError,
}: ImageModalProps) {
  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigatePrevious();
      if (e.key === "ArrowRight") onNavigateNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNavigatePrevious, onNavigateNext]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background" dir="ltr">
      {/* Close Button */}
      <Button
        onClick={onClose}
        size="icon"
        variant="ghost"
        className="absolute right-4 top-4 z-50 h-9 w-9 rounded-lg bg-background/90 backdrop-blur-sm hover:bg-accent border border-border transition-all"
      >
        <X className="h-4 w-4" />
      </Button>

      {/* Navigation Buttons - Desktop (on sides) */}
      {screenshots.length > 1 && (
        <>
          <Button
            onClick={onNavigatePrevious}
            size="icon"
            variant="secondary"
            className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-lg shadow-md z-10 bg-background hover:bg-accent border border-border transition-all hover:scale-105"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            onClick={onNavigateNext}
            size="icon"
            variant="secondary"
            className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-lg shadow-md z-10 bg-background hover:bg-accent border border-border transition-all hover:scale-105"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </>
      )}

      {/* Main Image Viewer */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-180px)] md:h-[calc(100vh-180px)] overflow-hidden px-4 md:px-8 pt-16 pb-4">
        <div className="relative w-full h-full">
          {imageErrors[selectedIndex] ? (
            <div className="flex flex-col items-center justify-center text-muted-foreground bg-muted/30 rounded-xl p-8 h-full">
              <ImageIconLucide className="w-20 h-20 mb-3 opacity-50" />
              <p className="text-sm font-medium">Image not available</p>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <Image
                key={`modal-${selectedIndex}`}
                src={screenshots[selectedIndex]}
                alt={`${projectTitle} - Screenshot ${selectedIndex + 1}`}
                fill
                className="object-contain rounded-lg"
                sizes="95vw"
                priority
                quality={100}
                onError={() => onImageError(selectedIndex)}
              />
            </div>
          )}
        </div>

        {/* Navigation Buttons - Mobile (below image) */}
        {screenshots.length > 1 && (
          <div className="md:hidden flex justify-center gap-4 mt-4 w-full">
            <Button
              onClick={onNavigatePrevious}
              size="icon"
              variant="secondary"
              className="h-10 w-10 rounded-lg shadow-md bg-background hover:bg-accent border border-border transition-all hover:scale-105"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={onNavigateNext}
              size="icon"
              variant="secondary"
              className="h-10 w-10 rounded-lg shadow-md bg-background hover:bg-accent border border-border transition-all hover:scale-105"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>

      {screenshots.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <p className="text-sm text-muted-foreground mb-4 text-center font-medium">
              {selectedIndex + 1} / {screenshots.length}
            </p>
            <div className="relative">
              <div
                className="flex gap-3 overflow-x-auto pb-2 px-1 scroll-smooth
                  [&::-webkit-scrollbar]:h-2
                  [&::-webkit-scrollbar-track]:bg-muted/30
                  [&::-webkit-scrollbar-track]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-border
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:transition-colors
                  hover:[&::-webkit-scrollbar-thumb]:bg-accent"
              >
                <div className="flex gap-3 mx-auto py-2">
                  {screenshots.map((screenshot, index) => {
                    const hasError = imageErrors[index];
                    const isSelected = selectedIndex === index;

                    return (
                      <button
                        key={index}
                        onClick={() => onSelectImage(index)}
                        className={cn(
                          "relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all duration-200",
                          isSelected
                            ? "border-primary ring-2 ring-primary/20 scale-105 shadow-lg"
                            : "border-border hover:border-accent hover:scale-105 hover:shadow-md"
                        )}
                      >
                        {hasError ? (
                          <div className="w-full h-full flex items-center justify-center bg-muted/30">
                            <ImageIconLucide className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-muted-foreground/50" />
                          </div>
                        ) : (
                          <Image
                            src={screenshot}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, 80px"
                            onError={() => onImageError(index)}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
