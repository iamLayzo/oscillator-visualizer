export const drawParticles = (ctx: CanvasRenderingContext2D, dataArray: Uint8Array, bufferLength: number, width: number, height: number) => {
    for (let i = 0; i < bufferLength; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = (dataArray[i] / 255) * 5;
  
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${(i / bufferLength) * 360}, 100%, 50%)`;
      ctx.fill();
    }
  };
  