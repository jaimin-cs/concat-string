"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/css/about.css";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_TURNING_VISION_AND_WORKING_METHOD } from "@/lib/queries";

interface VisionSliderProps {
  padding?: string;
}

const VisionSlider: React.FC<VisionSliderProps> = ({ padding }) => {
  const router = useRouter();

  const { data, loading, error } = useQuery(
    GET_TURNING_VISION_AND_WORKING_METHOD
  );

  const visionSection = data?.page?.flexibleContent?.flexibleContent?.find(
    (section: any) => section?.turningVisionTitle
  );

  const turningVisionTitle = visionSection?.turningVisionTitle;
  const projectSilder = visionSection?.projectSilder?.nodes || [];

  const settings = {
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading vision slides.</div>;

  return (
    <section className={`overflow-hidden vision bg-black ${padding}`}>
      <div className="container max-w-[1440px] px-[20px] mx-auto">
        <h2 className="h2 text-white text-center mb-[60px]">
          {turningVisionTitle}
        </h2>
      </div>
      <div className="vision-slider max-w-[980px] mx-auto">
        <div className="slider-container">
          <Slider className="vision-slider" {...settings}>
            {projectSilder
              .filter((slide: any) => slide.projectSettings?.relatedProjectName)
              .map((slide: any, idx: number) => (
                <div className="slide-wrap" key={idx}>
                  <div className="slide">
                    <img
                      src={
                        slide.projectSettings.relatedProjectImage?.node
                          ?.sourceUrl
                      }
                      alt={
                        slide.projectSettings.relatedProjectImage?.node
                          ?.altText || `Slide ${idx + 1}`
                      }
                      width="854"
                      height="463"
                      className="w-full"
                    />
                    <div className="slide-content flex justify-between items-center 2xl:pb-[20px] xl:pb-[20px] lg:pb-[20px] md:pb-0 sm:pb-0 pb-0 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-0 sm:px-0 px-0">
                      <h3 className="font-denton font-semibold 2xl:text-[46px] xl:text-[46px] lg:text-[30px] md:text-[20px] sm:text-[20px] text-[20px] leading-[100%] text-white">
                        {slide.projectSettings.relatedProjectName}
                      </h3>
                      <span className="arrow">
                        <img
                          className="cursor-pointer"
                          src={slide.projectSettings.arrowSvg?.node?.sourceUrl}
                          width="44"
                          height="44"
                          alt={
                            slide.projectSettings.arrowSvg?.node?.altText ||
                            "progress"
                          }
                          onClick={() =>
                            router.push(`/project-detail/${slide?.slug}`)
                          }
                        />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default VisionSlider;
