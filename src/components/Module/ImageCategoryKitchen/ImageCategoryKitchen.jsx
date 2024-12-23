import "./ImageCategoryKitchen.css"
function ImageCategoryKitchen({ image1, image2 }) {
  return (
    <div className="genn-ImageCategoryKitchen">
      <div className="genn-ImageCategoryKitchen-first">
        <img src={image1} alt="image1" />
      </div>
      <div className="genn-ImageCategoryKitchen-second">
        <img src={image2} alt="image2" />
      </div>
    </div>
  );
}
export default ImageCategoryKitchen;
