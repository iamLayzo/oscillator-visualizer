export const drawGrid = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 1;
    for (let x = 0; x < 800; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 400);
      ctx.stroke();
    }
    for (let y = 0; y < 400; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(800, y);
      ctx.stroke();
    }
  };
  