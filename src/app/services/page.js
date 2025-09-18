import React from "react";
import Image from "next/image";

const page = () => {
  const services = [
    { name: "Neck Pain Therapy", img: "/img5.jpg" },
    { name: "Paralysis Rehabilitation", img: "/paralysis.png" },
    { name: "Special Kids Therapy", img: "/specialkids.jpg" },
    { name: "Dry Needling", img: "/dryneedling.jpg" },
    { name: "Accidental Injury Recovery", img: "/injury.jpg" },
    { name: "Back Pain Therapy", img: "/img1.jpg" },
    { name: "Shoulder Pain & Stiffness Treatment", img: "/img2.jpg" },
    { name: "Bells-Palsy Treatment", img: "/Bells-Palsy.jpg" },
    { name: "Arthritis Treatment", img: "/Arthritis.jpg" },
    { name: "Polio Recovery Therapy", img: "/Polio.jpg" },
    { name: "Nerves Weakness Therapy", img: "/Nerve.jpg" },
    { name: "Cerebral Palsy Childs Treatment", img: "/Cerebral-Palsy.jpg" },
  ];

  return (
    <section className="w-[90%] mx-auto py-12">
      <h1 className="text-4xl font-bold text-secondary text-center mb-8">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition"
          >
            <Image
              src={service.img}
              alt={service.name}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-secondary">{service.name}</h2>
            </div>
          </div>
        ))}
      </div>
      {/* Message by Our Doctor Section */}
      <div className="relative w-full bg-gradient-to-r from-secondary to-secondary/80 py-12 px-6 text-center text-white shadow-lg">
        <h2 className="text-4xl font-bold mb-6">Message by Our Doctor</h2>

        {/* Islamic Quotation */}
        <blockquote className="italic text-xl max-w-3xl mx-auto mb-6 text-amber-300">
          “Indeed, your body has a right over you.” <br />
          <span className="text-sm text-gray-200">(Prophet Muhammad ﷺ, Sahih Bukhari)</span>
        </blockquote>

        {/* Doctor's Message */}
        <p className="max-w-4xl mx-auto text-lg leading-relaxed mb-6">
          As your healthcare provider, I want to remind you that good health is one of the greatest
          blessings. Taking care of your body is not just important for a happy life but also a part of
          fulfilling our responsibility towards ourselves and our Creator. Regular exercise, a balanced diet,
          proper rest, and timely physiotherapy are key to living an active and pain-free life.
        </p>

        {/* Advice / Closing Note */}
        <p className="max-w-3xl mx-auto text-base leading-relaxed text-gray-100">
          Always listen to your body, never ignore early signs of pain, and prioritize your well-being.
          Remember, prevention is better than cure. At <span className="font-bold text-amber-400">KTZ PHYSIO</span>,
          we are committed to guiding you towards a healthier, stronger, and more active lifestyle.
        </p>
      </div>

    </section>
  );
}



export default page
