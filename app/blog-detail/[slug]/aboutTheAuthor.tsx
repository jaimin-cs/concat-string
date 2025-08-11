"use client";
import React from "react";
interface Props {
  post: any;
}
const AboutTheAuthor: React.FC<Props> = ({ post }) => {
  return (
    <section className="pt-[80px]">
      <div className="container max-w-[1400px] px-[20px] mx-auto">
        <h3 className="font-lato font-bold 2xl:text-[38px] xl:text-[36px] lg:text-[30px] md:text-[30px] sm:text-[25px] text-[20px] leading-[100%] text-white mb-[40px]">
          {post?.blogDetail?.aboutTheAuthorTitle}
        </h3>
        <div className="bg-white/10 rounded-[16px] 2xl:p-[34px] xl:p-[34px] lg:p-[30px] sm:p-[25px] p-[20px] 2xl:max-w-[1030px] xl:max-w-[1030px] lg:max-w-[1030px] md:max-w-full sm:max-w-full max-w-full max-h-max">
          <div className="flex items-top justify-top 2xl:gap-[40px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">
            <div className="flex flex-top justify-top gap-[20px] 2xl:w-[516px] xl:w-[516px] lg:w-[516px] md:w-full sm:w-full w-full 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">
              <img
                src={
                  post?.author?.node?.userProfileImage?.userProfileImage?.node
                    ?.sourceUrl
                }
                alt={
                  post?.author?.node?.userProfileImage?.userProfileImage?.node
                    ?.altText
                }
                width="90"
                height="90"
                className="h-[90px] w-[90px]"
              />
              <div className="flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[40px] items-start">
                  <div className="flex flex-col items-start">
                    <h5 className="font-denton font-bold text-center text-white mb-[2px] text-[24px] leading-[32px]">
                      {post?.author?.node?.name}
                    </h5>
                    <p className="font-denton font-normal text-white text-[18px] leading-[100%] text-center mb-[6px]">
                      {post?.author?.node?.userProfileImage?.userRole}
                    </p>
                    <p className="font-lato font-normal 2xl:text-[22px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[18px] leading-[36px] text-white">
                      {post?.author?.node?.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[30px] items-start">
                    <a
                      href="author-detail.html"
                      className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%]"
                    >
                      {
                        post?.author?.node?.userProfileImage
                          ?.discoverMyJourneyTitle
                      }
                      <img
                        src={
                          post?.author?.node?.userProfileImage?.discoverSvg
                            ?.node?.sourceUrl
                        }
                        alt={
                          post?.author?.node?.userProfileImage?.discoverSvg
                            ?.node?.altText
                        }
                      />
                    </a>
                    <ul className="flex items-center 2xl:gap-[40px] xl:gap-[40px] lg:gap-[30px] md:gap-[20px] sm:gap-[20px] gap-[10px] mb-[44px]">
                      {post?.author?.node?.userProfileImage?.socialMedia?.map(
                        (term: any, index: any) => (
                          <li key={index}>
                            <a
                              href={term?.socialLink?.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={term?.socialSvg?.node?.sourceUrl}
                                alt={term?.socialSvg?.node?.altText}
                              />
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[7px] items-top justify-top 2xl:w-[406px] xl:w-[406px] lg:w-[406px] md:w-full sm:w-full w-full">
              <h3 className="font-denton font-bold 2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[20px] leading-[100%] text-white">
                {post?.blogDetail?.subscribeMyArticleTitle}
              </h3>
              <p className="font-lato font-normal 2xl:text-[22px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[18px] leading-[36px] text-white">
                {post?.blogDetail?.subscribeDescription}
              </p>
              <div className="relative 2xl:w-[406px] xl:w-[406px] lg:w-[406px] md:w-[406px] sm:w-[406px] w-full blog-search mt-[30px]">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-grow bg-[#E721251A] text-[#E9E9E9] font-lato font-normal 2xl:text-[17px] xl:text-[17px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] leading-[28px] rounded-full focus:outline-none px-[24px] py-[15px] w-full relative z-[99]"
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
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheAuthor;
