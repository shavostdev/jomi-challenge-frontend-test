import { Button } from "./CarouselStyle";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

type Props = {
  onClick: () => void;
};

export const ArrowLeft = (props: Props) => {
  return (
    <Button {...props}>
      <ArrowLeftIcon />
    </Button>
  );
};

export const ArrowRight = (props: Props) => {
  return (
    <Button {...props}>
      <ArrowRightIcon />
    </Button>
  );
};
