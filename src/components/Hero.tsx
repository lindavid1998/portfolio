import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-white py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Hi, I'm David Lin
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 max-w-2xl text-center mb-6">
        I'm a passionate{" "}
        <span className="text-blue-400 font-semibold">Software Engineer</span>{" "}
        specializing in building fast, modern web applications with{" "}
        <span className="text-blue-400 font-semibold">TypeScript</span>,{" "}
        <span className="text-blue-400 font-semibold">React</span>, and more.
      </p>
    </section>
  );
};

export default Hero;
