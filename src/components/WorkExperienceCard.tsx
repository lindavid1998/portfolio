import { type WorkExperience } from "@/experience";
import LinkedInIcon from "../assets/linkedin.svg";
import { type Skill } from "@/types";

interface WorkExperienceCardProps {
  experience: WorkExperience;
}

function BulletPoint({ text }: { text: string }) {
  return <div className="flex text-muted-foreground">- {text}</div>;
}

function CardHeader({ experience }: { experience: WorkExperience }) {
  const { company, start, end, linkedin, stack, title } = experience;

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3>{title}</h3>
        <div className="text-muted-foreground">
          {start}-{end || "Present"}
        </div>
      </div>
      <a href={linkedin}>{company}</a>
      <div>{stack.join(" | ")}</div>
    </div>
  );
}

export default function WorkExperienceCard({
  experience,
}: WorkExperienceCardProps) {
  const { description } = experience;

  return (
    <div className="flex flex-col align-start max-w-[600px] gap-3">
      <CardHeader experience={experience}></CardHeader>
      <div>
        {description.map((text) => (
          <BulletPoint text={text} />
        ))}
      </div>
    </div>
  );
}
