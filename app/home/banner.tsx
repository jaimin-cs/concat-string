"use client";

import React, { useEffect } from "react";
import "@/css/home.css";
import { useQuery } from "@apollo/client";
import { GET_BANNER_CONTENT } from "@/lib/queries";

const Banner = () => {
  const { data, loading } = useQuery(GET_BANNER_CONTENT);
  const column = data?.page?.flexibleContent?.flexibleContent?.[0]?.column?.[0];
  const title = column?.title;
  const content = column?.content;
  const link = column?.link;

  useEffect(() => {
    // Only trigger animation after content is loaded and not loading
    if (!loading && title && content) {
      const banner = document.querySelector(".banner");
      if (banner) {
        // Small delay to ensure content is rendered
        setTimeout(() => {
          banner.classList.add("active");
        }, 100);
      }
    }
  }, [loading, title, content]);

  if (loading) {
    return (
      <section className="banner relative min-h-screen overflow-hidden">
        <video
          muted
          autoPlay
          loop
          playsInline
          className="absolute top-[42px] left-0 w-full h-full object-cover object-center z-0"
        >
          <source src="/video/banner_background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 max-w-[1432px] px-4 mx-auto pt-[200px] md:pt-[300px] lg:pt-[367px] pb-[200px] px-4 lg:pb-[227px]">
          <div className="text-left px-4 md:px-0">
            {/* <div className="h1 tracking-normal text-white max-w-full md:max-w-[970px] lg:max-w-[1200px] mx-auto md:mx-0">
              Loading...
            </div> */}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="banner relative min-h-screen overflow-hidden">
      <video
        muted
        autoPlay
        loop
        playsInline
        className="absolute top-[42px] left-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/video/banner_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-[1432px] px-4 mx-auto pt-[200px] md:pt-[240px] lg:pt-[267px] pb-[276px] px-4 lg:pb-[227px]">
        <div className="text-left px-4 md:px-0">
          <h1 className="title h1 tracking-normal text-white max-w-full md:max-w-[970px] lg:max-w-[1200px] mx-auto md:mx-0">
            {title}
          </h1>

          <div className="description max-w-full md:max-w-[677px] mb-[30px] md:mb-[60px] mx-auto md:mx-0">
            <p className="font-lato font-medium text-[16px] md:text-[18px] lg:text-[20px] text-white">
              {content}
            </p>
          </div>

          {link && (
            <a href={link.url} className="inline-block group">
              <div className="btn-primary-outline">
                <div className="btn-primary">{link.title}</div>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
