import { useRef, useState, useEffect } from "react";
import { Canvas, FabricObject, ActiveSelection } from "fabric";
import { StyledCanvasWrapper } from "./styled";
import Toolbar from "./Toolbar";
import Settings from "./Settings";
import { useCreativesContext } from "../../context/CreativesContext";
import { loadCanvasFromState } from "../../utils/canvasUtils";

import { Container } from "@mui/material";

const CanvasPage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<Canvas | null>(null);
  const { creatives, activeCreative } = useCreativesContext();
  const clipboard = useRef<FabricObject | ActiveSelection | null>(null);

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

  useEffect(() => {
    if (!canvas || activeCreative === null || activeCreative === undefined)
      return;

    canvas.clear();

    const selectedCreative = creatives[activeCreative];

    if (selectedCreative) {
      loadCanvasFromState(canvas, selectedCreative);
    }

    canvas.renderAll();
  }, [canvas, activeCreative, creatives]);

  useEffect(() => {
    if (!canvas) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const isCmd = event.metaKey || event.ctrlKey;

      // Delete functionality
      if (event.key === "Delete") {
        const activeObjects = canvas.getActiveObjects();
        if (activeObjects.length > 0) {
          activeObjects.forEach((obj) => canvas.remove(obj));
          canvas.discardActiveObject();
          canvas.renderAll();
        }
      }

      // Copy functionality
      if (isCmd && event.key === "c") {
        event.preventDefault();
        const activeObject = canvas.getActiveObject();
        if (!activeObject) return;

        activeObject.clone().then((cloned) => (clipboard.current = cloned));
      }

      // Paste functionality
      if (isCmd && event.key === "v") {
        event.preventDefault();
        if (!clipboard.current) return;

        clipboard.current.clone().then((cloned) => {
          // Position the pasted object with an offset
          cloned.set({
            left: (clipboard.current?.left || 0) + 20,
            top: (clipboard.current?.top || 0) + 20,
            evented: true,
          });

          // Handle multi-selection (activeSelection)
          if (cloned.type === "activeSelection") {
            cloned.canvas = canvas;
            (cloned as ActiveSelection).forEachObject((obj) => {
              canvas.add(obj);
            });
          } else {
            canvas.add(cloned);
          }

          canvas.setActiveObject(cloned);
          canvas.requestRenderAll();

          // Update clipboard to allow multiple pastes with offset
          clipboard.current = cloned;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [canvas]);

  return (
    <Container maxWidth="xl">
      <StyledCanvasWrapper>
        <Toolbar canvas={canvas} />
        <canvas
          style={{ transform: "scale(0.8)" }}
          id="canvas"
          ref={canvasRef}
        ></canvas>
        <Settings canvas={canvas} />
      </StyledCanvasWrapper>
    </Container>
  );
};

export default CanvasPage;
