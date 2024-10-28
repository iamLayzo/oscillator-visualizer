export const drawBars = (ctx: CanvasRenderingContext2D, dataArray: Uint8Array, bufferLength: number, width: number, height: number) => {
    const barWidth = (width / bufferLength) * 2.5;
    let x = 0;
  
    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * height;
  
      const r = barHeight + (25 * (i / bufferLength));
      const g = 250 * (i / bufferLength);
      const b = 50;
  
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(x, height - barHeight, barWidth, barHeight);
  
      x += barWidth + 1;
    }
  };
  