import React from 'react';

interface VisualizationControlsProps {
  setVisualizationType: (type: string) => void;
}

const VisualizationControls: React.FC<VisualizationControlsProps> = ({ setVisualizationType }) => {
  return (
    <div className="flex flex-wrap justify-between mb-4">
      <button className="bg-gray-700 text-white mb-2 px-4 py-2 rounded" onClick={() => setVisualizationType('waveform')}>
        Waveform
      </button>
      <button className="bg-gray-700 text-white mb-2 px-4 py-2 rounded" onClick={() => setVisualizationType('bars')}>
        Bars
      </button>
      <button className="bg-gray-700 text-white mb-2 px-4 py-2 rounded" onClick={() => setVisualizationType('circular')}>
        Circular
      </button>
      <button className="bg-gray-700 text-white mb-2 px-4 py-2 rounded" onClick={() => setVisualizationType('lissajous')}>
        Lissajous
      </button>
      <button className="bg-gray-700 text-white mb-2 px-4 py-2 rounded" onClick={() => setVisualizationType('spectrogram')}>
        Spectrogram
      </button>
      <button className="bg-gray-700 text-white mb-2 px-4 py-2 rounded" onClick={() => setVisualizationType('3d')}>
        3D
      </button>
      <button className="bg-gray-700 text-white mb-2 px-4 py-2 rounded" onClick={() => setVisualizationType('particles')}>
        Particles
      </button>
    </div>
  );
};

export default VisualizationControls;
