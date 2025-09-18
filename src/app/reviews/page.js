"use client";
import React from "react";
import { FaMale, FaFemale, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import BackgroundSlider from "../components/BackgroundSlider/page";

const reviews = [
  {
    name: "Ayesha Khan",
    gender: "female",
    comment: "After therapy, my back pain is completely gone. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ali Raza",
    gender: "male",
    comment: "Best physiotherapy center! Dr. Adeela is very professional and kind.",
    rating: 4.5,
  },
  {
    name: "Sana Malik",
    gender: "female",
    comment: "My child has improved a lot with special kids therapy sessions.",
    rating: 4,
  },
  {
    name: "Farhan Ahmed",
    gender: "male",
    comment: "After my accident, I never thought I could walk again. Thanks to KTZ Physio!",
    rating: 5,
  },
  {
    name: "Hira Sheikh",
    gender: "female",
    comment: "The staff is very friendly and supportive. I felt comfortable throughout my sessions.",
    rating: 4.5,
  },
  {
    name: "Usman Ali",
    gender: "male",
    comment: "Excellent service! I recovered from my sports injury much faster than I expected.",
    rating: 5,
  },
  {
    name: "Maria Javed",
    gender: "female",
    comment: "KTZ Physio really cares about their patients. My mother feels much better now.",
    rating: 4,
  },
  {
    name: "Ahmed Khan",
    gender: "male",
    comment: "The therapy exercises were very effective. Highly satisfied with the results.",
    rating: 4.5,
  },
  {
    name: "Fatima Zahra",
    gender: "female",
    comment: "Best place for physiotherapy! I would recommend it to everyone.",
    rating: 5,
  },
  {
    name: "Bilal Hussain",
    gender: "male",
    comment: "Professional staff and great atmosphere. My shoulder pain is completely gone.",
    rating: 4,
  },
];

// ⭐ Function to render stars based on rating
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="text-yellow-400 inline-block" />);
    } else if (i - rating <= 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 inline-block" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400 inline-block" />);
    }
  }
  return stars;
};

// 👤 Gender Icon in Circle
const GenderIcon = ({ gender }) => {
  return (
    <div
      className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${
        gender === "female" ? "bg-pink-500" : "bg-secondary"
      }`}
    >
      {gender === "female" ? (
        <FaFemale className="text-white text-3xl" />
      ) : (
        <FaMale className="text-white text-3xl" />
      )}
    </div>
  );
};

const Page = () => {
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Slider Component */}
     <div className="w-full h-[75vh] relative">
             <BackgroundSlider />
           </div>

      {/* Reviews Section */}
   <div className="w-[95%] mx-auto relative z-10 pt-6 bg-gray-100/60 backdrop-blur-sm rounded-xl shadow-inner">
        <h1 className="text-5xl font-bold text-secondary text-center mb-12 drop-shadow-lg">
          Patient Reviews & Feedback
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="p-5 rounded-xl shadow-lg bg-white/90 backdrop-blur-md hover:shadow-xl transition transform hover:-translate-y-2 text-center"
            >
              {/* Gender Icon */}
              <GenderIcon gender={review.gender} />

              {/* Review */}
              <p className="text-gray-700 mb-4 italic">“{review.comment}”</p>

              {/* Stars */}
              <div className="flex justify-center mb-2">{renderStars(review.rating)}</div>

              <p className="font-bold text-xl text-secondary">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Our Preference Section */}
            <div className="relative w-full mx-auto mt-12 text-center py-8 px-6 bg-secondary rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-white mb-4">Our Preference</h2>
        <blockquote className="text-xl italic text-amber-500 mb-4">
          “Your comfort and health are our top priority.”
        </blockquote>
        <p className="text-white  max-w-3xl mx-auto leading-relaxed">
          At KTZ Physio, we value the trust our patients place in us. Every review reflects our
          dedication towards their well-being. We strive to provide the best therapy experience,
          ensuring that every patient feels supported, comfortable, and cared for at every step.
        </p>
      </div>
    </section>
  );
};

export default Page;
