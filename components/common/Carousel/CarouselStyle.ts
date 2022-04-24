import { experimentalStyled as styled } from "@mui/material";

export const CarouselWrapper = styled("div")(({}) => ({
  display: "flex",
  flexShrink: 0,
  overflow: "hidden",
  width: "85%",
  scrollSnapType: "x mandatory",
  whiteSpace: "nowrap",
}));

export const Button = styled("button")(({}) => ({
  background: "#fff",
  padding: 0,
  textAlign: "center",
  color: "black",
  boxShadow: "none",
  border: 0,
  cursor: "pointer",
  fontsize: 16,
  "& svg": {
    fontSize: "4em",
  },
}));
