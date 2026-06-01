import React from "react";
import "./Navbar.css";

function Navbar() {
  const handleUploadClick = () => {
    const uploadSection = document.getElementById("upload");
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <a href="#" className="logo">
        took took <span>Drop</span>.in
      </a>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#trending">Trending</a></li>
        <li><a href="#upload">Upload</a></li>
        <li><a href="#creators">Creators</a></li>
      </ul>
      <section class="hero">
       
      </section>
      
    </nav>
     
  );
}

export default Navbar;
