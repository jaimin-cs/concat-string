"use client";

import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_TRUSTED_BRANDS } from "@/lib/queries";
import "@/css/home.css";

interface TrustSliderProps {
  mainClass?: string;
}

const Trusted: React.FC<TrustSliderProps> = ({
  mainClass
}) => {
  const { data } = useQuery(GET_TRUSTED_BRANDS);

  useEffect(() => {
    const trustedSection = document.querySelector(
      ".trusted-section"
    ) as HTMLElement | null;
    const checkTrustedSection = () => {
      if (!trustedSection) return;
      const rect = trustedSection.getBoundingClientRect();
      if (rect.top <= 200 && !trustedSection.classList.contains("active")) {
        trustedSection.classList.add("active");
        window.removeEventListener("scroll", checkTrustedSection);
      }
    };

    window.addEventListener("scroll", checkTrustedSection);
    setTimeout(() => {
      checkTrustedSection();
    }, 2000);

    return () => window.removeEventListener("scroll", checkTrustedSection);
  }, []);

  const brandGroup = data?.page?.flexibleContent?.flexibleContent?.find(
    (block: any) => block?.trustedTitle
  );

  const images = brandGroup?.brandsImages?.map((img: any) => img?.brandImage?.node) || [];
    
  const classNames = [
    "absolute top-[14.53vw] right-[36.3vw] w-[3.8vw] animate-2",
    "absolute top-[7.97vw] left-[23.13vw] w-[14.43vw] animate-1",
    "absolute bottom-[14.22vw] right-[45.26vw] w-[12.55vw] animate-1",
    "absolute bottom-[7.97vw] right-[29.22vw] w-[12.55vw] animate-1",
    "absolute top-[27.19vw] right-[7.81vw] w-[12.55vw] animate-3",
    "absolute top-[13.85vw] right-[10.94vw] w-[12.55vw] animate-1",
    "absolute bottom-[15.05vw] right-[21.51vw] w-[12.55vw] animate-3",
    "absolute bottom-[8.65vw] left-[23.18vw] w-[12.55vw] animate-3",
    "absolute bottom-[17.76vw] left-[19.53vw] w-[3.33vw] animate-3",
    "absolute top-[23.91vw] left-[7.81vw] w-[12.55vw] animate-3",
    "absolute top-[11.67vw] left-[42.08vw] w-[12.55vw] animate-3",
  ];

  return (
    <section className="trusted-section relative py-[7.97vw]">
      <div className="max-w-[1632px] mx-auto px-4">
        <h2 className="text-[4.17vw] mx-auto pt-[14.43vw] pb-[15.57vw] h2 tracking-normal text-center text-white max-w-[60.94vw]">
          {brandGroup?.trustedTitle}
        </h2>
        <div className="icon-box absolute top-0 left-0 w-full h-full">
          {images.map((img: any, idx: number) =>
            img ? (
              <img
                key={idx}
                src={img.sourceUrl}
                alt={img.altText || "brand"}
                className={classNames[idx]}
              />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
