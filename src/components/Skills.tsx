import Section from "./Section";
import SkillBadge from "./SkillBadge";
import { type Skill } from "@/types";

let skillToIcon = new Map<Skill, string>([
  ["TypeScript", "ts"],
  ["React", "react"],
  ["Python", "python"],
  ["Node.js", "nodejs"],
  ["Next.js", "nextjs"],
  ["PostgreSQL", "postgresql"],
]);

function Skills() {
  return (
    <Section title="Skills">
      <div className="flex flex-wrap gap-6 justify-center">
        {Array.from(skillToIcon).map(([key, value]) => (
          <SkillBadge key={key} name={key} imgUrl={value} />
        ))}
      </div>
    </Section>
  );
}

export default Skills;
