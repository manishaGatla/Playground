import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Box } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Canvas from "./Components/Canvas";
import Header from "./Components/Header";
import createComponentConfig from './Utils/ComponentConfig';
import PropertyPanel from "./Components/PropertyPanel";

function App() {
  const [rows, setRows] = useState([]);
  const [selectedComponentId, setSelectedComponentId] = useState(null);

  const selectedComponent = rows
  .flatMap((row) => row.components)
  .find((comp) => comp.id === selectedComponentId);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over?.id === "canvas-drop-area") {
      const newComponent = createComponentConfig(active.id);

      setRows((prev) => [
        ...prev,
        {
          id: Date.now(),
          components: [newComponent],
          spacing: 2,
        },
      ]);
    }
  };

  const updateComponent = (componentId, propName, value) => {
  setRows((prevRows) =>
    prevRows.map((row) => ({
      ...row,
      components: row.components.map((comp) =>
        comp.id === componentId
          ? {
              ...comp,
              props: {
                ...comp.props,
                [propName]: value,
              },
            }
          : comp
      ),
    }))
  );
};


  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box display="flex" height="20h">
        <Header />
      </Box>
      <Box display="flex" flex={1}>
        <Sidebar />
        <Canvas
          rows={rows}
          setRows={setRows}
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponentId}
        />
        <PropertyPanel
          selectedComponent={selectedComponent}
          setRows={setRows}
          updateComponent={updateComponent}
        />
      </Box>
    </DndContext>
  );
}

export default App;
