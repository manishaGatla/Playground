import { useDraggable } from "@dnd-kit/core";
import { Box, Paper } from "@mui/material";

const DraggableItem = ({ id, label }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });

  return (
    <Paper
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      sx={{ p: 2, mb: 2, cursor: "grab" }}
    >
      {label}
    </Paper>
  );
};

function Sidebar() {
  return (
    <Box width="20%" bgcolor="#f4f4f4" p={2}>
      <DraggableItem id="Button" label="Button" />
      <DraggableItem id="TextField" label="TextField" />
      <DraggableItem id="Card" label="Card" />
    </Box>
  );
}

export default Sidebar;
