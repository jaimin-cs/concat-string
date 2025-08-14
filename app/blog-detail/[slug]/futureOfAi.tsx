"use client";
import React, { useEffect, useState } from "react";
interface Props {
  post: any;
}
const FutureOfAi: React.FC<Props> = ({ post }) => {
  const [headings, setHeadings] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = post?.blogDetail?.blogDetailContent || "";

      const h3Tags = tempDiv.querySelectorAll("h3");
      const h3Texts = Array.from(h3Tags).map(
        (tag) => tag.textContent?.trim() || ""
      );

      setHeadings(h3Texts);
    }
  }, [post]);

  const scrollToHeading = (headingText: string) => {
    const blogContent = document.querySelector(".blog-content");
    if (blogContent) {
      const h3Elements = blogContent.querySelectorAll("h3");
      const targetHeading = Array.from(h3Elements).find(
        (element) => element.textContent?.trim() === headingText
      );

      if (targetHeading) {
        targetHeading.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
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
  return (
    <section className="pt-[254px]">
      <div className="container max-w-[1400px] px-[20px] mx-auto">
        <div className="flex flex-col 2xl:gap-[60px] xl:gap-[60px] lg:gap-[50px] md:gap-[40px] sm:gap-[30px] gap-[30px]">
          <div className="flex items-start 2xl:gap-[60px] xl:gap-[60px] lg:gap-[50px] md:gap-[40px] sm:gap-[30px] gap-[30px] flex-col">
          <div className="blog-img w-full">
              <img
                src={post?.featuredImage?.node?.sourceUrl}
                alt={post?.featuredImage?.node?.altText}
                width="670"
                height="400"
                className="w-full"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <h1 className="font-denton font-bold 2xl:text-[80px] xl:text-[80px] lg:text-[70px] md:text-[60px] sm:text-[50px] text-[40px] 2xl:leading-[106px] xl:leading-[106px] lg:leading-[90px] md:leading-[70px] sm:leading-[60px] leading-[50px] text-white mb-[16px]">
                {post?.title}
              </h1>
              <div className="flex flex-row flex-wrap justify-between gap-[10px] mb-[32px] w-full">
                <div className="flex flex-row flex-wrap gap-[14px]">
                  {post?.terms?.nodes?.map((term: any) => (
                    <div
                      key={term?.slug}
                      className="blog-gr flex items-center justify-center bg-[#E72125]/30 rounded-[84px] py-[6px] px-[13px] relative"
                    >
                      <span className="text-center text-white font-denton font-normal text-[16px] leading-[100%]">
                        {term.name}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="flex items-center gap-[8px] text-[16px] font-lato font-normal leading-[100%] text-[#E9E9E9]">
                  <img
                    src={post?.blogDetail?.dateSvg?.node?.sourceUrl}
                    alt={post?.blogDetail?.dateSvg?.node?.altText}
                  />
                  {formatDate(post?.date)}
                </span>
              </div>
              <p className="font-lato font-normal 2xl:text-[30px] xl:text-[30px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] 2xl:leading-[50px] xl:leading-[40px] lg:leading-[30px] md:leading-[30px] sm:leading-[30px] leading-[30px] text-white">
                {post?.blogDetail?.blogDetailShotDesc}
              </p>
            </div>
            
          </div>
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col 2xl:gap-[40px] xl:gap-[40px] lg:gap-[30px] md:gap-[30px] sm:gap-[20px] gap-[20px] justify-between">
            <div className="flex flex-col items-start 2xl:gap-[30px] xl:gap-[30px] lg:gap-[20px] md:gap-[20px] sm:gap-[20px] gap-[20px] 2xl:max-w-[970px] xl:max-w-[800px] lg:max-w-full md:max-w-full sm:max-w-full max-w-full blog-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: post?.blogDetail?.blogDetailContent || "",
                }}
              />
            </div>
            <div className="bg-white/10 rounded-[16px] 2xl:py-[20px] xl:py-[20px] lg:py-[20px] sm:py-[20px] py-[20px] px-[26px] 2xl:max-w-[330px] xl:max-w-[500px] lg:max-w-full md:max-w-full sm:max-w-full max-w-full max-h-max 2xl:sticky xl:sticky lg:static md:static sm:static static 2xl:top-[200px] xl:top-[200px] lg:top-0 md:top-0 sm:top-0 top-0">
              <div className="flex flex-col gap-[24px] items-start justify-start">
                <h4 className="font-denton font-bold text-[24px] leading-[100%] text-white text-left ">
                  {post?.blogDetail?.tableOfContent}
                </h4>
                <ul className="flex flex-col gap-[14px]">
                  {headings.map((heading, index) => (
                    <li key={index} className="flex items-start gap-[10px]">
                      <img
                        src="/images/service-page/bullet.svg"
                        width="10"
                        height="10"
                      />
                      <button
                        onClick={() => scrollToHeading(heading)}
                        className="font-lato font-normal 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] leading-[36px] text-white mt-[-13px] text-left hover:text-[#E72125] transition-colors duration-300 cursor-pointer"
                      >
                        {heading}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureOfAi;
