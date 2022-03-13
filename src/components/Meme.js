export default function Meme() {
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
