import { useState } from "react";
import memes from "../memesdata";

const Meme = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memes);


  const getMemeImg = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => {
      return (
        {
          ...prevMeme,
          randomImg: url,

        }
      )
    })

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme(prevMeme => {
      return (
        {
          ...prevMeme,
          [name]: value
        }
      )
    })
  }

  return (
    <>
      <div id="form">
        <div className="text">
          <input type="text" placeholder="Top Text" name="topText" value={meme.topText} onChange={handleChange} />
          <input type="text" placeholder="Bottom Text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
        </div>
        <button className="btn" onClick={getMemeImg}>
          Generate a new Meme image
        </button>
      </div>
      <div className="memeimg">
        {meme.randomImg === "" ? '' : <img src={meme.randomImg} alt="Meme_Img" className="meme-img" />}
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
};

export default Meme;
