import "./styles.css";

interface LogoProps {
  text: string;
  textClassName: string;
  slogan?: string;
  sloganClassName?: string;
}

export const Logo = ({
  text,
  slogan,
  textClassName,
  sloganClassName,
}: LogoProps) => {
  return (
    <div className="logo-wrapper">
      <h3 className={`logo ${textClassName}`}>{text}</h3>
      {slogan && <p className={`slogan ${sloganClassName}`}>{slogan}</p>}
    </div>
  );
};
