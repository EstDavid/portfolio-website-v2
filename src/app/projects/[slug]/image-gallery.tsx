'use client';

import React, { memo, useCallback, useEffect } from 'react';
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

    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogTitle className='sr-only'>Image Gallery</DialogTitle>
        <DialogContent
          className='bg-transparent shadow-none border-none !max-w-[95vw] h-160 outline-none'
          showCloseButton={false}
        >
          {currentImage && (
            <div className='relative flex items-center justify-center w-full h-full'>

              <div className='relative px-10 w-full h-full flex items-center'>
                <div
                  className='absolute -top-20 z-10 right-5 text-white font-semibold hover:bg-brand-800 p-2 rounded-md cursor-pointer'
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
                <Image
                  loading='lazy'
                  src={currentImage.src}
                  alt={currentImage.alt || 'Image preview'}
                  fill
                  className='object-contain'
                  sizes='100vw'
                  onClick={handleClickOnImage}
                />
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
              </div>

            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  }
);

ImageGalleryDialog.displayName = 'ImageGalleryDialog';

export default ImageGalleryDialog;
