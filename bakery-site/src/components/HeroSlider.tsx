"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import type { Product } from "@/types/product";

interface HeroSliderProps {
  slides: Product[];
}

const AUTO_PLAY_INTERVAL = 7000;

export function HeroSlider({ slides }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + length) % length);
  };

  useEffect(() => {
    if (length <= 1) return;
    const timer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [length]);

  const activeProduct = useMemo(() => slides[activeIndex], [slides, activeIndex]);

  if (!slides.length) {
    return null;
  }

  return (
    <section className="hero-slider" aria-label="Featured creations">
      <div className="slider-media">
        <Image
          src={activeProduct.image}
          alt={activeProduct.name}
          fill
          priority
          sizes="(min-width: 1200px) 60vw, (min-width: 768px) 70vw, 100vw"
          className="slider-image"
        />
        <div className="slider-overlay" aria-hidden="true" />
      </div>
      <div className="slider-panel">
        <p className="slider-eyebrow">Fresh from the oven</p>
        <h1 className="slider-title">{activeProduct.name}</h1>
        <p className="slider-description">{activeProduct.description}</p>
        <p className="slider-price">${activeProduct.price.toFixed(2)}</p>
        <div className="slider-controls">
          <button type="button" onClick={prevSlide} aria-label="Previous creation">
            ←
          </button>
          <button type="button" onClick={nextSlide} aria-label="Next creation">
            →
          </button>
        </div>
        <div className="slider-dots" role="tablist" aria-label="Featured creations">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`slider-dot${isActive ? " is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="sr-only">Show {slide.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
