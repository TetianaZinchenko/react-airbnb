import "./index.css";

export default function Avatar({ src, name }) {
  return <img src={src} alt={name} className="avatar" />;
}
