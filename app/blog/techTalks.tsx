"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOG_POSTS, GET_BLOG_ICONS } from "@/lib/queries";

const TechTalks = () => {
  const {
    loading: postsLoading,
    error: postsError,
    data: postsData,
  } = useQuery(GET_BLOG_POSTS, {
    variables: {
      perPage: 1,
      after: null,
    },
  });
  const { data: iconsData } = useQuery(GET_BLOG_ICONS);

  if (postsLoading) return <div>Loading...</div>;
  if (postsError) return <div>Error loading techTalks data</div>;

  const latestPost = postsData?.posts?.nodes?.[0];
  const blogIcons = iconsData?.page?.blogSettings?.techTalks;

  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, "/");
  };

  // Get categories array
  const getCategories = (post: any) => {
    const categories = post?.categories?.nodes || [];
    return categories;
  };

  // Get featured image URL with fallback
  const getFeaturedImageUrl = (post: any) => {
    return post?.featuredImage?.node?.sourceUrl;
  };

  if (!latestPost) {
    return <div>No posts found</div>;
  }

  return (
    <section className="pt-[120px]">
      <div className="container max-w-[1400px] px-[20px] mx-auto w-full">
        <div className="flex flex-col items-center justify-center gap-[16px] 2xl:mb-[60px] xl:mb-[60px] lg:mb-[50px] md:mb-[40px] sm:mb-[30px] mb-[30px]">
          <h2 className="h2 text-white text-center">{blogIcons?.title}</h2>
          <p className="font-lato font-normal text-[17px] leading-[26px] text-[#C3C3C3] text-center max-w-[1000px]">
            {blogIcons?.description}
          </p>
        </div>
        <div className="blog-img border border-[20px] rounded-[30px] border-[#2E0707]">
          <div
            className="relative bg-cover h-[746px] px-[30px] pt-[30px] pb-[60px] flex items-end"
            style={{
              backgroundImage: `url(${getFeaturedImageUrl(latestPost)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-[30px] right-[30px]">
              <img
                src={blogIcons?.newIcon?.node?.sourceUrl}
                alt={blogIcons?.newIcon?.node?.altText}
                width="138"
                height="138"
                className="2xl:w-[138px] xl:w-[138px] lg:w-[130px] md:w-[125px] sm:w-[100px] w-[60px]"
              />
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-[23px]">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex justify-between items-center w-full flex-row flex-wrap gap-[10px]">
                    <div className="flex flex-row flex-wrap gap-[10px]">
                      {getCategories(latestPost).map(
                        (category: any, index: number) => (
                          <div
                            key={category.slug || index}
                            className="blog-gr flex items-center justify-center bg-[#E7212599] rounded-[84px] py-[10px] px-[24px] relative"
                          >
                            <span className="text-center text-white font-denton font-normal text-[16px] leading-[100%]">
                              {category.name}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                    <div className="blog-gr flex items-center justify-center bg-[#E7212599] rounded-[84px] py-[10px] px-[24px] flex items-center justify-center gap-[10px] relative">
                      {blogIcons?.dateIcon?.node?.sourceUrl && (
                        <img
                          src={blogIcons.dateIcon.node.sourceUrl}
                          alt={blogIcons.dateIcon.node.altText}
                          width="18"
                          height="18"
                        />
                      )}
                      <span className="text-center text-white font-denton font-normal text-[16px] leading-[100%]">
                        {formatDate(latestPost?.date)}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-denton font-bold 2xl:text-[34px] xl:text-[34px] lg:text-[30px] md:text-[24px] text:text-[20px] text-[20px] 2xl:leading-[45px] xl:leading-[45px] lg:leading-[40px] md:leading-[30px] sm:leading-[25px] leading-[25px] text-white text-left">
                    {latestPost?.title}
                  </h3>
                  <div className="flex items-center 2xl:gap-[60px] xl:gap-[60px] lg:gap-[40px] md:gap-[30px] sm:gap-[20px] gap-[10px] flex-row flex-wrap">
                    <div className="flex gap-[8px] items-center">
                      {blogIcons?.viewIcon?.node?.sourceUrl && (
                        <img
                          src={blogIcons.viewIcon.node.sourceUrl}
                          alt={blogIcons.viewIcon.node.altText}
                          width="18"
                          height="18"
                        />
                      )}
                      <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">
                        1,020 View
                      </span>
                    </div>
                    <div className="flex gap-[8px] items-center">
                      {blogIcons?.commentIcon?.node?.sourceUrl && (
                        <img
                          src={blogIcons.commentIcon.node.sourceUrl}
                          alt={blogIcons.commentIcon.node.altText}
                          width="18"
                          height="18"
                        />
                      )}
                      <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">
                        {latestPost?.commentCount || 0} Comments
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href={`/blog-detail/${latestPost?.slug}`}
                  className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%]"
                >
                  {blogIcons?.readMore}
                  {blogIcons?.readMoreIcon?.node?.sourceUrl && (
                    <img
                      src={blogIcons.readMoreIcon.node.sourceUrl}
                      alt={blogIcons.readMoreIcon.node.altText}
                      width="15"
                      height="20"
                    />
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechTalks;
