import React from 'react';
import Image from "next/image";
import BackgroundSlider from '../components/BackgroundSlider/page';

const page = () => {
  return (
    <section className="relative w-full min-h-screen">
<div className="w-full h-[75vh] relative">
        <BackgroundSlider />
      </div>
  {/* Main Grid - Dr Adeela */}
<div className="relative w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
  {/* Doctor Image */}
  <div className="flex justify-center">
    <Image
      src="/profilepic.jpg"
      alt="Dr. Adeela Kausar"
      width={400}
      height={590}
      className="rounded-2xl shadow-xl border-4 border-secondary object-cover max-w-full h-auto"
    />
  </div>

  {/* Doctor Info */}
  <div>
    <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
      Dr. Adeela Kausar <span className="text-secondary">(DPT),(MPPTA)</span>
    </h1>
    <p className=" text-black md:text-lg  leading-relaxed mb-4 ">
      Dr. Adeela Kausar is a highly qualified and compassionate
      physiotherapist dedicated to improving patients’ quality of life
      through advanced therapies and evidence-based practices.
    </p>
    <p className="text-base md:text-lg leading-relaxed mb-6 text-black ">
      With years of experience at{" "}
      <span className="font-semibold">Allied Hospital ||,Faisalabad</span>,
      she has treated countless patients with dedication and care.
    </p>

    {/* Expertise Box */}
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border-l-4 border-secondary w-full">
      <h2 className="text-lg md:text-xl font-bold text-secondary mb-3">
        Areas of Expertise
      </h2>
      <ul className="space-y-2 sm:space-y-3 text-gray-800 text-sm sm:text-base font-semibold">
        <li>✔ Back Pain & Headache</li>
        <li>✔ Paralysis Rehabilitation</li>
        <li>✔ By-Birth or Accidental Disability Treatment</li>
        <li>✔ Special Kids Therapy</li>
        <li>✔ Certified in CP</li>
        <li>✔ Complete Physiotherapy & Rehabilitation Exercises</li>
      </ul>
    </div>
  </div>
</div>

     {/* Main Grid - Dr Waqas */}
<div
  className="relative w-full mx-auto grid md:grid-cols-2 gap-12 items-center py-16 px-6 bg-cover bg-center rounded-xl shadow-lg"

>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

  {/* Doctor Info (Left Side) */}
  <div className="relative z-10 space-y-6">
    <h1 className="text-4xl font-bold text-secondary">
      Dr. Waqas Farooq (DPT) , (MPPTA)
    </h1>
    <p className="text-lg leading-relaxed text-gray-800">
      Dr. Waqas Farooq is an experienced and skilled physiotherapist, 
      formerly serving as an <span className="font-semibold">Ex Physiotherapist at Bilqees Sarwer Hospital Lahore</span>.  
      He is certified in <span className="font-semibold">CP</span> and 
      <span className="font-semibold"> Dry Needling </span>, providing advanced therapeutic care.
    </p>
    <p className="text-lg leading-relaxed text-gray-800">
      He specializes in treating <span className="font-semibold">body weakness, muscle weakness, laqwa, falij, fractures (post-operation), back pain, sports injuries, foot deformities, and spinal issues</span>.  
      His patient-focused approach ensures quick recovery and long-term relief.
    </p>

    {/* Expertise Box */}
    <div className="bg-secondary rounded-xl shadow-md p-6 border-l-4 border-white mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        Areas of Expertise
      </h2>
      <ul className="space-y-2 text-white text-base font-semibold">
        <li>✔ Body Weakness & Muscle Weakness</li>
        <li>✔ Laqwa & Falij Rehabilitation</li>
        <li>✔ Fracture Recovery (Post Operation)</li>
        <li>✔ Back Pain & Sports Injuries</li>
        <li>✔ Foot Deformities </li>
        <li>✔ Spinal Disorders </li>
        <li>✔ Certified in CP & Dry Needling </li>
      </ul>
    </div>
  </div>

  {/* Doctor Image (Right Side) */}
  <div className="relative z-10 flex justify-center">
    <Image
      src="/doctor.jpg"
      alt="Dr. Waqas Farooq"
      width={380}
      height={550}
      className="rounded-2xl shadow-xl border-4 border-secondary object-cover"
    />
  </div>
</div>


      {/* Mission / Philosophy Section */}
      <div className="relative w-full mx-auto mt-12 text-center py-8 px-6 bg-secondary rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-base leading-relaxed text-white">
          At <span className="font-bold text-2xl text-amber-500">KTZ PHYSIO</span>,
          we believe that every individual deserves a healthy and active life.
          Our mission is to provide world-class physiotherapy and rehabilitation
          services that restore mobility, reduce pain, and promote long-term wellness.
        </p>
      </div>
    </section>
  );
}

export default page;
