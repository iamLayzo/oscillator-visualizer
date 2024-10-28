import { useState, useRef } from 'react';

const useAudioVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAudioFile(file);
      if (audioRef.current && !audioContext) {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const analyserNode = audioCtx.createAnalyser();
        analyserNode.fftSize = 2048;
        setAudioContext(audioCtx);
        setAnalyser(analyserNode);

        const fileURL = URL.createObjectURL(file);
        audioRef.current.src = fileURL;
        const source = audioCtx.createMediaElementSource(audioRef.current);
        source.connect(analyserNode);
        analyserNode.connect(audioCtx.destination);
      }
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return {
    canvasRef,
    audioRef,
    analyser,
    audioFile,
    handleFileUpload,
    togglePlayPause,
    isPlaying,
  };
};

export default useAudioVisualizer;
