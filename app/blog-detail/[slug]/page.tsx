import React from "react";
import FutureOfAi from "./futureOfAi";
import ShareItOn from "./shareItOn";
import Comments from "./comments";
import AboutTheAuthor from "./aboutTheAuthor";
import MoreFromMe from "./moreFromMe";
import { GET_POST_BY_SLUG } from "@/lib/queries";
import { ApolloClient, InMemoryCache } from "@apollo/client";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-dynamic";

const page = async ({ params }: Props) => {
  const { slug } = await params;
  // Create a server-side Apollo Client instance
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    ssrMode: true,
  });

  const { data } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: { slug: slug },
  });
  const post = data?.post;
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <FutureOfAi post={post} />
      <ShareItOn post={post?.blogDetail} />
      <Comments post={post} />
      <AboutTheAuthor post={post} />
      <MoreFromMe post={post} />
    </>
  );
};

export default page;
