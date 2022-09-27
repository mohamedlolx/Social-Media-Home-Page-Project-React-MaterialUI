import * as React from "react";
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
  MenuItem,
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
  const [open, setOpen] = React.useState(false);
  return (
    <AppBar position="sticky">
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
            src="https://i.ytimg.com/vi/erZ3IyBCXdY/maxresdefault.jpg"
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
          />
        </IconContainer>
        <AvtarContainer onClick={(e) => setOpen(true)}>
          <Avatar
            alt="Mohamed Hassan"
            src="https://i.ytimg.com/vi/erZ3IyBCXdY/maxresdefault.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="span">Mohamed</Typography>
        </AvtarContainer>
      </StyledNav>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
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
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
