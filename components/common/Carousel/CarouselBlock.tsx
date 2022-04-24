import { useRef } from "react";
import { ComponentCommonCarousel } from "graphql/types";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { ArrowLeft, ArrowRight } from "./Arrows";
import { CarouselWrapper } from "./CarouselStyle";
import Image from "next/image";
import urlBuilder from "lib/imageUrl";

type Props = {
  data: ComponentCommonCarousel;
};

const CarouselBlock = ({ data }: Props) => {
  const { id = "", Item = [] } = data;
  const containerRef = useRef(null);

  return (
    <Box
      my={10}
      sx={{
        flexGrow: 1,
      }}
    >
      {id === "1" ? (
        <Typography variant="subtitle1" align="left" mb={6} pl={16}>
          Subscribing institutions.
        </Typography>
      ) : (
        <></>
      )}
      <Grid container spacing={2} flexWrap="nowrap" justifyContent="center">
        <ArrowLeft
          onClick={() => {
            containerRef?.current?.scrollBy({
              left: -containerRef?.current?.clientWidth,
              behavior: "smooth",
            });
          }}
        />
        <CarouselWrapper ref={containerRef}>
          {Item.length ? (
            Item.map((item, index) => {
              const { name: ImageName = "", url: ImageSrc = "" } =
                item?.Image?.data?.attributes;
              return (
                <Grid item xs={4} md={3} key={index} style={{ flexShrink: 0 }}>
                  <Paper sx={{ boxShadow: "none" }}>
                    <Grid container alignItems="center" justifyContent="center">
                      <Image
                        src={urlBuilder(ImageSrc)}
                        alt={ImageName}
                        width={125}
                        height={125}
                        objectFit="contain"
                      />
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        component="div"
                      >
                        {item?.TitleText}
                      </Typography>
                    </Grid>
                  </Paper>
                </Grid>
              );
            })
          ) : (
            <></>
          )}
        </CarouselWrapper>
        <ArrowRight
          onClick={() => {
            containerRef?.current?.scrollBy({
              left: containerRef?.current?.clientWidth,
              behavior: "smooth",
            });
          }}
        />
      </Grid>
    </Box>
  );
};

export default CarouselBlock;
