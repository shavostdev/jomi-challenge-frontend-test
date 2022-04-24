import { Paper, experimentalStyled as styled } from "@mui/material";

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "black",
  boxShadow: "none",
}));
