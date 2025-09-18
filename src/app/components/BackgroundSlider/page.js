"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function CustomArrows({ onPrev, onNext }) {
  return (
    <div className="absolute bottom-5 right-5 z-30 flex gap-3">
      <button
        onClick={onPrev}
        className="bg-white/40 hover:bg-white/70 p-3 rounded-full shadow-lg transition"
      >
        <FaChevronLeft className="text-blue-600 text-2xl" />
      </button>
      <button
        onClick={onNext}
        className="bg-white/40 hover:bg-white/70 p-3 rounded-full shadow-lg transition"
      >
        <FaChevronRight className="text-blue-600 text-2xl" />
      </button>
    </div>
  );
}

export default function BackgroundSlider() {
  let sliderRef = null;

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false, // disable default arrows
  };

  const slides = ["/img5.jpg", "/Cerebral-Palsy.jpg", "/physio.png"];

  return (
    <div className="relative w-full h-full">
      <Slider ref={(slider) => (sliderRef = slider)} {...settings} className="h-full relative">
        {slides.map((src, i) => (
          <div key={i} className="relative w-full h-screen">
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </Slider>

      {/* Custom Arrows bottom-right corner */}
      <CustomArrows
        onPrev={() => sliderRef.slickPrev()}
        onNext={() => sliderRef.slickNext()}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
}
