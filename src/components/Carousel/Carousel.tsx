'use client'

import Image from 'next/image';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="max-w-[500px] mx-auto">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] relative"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={src}
                alt={`PlexTech gallery image ${index + 1}`}
                width={500}
                height={384}
                className="h-full w-full rounded-xl object-contain"
                sizes="(max-width: 500px) 100vw, 500px"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to image ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full mx-1 transition-colors ${index === selectedIndex ? "bg-orange-500" : "bg-slate-300 hover:bg-slate-400"
              }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};
