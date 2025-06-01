import React from "react";

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.avif",
    "/img6.webp",
  ];

  return (
    <section className="gallery">
      <h1>TOGETHER WE BUILD,TOGETHER WE GYM</h1>
      <div className="images">
        {gallery.map((element, index) => (
          <div className="image-container" key={index}>
            <img src={element} alt={`galleryImage-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;