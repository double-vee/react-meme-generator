import { useEffect, useState } from "react";

export default function Meme() {
  const [memesArray, setMemesArray] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((result) => setMemesArray(result.data.memes));
  }, []);

  return (
    <main className="meme">
      <form className="meme__form">
        <div className="form__inputs">
          <input type="text" />
          <input type="text" />
        </div>
        <button type="submit" className="form__btn">
          Get a new meme image 🖼️
        </button>
      </form>
    </main>
  );
}
