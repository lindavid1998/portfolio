import Section from "./Section";
import { workExperiences } from "@/experience";
import WorkExperienceCard from "./WorkExperienceCard";

export default function WorkExperience() {
  return (
    <Section title="Work Experience">
      {workExperiences.map((experience) => (
        <WorkExperienceCard experience={experience} />
      ))}
    </Section>
  );
}
