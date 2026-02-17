import { useDroppable } from "@dnd-kit/core";
import { Box } from "@mui/material";
import RowStack from "../RowStack";

function Canvas({ rows, setRows, selectedComponent, setSelectedComponent }) {
    const { setNodeRef } = useDroppable({
        id: "canvas-drop-area",
    });

    return (
        <Box
            ref={setNodeRef}
            flex={1}
            p={4}
            sx={{ backgroundColor: "#ffffff" }}
        >
            {rows.map((row) => (
                <RowStack
                    key={row.id}
                    row={row}
                    setRows={setRows}
                    selectedComponent={selectedComponent}
                    setSelectedComponent={setSelectedComponent}
                />
            ))}
        </Box>
    );
}

export default Canvas;
