export const drawCircular = (ctx: CanvasRenderingContext2D, dataArray: Uint8Array, bufferLength: number, width: number, height: number) => {
    ctx.beginPath();
    ctx.strokeStyle = '#00ff00';
  
    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0;
      const y = v * height / 2;
  
      const radius = (height / 4) + (y / 2);
      const radian = (i / bufferLength) * Math.PI * 2;
      const x = (width / 2) + Math.cos(radian) * radius;
      const y2 = (height / 2) + Math.sin(radian) * radius;
  
      if (i === 0) {
        ctx.moveTo(x, y2);
      } else {
        ctx.lineTo(x, y2);
      }
    }
  
    ctx.stroke();
  };
  