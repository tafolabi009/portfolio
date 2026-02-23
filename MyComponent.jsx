import { USER } from "./constants";

export default function Hero() {
  return (
    <section className="hero">
      <h1>{USER.name}</h1>
      <p className="hero-line">{USER.heroLine}</p>
      <p className="disciplines">{USER.disciplines.join(" | ")}</p>
      <div className="links">
        <a href={USER.url}>Portfolio</a>
        <a href={`https://github.com/${USER.github}`}>GitHub</a>
        <a href={`https://linkedin.com/in/${USER.linkedin}`}>LinkedIn</a>
      </div>
    </section>
  );
}
