import Section from "./Section";
import { workExperiences } from "@/experience";
import WorkExperienceCard from "./WorkExperienceCard";

export default function WorkExperience() {
  return (
    <Section title="Work Experience">
      <div className="flex flex-col gap-4">
        {workExperiences.map((experience) => (
          <WorkExperienceCard experience={experience} />
        ))}
      </div>
    </Section>
  );
}
