import './ImageCard.css';

function ImageCard({ image, isSelected, onClick, size }) {
  return (
    <div className="image-card">
      {/* show / hide image based on isSelected prop */}
      <img src={image.url} alt={image.title} width="150" className={`${isSelected ? 'show' : 'hide'}`}/>
      
      {/* change size of image based on slider value  */}
      <img src="src/images/photo1.jpeg" alt={image.title} width={size} />

      <p>{image.title}</p>
      <button onClick={onClick}>Show Image</button>
    </div>
  );
}

export default ImageCard; 