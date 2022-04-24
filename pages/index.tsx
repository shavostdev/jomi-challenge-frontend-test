// import { NextLink } from "components/common/NextLink";
import { Box, Container, Typography } from "@mui/material";
import {
  HomePageDocument,
  HomePageQuery,
  useHomePageQuery,
} from "graphql/cms/homepage.generated";

import {
  APOLLO_STRAPI_STATE_PROP_NAME,
  initializeStrapiApollo,
} from "lib/apollo/cms-client";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import HomePageSections from "components/HomePageSections";

const Home: NextPage = () => {
  const { data } = useHomePageQuery();
  const sections = data?.homePage?.data?.attributes?.sections;

  return (
    <>
      <Head>
        <title>JOMI Code Challenge</title>
        <meta name="description" content="Manage your expenses" />
      </Head>
      <Container>
        <Box my={3}>
          <Typography variant="h4">STDEV JOMI Code Challenge</Typography>
        </Box>

        <Box>
          {sections?.length ? (
            sections?.map((item, index) => (
              <Box my={10} key={index}>
                <HomePageSections key={index} data={item} />
              </Box>
            ))
          ) : (
            <></>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const client = await initializeStrapiApollo();
  await client.query<HomePageQuery>({
    query: HomePageDocument,
  });

  return {
    props: {
      [APOLLO_STRAPI_STATE_PROP_NAME]: client.cache.extract(),
    },
  };
};
