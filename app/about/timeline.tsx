"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ROAD_TRAVELED } from "@/lib/queries";

const Timeline = () => {
  const { data, loading, error } = useQuery(GET_ROAD_TRAVELED);
  const [selectedTimeline, setSelectedTimeline] = useState<any>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Debug useEffect to log popup state changes
  useEffect(() => {
    console.log('Popup state changed:', { isPopupOpen, selectedTimeline });
  }, [isPopupOpen, selectedTimeline]);

  // Find the correct flexibleContent block
  const roadTraveledBlock = data?.page?.flexibleContent?.flexibleContent?.find(
    (block: any) => block?.roadTraveledTitle
  );
  const companyGrowth = roadTraveledBlock?.companyGrowth || [];

  // Function to truncate text to 30 words
  const truncateToWords = (text: string, wordLimit: number = 30) => {
    if (!text) return "";
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  // Function to strip HTML tags for word counting
  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  // Function to open popup
  const openPopup = (timelineData: any) => {
    console.log('Opening popup with data:', timelineData);
    setSelectedTimeline(timelineData);
    setIsPopupOpen(true);
  };

  // Function to close popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedTimeline(null);
  };

  useEffect(() => {
    const scroller = document.getElementById("timelineScroller");
    const slides: any = document.querySelectorAll(".timeline-slide");
    let currentIndex = 0;

    function updateScroll() {
      const slideHeight = slides[0]?.offsetHeight || 0;
      (scroller as HTMLElement).style.transform = `translateY(-${
        currentIndex * slideHeight
      }px)`;
    }

    const scrollUpBtn = document.getElementById("scrollUp");
    const scrollDownBtn = document.getElementById("scrollDown");

    scrollUpBtn?.addEventListener("click", () => {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateScroll();
    });

    scrollDownBtn?.addEventListener("click", () => {
      currentIndex = Math.min(currentIndex + 1, slides.length - 1);
      updateScroll();
    });
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading timeline.</div>;

  return (
    <>
      <section className="timeline bg-black pt-[120px]">
        <div className="container max-w-[1355px] px-[20px] mx-auto">
          <div className="timeline-warp flex flex-col items-center gap-[60px]">
            <h2 className="h2 text-white">
              {roadTraveledBlock?.roadTraveledTitle}
            </h2>

          <div className="relative w-full h-screen bg-black flex justify-between items-center">
            {/* <!-- Timeline Scroll Area --> */}
            <div
              id="timelineWrapper"
              className="relative w-full h-screen overflow-hidden"
            >
              <div
                id="timelineScroller"
                className="flex flex-col transition-transform duration-500 ease-in-out"
              >
                {/* <!-- Dynamic Slides --> */}
                {companyGrowth.map((growth: any, idx: number) => {
                  // Parse the readMoreLink.url JSON string
                  let readMore = { title: "Read more", url: "#", target: "" };
                  try {
                    readMore =
                      JSON.parse(growth.readMoreLink?.url || "{}") || readMore;
                  } catch {}
                  // Alternate row direction as in original layout
                  const isEven = idx % 2 === 0;
                  const rowClass = isEven
                    ? "2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row-reverse flex-row-reverse"
                    : "flex-row-reverse";
                  // Use color from API
                  const color = growth.color;
                  
                  // Truncate description to 30 words
                  const fullDescription = stripHtml(growth.growthDescription);
                  const truncatedDescription = truncateToWords(fullDescription, 30);
                  
                  return (
                    <div
                      key={growth.growthYear}
                      className={`timeline-slide flex ${rowClass} items-start 2xl:gap-[60px] xl:gap-[60px] lg:gap-[60px] md:gap-[30px] sm:gap-[30px] gap-[20px] 2xl:h-[400px] xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[400px] h-[300px]`}
                      data-color={color}
                    >
                      <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-auto w-auto pt-[40px]">
                        <h3
                          className="year 2xl:text-[20px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[18px] text-[18px] font-denton font-bold leading-[100%] mb-[10px]"
                          style={{ color }}
                        >
                          {growth.growthYear}
                        </h3>
                        <h2 className="2xl:text-[44px] xl:text-[44px] lg:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-denton font-bold text-white leading-[100%]">
                          {growth.companyGrowthTitle}
                        </h2>
                        <div
                          className="text-white font-lato 2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] font-medium 2xl:leading-[39px] xl:leading-[39px] lg:leading-[30px] md:leading-[30px] sm:leading-[25px] leading-[25px] mt-[12px] mb-[30px] max-w-[500px]"
                        >
                          {truncatedDescription}
                        </div>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            openPopup(growth);
                          }}
                          className="font-denton underline hover:no-underline cursor-pointer"
                          style={{ color }}
                        >
                          {readMore.title || "Read more"}
                        </a>
                      </div>
                      {/* <!-- Center Line --> */}
                      <div className="w-[2px] h-full bg-[#D9D9D9] relative">
                        <div
                          className="dot absolute top-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full"
                          style={{ backgroundColor: color }}
                        ></div>
                      </div>
                      <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-auto w-auto"></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <!-- Arrows --> */}
            <div className="absolute right-4 2xl:bottom-0 xl:bottom-0 lg:bottom-0 md:bottom-[-20%] sm:bottom-[-20%] bottom-[-20%] flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-row sm:flex-row flex-row gap-4 -translate-y-1/2 z-10 w-max mx-auto">
              <button
                id="scrollUp"
                className="w-[64px] h-[64px] rounded-full border border-white/50 flex items-center justify-center text-white relative group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="22"
                  viewBox="0 0 11 22"
                  fill="none"
                >
                  
                    <defs>
                      <linearGradient
                        id="arrowGradient"
                        x1="100%"
                        y1="0%"
                        x2="0%"
                        y2="0%"
                      >
                        <stop offset="-10.69%" stopColor="#2C3894" />
                        <stop offset="94.92%" stopColor="#54A3DA" />
                      </linearGradient>
                    </defs>

                    {/* Default white arrow */}
                    <path
                      className="group-hover:opacity-0 transition-opacity duration-300"
                      d="M4.67916 0.913869L4.67839 0.914595L0.484838 5.12847C0.170685 5.44415 0.171854 5.95476 0.48758 6.26899C0.803265 6.58319 1.31387 6.58198 1.62806 6.26629L4.44355 3.4371L4.44355 20.5161C4.44355 20.9615 4.8046 21.3225 5.25 21.3225C5.6954 21.3225 6.05645 20.9615 6.05645 20.5161L6.05645 3.43714L8.87194 6.26625C9.18613 6.58194 9.69674 6.58315 10.0124 6.26895C10.3282 5.95472 10.3293 5.44407 10.0152 5.12843L5.82162 0.914553L5.82085 0.913829C5.50561 0.597981 4.99335 0.59899 4.67916 0.913869Z"
                      fill="white"
                    />

                    {/* Gradient arrow on hover */}
                    <path
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      d="M4.67916 0.913869L4.67839 0.914595L0.484838 5.12847C0.170685 5.44415 0.171854 5.95476 0.48758 6.26899C0.803265 6.58319 1.31387 6.58198 1.62806 6.26629L4.44355 3.4371L4.44355 20.5161C4.44355 20.9615 4.8046 21.3225 5.25 21.3225C5.6954 21.3225 6.05645 20.9615 6.05645 20.5161L6.05645 3.43714L8.87194 6.26625C9.18613 6.58194 9.69674 6.58315 10.0124 6.26895C10.3282 5.95472 10.3293 5.44407 10.0152 5.12843L5.82162 0.914553L5.82085 0.913829C5.50561 0.597981 4.99335 0.59899 4.67916 0.913869Z"
                      fill="url(#arrowGradient)"
                    />
                  </svg>
                </button>
                <button
                  id="scrollDown"
                  className="w-[64px] h-[64px] rounded-full border border-white/50 flex items-center justify-center text-white relative group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="22"
                    viewBox="0 0 11 22"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id="downArrowGradient"
                        x1="100%"
                        y1="0%"
                        x2="0%"
                        y2="0%"
                      >
                        <stop offset="-10.69%" stopColor="#2C3894" />
                        <stop offset="94.92%" stopColor="#54A3DA" />
                      </linearGradient>
                    </defs>

                    {/* Default white arrow */}
                    <path
                      className="group-hover:opacity-0 transition-opacity duration-300"
                      d="M4.67916 21.0861L4.67839 21.0854L0.484838 16.8715C0.170685 16.5558 0.171854 16.0452 0.48758 15.731C0.803265 15.4168 1.31387 15.418 1.62806 15.7337L4.44355 18.5629L4.44355 1.48394C4.44355 1.03854 4.8046 0.67749 5.25 0.67749C5.6954 0.67749 6.05645 1.03854 6.05645 1.48394L6.05645 18.5629L8.87194 15.7337C9.18613 15.4181 9.69674 15.4169 10.0124 15.731C10.3282 16.0453 10.3293 16.5559 10.0152 16.8716L5.82162 21.0854L5.82085 21.0862C5.50561 21.402 4.99335 21.401 4.67916 21.0861Z"
                      fill="white"
                    />

                    {/* Gradient arrow on hover */}
                    <path
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      d="M4.67916 21.0861L4.67839 21.0854L0.484838 16.8715C0.170685 16.5558 0.171854 16.0452 0.48758 15.731C0.803265 15.4168 1.31387 15.418 1.62806 15.7337L4.44355 18.5629L4.44355 1.48394C4.44355 1.03854 4.8046 0.67749 5.25 0.67749C5.6954 0.67749 6.05645 1.03854 6.05645 1.48394L6.05645 18.5629L8.87194 15.7337C9.18613 15.4181 9.69674 15.4169 10.0124 15.731C10.3282 16.0453 10.3293 16.5559 10.0152 16.8716L5.82162 21.0854L5.82085 21.0862C5.50561 21.402 4.99335 21.401 4.67916 21.0861Z"
                      fill="url(#downArrowGradient)"
                    />
                  </svg>
                </button>
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <div 
        key={`popup-${selectedTimeline?.growthYear || 'default'}`}
        className={`fixed inset-0 bg-black/60 flex items-center justify-center z-[999999] ${isPopupOpen ? '' : 'hidden'}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closePopup();
          }
        }}
      >
        <div className="min-h-screen px-4 sm:px-6 md:px-10 flex justify-center items-center">
          <div className="w-full max-w-[1400px] 2xl:py-[80px] xl:py-[80px] lg:py-[60px] md:py-[50px] sm:py-[40px] py-[20px] 2xl:px-[130px] xl:px-[130px] lg:px-[60px] md:px-[50px] sm:px-[40px] px-[30px] bg-[#292929] rounded-[20px] mx-auto max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={closePopup}
              className="absolute lg:top-[40px] lg:right-[40px] top-[20px] right-[5px] z-20 w-[43.84px] h-[43.84px] rounded-full flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M10.9603 10.9601C11.7413 10.1791 12.905 10.0764 13.5594 10.7308L33.1099 30.2813C33.7643 30.9357 33.6617 32.0994 32.8806 32.8804C32.0996 33.6615 30.9359 33.7641 30.2815 33.1098L10.731 13.5592C10.0766 12.9048 10.1792 11.7412 10.9603 10.9601Z" fill="#E72125"></path>
                  <path d="M32.8802 10.9598C33.6613 11.7409 33.7639 12.9045 33.1096 13.5589L13.559 33.1094C12.9046 33.7638 11.741 33.6612 10.9599 32.8801C10.1789 32.0991 10.0762 30.9354 10.7306 30.281L30.2811 10.7305C30.9355 10.0761 32.0992 10.1788 32.8802 10.9598Z" fill="#E72125"></path>
                </g>
              </svg>
            </button>
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-denton font-bold 2xl:text-[66px] xl:text-[66px] lg:text-[60px] md:text-[50px] sm:text-[40px] text-[30px] font-bold leading-[100%] text-center text-white 2xl:mb-[30px] xl:mb-[30px] lg:mb-[20px] md:mb-[20px] sm:mb-[20px] mb-[20px]">
                <span className="text-[#E72125]">{selectedTimeline?.growthYear}</span> - {selectedTimeline?.companyGrowthTitle}
              </h2>
              <div
                className="font-lato font-normal text-white 2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] 2xl:leading-[39px] xl:leading-[39px] lg:leading-[30px] md:leading-[30px] sm:leading-[25px] leading-[25px] text-center 2xl:mb-[60px] xl:mb-[60px] lg:mb-[50px] md:mb-[40px] sm:mb-[30px] mb-[25px]"
                dangerouslySetInnerHTML={{
                  __html: selectedTimeline?.growthDescription || "",
                }}
              />
              <a href="/contact" className="btn-primary bg-gradient-to-b from-[#E72125] to-[#8E1D1D] [background-size:100%_153.5%]">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
