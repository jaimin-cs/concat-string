"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOG_POSTS, GET_BLOG_ICONS } from "@/lib/queries";

const TechTalks = () => {
  // Fetch blog posts to get the latest 3 posts
  const {
    loading: postsLoading,
    error: postsError,
    data: postsData,
  } = useQuery(GET_BLOG_POSTS, {
    variables: {
      perPage: 3, // Get the latest 3 posts
      after: null,
    },
  });

  // Fetch blog icons
  const { data: iconsData } = useQuery(GET_BLOG_ICONS);

  if (postsLoading) return <div>Loading...</div>;
  if (postsError) return <div>Error loading techTalks data</div>;

  const posts = postsData?.posts?.nodes || [];

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

  if (!posts || posts.length === 0) {
    return <div>No posts found</div>;
  }

  return (
    <section className="tech-talk">
      <div className="container max-[1400px] mx-auto px-[20px]">
        <div className="flex flex-col items-center justify-center 2xl:gap-[60px] xl:gap-[50px] lg:gap-[40px] md:gap-[30px] sm:gap-[20px] gap-[20px]">
          <h2 className="h2 text-white text-center">{blogIcons?.title}</h2>

          <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[30px] mb-[30px]">
            {posts.map((post: any, index: number) => (
              <div
                key={post.id || index}
                className="bg-[#FFFF]/10 2xl:pt-[24px] xl:pt-[24px] lg:pt-[24px] md:pt-[20px] sm:pt-[20px] pt-[15px] 2xl:px-[24px] xl:px-[24px] lg:px-[24px] md:px-[20px] sm:px-[20px] px-[15px] 2xl:pb-[30px] xl:pb-[30px] lg:pb-[24px] md:pb-[20px] sm:pb-[20px] pb-[15px] backdrop-blur-sm 2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px]"
              >
                <div className="flex flex-col justify-between gap-[32px] h-full">
                  <div className="flex flex-col flex-grow height-full">
                    <img
                      src={getFeaturedImageUrl(post)}
                      width="399"
                      height="270"
                      className="2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] mb-[16px] w-full"
                      alt={post?.title}
                    />
                    <div className="flex flex-row flex-wrap justify-between gap-[10px] mb-[20px]">
                      <div className="flex flex-row flex-wrap gap-[14px]">
                        {getCategories(post).map(
                          (category: any, catIndex: number) => (
                            <div
                              key={category.slug || catIndex}
                              className="blog-gr flex items-center justify-center bg-[#E7212599] rounded-[84px] py-[6px] px-[13px] relative"
                            >
                              <span className="text-center text-white font-denton font-normal text-[16px] leading-[100%]">
                                {category.name}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                      <span className="flex items-center gap-[8px] text-[16px] font-lato font-normal leading-[100%] text-[#E9E9E9]">
                        {blogIcons?.dateIcon?.node?.sourceUrl && (
                          <img
                            src={blogIcons.dateIcon.node.sourceUrl}
                            alt={blogIcons.dateIcon.node.altText}
                            width="18"
                            height="18"
                          />
                        )}
                        {formatDate(post?.date)}
                      </span>
                    </div>
                    <h3 className="font-denton text-[24px] font-bold leading-[32px] text-white mb-[6px]">
                      {post?.title}
                    </h3>
                    <div className="flex items-center justify-between gap-[10px] w-full mb-[16px]">
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
                          {post?.commentCount || 0} Comments
                        </span>
                      </div>
                    </div>
                    <p className="font-lato text-[17px] font-normal leading-[26px] text-[#C3C3C3]">
                      {post?.excerpt?.replace(/<[^>]*>/g, "")}
                    </p>
                  </div>
                  <a
                    href={`/blog-detail/${post?.slug}`}
                    className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%] hover:text-[#E72125]"
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
            ))}
          </div>
          {/*
           */}

          <a href={posts[0]?.blogDetail?.viewAllBlog.url} className="group">
            <div className="btn-primary-outline">
              <div className="btn-primary">
                {posts[0]?.blogDetail?.viewAllBlog.title}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechTalks;
