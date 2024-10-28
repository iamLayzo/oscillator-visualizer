export const drawLissajous = (ctx: CanvasRenderingContext2D, dataArray: Uint8Array, bufferLength: number, width: number, height: number) => {
    ctx.beginPath();
    ctx.strokeStyle = '#00ff00';
  
    for (let i = 0; i < bufferLength; i++) {
      const x = (dataArray[i] / 255) * width;
      const y = (dataArray[(i + bufferLength / 4) % bufferLength] / 255) * height;
  
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
  
    ctx.stroke();
  };
  