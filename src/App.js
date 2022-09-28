import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import AddSwitch from "./components/Add";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Profile from "./components/Profile";

export default function App() {
  const [mode, setMode] = React.useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route
          path="/"
          element={
            <Box bgcolor={"background.default"} color={"text.primary"}>
              <Navbar />
              <Stack direction="row" spacing={2} justifyContent="space-around">
                <Leftbar setMode={setMode} mode={mode} />
                <Feed />
                <Rightbar />
              </Stack>
              <AddSwitch />
            </Box>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </ThemeProvider>
  );
}
