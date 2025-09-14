import React from "react";

const logos = [
  "https://i.imgur.com/qGsYvAK.png",
  "https://i.imgur.com/2yxwOt6.png",
  "https://i.imgur.com/fzB1ZPT.png",
  "https://i.imgur.com/IZYdi6A.png",
  "https://i.imgur.com/EBX70zu.png",
  "https://i.imgur.com/rUwDBuq.png",
];

const CustomerLogos = () => {
  return (
    <section className="min-h-[30vh] bg-gray-50">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((src, i) => (
            <a
              key={i}
              href="#"
              className="flex justify-center items-center"
            >
              <img
                src={src}
                alt={`Logo ${i + 1}`}
                className="h-24 object-contain hover:opacity-80 transition"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
