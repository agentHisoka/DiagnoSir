import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "./theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import "rsuite/dist/rsuite.min.css";
import { Dropdown } from "rsuite";
import DetailIcon from "@rsuite/icons/Detail";
import { LogoutSharp } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios
      .get("http://localhost:3001/logout")
      .then((res) => {
        if (res.data.Status === "Succes") {
          navigate("/signIN");
        } else {
          alert("o");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleLogout} type="button" sx={{ p: 1 }}>
          <LogoutSharp />
        </IconButton>
        <IconButton>
          <Dropdown icon={<SettingsOutlinedIcon />}>
            <Dropdown.Item icon={<DetailIcon />}>settings</Dropdown.Item>
            <Dropdown.Item icon={<DetailIcon style={{ color: "pink" }} />}>
              Exit
            </Dropdown.Item>
          </Dropdown>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
