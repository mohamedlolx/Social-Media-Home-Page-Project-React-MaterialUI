import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box sx={{ position: "fixed" }}>
        <Typography variant="h6" fontWeight="200">
          Online Friends
        </Typography>
        <AvatarGroup max={10}>
          <Avatar
            alt="Emily"
            src="https://phantom-marca.unidadeditorial.es/2a7783c8bb2e0bde9a6895349c31d95d/resize/1320/f/jpg/assets/multimedia/imagenes/2022/09/08/16626386859992.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="data:image/jpeg;base64,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"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://static.independent.co.uk/2020/10/26/19/newFile-7.jpg?quality=75&width=982&height=726&auto=webp"
          />
          <Avatar
            alt="Agnes Walker"
            src="data:image/jpeg;base64,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"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlfS8vorTy_rqiHLqqxAsfd5G7b_Xp_XNrg&usqp=CAU"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVGLWJJCFZKZ08Pvj0lIMUOxtQ2H1sFITvg&usqp=CAU"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://deadline.com/wp-content/uploads/2022/09/emily-bronte.jpg?w=681&h=383&crop=1"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://www.moviesrulz.info/wp-content/uploads/2022/08/emma-mackey-emily-bronte-trailer-810x405.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/emma-mackey-emily-1660214905.jpg?crop=1.00xw:0.667xh;0,0.259xh&resize=480:*"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight="200" mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList sx={{ width: 500, height: 380 }} cols={3} rowHeight={100}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight="200" mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXsMe6My3v9ijSriNXHMCHA1Z2e4vqzSw_A&usqp=CAU"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://i.scdn.co/image/ab6761610000e5ebd32e900c1a10957e955aac0f"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoNMS3U5guScVX7th6hjjsSO1eJ4hS40dC4A&usqp=CAU"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
