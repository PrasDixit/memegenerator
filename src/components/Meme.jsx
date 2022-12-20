import { useState } from "react";
import memes from "../memesdata";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("https://i.imgflip.com/1bil.jpg");

  const getMemeImg = () => {
    const memesArray = memes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const memeImg = memesArray[randomNumber].url;

    setMemeImage(memeImg);
  };

  return (
    <>
      <div id="form">
        <div className="text">
          <input type="text" placeholder="Top Text" />
          <input type="text" placeholder="Bottom Text" />
        </div>
        <button className="btn" onClick={getMemeImg}>
          Generate a new Meme image
        </button>
      </div>
      <div className="memeimg">
        <img src={memeImage} alt="Meme_Img" />
      </div>
    </>
  );
};

export default Meme;
