import { useEffect, useState } from "react";

export default function Meme() {
  const [memesArray, setMemesArray] = useState([]);

  const [meme, setMeme] = useState({
    name: "",
    url: "",
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

  return (
    <main className="meme">
      <div className="meme__form">
        <div className="form__inputs">
          <input type="text" />
          <input type="text" />
        </div>
        <button onClick={getMeme} className="form__btn">
          Get a new meme image 🖼️
        </button>
      </div>
    </main>
  );
}
