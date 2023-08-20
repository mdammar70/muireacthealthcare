import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./Form";
import Dashboard from "./Dashboard";

export default function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  <Route path="/" element={<Dashboard />}>
  <Route path="/form" element={<Form />} />
  
</Route>;
  return (
    <React.Fragment>
      
        <Box
          sx={{
            display: "flex",
            alignItems: "right",
            justifyContent: "flex-end",
            marginRight: "20px",
          }}
        >
          <Tooltip>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ bgcolor: deepPurple[500] }}>N</Avatar>
            </IconButton>
          </Tooltip>
        </Box>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <MenuItem onClick={handleClose}>Dashboard</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} relative="path" to="/form">
            <MenuItem onClick={handleClose}>Form</MenuItem>
          </Link>
        </Menu>
      
    </React.Fragment>
  );
}
