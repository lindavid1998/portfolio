import "./SkillBadge.css";

interface SkillBadgeProps {
  name: string;
  imgUrl: string;
}

export default function SkillBadge({ name, imgUrl }: SkillBadgeProps) {
  const baseUrl = "https://skillicons.dev/icons?i=";
  return (
    <div className="flex flex-col items-center transition-transform duration-100 hover:scale-125 group">
      <div className="size-16">
        <img
          className="w-full h-full group-hover:animate-spin-flutter"
          src={baseUrl + imgUrl}
          alt={name + " icon"}
        />
      </div>
      <div className="text-muted-foreground">{name}</div>
    </div>
  );
}
