import meImg from '../assets/me.jpeg';
import Section from "./Section";

function Picture() {
  return (
    <div className="size-48 rounded-full overflow-clip">
      <img className="w-full h-full" src={meImg}></img>
    </div>
  );
}

function Text() {
  return (
    <p className="text-lg md:text-2xl text-gray-300 max-w-2xl text-center">
      I'm a passionate{" "}
      <span className="text-accent font-semibold">Software Engineer</span>{" "}
      specializing in building fast, modern web applications with{" "}
      <span className="text-accent font-semibold">TypeScript</span>,{" "}
      <span className="text-accent font-semibold">React</span>,{" "}
      <span className="text-accent font-semibold">Next.js</span>, and{" "}
      <span className="text-accent font-semibold">Python</span>.
    </p>
  );
}

function Hero() {
  return (
    <Section>
      <h1 className="text-center">
        Hi, I'm David Lin
      </h1>
      <Picture />
      <Text />
    </Section>
  );
}

export default Hero;
