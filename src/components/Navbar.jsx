import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import  { Button }  from "@mui/material";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <List>
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Explore" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="About" />
      </ListItem>
    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                {drawerContent}
              </Drawer>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Car Rental
              </Typography>
              <Button color="inherit">Login</Button>
            </>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Car Rental
              </Typography>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Explore</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Login</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
