'use client';

import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ImageGalleryDialogProps {
  isOpen: boolean;
  images: { src: string; alt?: string; }[];
  selectedImageIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageGalleryDialog: React.FC<ImageGalleryDialogProps> = memo(
  ({ isOpen, images, selectedImageIndex, onClose, onNext, onPrev }) => {
    const handleClickOnImage = (e: React.MouseEvent) => {
      e.stopPropagation();
    };

    // State to hold natural size
    const [naturalSizes, setNaturalSizes] = useState<{ width: number; height: number; }[]>([]);

    const [viewportHeight, setViewportHeight] = useState<number>(typeof window !== 'undefined' ? window.innerHeight : 0);
    const [viewportWidth, setViewportWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
      // Update viewport height on resize
      const handleResize = () => {
        setViewportHeight(window.innerHeight);
        setViewportWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          onNext();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          onPrev();
        }
      },
      [onNext, onPrev]
    );

    useEffect(() => {
      if (isOpen) {
        window.addEventListener('keydown', handleKeyDown);
      } else {
        window.removeEventListener('keydown', handleKeyDown);
      }

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [isOpen, handleKeyDown]);

    const currentImage = images[selectedImageIndex];

    // Load images to get natural size
    useEffect(() => {
      images.forEach((image, index) => {
        const img = new window.Image();
        img.src = image.src;
        img.onload = () => {
          setNaturalSizes(sizes => {
            sizes[index] = { width: img.naturalWidth, height: img.naturalHeight };
            return sizes;
          });
        };
      });

    }, [images]);

    if (currentImage === null || naturalSizes.length < images.length) {
      return null;
    }

    // Calculate the max allowed height (e.g., 80% of viewport)
    const maxAllowedHeight = Math.min(
      naturalSizes[selectedImageIndex]?.height || 600,
      Math.floor(viewportHeight * 0.8)
    );

    // Calculate the max allowed width (e.g., 95% of viewport)
    const maxAllowedWidth = Math.min(
      naturalSizes[selectedImageIndex]?.width || 800,
      Math.floor(viewportWidth * 0.95)
    );

    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogTitle className='sr-only'>Image Gallery</DialogTitle>
        <DialogContent
          className='bg-transparent shadow-none border-none !max-w-[95vw] h-fit outline-none flex items-center justify-center'
          showCloseButton={false}
        >
          {currentImage && (

            <div
              className='relative flex items-center'
              style={{ height: maxAllowedHeight, width: naturalSizes[selectedImageIndex]?.width || 800 }}
            >
              <div
                className='absolute top-5 z-10 right-5 text-white font-semibold bg-slate-800/60 hover:bg-brand-800 p-2 rounded-full cursor-pointer'
                onClick={onClose}
              >
                <X size={32} strokeWidth={2} />
              </div>
              <div
                className='absolute -bottom-10 w-full z-10 left-0 text-white flex justify-center font-semibold hover:bg-brand-800 p-2 cursor-pointer'
                onClick={onClose}
              >
                <p className='mx-auto'>{`${selectedImageIndex + 1} / ${images.length}`}</p>
              </div>
              {images.length > 1 &&
                <Button
                  className='absolute bg-primary opacity-50 hover:opacity-100 left-5 z-10 rounded-full outline-none cursor-pointer p-0'
                  size='icon'
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                >
                  <ChevronLeft size={32} color='#fff' />
                </Button>
              }
              <Image
                loading='lazy'
                src={currentImage.src}
                alt={currentImage.alt || 'Image preview'}
                width={naturalSizes[selectedImageIndex]?.width || 800}
                height={naturalSizes[selectedImageIndex]?.height || 600}
                style={{
                  maxWidth: `${maxAllowedWidth}px`,
                  maxHeight: `${maxAllowedHeight}px`,
                  width: 'auto',
                  height: 'auto',
                  margin: '0 auto',
                  display: 'block',
                }}
                className='object-contain'
                onClick={handleClickOnImage}
              />
              {images.length > 1 &&
                <Button
                  className='absolute right-5 z-10 bg-primary opacity-50 hover:opacity-100 rounded-full p-2 outline-none cursor-pointer'
                  size='icon'
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                >
                  <ChevronRight size={32} color='#fff' />
                </Button>
              }
            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  }
);

ImageGalleryDialog.displayName = 'ImageGalleryDialog';

export default ImageGalleryDialog;
