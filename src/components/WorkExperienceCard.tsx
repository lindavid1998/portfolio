import { type WorkExperience } from "@/experience";

interface WorkExperienceCardProps {
  experience: WorkExperience
}

export default function WorkExperienceCard({
  experience
}: WorkExperienceCardProps) {
  return (
    <>
      <div className="-top-24 left-1/4 w-[700px] h-[350px] -rotate-6 bg-[#3b27f4] opacity-90 -z-10 rounded-2xl shadow-2xl" />
      <div>{experience.company}</div>
      <div>{experience.description}</div>
    </>
  );
}
