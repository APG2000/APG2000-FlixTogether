import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const handlePlay = () => {
    console.log('O vídeo começou a ser reproduzido.');
    // Adicione suas ações personalizadas aqui
  };

  const handlePause = () => {
    console.log('O vídeo foi pausado.');
    // Adicione suas ações personalizadas aqui
  };

  const handleEnded = () => {
    console.log('O vídeo terminou.');
    // Adicione suas ações personalizadas aqui
  };

  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=uvbKI8Bc9dA"
      controls
      onPlay={handlePlay}
      onPause={handlePause}
      onEnded={handleEnded}
    />
  );
};

export default VideoPlayer;