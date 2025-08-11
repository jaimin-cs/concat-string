"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOG_SETTINGS } from "@/lib/queries";

const BlogTitle = () => {
  const { loading, error, data } = useQuery(GET_BLOG_SETTINGS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading banner data</div>;

  const heroSection = data?.page?.blogSettings?.heroSection;
  const backgroundImage = heroSection?.image?.node?.sourceUrl;
  const title = heroSection?.title;

  return (
    <section
      className="bg-cover 2xl:pt-[361px] xl:pt-[361px] lg:pt-[250px] md:pt-[230px] sm:pt-[200px] pt-[200px] 2xl:pb-[453px] xl:pb-[453px] lg:pb-[330px] md:pb-[300px] sm:pb-[280px] pb-[250px] bg-no-repeat bg-bottom"
      style={{
        backgroundImage: backgroundImage && `url(${backgroundImage})`,
      }}
    >
      <div className="container max-w-[1440px] px-[20px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="h1 text-white max-w-[662px] leading-[100%]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BlogTitle;
