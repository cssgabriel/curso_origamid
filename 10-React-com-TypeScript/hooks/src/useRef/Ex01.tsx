/*
Adicione funcionalidades ao player de vídeo:

1 - Use um estado reativo para verificar se o vídeo está tocando ou não.
2 - Função para avançar o vídeo em +2s.
3 - Função para alterar o playbackRate do vídeo.
4 - Função para entrar/sair do modo pictureInPicture.
5 - Função para alternar o som (mudo/não mudo) do vídeo.

*/

import React from "react";
import videoSrc from "../video.mp4";

const Ex01 = () => {
  const video = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);

  function playAndPauseVideo() {
    switch (playing) {
      case false:
        video.current?.play();
        setPlaying(!playing);
        break;
      case true:
        video.current?.pause();
        setPlaying(!playing);
        break;
    }
  }

  function plusTwoSecondsInVideo() {
    if (!video.current) return;
    video.current.currentTime += 2;
  }

  function changePlayBackRate(speed: number) {
    if (!video.current) return;
    video.current.playbackRate = speed;
  }

  function mute() {
    if (!video.current) return;
    video.current.muted = !video.current.muted;
  }

  async function pictureInPicture() {
    if (!video.current) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.current?.requestPictureInPicture();
    }
  }

  return (
    <div>
      <div className="flex">
        <button onClick={playAndPauseVideo}>
          {playing ? "Pause" : "Play"}
        </button>
        <button onClick={plusTwoSecondsInVideo}>+ 2s</button>
        <button onClick={() => changePlayBackRate(1)}>1x</button>
        <button onClick={() => changePlayBackRate(2)}>2x</button>
        <button onClick={pictureInPicture}>PiP</button>
        <button onClick={mute}>M</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </div>
  );
};

export default Ex01;
