import React, { useEffect } from 'react';
import {
  drawWaveform,
  drawBars,
  drawCircular,
  drawLissajous,
  drawSpectrogram,
  draw3D,
  drawParticles,
  drawGrid,
} from '../hooks/visualizations';

interface CanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  width: number;
  height: number;
  analyser: AnalyserNode | null;
  visualizationType: string;
}

const Canvas: React.FC<CanvasProps> = ({
  canvasRef,
  width,
  height,
  analyser,
  visualizationType,
}) => {
  useEffect(() => {
    if (!analyser || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(dataArray);

      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(0, 0, width, height);

      switch (visualizationType) {
        case 'waveform':
          drawWaveform(ctx, dataArray, bufferLength, width, height);
          break;
        case 'bars':
          drawBars(ctx, dataArray, bufferLength, width, height);
          break;
        case 'circular':
          drawCircular(ctx, dataArray, bufferLength, width, height);
          break;
        case 'lissajous':
          drawLissajous(ctx, dataArray, bufferLength, width, height);
          break;
        case 'spectrogram':
          drawSpectrogram(ctx, dataArray, bufferLength, width, height);
          break;
        case '3d':
          draw3D(ctx, dataArray, bufferLength, width, height);
          break;
        case 'particles':
          drawParticles(ctx, dataArray, bufferLength, width, height);
          break;
        default:
          drawWaveform(ctx, dataArray, bufferLength, width, height);
      }

      drawGrid(ctx);
    };

    draw();
  }, [analyser, canvasRef, height, visualizationType, width]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="mb-4 border border-gray-700 w-full"
    />
  );
};

export default Canvas;
