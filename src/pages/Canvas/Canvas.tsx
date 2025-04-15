import { useRef, useState, useEffect } from "react";
import { Canvas, FabricObject } from "fabric";
import { StyledCanvasWrapper } from "./styled";
import Toolbar from "./Toolbar";
import Settings from "./Settings";
import { useCreativesContext } from "../../context/CreativesContext";
import { loadCanvasFromState } from "../../utils/canvasUtils";

const CanvasPage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<Canvas | null>(null);
  const { creatives, activeCreative } = useCreativesContext();

  // Initializing canvas settings
  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 500,
        height: 500,
      });

      initCanvas.backgroundColor = "#fff";
      initCanvas.renderAll();

      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose();
      };
    }
  }, []);

  // Display creative when selected creative is changed
  useEffect(() => {
    if (!canvas || activeCreative === null || activeCreative === undefined)
      return;

    canvas.clear();

    const selectedCreative = creatives[activeCreative];
    if (selectedCreative) {
      loadCanvasFromState(canvas, selectedCreative);
    }

    canvas.renderAll();
  }, [canvas, activeCreative]);

  // Deleting element by pressing delete key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Delete" && canvas) {
        const activeObjects = canvas.getActiveObjects();
        if (activeObjects.length > 1) {
          activeObjects.forEach((obj) => canvas.remove(obj));
        }
        if (activeObjects.length === 1) {
          canvas.remove(activeObjects[0]);
        }
        canvas.discardActiveObject();
        canvas.renderAll();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [canvas]);

  return (
    <StyledCanvasWrapper>
      <Toolbar canvas={canvas} />
      <canvas id="canvas" ref={canvasRef}></canvas>
      <Settings canvas={canvas} />
    </StyledCanvasWrapper>
  );
};

export default CanvasPage;
