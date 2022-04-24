import { HomePageQuery } from "graphql/cms/homepage.generated";
import TwoColumnBlock from "./common/TwoColumn/TwoColumnBlock";
import HeaderBlock from "./common/Header/HeaderBlock";
import CarouselBlock from "./common/Carousel/CarouselBlock";

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

type Props = {
  data: Unpacked<HomePageQuery["homePage"]["data"]["attributes"]["sections"]>;
};

const HomePageSections = ({ data }: Props) => {
  switch (data.__typename) {
    case "ComponentCommonCarousel":
      //@ts-ignore
      return <CarouselBlock {...data} data={data} />;
    case "ComponentCommonHeader":
      //@ts-ignore
      return <HeaderBlock {...data} data={data} />;
    case "ComponentCommonTwoColumnBlock":
      //@ts-ignore
      return <TwoColumnBlock {...data} data={data} />;
  }
};

export default HomePageSections;
