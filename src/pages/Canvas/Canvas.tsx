import { useRef, useState, useEffect } from "react";
import { Rect, Canvas, Circle, Textbox, Line, Triangle, Group } from "fabric";
import { StyledCanvasWrapper, StyledToolbar } from "./styled";

import { Button, IconButton } from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Settings from "./Settings";
import {
  loadCanvasFromJSON,
  saveAsJSON,
  saveAsPng,
} from "../../utils/canvasUtils";

const CanvasPage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<Canvas | null>(null);

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

  // Deleting element by pressing delete key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Delete" && canvas) {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
          canvas.remove(activeObject);
          canvas.discardActiveObject();
          canvas.renderAll();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [canvas]);

  const addRectangle = () => {
    if (canvas) {
      const rect = new Rect({
        top: 100,
        left: 50,
        width: 100,
        height: 100,
        fill: "red",
      });
      canvas.add(rect);
    }
  };

  const addCircle = () => {
    if (canvas) {
      const circle = new Circle({
        top: 100,
        left: 50,
        radius: 50,
        fill: "red",
      });
      canvas.add(circle);
    }
  };

  const addTextField = () => {
    if (canvas) {
      const textField = new Textbox("Enter text here", {
        left: (canvas.width - 150) / 2,
        top: canvas.height / 2,
        width: 150,
        fontSize: 18,
        fontFamily: "Roboto",
      });
      canvas.add(textField);
    }
  };

  const addArrow = () => {
    if (canvas) {
      // Define the line (arrow shaft)
      const line = new Line([50, 100, 200, 100], {
        stroke: "black",
        strokeWidth: 3,
      });

      const arrowHead = new Triangle({
        width: 30,
        height: 50,
        fill: "black",
        left: 200, // Position the arrowhead at the line's end
        top: 100,
        originX: "center",
        originY: "center",
        angle: 90, // Rotate the arrowhead to point to the right
      });

      // Group the line and arrowhead into a single arrow
      const arrow = new Group([line, arrowHead], {
        left: 50,
        top: 100,
        selectable: true,
      });

      canvas.add(arrow);
      canvas.renderAll();
    }
  };

  return (
    <StyledCanvasWrapper>
      <StyledToolbar>
        <IconButton onClick={addArrow}>
          <ArrowDownwardIcon />
        </IconButton>
        <IconButton onClick={addTextField}>
          <TextFieldsIcon />
        </IconButton>
        <IconButton onClick={addRectangle}>
          <CropSquareIcon />
        </IconButton>
        <IconButton onClick={addCircle}>
          <RadioButtonUncheckedIcon />
        </IconButton>

        <Button onClick={() => saveAsJSON(canvas)} variant="outlined">
          Save as Json
        </Button>

        <Button onClick={() => saveAsPng(canvas)} variant="outlined">
          Save as Png
        </Button>

        <Button
          onClick={() =>
            loadCanvasFromJSON(canvas, localStorage.getItem("creative")!)
          }
          variant="outlined"
        >
          Load canvas from json
        </Button>
      </StyledToolbar>
      <canvas id="canvas" ref={canvasRef}></canvas>
      <Settings canvas={canvas} />
    </StyledCanvasWrapper>
  );
};

export default CanvasPage;
