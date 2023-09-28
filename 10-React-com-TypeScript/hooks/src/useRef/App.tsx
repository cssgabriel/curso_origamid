import React from "react";
import videoSrc from "../video.mp4";

function App() {
  const video = React.useRef<HTMLVideoElement>(null);

  return (
    <div>
      <div className="flex">
        <button onClick={() => video.current?.play()}>Play</button>
        <button onClick={() => video.current?.pause()}>Pause</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </div>
  );
}

export default App;
