"use client";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOG_POSTS, GET_BLOG_ICONS } from "../../lib/queries";
const FutureTech = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const postsPerPage = 6;
  // Fetch all posts for the selected category
  const { loading, error, data } = useQuery(GET_BLOG_POSTS, {
    variables: {
      categorySlug: selectedCategory,
      perPage: 100, // Fetch more posts for better pagination
      after: null,
    },
    onCompleted: (data) => {
      if (data?.posts?.nodes) {
        const postsWithoutFirst = data.posts.nodes.slice(1);
        setAllPosts(postsWithoutFirst);
        setCurrentPage(1);
      }
    },
  });

  // Fetch blog icons
  const { data: iconsData } = useQuery(GET_BLOG_ICONS);

  const allCategories = data?.categories?.nodes || [];
  const blogIcons = iconsData?.page?.blogSettings?.techTalks;

  // Filter posts based on search term
  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Create categories array with "All" option and dynamic categories from API
  const categories = [
    { name: "All", slug: null, count: totalPosts },
    ...allCategories.map((cat: any) => ({
      name: cat.name,
      slug: cat.slug,
      count: cat.count,
    })),
  ];

  const handleCategoryChange = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const goToPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

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

  const stripHtml = (html: string) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading futureTech data</div>;

  return (
    <section className="pt-[87px]">
      <div className="container max-w-[1400px] px-[20px] mx-auto w-full">
        <div className="flex flex-col">
          <div className="flex items-start 2xl:gap-[88px] xl:gap-[88px] lg:gap-[70px] md:gap-[60px] sm:gap-[30px] gap-[20px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col 2xl:mb-[60px] xl:mb-[60px] lg:mb-[40px] md:mb-[30px] sm:mb-[30px] mb-[30px]">
            <div className="flex flex-row flex-wrap gap-[12px] 2xl:w-[964px] xl:w-[964px] lg:w-[964px] md:w-full sm:w-full w-full">
              {categories.map((category) => (
                <button
                  key={category.slug || "all"}
                  onClick={() => handleCategoryChange(category.slug)}
                  className={`flex items-center justify-center rounded-[84px] py-[20px] px-[24px] relative blog-ct hover:bg-[#E721254D] ${
                    selectedCategory === category.slug ? "active" : ""
                  }`}
                >
                  <span className="text-center text-white font-denton font-normal text-[16px] leading-[100%]">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
            <div className="relative 2xl:w-[348px] xl:w-[348px] lg:w-[348px] md:w-full sm:w-full w-full">
              <input
                type="search"
                placeholder="Search by job title …"
                value={searchTerm}
                onChange={handleSearchChange}
                className="flex-grow bg-[#292929] text-[#E9E9E9] font-lato font-normal 2xl:text-[17px] xl:text-[17px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] leading-[28px] rounded-full focus:outline-none px-[24px] py-[15px] w-full"
              />
              <button
                type="button"
                className="absolute right-[24px] top-0 bottom-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.4607 8.5393L11.5606 15.4129L1.20562 11.9607C0.482822 11.7193 -0.0041323 11.0412 2.64314e-05 10.2793C0.00423988 9.51742 0.496775 8.84344 1.22236 8.61044L27.6966 0.0847745C28.3259 -0.117526 29.0166 0.048495 29.4841 0.515969C29.9515 0.983442 30.1176 1.67412 29.9152 2.30346L21.3896 28.7776C21.1566 29.5032 20.4826 29.9958 19.7207 30C18.9588 30.0041 18.2807 29.5172 18.0393 28.7944L14.5704 18.3892L21.4607 8.5393Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>

          {currentPosts.length > 0 ? (
            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[30px] mb-[30px]">
              {currentPosts.map((post: any) => (
                <div
                  key={post.id}
                  className="bg-[#FFFF]/10 2xl:pt-[24px] xl:pt-[24px] lg:pt-[24px] md:pt-[20px] sm:pt-[20px] pt-[15px] 2xl:px-[24px] xl:px-[24px] lg:px-[24px] md:px-[20px] sm:px-[20px] px-[15px] 2xl:pb-[30px] xl:pb-[30px] lg:pb-[24px] md:pb-[20px] sm:pb-[20px] pb-[15px] backdrop-blur-sm 2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px]"
                >
                  <div className="flex flex-col justify-between gap-[32px] h-full">
                    <div className="flex flex-col flex-grow height-full">
                      <img
                        src={post.featuredImage?.node?.sourceUrl}
                        alt={post.featuredImage?.node?.altText || post.title}
                        width="399"
                        height="270"
                        className="2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] mb-[16px] w-full object-cover"
                      />
                      <div className="flex flex-row flex-wrap justify-between gap-[10px] mb-[20px]">
                        <div className="flex flex-row flex-wrap gap-[14px]">
                          {post.categories?.nodes
                            ?.slice(0, 2)
                            .map((category: any, index: number) => (
                              <div
                                key={index}
                                className="blog-gr flex items-center justify-center bg-[#E7212599] rounded-[84px] py-[6px] px-[13px] relative"
                              >
                                <span className="text-center text-white font-denton font-normal text-[16px] leading-[100%]">
                                  {category.name}
                                </span>
                              </div>
                            ))}
                        </div>
                        <span className="flex items-center gap-[8px] text-[16px] font-lato font-normal leading-[100%] text-[#E9E9E9]">
                          {blogIcons?.dateIcon?.node?.sourceUrl && (
                            <img
                              src={blogIcons.dateIcon.node.sourceUrl}
                              alt={blogIcons.dateIcon.node.altText}
                              width="18"
                              height="19"
                              className="w-[18px] h-[19px]"
                            />
                          )}
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <h3 className="font-denton text-[24px] font-bold leading-[32px] text-white mb-[6px]">
                        {post.title}
                      </h3>
                      <div className="flex items-center justify-between gap-[10px] w-full mb-[16px]">
                        <div className="flex gap-[8px] items-center">
                          {blogIcons?.viewIcon?.node?.sourceUrl && (
                            <img
                              src={blogIcons.viewIcon.node.sourceUrl}
                              alt={blogIcons.viewIcon.node.altText}
                              width="18"
                              height="18"
                              className="w-[18px] h-[18px]"
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
                              className="w-[18px] h-[18px]"
                            />
                          )}
                          <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">
                            {post.commentCount || 0} Comments
                          </span>
                        </div>
                      </div>
                      <p className="font-lato text-[17px] font-normal leading-[26px] text-[#C3C3C3]">
                        {stripHtml(post.excerpt)}
                      </p>
                    </div>
                    <a
                      href={`/blog-detail/${post.slug}`}
                      className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%] hover:opacity-80 transition-opacity"
                    >
                      {blogIcons?.readMore}
                      {blogIcons?.readMoreIcon?.node?.sourceUrl && (
                        <img
                          src={blogIcons.readMoreIcon.node.sourceUrl}
                          alt={blogIcons.readMoreIcon.node.altText}
                          width="15"
                          height="20"
                          className="w-[15px] h-[20px]"
                        />
                      )}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-[60px]">
              <h3 className="font-denton text-[24px] font-bold text-white mb-[16px]">
                No posts found
              </h3>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center ">
              <div className="flex items-center 2xl:gap-[20px] xl:gap-[18px] lg:gap-[15px] md:gap-[12px] sm:gap-[10px] gap-[8px]">
                {/* <!-- Page Text --> */}
                <div className="flex items-center 2xl:gap-[8px] xl:gap-[8px] lg:gap-[6px] md:gap-[5px] sm:gap-[4px] gap-[3px]">
                  <span className="font-lato font-normal text-[#E9E9E9] 2xl:text-[17px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[14px] 2xl:leading-[20px] xl:leading-[19px] lg:leading-[18px] md:leading-[17px] sm:leading-[16px] leading-[14px]">
                    Page
                  </span>
                </div>

                {/* <!-- Page Number Input --> */}
                <div className="relative">
                  <div className="flex items-center justify-center 2xl:w-[60px] 2xl:h-[62px] xl:w-[55px] xl:h-[57px] lg:w-[50px] lg:h-[52px] md:w-[45px] md:h-[47px] sm:w-[40px] sm:h-[42px] w-[35px] h-[37px] border border-white 2xl:rounded-[10px] xl:rounded-[10px] lg:rounded-[8px] md:rounded-[6px] sm:rounded-[5px] rounded-[4px] bg-transparent">
                    <div className="flex items-center gap-[4px]">
                      <span className="font-lato font-normal text-[#E9E9E9] text-center 2xl:text-[17px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[14px] 2xl:leading-[20px] xl:leading-[19px] lg:leading-[18px] md:leading-[17px] sm:leading-[16px] leading-[14px]">
                        {currentPage}
                      </span>
                      {/* <!-- Up/Down Arrows --> */}
                      <div className="flex flex-col gap-[2px]">
                        <button
                          onClick={() => goToPage(currentPage - 1)}
                          disabled={currentPage === 1}
                          className={`cursor-pointer hover:opacity-70 transition-opacity ${
                            currentPage === 1
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                        >
                          <svg
                            width="15"
                            height="9"
                            viewBox="0 0 15 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[15px] h-[9px]"
                          >
                            <path d="M7.5 0L15 8.61H0L7.5 0Z" fill="white" />
                          </svg>
                        </button>
                        <button
                          onClick={() => goToPage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className={`cursor-pointer hover:opacity-70 transition-opacity rotate-180 ${
                            currentPage === totalPages
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                        >
                          <svg
                            width="15"
                            height="9"
                            viewBox="0 0 15 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="2xl:w-[15px] 2xl:h-[9px] w-[15px] h-[9px]"
                          >
                            <path d="M7.5 0L15 8.61H0L7.5 0Z" fill="white" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Of Total Pages Text --> */}
                <div className="flex items-center 2xl:gap-[8px] xl:gap-[8px] lg:gap-[6px] md:gap-[5px] sm:gap-[4px] gap-[3px]">
                  <span className="font-lato font-normal text-[#E9E9E9] 2xl:text-[17px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] text-[14px] 2xl:leading-[20px] xl:leading-[19px] lg:leading-[18px] md:leading-[17px] sm:leading-[16px] leading-[14px]">
                    of {totalPages}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FutureTech;
