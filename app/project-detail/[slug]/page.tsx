import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_MARKET_OPS_AND_OVERVIEW } from "@/lib/queries";
import MarketOps from "./marketOps";
import AboutConcatstring from "./aboutConcatstring";
import ProjectOverview from "./projectOverview";
import Service from "./service";
import ToolsBehind from "./toolsBehind";
import WhatWeAchive from "./whatWeAchive";
import ClientFeedback from "./clientFeedback";
import RelatedProjects from "./relatedProjects";
import ProjectResult from "./projectResult";
import ProjectConclusion from "./projectConclusion";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export const dynamic = "force-dynamic";
const page = async ({ params }: Props) => {
  const { slug } = await params;
  if (!slug) {
    return <div>Slug is required</div>;
  }

  // Create a server-side Apollo Client instance
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    ssrMode: true,
  });

  try {
    const { data } = await client.query({
      query: GET_MARKET_OPS_AND_OVERVIEW,
      variables: { slug: slug },
    });
    const projectNode = data?.project;

    if (!projectNode) {
      return <div>Project not found</div>;
    }

    return (
      <>
        <MarketOps project={projectNode} />
        <AboutConcatstring project={projectNode} />
        <ProjectOverview project={projectNode} />
        <Service project={projectNode} />
        <ToolsBehind project={projectNode} />
        <WhatWeAchive project={projectNode} />
        <ProjectResult project={projectNode} />
        <ProjectConclusion project={projectNode} />
        <ClientFeedback project={projectNode} />
        <RelatedProjects project={projectNode} />
      </>
    );
  } catch (error) {
    console.error("GraphQL query error:", error);
    return <div>Error loading project data</div>;
  }
};

export default page;
