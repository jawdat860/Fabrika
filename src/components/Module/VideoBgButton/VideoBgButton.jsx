import  "./VideoBgButton.css";
function VideoBgButton({ video1, poster, text, textButton }) {
  return (
    <div className="genn-VideoBgButton">
      <video
        controls={false}
        muted
        poster={poster}
        autoPlay
        loop
        src={video1}
      />
      <div className="genn-VideoBgButton-text">{text}</div>
      <div className="genn-VideoBgButton-buttonContainer">
        <button className="genn-Baner-button-v5  genn-VideoBgButton-textButton">
          {textButton}
        </button>
      </div>
    </div>
  );
}
export default VideoBgButton;
