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
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] relative"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={src}
                alt={`Carousel Image ${index}`}
                width={500}
                height={384}
                className="object-contain"
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
            className={`w-3 h-3 rounded-full mx-1 ${index === selectedIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};
