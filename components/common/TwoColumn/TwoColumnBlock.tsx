import { ComponentCommonTwoColumnBlock } from "graphql/types";
import Link from "next/link";
import Image from "next/image";
import urlBuilder from "lib/imageUrl";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Item } from "./TwoColumnStyle";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};

const TwoColumnBlock = ({ data }: Props) => {
  const {
    id = "",
    TitleText = "",
    Description = "",
    ImagePosition = "Left",
    ButtonText = "",
    ButtonUrl = "/",
    Image: ImageData = {},
  } = data;

  const { name: ImageName = "", url: ImageSrc = "" } =
    ImageData?.data?.attributes;

  return (
    <Box
      my={10}
      sx={{
        flexGrow: 1,
        borderBottom: "1px solid #00000038",
        paddingBottom: "35px",
      }}
    >
      {id === "1" ? (
        <Typography variant="h5" align="center" mb={8}>
          Access. Anytime, anywhere.
        </Typography>
      ) : (
        <></>
      )}
      <Grid
        container
        spacing={4}
        direction={ImagePosition === "Left" ? "row" : "row-reverse"}
      >
        {/* Image Section */}
        <Grid item xs={5}>
          <Item>
            <Image
              src={urlBuilder(ImageSrc)}
              alt={ImageName}
              width={400}
              height={330}
            />
          </Item>
        </Grid>
        {/* Article Section */}
        <Grid item xs={7}>
          <Item>
            <Card sx={{ px: 8, boxShadow: "none" }}>
              <CardContent sx={{ textAlign: "left" }}>
                <Typography gutterBottom variant="h5" component="div" mb={8}>
                  {TitleText}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: 14 }}
                  my={4}
                >
                  {Description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={ButtonUrl}>
                  <Button size="small" variant="outlined">
                    {ButtonText}
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TwoColumnBlock;
