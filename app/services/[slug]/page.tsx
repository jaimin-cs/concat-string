import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_SERVICE_BY_SLUG, GET_SERVICE_SOLUTIONS } from "@/lib/queries";
import Banner from "./banner";
import AboutSolutions from "./aboutSolutions";
import Technology from "./technology";
import WhyChooseUs from "./whyChooseUs";
import WhyConcatString from "./whyConcatString";
import Industries from "./industries";
import Faq from "./faq";
import OurProcess from "./ourProcess";
import StartBuilding from "./startBuilding";
import Service from "./services";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-dynamic";

const ServiceDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  // Create a server-side Apollo Client instance
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    ssrMode: true,
  });

  const { data, loading, error } = await client.query({
    query: GET_SERVICE_BY_SLUG,
    variables: { slug: slug },
  });
  if (!data) {
    return <div>Data not found</div>;
  }
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading section.</div>;
  return (
    <>
      <Banner data={data} />
      <AboutSolutions data={data} />
      <Service data={data} />
      <Technology data={data} />
      <WhyConcatString data={data} />
      <WhyChooseUs data={data} />
      <Industries data={data} />
      <OurProcess data={data} />
      <StartBuilding data={data} />
      <Faq data={data} />
    </>
  );
};

export default ServiceDetailPage;
