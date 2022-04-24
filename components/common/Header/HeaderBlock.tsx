import { ComponentCommonHeader } from "graphql/types";
import { Typography } from "@mui/material";

type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  const { Text = "" } = data;

  return (
    <Typography variant="h4" align="center" mt={5}>
      {Text}
    </Typography>
  );
};

export default HeaderBlock;
