"use client";
import { useRef } from "react";
import { useQuery } from "@apollo/client";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/css/events.css";
import { GET_LIFE_AT_COMPANY } from "@/lib/queries";
import { formatEventDate } from "@/lib/utils";

export default function LifeAtCompany() {
  const sliderRef = useRef<Slider>(null);
  const { loading, error, data } = useQuery(GET_LIFE_AT_COMPANY);

  const sliderSettings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "ease-in-out",
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    pauseOnFocus: true,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-slick-dots",
    customPaging: (i: number) => <button type="button"></button>,
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading life at company data</div>;

  const lifeAtCompanyData = data?.page?.flexibleContent?.flexibleContent?.find(
    (item: any) => item.lifeAtCompanyTitle
  );

  const title = lifeAtCompanyData?.lifeAtCompanyTitle;
  const content = lifeAtCompanyData?.lifeAtCompanyContent;
  const mostRecentEventsTitle = lifeAtCompanyData?.mostRecentEventsTitle;
  const allEvents = lifeAtCompanyData?.events?.nodes || [];
  // Show only first 3 events
  const events = allEvents.slice(0, 3);
  
  // Check if there are any events to display
  if (!allEvents || allEvents.length === 0) {
    return (
      <section className="2xl:pt-[120px] xl:pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[50px] pt-[40px] 2xl:pb-[60px] xl:pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[25px] pb-[20px]">
        <div className="container max-w-[1440px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[15px] sm:px-[12px] px-[10px] mx-auto">
          <div className="flex flex-col items-center justify-center 2xl:gap-[16px] xl:gap-[14px] lg:gap-[12px] md:gap-[10px] sm:gap-[8px] gap-[6px] 2xl:mb-[60px] xl:mb-[50px] lg:mb-[40px] md:mb-[35px] sm:mb-[30px] mb-[25px]">
            <h2 className="h2 text-white text-center normal-case">{title}</h2>
            <p className="font-lato font-medium text-[17px] leading-[26px] text-[#C3C3C3] text-center max-w-[1000px]">
              {content}
            </p>
          </div>
          <div className="text-center py-[60px]">
            <p className="text-white text-lg">No events to display at the moment</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="2xl:pt-[120px] xl:pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[50px] pt-[40px] 2xl:pb-[60px] xl:pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[25px] pb-[20px]">
      <div className="container max-w-[1440px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[15px] sm:px-[12px] px-[10px] mx-auto">
        <div className="flex flex-col items-center justify-center 2xl:gap-[16px] xl:gap-[14px] lg:gap-[12px] md:gap-[10px] sm:gap-[8px] gap-[6px] 2xl:mb-[60px] xl:mb-[50px] lg:mb-[40px] md:mb-[35px] sm:mb-[30px] mb-[25px]">
          <h2 className="h2 text-white text-center normal-case">{title}</h2>
          <p className="font-lato font-medium text-[17px] leading-[26px] text-[#C3C3C3] text-center max-w-[1000px]">
            {content}
          </p>
        </div>
        {events.length > 0 && (
          <div
            id="most-recent-events"
            className="bg-[#2E0707] 2xl:rounded-[20px] xl:rounded-[18px] lg:rounded-[15px] md:rounded-[12px] sm:rounded-[10px] rounded-[8px] 2xl:p-[80px] xl:p-[60px] lg:p-[50px] md:p-[40px] sm:p-[30px] p-[20px] relative overflow-hidden"
          >
            {/* Title */}
            <div className="text-center 2xl:mb-[50px] xl:mb-[45px] lg:mb-[40px] md:mb-[35px] sm:mb-[30px] mb-[25px]">
              <h2 className="text-white 2xl:text-[66px] xl:text-[58px] lg:text-[48px] md:text-[36px] sm:text-[28px] text-[22px] font-bold 2xl:leading-[87px] xl:leading-[75px] lg:leading-[60px] md:leading-[45px] sm:leading-[35px] leading-[28px] font-denton">
                {mostRecentEventsTitle}
              </h2>
            </div>
            {/* Event Slider Container */}
            <div className="events-slider-container relative">
              {/* Slick Slider */}
              <Slider
                ref={sliderRef}
                {...sliderSettings}
                className="events-slider"
              >
                {events.map((event: any, index: number) => (
                  <div key={event.id} className="slide">
                    <div className="flex 2xl:gap-[60px] xl:gap-[60px] lg:gap-[40px] md:gap-[30px] sm:gap-[20px] gap-[20px] lg:items-start items-center lg:flex-row flex-col">
                      {/* Left Content */}
                      <div className="flex-1 2xl:max-w-[590px] xl:max-w-[590px] lg:max-w-[50%] max-w-full">
                        <h3 className="text-white 2xl:text-[34px] xl:text-[34px] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] font-bold 2xl:leading-[45px] xl:leading-[45px] lg:leading-[35px] md:leading-[30px] sm:leading-[25px] leading-[23px] font-denton mb-[5px]">
                          {event.eventSettings?.eventTitle}
                        </h3>
                        <p className="text-white 2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] font-normal 2xl:leading-[32px] xl:leading-[32px] lg:leading-[26px] md:leading-[24px] sm:leading-[22px] leading-[20px] font-denton mb-[16px]">
                          {formatEventDate(event.eventSettings?.eventDate)}
                        </p>
                        <p
                          className="text-[#C3C3C3] 2xl:text-[17px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[13px] font-normal 2xl:leading-[26px] xl:leading-[26px] lg:leading-[24px] md:leading-[22px] sm:leading-[20px] leading-[19px] font-lato 2xl:mb-[47px] xl:mb-[47px] lg:mb-[30px] md:mb-[25px] sm:mb-[20px] mb-[15px]"
                          dangerouslySetInnerHTML={{
                            __html: event.eventSettings?.eventDescription,
                          }}
                        />
                        <div className="flex items-center gap-[10px] cursor-pointer hover:opacity-80 transition-opacity">
                          <span className="text-white 2xl:text-[18px] xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[13px] font-bold 2xl:leading-[24px] xl:leading-[24px] lg:leading-[20px] md:leading-[19px] sm:leading-[18px] leading-[17px] font-denton hover:opacity-80 transition-opacity">
                            {event.eventSettings?.eventViewMoreLink?.title}
                          </span>
                          <svg
                            width="15"
                            height="20"
                            viewBox="0 0 15 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z"
                              fill="url(#paint0_linear_1_2080)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1_2080"
                                x1="0.000158411"
                                y1="9.99993"
                                x2="14.9998"
                                y2="9.99993"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#EA070B" />
                                <stop offset="0.158" stopColor="#DF1418" />
                                <stop offset="1" stopColor="#FF686B" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      {/* Right Image */}
                      <div className="flex-1 2xl:max-w-[590px] xl:max-w-[590px] lg:max-w-[50%] max-w-full relative">
                        <div className="w-full 2xl:h-[380px] xl:h-[380px] lg:h-[300px] md:h-[250px] sm:h-[200px] h-[180px] rounded-[14px] overflow-hidden bg-[#D9D9D9]">
                          <img
                            src={
                              event.eventSettings?.eventImages?.[0]?.eventImage?.node
                                ?.sourceUrl
                            }
                            alt={
                              event.eventSettings?.eventImages?.[0]?.eventImage?.node
                                ?.altText
                            }
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
