"use client";

import { useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { testimonialsData } from "@/data/landing";

const TestimonialsSection = () => {
  const plugin = useRef(
    Autoplay({
      delay: 1000,               // Wait 3s between slides
      stopOnMouseEnter: true,    // Pause when hovered
      stopOnInteraction: false,  // Don’t stop on click
      stopOnFocusIn: true,       // Pause when tabbing through
    })
  );

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>

        <Carousel
          className="w-3/4 md:w-11/12 max-w-6xl mx-auto"
          opts={{ loop: true }}
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="px-4 md:basis-1/2 lg:basis-1/3 "
              >
                <Card className="bg-white p-6 shadow-lg rounded-xl h-full flex flex-col items-center text-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mb-4"
                  />
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.quote}
                  </p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center mt-6 gap-4">
            <CarouselPrevious className="hover:scale-110 transition" />
            <CarouselNext className="hover:scale-110 transition" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
