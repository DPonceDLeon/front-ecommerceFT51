'use client'
import React, { useEffect } from 'react';
import 'flowbite';
import Image from 'next/image';
import Carrusel1 from "@/assets/Carrusel1.jpg"
import Carrusel2 from "@/assets/Carrusel2 (2).png"
import Carrusel3 from "@/assets/Carrusel3.jpg"
import Carrusel4 from "@/assets/Carrusel (2).jpg"


const Carrusel: React.FC = () => {
  useEffect(() => {
    const carousel = document.getElementById('default-carousel');
    if (carousel) {
      const items = carousel.querySelectorAll('[data-carousel-item]');
      let currentIndex = 0;

      const showSlide = (index: number) => {
        items.forEach((item, idx) => {
          item.classList.toggle('hidden', idx !== index);
          item.classList.toggle('block', idx === index);
        });
      };

      const nextSlide = () => {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
      };

      const prevSlide = () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
      };

      const nextButton = carousel.querySelector('[data-carousel-next]');
      const prevButton = carousel.querySelector('[data-carousel-prev]');

      if (nextButton && prevButton) {
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
      }
      
      showSlide(currentIndex);
      
      const interval = setInterval(nextSlide, 6000);

      return () => {
        clearInterval(interval);
      }
      
    }
  }, []);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-[550px]">
        <div className="hidden duration-500 ease-in-out" data-carousel-item>
          <Image src={Carrusel1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div className="hidden duration-500 ease-in-out" data-carousel-item>
          <Image src={Carrusel2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div className="hidden duration-500 ease-in-out" data-carousel-item>
          <Image src={Carrusel3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      </div>
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 dark:bg-gray-800/30 group-hover:bg-blue-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-blue-400 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-blue-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 dark:bg-gray-800/30 group-hover:bg-blue-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-blue-400 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-blue-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carrusel;
