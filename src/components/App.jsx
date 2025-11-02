import { useState } from "react";
import "/src/components/App.css";
import ImageCard from "./ImageCard/ImageCard";
import imageData from "../data/images.json";

function App() {
  const [images, setImages] = useState(imageData);
  // state to track which image is selected
  const [selectedId, setSelectedId] = useState(null);

  // new state for image size (kept for ImageCard sizing)
  const [imageSize, setImageSize] = useState(150);

  // how many images to show from the images array
  // default to showing all images
  const [imageCount, setImageCount] = useState(imageData.length);

  const showImage = (id) => {
    setSelectedId(selectedId === id ? null : id); // Toggle selected state
  }

  const [sortOption, setSortOption] = useState("default");

  // sort option to sort images by title or id
  const handleSort = (option) => {
    setSortOption(option);

    let sortedImages = [...images];
    if (option === "title") {
      sortedImages.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === "id") {
      sortedImages.sort((a, b) => a.id - b.id);
    }
    setImages(sortedImages);
  };


  return (
    <>
      {/* slider to control how many images are shown */}
      <div className="controls">
        <label>Number of images: {imageCount}</label>
        <input
          type="range"
          min="1"
          max={images.length}
          step="1"
          value={imageCount}
          onChange={(e) => setImageCount(Number(e.target.value))}
        />
      </div>

      {/* drop down to control sorting the images  */}
      <div className="controls">
        <label>Sort by: </label>
        <select
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="title">Title</option>
          <option value="id">ID</option>
        </select>
      </div>

      <div className="gallery">
        <img className="bg-image" src="/src/images/photo1.jpeg" alt="Sample"/>
        {images.slice(0, imageCount).map((img) => (
          <ImageCard
            key={img.id}
            image={img}
            isSelected={selectedId === img.id}
            onClick={() => showImage(img.id)}
            size={imageSize}
          />
        ))}
      </div>

    </>
  );
}

export default App; 
