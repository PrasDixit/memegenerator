import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src={require("../images/troll-face.png")}
        alt="Logo"
      />
      <h1>Meme Generator</h1>
    </div>
  );
};

export default Header;
