import React from 'react';
import { Upload, Play, Pause } from 'lucide-react';

interface AudioControlsProps {
  audioFile: File | null;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  togglePlayPause: () => void;
  isPlaying: boolean;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const AudioControls: React.FC<AudioControlsProps> = ({
  audioFile,
  handleFileUpload,
  togglePlayPause,
  isPlaying,
  audioRef,
}) => {
  return (
    <div className="flex flex-col items-center justify-between mb-4">
      {/* Upload and Play/Pause Controls */}
      <div className="flex items-center space-x-4 mb-4">
        <label className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg cursor-pointer hover:bg-blue-600 transition duration-300">
          <Upload className="mr-2" />
          Upload Audio
          <input type="file" accept="audio/*" onChange={handleFileUpload} className="hidden" />
        </label>

        {/* Display file name or "No file selected" */}
        <span className="text-gray-400 italic">{audioFile ? audioFile.name : 'No file selected'}</span>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className={`flex items-center px-4 py-2 rounded-lg shadow-lg transition duration-300 ${
            isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          } text-white font-semibold`}
          disabled={!audioFile}
        >
          {isPlaying ? (
            <>
              <Pause className="mr-2" /> Pause
            </>
          ) : (
            <>
              <Play className="mr-2" /> Play
            </>
          )}
        </button>
      </div>

      {/* Audio Player */}
      <div className="w-full bg-gray-800 p-2 rounded-lg shadow-inner">
        <audio ref={audioRef} className="w-full" controls />
      </div>
    </div>
  );
};

export default AudioControls;
