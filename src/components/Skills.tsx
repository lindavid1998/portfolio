import Section from "./Section";

type Skill = { name: string };

const skills: Skill[] = [
  { name: "TypeScript" },
  { name: "Python" },
  { name: "SQL" },
  { name: "React" },
  { name: "Node.js" },
  { name: "Next.js" },
  { name: "PostgreSQL" },
];

function Skills() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="px-4 py-2 rounded-full bg-accent text-accent-foreground font-semibold text-lg shadow transition-transform duration-200 hover:scale-125 hover:z-10 cursor-pointer"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
