import { Box, Stack } from "@mui/material";
import * as React from "react";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import PrimarySearchAppBar from "./components/Navbar";
import Rightbar from "./components/Rightbar";

export default function App() {
  return (
    <Box>
      <PrimarySearchAppBar />
      <Stack direction="row" spacing={2} justifyContent="space-around">
        <Leftbar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}
