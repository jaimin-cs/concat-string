"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/css/blog.css";
import { useQuery } from "@apollo/client";
import { GET_BLOG_SETTINGS } from "@/lib/queries";
import { useRouter } from "next/navigation";

const MeetWriters = () => {
  const { loading, error, data } = useQuery(GET_BLOG_SETTINGS);
  const router = useRouter();

  const settings = {
    slidesToShow: 4,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading meetWriters data</div>;

  const writersList = data?.page?.blogSettings?.writersList;
  const users = data?.users?.nodes;
  return (
    <section className="pt-[120px]">
      <div className="container max-w-[1400px] px-[20px] mx-auto w-full">
        <div className="flex flex-col items-center justify-center gap-[16px] 2xl:mb-[60px] xl:mb-[60px] lg:mb-[50px] md:mb-[40px] sm:mb-[30px] mb-[30px]">
          <h2 className="h2 text-white text-center">{writersList?.title}</h2>
          <p className="font-lato font-normal text-[17px] leading-[26px] text-[#C3C3C3] text-center max-w-[1000px]">
            {writersList?.description}
          </p>
        </div>

        <Slider {...settings} className="team-slider">
          {users?.map((user: any) => (
            <div
              key={user.id}
              className="rounded-[10px] py-[36px] px-[24px] flex flex-col items-center justify-center 2xl:me-[30px] xl:me-[30px] lg:me-[30px] md:me-[20px] sm:me-[20px] me-0 team-box hover:bg-[#D9D9D933] h-full"
            >
              <div className="flex flex-col gap-[18px] items-center justify-center gap-[24px] pb-[16px]">
                <img
                  src={
                    user.userProfileImage?.userProfileImage?.node?.sourceUrl ||
                    user.avatar?.url
                  }
                  alt={user.name}
                  width="84"
                  height="84"
                  className="rounded-full object-cover w-[84px] h-[84px] object-center"
                />
                <h4 className="font-denton font-bold text-[24px] text-white leading-[100%]">
                  {user.name}
                </h4>
              </div>
              <p className="font-lato font-normal text-[22px] leading-[36px] text-[#C3C3C3] pb-[36px] text-center">
                {user.description}
              </p>
              <a
                // href={`/author-details`}
                onClick={() => {
                  localStorage.setItem("selectedUserId", user.id);
                  router.push("/author-details");
                }}
                className="flex items-center justify-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%] cursor-pointer"
              >
                {writersList?.buttonLabel}
                {writersList?.buttonIcon?.node?.sourceUrl && (
                  <img
                    src={writersList.buttonIcon.node.sourceUrl}
                    alt={writersList.buttonIcon.node.altText}
                    width="15"
                    height="20"
                  />
                )}
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MeetWriters;
