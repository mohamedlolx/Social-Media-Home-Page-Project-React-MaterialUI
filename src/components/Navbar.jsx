import * as React from "react";
import imgper from "./123.jpg";
import {
  styled,
  Box,
  Toolbar,
  Typography,
  AppBar,
  InputBase,
  Badge,
  Avatar,
  Menu,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { AddReaction, Mail, NotificationImportant } from "@mui/icons-material";

const StyledNav = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const IconContainer = styled(Box)(({ theme }) => ({
  display: "none",
  gap: 20,
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "flex" },
}));
const AvtarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 10,
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "none" },
}));

const Navbar = () => {
  const anchorRef = React.useRef();
  const [anchorEl, setAnchorEl] = React.useState();
  React.useEffect(() => {
    setTimeout(() => setAnchorEl(anchorRef?.current), 1);
  }, [anchorRef]);

  const [open, setOpen] = React.useState(false);
  const handelClose = (e) => {
    setOpen(false);
  };
  const handelOpen = (e) => {
    setOpen(true);
  };
  return (
    <AppBar position="sticky" ref={anchorRef}>
      <StyledNav>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          ZOZ Is Here
        </Typography>
        <AddReaction sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search...." />
        </Search>
        <IconContainer>
          <Badge badgeContent={4} color="secondary">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <NotificationImportant />
          </Badge>
          <Avatar
            alt="Mohamed Hassan"
            src={imgper}
            sx={{ width: 30, height: 30 }}
            onClick={handelOpen}
          />
        </IconContainer>
        <AvtarContainer onClick={handelOpen}>
          <Avatar
            alt="Mohamed Hassan"
            src={imgper}
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="span">Mohamed</Typography>
        </AvtarContainer>
      </StyledNav>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorEl={anchorEl}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <ListItemButton onClick={handelClose} component="a" href="/profile">
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton onClick={handelClose} component="a" href="#myaccount">
          <ListItemText primary="My account" />
        </ListItemButton>
        <ListItemButton onClick={handelClose} component="a" href="#logout">
          <ListItemText primary="Logout" />
        </ListItemButton>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
