import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🧩 React Playground Builder
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
