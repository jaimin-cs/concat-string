"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_WHO_WE_ARE } from "@/lib/queries";
import Link from "next/link";

const WhoWeAre = () => {
  const { data, loading, error } = useQuery(GET_WHO_WE_ARE);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading section</div>;

  const whoWeAreData = data?.page?.flexibleContent?.flexibleContent?.find(
    (item: any) => item?.whoWeAreTitle
  );

  const {
    whoWeAreTitle,
    whoWeAreDescription,
    contactUsButton,
    whoWeAreImage1,
    whoWeAreImage2,
    whoWeAreImage3,
    whoWeAreImage4,
    whoWeAreImage5,
    whoWeAreImage6,
  } = whoWeAreData;

  // Dynamic image URLs
  const img1 = whoWeAreImage1?.node?.sourceUrl;
  const img2 = whoWeAreImage2?.node?.sourceUrl;
  const img3 = whoWeAreImage3?.node?.sourceUrl;
  const img4 = whoWeAreImage4?.node?.sourceUrl;
  const img5 = whoWeAreImage5?.node?.sourceUrl;
  const img6 = whoWeAreImage6?.node?.sourceUrl;
  const alt1 = whoWeAreImage1?.node?.altText;
  const alt2 = whoWeAreImage2?.node?.altText;
  const alt3 = whoWeAreImage3?.node?.altText;
  const alt4 = whoWeAreImage4?.node?.altText;
  const alt5 = whoWeAreImage5?.node?.altText;
  const alt6 = whoWeAreImage6?.node?.altText;

  return (
    <section className="who-we-are 2xl:pt-[220px] xl:pt-[200px] lg:pt-[200px] md:pt-[100px] sm:pt-[100px] pt-[100px] 2xl:pb-[220px] xl:pb-[220px] lg:pb-[200px] md:pb-[100px] sm:pb-[100px] pb-[100px]">
      <div className="container max-w-[1432px] mx-auto px-[20px]">
        <div className="relative">
          {/* Absolute images for large screens */}
          {img1 && (
            <img
              src={img1}
              width="180"
              height="180"
              className="absolute top-[-13%] left-[20%] 2xl:w-[180px] xl:w-[150px] lg:w-[100px] 2xl:block xl:block lg:block md:hidden sm:hidden hidden"
              alt={alt1}
            />
          )}
          {img2 && (
            <img
              src={img2}
              width="300"
              height="300"
              className="absolute 2xl:w-[300px] xl:w-[200px] lg:w-[150px] 2xl:block xl:block lg:block md:hidden sm:hidden hidden"
              alt={alt2}
            />
          )}
          {img3 && (
            <img
              src={img3}
              width="240"
              height="240"
              className="absolute 2xl:bottom-[16%] xl:bottom-[50%] lg:bottom-[50%] md:bottom-[16%] 2xl:left-[-2%] xl:left-[3%] lg:left-[0] md:left-[0] 2xl:w-[240px] xl:w-[200px] lg:w-[150px] 2xl:block xl:block lg:block md:hidden sm:hidden hidden"
              alt={alt3}
            />
          )}
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-denton text-white font-semibold leading-[100%] 2xl:text-[86px] xl:text-[80px] lg:text-[70px] md:text-[60px] sm:text-[50px] text-[30px] mb-[16px] text-center">
              {whoWeAreTitle}
            </h2>
            <div
              className="font-lato text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px] leading-[25px] sm:leading-[25px] md:leading-[25px] lg:leading-[25px] xl:leading-[36px] 2xl:leading-[36px] text-[#C3C3C3] font-normal text-center 2xl:max-w-[1012px] xl:max-w-[780px] lg:max-w-[750px] md:max-w-[700px] flex flex-col gap-[36px] "
              dangerouslySetInnerHTML={{ __html: whoWeAreDescription }}
            />
            {contactUsButton && (
              <Link
                href={contactUsButton.url}
                className="rounded-[50px] bg-gradient-to-r from-[#E72125] to-[#8E1D1D] px-[40px] 2xl:py-[20px] xl:py-[20px] lg:py-[20px] md:py-[15px] sm:py-[15px] py-[15px] flex justify-center items-center text-center text-white font-denton font-bold text-[18px] mt-[60px]"
              >
                {contactUsButton.title}
              </Link>
            )}
          </div>
          {img4 && (
            <img
              src={img4}
              width="240"
              height="240"
              className="absolute right-[0%] top-[7%] 2xl:w-[240px] xl:w-[200px] lg:w-[150px] 2xl:block xl:block lg:block md:hidden sm:hidden hidden"
              alt={alt4}
            />
          )}
          {img5 && (
            <img
              src={img5}
              width="300"
              height="300"
              className="absolute 2xl:right-[-3%] xl:right-[0%] lg:right-[0] 2xl:bottom-[2%] xl:bottom-[16%] lg:bottom-[2%] md:bottom-[2%] 2xl:w-[300px] xl:w-[200px] lg:w-[150px] 2xl:block xl:block lg:block md:hidden sm:hidden hidden"
              alt={alt5}
            />
          )}
          {img6 && (
            <img
              src={img6}
              width="180"
              height="180"
              className="absolute 2xl:right-[25%] xl:right-[15%] lg:right-[15%] md:right-[15%] 2xl:bottom-[-2%] xl:bottom-[-2%] lg:bottom-[0] 2xl:w-[180px] xl:w-[150px] lg:w-[100px] 2xl:block xl:block lg:block md:hidden sm:hidden hidden"
              alt={alt6}
            />
          )}
        </div>
        {/* Grid for mobile and tablet */}
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4 px-4 2xl:hidden xl:hidden lg:hidden md:grid sm:grid mt-[60px]">
          {img1 && (
            <div className="translate-y-0 sm:translate-y-4 md:translate-y-4">
              <img src={img1} className="w-full" alt={alt1} />
            </div>
          )}
          {img2 && (
            <div className="-translate-y-0 sm:-translate-y-4 md:-translate-y-4">
              <img src={img2} className="w-full" alt={alt2} />
            </div>
          )}
          {img3 && (
            <div className="translate-y-0 sm:translate-y-4 md:translate-y-4">
              <img src={img3} className="w-full" alt={alt3} />
            </div>
          )}
          {img4 && (
            <div className="translate-y-0 sm:translate-y-4 md:translate-y-4">
              <img src={img4} className="w-full" alt={alt4} />
            </div>
          )}
          {img5 && (
            <div className="-translate-y-0 sm:-translate-y-4 md:-translate-y-4">
              <img src={img5} className="w-full" alt={alt5} />
            </div>
          )}
          {img6 && (
            <div className="translate-y-0 sm:translate-y-4 md:translate-y-4">
              <img src={img6} className="w-full" alt={alt6} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
