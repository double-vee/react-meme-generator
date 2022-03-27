import { useEffect, useState } from "react";

export default function Meme() {
  const [memesArray, setMemesArray] = useState([]);

  const [meme, setMeme] = useState({
    name: "Shut up and take my money",
    url: "https://i.imgflip.com/3si4.jpg",
    topText: "",
    bottomText: "",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((result) => setMemesArray(result.data.memes));
  }, []);

  function getMeme() {
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const { name, url } = memesArray[randomNumber];

    setMeme((prevMeme) => ({
      ...prevMeme,
      name,
      url,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  return (
    <main className="meme">
      <div className="meme__form">
        <div className="form__inputs">
          <input
            type="text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button onClick={getMeme} className="form__btn">
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme__container">
        <img src={meme.url} alt={meme.name} className="meme__img" />
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
