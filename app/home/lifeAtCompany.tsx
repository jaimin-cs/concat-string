"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LIFE_AT_COMPANY_WITH_EVENTS } from "@/lib/queries";
import { formatEventDate } from "@/lib/utils";

const LifeAtCompany = () => {
  const { loading, error, data } = useQuery(GET_LIFE_AT_COMPANY_WITH_EVENTS);

  if (loading) return (
    <section className="py-[120px]">
      <div className="container max-w-[1400px] px-[20px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-[40px]">
          <div className="animate-pulse bg-gray-700 h-8 w-64 rounded"></div>
          <div className="animate-pulse bg-gray-700 h-4 w-96 rounded"></div>
          <div className="grid grid-cols-3 gap-[30px] w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-gray-700 h-64 rounded-[10px]"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
  
  if (error) return (
    <section className="py-[120px]">
      <div className="container max-w-[1400px] px-[20px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-[40px]">
          <h2 className="h2 text-white text-center">Error loading life at company data</h2>
          <p className="text-white text-center">Please try again later.</p>
        </div>
      </div>
    </section>
  );

  const lifeAtCompanyData = data?.page?.flexibleContent?.flexibleContent?.find(
    (item: any) => item.lifeAtCompanyTitle
  );

  const events = lifeAtCompanyData?.events?.nodes || [];
  return (
    <section className="py-[120px]">
      <div className="container max-w-[1400px] px-[20px] mx-auto">
        <div className="flex flex-col items-center justify-center 2xl:gap-[60px] xl:gap-[50px] lg:gap-[40px] md:gap-[30px] sm:gap-[20px] gap-[20px]">
          <h2 className="h2 text-white text-center">{lifeAtCompanyData?.lifeAtCompanyTitle || "Life at Company"}</h2>
          {lifeAtCompanyData?.lifeAtCompanyContent && (
            <p className="text-white text-center max-w-[800px] mx-auto text-lg leading-relaxed">
              {lifeAtCompanyData.lifeAtCompanyContent}
            </p>
          )}
          {events.length > 0 ? (
            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[30px]">
            {events.length > 0 && (
                              <div 
                  className="relative w-full 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] h-[100%] rounded-[10px] overflow-hidden group cursor-pointer"
                  onClick={() => window.open(events[0]?.eventSettings?.eventViewMoreLink?.url || '/events', '_blank')}
                  title={`View ${events[0]?.eventSettings?.eventTitle || 'Event'} details`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      window.open(events[0]?.eventSettings?.eventViewMoreLink?.url || '/events', '_blank');
                    }
                  }}
                >
                <img
                  src={events[0]?.eventSettings?.eventImages?.[0]?.eventImage?.node?.sourceUrl || "images/life-at-company/gallery-image-4.png"}
                  alt={events[0]?.eventSettings?.eventImages?.[0]?.eventImage?.node?.altText || "Event Image"}
                  className="w-full h-full object-cover object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent  opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 2xl:p-[30px] xl:p-[25px] lg:p-[20px] md:p-[15px] sm:p-[12px] p-[10px] flex flex-col justify-between items-start  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="2xl:mb-[20px] xl:mb-[18px] lg:mb-[15px] md:mb-[12px] sm:mb-[10px] mb-[8px]">
                    <h3 className="text-white font-denton font-bold 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] 2xl:leading-[32px] xl:leading-[28px] lg:leading-[26px] md:leading-[24px] sm:leading-[22px] leading-[20px] 2xl:mb-[5px] xl:mb-[5px] lg:mb-[4px] md:mb-[3px] sm:mb-[3px] mb-[2px]">
                      {events[0]?.eventSettings?.eventTitle || "Event Title"}
                    </h3>
                    <p className="text-white font-denton font-normal 2xl:text-[18px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] 2xl:leading-[24px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[17px] leading-[16px]">
                      {formatEventDate(events[0]?.eventSettings?.eventDate)}
                    </p>
                  </div>
                  <div className="flex items-center 2xl:gap-[10px] xl:gap-[10px] lg:gap-[8px] md:gap-[7px] sm:gap-[6px] gap-[5px] cursor-pointer hover:opacity-80 transition-opacity opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-denton font-bold 2xl:text-[18px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] 2xl:leading-[24px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[17px] leading-[16px] uppercase">
                      {events[0]?.eventSettings?.eventViewMoreLink?.title || "View More"}
                    </span>
                    <svg
                      width="15"
                      height="20"
                      viewBox="0 0 15 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="2xl:w-[15px] 2xl:h-[20px] xl:w-[13px] xl:h-[18px] lg:w-[12px] lg:h-[16px] md:w-[11px] md:h-[15px] sm:w-[10px] sm:h-[14px] w-[8px] h-[12px]"
                    >
                      <path
                        d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z"
                        fill="url(#paint0_linear_gallery)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_gallery"
                          x1="0.000158411"
                          y1="9.99993"
                          x2="14.9998"
                          y2="9.99993"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EA070B"></stop>
                          <stop offset="0.158" stopColor="#DF1418"></stop>
                          <stop offset="1" stopColor="#FF686B"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-[30px]">
              {events.length > 1 && (
                <div 
                  className="relative w-full 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] h-[100%] rounded-[10px] overflow-hidden group cursor-pointer"
                  onClick={() => window.open(events[1]?.eventSettings?.eventViewMoreLink?.url || '/events', '_blank')}
                  title={`View ${events[1]?.eventSettings?.eventTitle || 'Event'} details`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      window.open(events[1]?.eventSettings?.eventViewMoreLink?.url || '/events', '_blank');
                    }
                  }}
                >
                  <img
                    src={events[1]?.eventSettings?.eventImages?.[0]?.eventImage?.node?.sourceUrl || "images/life-at-company/gallery-image-3.png"}
                    alt={events[1]?.eventSettings?.eventImages?.[0]?.eventImage?.node?.altText || "Event Image"}
                    className="w-full h-full object-cover object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent  opacity-0 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 right-0 2xl:p-[30px] xl:p-[25px] lg:p-[20px] md:p-[15px] sm:p-[12px] p-[10px] flex flex-col justify-between items-start  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="2xl:mb-[20px] xl:mb-[18px] lg:mb-[15px] md:mb-[12px] sm:mb-[10px] mb-[8px]">
                      <h3 className="text-white font-denton font-bold 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] 2xl:leading-[32px] xl:leading-[28px] lg:leading-[26px] md:leading-[24px] sm:leading-[22px] leading-[20px] 2xl:mb-[5px] xl:mb-[5px] lg:mb-[4px] md:mb-[3px] sm:mb-[3px] mb-[2px]">
                        {events[1]?.eventSettings?.eventTitle || "Event Title"}
                      </h3>
                      <p className="text-white font-denton font-normal 2xl:text-[18px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] 2xl:leading-[24px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[17px] leading-[16px]">
                        {formatEventDate(events[1]?.eventSettings?.eventDate)}
                      </p>
                    </div>
                    <div className="flex items-center 2xl:gap-[10px] xl:gap-[10px] lg:gap-[8px] md:gap-[7px] sm:gap-[6px] gap-[5px] cursor-pointer hover:opacity-80 transition-opacity opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-denton font-bold 2xl:text-[18px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] 2xl:leading-[24px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[17px] leading-[16px] uppercase">
                        {events[1]?.eventSettings?.eventViewMoreLink?.title || "View More"}
                      </span>
                      <svg
                        width="15"
                        height="20"
                        viewBox="0 0 15 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="2xl:w-[15px] 2xl:h-[20px] xl:w-[13px] xl:h-[18px] lg:w-[12px] lg:h-[16px] md:w-[11px] md:h-[15px] sm:w-[10px] sm:h-[14px] w-[8px] h-[12px]"
                      >
                        <path
                          d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z"
                          fill="url(#paint0_linear_gallery)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_gallery"
                            x1="0.000158411"
                            y1="9.99993"
                            x2="14.9998"
                            y2="9.99993"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#EA070B"></stop>
                            <stop offset="0.158" stopColor="#DF1418"></stop>
                            <stop offset="1" stopColor="#FF686B"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
                              {events.length > 2 && (
                  <div 
                    className="relative w-full 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] md:h-[100%] sm:h-[100%] h-[100%] rounded-[10px] overflow-hidden group cursor-pointer"
                    onClick={() => window.open(events[2]?.eventSettings?.eventViewMoreLink?.url || '/events', '_blank')}
                    title={`View ${events[2]?.eventSettings?.eventTitle || 'Event'} details`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        window.open(events[2]?.eventSettings?.eventViewMoreLink?.url || '/events', '_blank');
                      }
                    }}
                  >
                    <img
                      src={events[2]?.eventSettings?.eventImages?.[0]?.eventImage?.node?.sourceUrl || "images/life-at-company/gallery-image-2.png"}
                      alt={events[2]?.eventSettings?.eventImages?.[0]?.eventImage?.node?.altText || "Event Image"}
                      className="w-full h-full object-cover object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent  opacity-0 group-hover:opacity-100"></div>
                    <div className="absolute bottom-0 left-0 right-0 2xl:p-[30px] xl:p-[25px] lg:p-[20px] md:p-[15px] sm:p-[12px] p-[10px] flex flex-col justify-between items-start  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="2xl:mb-[20px] xl:mb-[18px] lg:mb-[15px] md:mb-[12px] sm:mb-[10px] mb-[8px]">
                        <h3 className="text-white font-denton font-bold 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] 2xl:leading-[32px] xl:leading-[28px] lg:leading-[26px] md:leading-[24px] sm:leading-[22px] leading-[20px] 2xl:mb-[5px] xl:mb-[5px] lg:mb-[4px] md:mb-[3px] sm:mb-[3px] mb-[2px]">
                          {events[2]?.eventSettings?.eventTitle || "Event Title"}
                        </h3>
                        <p className="text-white font-denton font-normal 2xl:text-[18px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] 2xl:leading-[24px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[17px] leading-[16px]">
                          {formatEventDate(events[2]?.eventSettings?.eventDate)}
                        </p>
                      </div>
                      <div className="flex items-center 2xl:gap-[10px] xl:gap-[10px] lg:gap-[8px] md:gap-[7px] sm:gap-[6px] gap-[5px] cursor-pointer hover:opacity-80 transition-opacity opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-denton font-bold 2xl:text-[18px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] 2xl:leading-[24px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[17px] leading-[16px] uppercase">
                          {events[2]?.eventSettings?.eventViewMoreLink?.title || "View More"}
                        </span>
                        <svg
                          width="15"
                          height="20"
                          viewBox="0 0 15 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="2xl:w-[15px] 2xl:h-[20px] xl:w-[13px] xl:h-[18px] lg:w-[12px] lg:h-[16px] md:w-[11px] md:h-[15px] sm:w-[10px] sm:h-[14px] w-[8px] h-[12px]"
                        >
                          <path
                            d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z"
                            fill="url(#paint0_linear_gallery)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_gallery"
                              x1="0.000158411"
                              y1="9.99993"
                              x2="14.9998"
                              y2="9.99993"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#EA070B"></stop>
                              <stop offset="0.158" stopColor="#DF1418"></stop>
                              <stop offset="1" stopColor="#FF686B"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
            </div>
            {events.length > 3 && (
              <div 
                className="relative w-full 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] h-[100%] rounded-[10px] overflow-hidden group cursor-pointer"
                onClick={() => window.open(events[3]?.eventSettings?.eventViewMoreLink?.url || '/events', '_blank')}
                title={`View ${events[3]?.eventSettings?.eventTitle || 'Event'} details`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.open(events[3]?.eventSettings?.eventViewMoreLink?.url || '/events', '_blank');
                  }
                }}
              >
                <img
                  src={events[3]?.eventSettings?.eventImages?.[0]?.eventImage?.node?.sourceUrl }
                  alt={events[3]?.eventSettings?.eventImages?.[0]?.eventImage?.node?.altText || "Event Image"}
                  className="w-full h-full object-cover object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent  opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 2xl:p-[30px] xl:p-[25px] lg:p-[20px] md:p-[15px] sm:p-[12px] p-[10px] flex justify-between flex-col items-start  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="2xl:mb-[20px] xl:mb-[18px] lg:mb-[15px] md:mb-[12px] sm:mb-[10px] mb-[8px]">
                    <h3 className="text-white font-denton font-bold 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] 2xl:leading-[32px] xl:leading-[28px] lg:leading-[26px] md:leading-[24px] sm:leading-[22px] leading-[20px] 2xl:mb-[5px] xl:mb-[5px] lg:mb-[4px] md:mb-[3px] sm:mb-[3px] mb-[2px]">
                      {events[3]?.eventSettings?.eventTitle || "Event Title"}
                    </h3>
                    <p className="text-white font-denton font-normal 2xl:text-[18px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] 2xl:leading-[24px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[17px] leading-[16px]">
                                              {formatEventDate(events[3]?.eventSettings?.eventDate)}
                    </p>
                  </div>
                  <div className="flex items-center 2xl:gap-[10px] xl:gap-[10px] lg:gap-[8px] md:gap-[7px] sm:gap-[6px] gap-[5px] cursor-pointer hover:opacity-80 transition-opacity opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-denton font-bold 2xl:text-[18px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] 2xl:leading-[24px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[17px] leading-[16px] uppercase">
                      {events[3]?.eventSettings?.eventViewMoreLink?.title || "View More"}
                    </span>
                    <svg
                      width="15"
                      height="20"
                      viewBox="0 0 15 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="2xl:w-[15px] 2xl:h-[20px] xl:w-[13px] xl:h-[18px] lg:w-[12px] lg:h-[16px] md:w-[11px] md:h-[15px] sm:w-[10px] sm:h-[14px] w-[8px] h-[12px]"
                    >
                      <path
                        d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z"
                        fill="url(#paint0_linear_gallery)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_gallery"
                          x1="0.000158411"
                          y1="9.99993"
                          x2="14.9998"
                          y2="9.99993"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EA070B"></stop>
                          <stop offset="0.158" stopColor="#DF1418"></stop>
                          <stop offset="1" stopColor="#FF686B"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            )}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white text-lg">No events available at the moment.</p>
            </div>
          )}
          {lifeAtCompanyData?.eventPageLink && (
            <a href={lifeAtCompanyData.eventPageLink.url} className="group">
              <div className="btn-primary-outline">
                <div className="btn-primary">{lifeAtCompanyData.eventPageLink.title}</div>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default LifeAtCompany;
