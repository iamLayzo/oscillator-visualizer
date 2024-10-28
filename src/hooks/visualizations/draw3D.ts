export const draw3D = (ctx: CanvasRenderingContext2D, dataArray: Uint8Array, bufferLength: number, width: number, height: number) => {
    const sliceWidth = width / bufferLength;
    const sliceHeight = height / 32;
  
    for (let z = 0; z < 32; z++) {
      const brightness = 1 - (z / 32);
      ctx.strokeStyle = `rgba(0, 255, 0, ${brightness})`;
      ctx.beginPath();
  
      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * sliceHeight) + (z * sliceHeight);
        const x = i * sliceWidth;
  
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
  
      ctx.stroke();
    }
  };
  