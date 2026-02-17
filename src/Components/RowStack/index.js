import { Stack, Button, TextField, Card, Box, Slider } from "@mui/material";

function RowStack({
  row,
  setRows,
  selectedComponent,
  setSelectedComponent,
}) {
    const handleSpacingChange = (e, newValue) => {
        setRows((prev) =>
            prev.map((r) =>
                r.id === row.id ? { ...r, spacing: newValue } : r
            )
        );
    };

    const renderComponent = (component) => {
        const { type, props } = component;

        switch (type) {
            case "Button":
                return (
                    <Button variant={props.variant}>
                        {props.label}
                    </Button>
                );

            case "TextField":
                return (
                    <TextField
                        label={props.label}
                        name={props.name}
                        id={props.id}
                        placeholder={props.placeholder}
                    />
                );

            case "Card":
                return (
                    <Card sx={{ p: 2, width: 150 }}>
                        <h4>{props.title}</h4>
                        <p>{props.content}</p>
                    </Card>
                );

            default:
                return null;
        }
    };


    return (
        <Box mb={4}>
            <Stack
                direction="row"
                spacing={row.spacing}
                sx={{ border: "1px dashed gray", p: 2 }}
            >
                {row.components.map((component) => (
                    <Box
                        key={component.id}
                        onClick={() => setSelectedComponent(component.id)}
                        sx={{
                            cursor: "pointer",
                            border:
                                selectedComponent?.id === component.id
                                    ? "2px solid blue"
                                    : "1px solid transparent",
                            padding: 1,
                        }}
                    >
                        {renderComponent(component)}
                    </Box>
                ))}

            </Stack>

            <Box mt={2}>
                Spacing:
                <Slider
                    value={row.spacing}
                    onChange={handleSpacingChange}
                    min={0}
                    max={10}
                    step={1}
                    sx={{ width: 200 }}
                />
            </Box>
        </Box>
    );
}

export default RowStack;
