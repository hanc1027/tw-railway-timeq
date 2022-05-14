import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


const ResponsiveAppBar = () => {

  return (
    <AppBar position="static" sx={{height:"48px"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, height:"48px" }}
          >
            台鐵時刻查詢
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
