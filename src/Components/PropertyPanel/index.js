import { Box, TextField } from "@mui/material";

function PropertyPanel({ selectedComponent, updateComponent }) {
  if (!selectedComponent) return null;

  return (
    <Box width="300px" p={2} borderLeft="1px solid #ddd">
      <h3>Properties</h3>

      {selectedComponent.type === "Button" && (
        <TextField
          label="Label"
          value={selectedComponent.props.label}
          onChange={(e) =>
            updateComponent(selectedComponent.id,"label", e.target.value)
          }
        />
      )}
    </Box>
  );
}

export default PropertyPanel;
