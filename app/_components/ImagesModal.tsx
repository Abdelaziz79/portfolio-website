"use client";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, Image as ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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

export default function ImagesModal({
  isOpen,
  screenshots,
  selectedIndex,
  imageErrors,
  projectTitle,
  onClose,
  onImageError,
  onSelectImage,
}: ImageModalProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (api) {
      api.scrollTo(selectedIndex, true);
    }
  }, [api, selectedIndex]);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    onSelectImage(api.selectedScrollSnap());

    api.on("select", () => {
      const selected = api.selectedScrollSnap();
      setCurrent(selected);
      onSelectImage(selected);
    });
  }, [api, onSelectImage]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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

  useEffect(() => {
    if (!isOpen) return;

    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault();
      onClose();
    };

    window.history.pushState({ modalOpen: true }, "");
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      if (window.history.state?.modalOpen) {
        window.history.back();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col" dir="ltr">
      {/* Header with Close Button */}
      <div className="flex justify-end items-center px-4 py-4">
        <Button
          onClick={onClose}
          size="icon"
          variant="ghost"
          className="h-9 w-9 rounded-lg bg-background/90 backdrop-blur-sm hover:bg-accent border border-border transition-all"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center px-4 md:px-8 pb-8 min-h-0 overflow-hidden">
        <div className="w-full h-full flex items-center">
          {/* Desktop Navigation - Left */}
          {screenshots.length > 1 && (
            <div className="hidden md:flex pr-4 lg:pr-6">
              <Button
                onClick={() => api?.scrollPrev()}
                size="icon"
                variant="secondary"
                className="h-11 w-11 rounded-lg shadow-md bg-background/90 backdrop-blur-sm hover:bg-accent border border-border transition-all hover:scale-105"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Carousel Container */}
          <div className="flex-1 flex flex-col items-center justify-center h-full min-w-0">
            <div className="w-full h-full max-h-[calc(100vh-260px)]">
              <Carousel
                setApi={setApi}
                className="w-full h-full"
                opts={{
                  align: "center",
                  loop: true,
                  startIndex: selectedIndex,
                }}
              >
                <CarouselContent className="h-full">
                  {screenshots.map((screenshot, index) => (
                    <CarouselItem
                      key={index}
                      className="flex items-center justify-center h-full"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        {imageErrors[index] ? (
                          <div className="flex flex-col items-center justify-center text-muted-foreground bg-muted/30 rounded-xl p-8 w-full min-h-[400px]">
                            <ImageIcon className="w-20 h-20 mb-3 opacity-50" />
                            <p className="text-sm font-medium">
                              Image not available
                            </p>
                          </div>
                        ) : (
                          <div className="w-full h-[calc(100vh-260px)] flex items-center justify-center">
                            <Image
                              src={screenshot}
                              alt={`${projectTitle} - Screenshot ${index + 1}`}
                              width={1920}
                              height={1080}
                              className="max-w-full max-h-full w-auto h-auto object-contain"
                              priority={
                                index === selectedIndex ||
                                index === selectedIndex - 1 ||
                                index === selectedIndex + 1
                              }
                              onError={() => onImageError(index)}
                            />
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Mobile Navigation Buttons */}
            {screenshots.length > 1 && (
              <div className="md:hidden flex justify-center gap-4 mt-4 w-full mb-6  ">
                <Button
                  onClick={() => api?.scrollPrev()}
                  size="icon"
                  variant="secondary"
                  className="h-11 w-11 rounded-lg shadow-md bg-background/90 backdrop-blur-sm hover:bg-accent border border-border transition-all hover:scale-105"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  onClick={() => api?.scrollNext()}
                  size="icon"
                  variant="secondary"
                  className="h-11 w-11 rounded-lg shadow-md bg-background/90 backdrop-blur-sm hover:bg-accent border border-border transition-all hover:scale-105"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            )}
          </div>

          {/* Desktop Navigation - Right */}
          {screenshots.length > 1 && (
            <div className="hidden md:flex pl-4 lg:pl-6">
              <Button
                onClick={() => api?.scrollNext()}
                size="icon"
                variant="secondary"
                className="h-11 w-11 rounded-lg shadow-md bg-background/90 backdrop-blur-sm hover:bg-accent border border-border transition-all hover:scale-105"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Navigation Footer */}
      {screenshots.length > 1 && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <p className="text-sm text-muted-foreground mb-4 text-center font-medium">
              {current + 1} / {screenshots.length}
            </p>
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
                  const isSelected = current === index;

                  return (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        isSelected
                          ? "border-primary ring-2 ring-primary/20 scale-105 shadow-lg"
                          : "border-border hover:border-accent hover:scale-105 hover:shadow-md"
                      }`}
                    >
                      {hasError ? (
                        <div className="w-full h-full flex items-center justify-center bg-muted/30">
                          <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-muted-foreground/50" />
                        </div>
                      ) : (
                        <Image
                          src={screenshot}
                          alt={`Thumbnail ${index + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
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
      )}
    </div>
  );
}
