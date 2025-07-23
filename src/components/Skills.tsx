import Section from "./Section";
import SkillBadge from "./SkillBadge";

let skillToIcon = new Map<string, string>([
  ["TypeScript", "ts"],
  ["React", "react"],
  ["Python", "python"],
  ["Node.js", "nodejs"],
  ["Next.js", "nextjs"],
  ["PostgreSQL", "postgresql"],
]);

function Skills() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {Array.from(skillToIcon).map(([key, value]) => (
          <SkillBadge key={key} name={key} imgUrl={value} />
        ))}
      </div>
    </Section>
  );
}

export default Skills;
