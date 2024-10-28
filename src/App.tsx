import React, { useState } from 'react';
import Canvas from './components/Canvas';
import AudioControls from './components/AudioControls';
import VisualizationControls from './components/VisualizationControls';
import useAudioVisualizer  from './hooks/useAudioVisualizer';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 400;

export default function App() {
  const {
    canvasRef,
    audioRef,
    analyser,
    audioFile,
    handleFileUpload,
    togglePlayPause,
    isPlaying,
  } = useAudioVisualizer();
  const [visualizationType, setVisualizationType] = useState('waveform');

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Oscillator Effects</h1>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Canvas Component */}
        <Canvas
          canvasRef={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          analyser={analyser}
          visualizationType={visualizationType}
        />

        {/* Visualization Controls */}
        <VisualizationControls setVisualizationType={setVisualizationType} />

        {/* Audio Controls */}
        <AudioControls
          audioFile={audioFile}
          handleFileUpload={handleFileUpload}
          togglePlayPause={togglePlayPause}
          isPlaying={isPlaying}
          audioRef={audioRef}
        />
      </div>
    </div>
  );
}