import "./SkillBadge.css";

export default function SkillBadge({ name, imgUrl }) {
  const baseUrl = "https://skillicons.dev/icons?i=";
  return (
    <div className="skill-badge">
      <div className="skill-icon-container">
        <img
          className="skill-icon"
          src={baseUrl + imgUrl}
          alt={name + " icon"}
        />
      </div>
      <div className="skill-name">{name}</div>
    </div>
  );
}
