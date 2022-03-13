import logoImg from "../assets/logo_img.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logoImg} alt="Troll face" className="header__img" />
      <h2 className="header__title">Meme Generator</h2>
    </header>
  );
}
