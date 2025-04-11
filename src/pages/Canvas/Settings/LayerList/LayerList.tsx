import {
  IconButton,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { Canvas, FabricObject } from "fabric";
import { useEffect, useState } from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
declare module "fabric" {
  interface Canvas {
    updateZindices: () => void;
  }

  interface FabricObject {
    id?: string;
    name?: string;
    zIndex?: number;
  }
  interface SerializedObjectProps {
    id?: string;
    name?: string;
  }
}

interface Layer {
  id?: string;
  zIndex?: number;
  type?: string;
}

interface Props {
  canvas: Canvas;
}

const LayerList = ({ canvas }: Props) => {
  const [layers, setLayers] = useState<Layer[]>([]);
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);

  const moveSelectedLayer = (direction: "up" | "down") => {
    if (!selectedLayer) return;

    const objects = canvas.getObjects();
    const object = objects.find((obj) => obj.id === selectedLayer);

    if (object) {
      const currentIndex = objects.indexOf(object);

      if (direction === "up" && currentIndex < objects.length - 1) {
        const temp = objects[currentIndex];
        objects[currentIndex] = objects[currentIndex + 1];
        objects[currentIndex + 1] = temp;
      } else if (direction === "down" && currentIndex > 0) {
        const temp = objects[currentIndex];
        objects[currentIndex] = objects[currentIndex - 1];
        objects[currentIndex - 1] = temp;
      }

      const bgColor = canvas.backgroundColor;

      canvas.renderAll();

      canvas.clear();

      objects.forEach((obj) => canvas.add(obj));
      canvas.backgroundColor = bgColor;

      objects.forEach((obj, index) => {
        obj.zIndex = index;
      });
      canvas.renderAll();

      canvas.setActiveObject(object);
      canvas.renderAll();

      updateLayers();

      canvas.renderAll();
    }
  };

  const addIdToObject = (object: FabricObject) => {
    if (!object.id) {
      const timestamp = new Date().getTime().toString();
      object.id = `${object.type}_${timestamp}`;
    }
  };

  Canvas.prototype.updateZindices = function () {
    const objects = this.getObjects();
    objects.forEach((obj, index) => {
      addIdToObject(obj);
      obj.zIndex = index;
    });
  };

  const updateLayers = () => {
    if (canvas) {
      canvas.updateZindices();
      const objects = canvas
        .getObjects()
        .filter(
          (obj) =>
            !(
              obj.id?.startsWith("vertical-") ||
              obj.id?.startsWith("horizontal-")
            )
        )
        .map((obj) => ({
          id: obj.id,
          zIndex: obj.zIndex,
          type: obj.type,
        }));

      const layersSet = new Set(objects);
      setLayers([...layersSet].reverse());
    }
  };

  const handleObjectSelected = (object: FabricObject | null) => {
    const selectedObject = object;

    if (selectedObject) {
      setSelectedLayer(selectedObject.id!);
    } else {
      setSelectedLayer(null);
    }
  };

  const selectLayerInCanvas = (layerId: string) => {
    const object = canvas.getObjects().find((obj) => obj.id === layerId);
    if (object) {
      canvas.setActiveObject(object);
      canvas.renderAll();
    }
  };

  useEffect(() => {
    if (canvas) {
      canvas.on("object:added", updateLayers);
      canvas.on("object:removed", updateLayers);
      canvas.on("object:modified", updateLayers);

      canvas.on("selection:created", (event) =>
        handleObjectSelected(event.selected[0])
      );
      canvas.on("selection:updated", (event) =>
        handleObjectSelected(event.selected[0])
      );
      canvas.on("selection:cleared", () => handleObjectSelected(null));

      updateLayers();

      return () => {
        canvas.off("object:added", updateLayers);
        canvas.off("object:removed", updateLayers);
        canvas.off("object:modified", updateLayers);
        canvas.off("selection:created", (event) =>
          handleObjectSelected(event.selected[0])
        );
        canvas.off("selection:updated", (event) =>
          handleObjectSelected(event.selected[0])
        );
        canvas.off("selection:cleared", () => handleObjectSelected(null));
      };
    }
  }, [canvas]);

  return (
    <Paper sx={{ py: 2, px: 2 }}>
      <Stack direction="row" spacing={1}>
        <IconButton onClick={() => moveSelectedLayer("down")}>
          <ArrowDownwardIcon />
        </IconButton>
        <IconButton onClick={() => moveSelectedLayer("up")}>
          <ArrowUpwardIcon />
        </IconButton>
      </Stack>
      <Typography>Layers</Typography>
      <List>
        {layers.map((layer) => (
          <ListItem
            key={layer.id}
            onClick={() => selectLayerInCanvas(layer.id!)}
            sx={{
              cursor: "pointer",
              backgroundColor: selectedLayer === layer.id ? blue[200] : "",
              "&:hover": {
                backgroundColor: grey[200],
              },
            }}
          >
            {layer.type} {layer.zIndex}
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default LayerList;
