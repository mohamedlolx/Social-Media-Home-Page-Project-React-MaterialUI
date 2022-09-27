import {
  Fab,
  Modal,
  Tooltip,
  styled,
  Box,
  Typography,
  Avatar,
  TextField,
  Stack,
  Button,
  ButtonGroup,
} from "@mui/material";
import React from "react";
import {
  Add,
  CalendarMonth,
  EmojiEmotions,
  Image,
  PersonAddAlt,
  VideoCall,
} from "@mui/icons-material";

const AddSwitch = () => {
  const [open, setOpen] = React.useState(false);
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "10px",
  });
  return (
    <div>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: "50px",
          left: { xs: "calc(50% - 25px )", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={300}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Mohamed Hassan"
              src="https://i.ytimg.com/vi/erZ3IyBCXdY/maxresdefault.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="div" fontWeight="500">
              Mohamed Hassan
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What is in your mind ? "
            variant="standard"
          />
          <Stack direction="row" gap={2} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCall color="success" />
            <PersonAddAlt color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>POST</Button>
            <Button sx={{ width: "100px" }}>
              <CalendarMonth />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  );
};

export default AddSwitch;
