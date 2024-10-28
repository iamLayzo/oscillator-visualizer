export const drawSpectrogram = (ctx: CanvasRenderingContext2D, dataArray: Uint8Array, bufferLength: number, width: number, height: number) => {
    const imageData = ctx.getImageData(1, 0, width - 1, height);
    ctx.putImageData(imageData, 0, 0);
  
    for (let i = 0; i < bufferLength; i++) {
      const value = dataArray[i];
      const y = Math.round((i / bufferLength) * height);
      const r = value + 25 * (i / bufferLength);
      const g = 250 * (i / bufferLength);
      const b = 50;
  
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(width - 1, height - y, 1, 1);
    }
  };
  