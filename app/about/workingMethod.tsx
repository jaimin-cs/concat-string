"use client";
import React, { useEffect, useRef } from "react";
import { useQuery } from "@apollo/client";
import { GET_WORKING_METHOD } from "@/lib/queries";

const WorkingMethod = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const scrollPanelRef = useRef<HTMLDivElement | null>(null);

  const { data } = useQuery(GET_WORKING_METHOD);

  const workingMethodData = data?.page?.flexibleContent?.flexibleContent?.find(
    (item: any) => item.workingMethodTitle
  );

  const {
    workingDescription,
    workingMethodTitle,
    contactUsButton,
    workingCycle = [],
  } = workingMethodData || {};

  useEffect(() => {
    const path = pathRef.current;
    const scrollContainer = scrollPanelRef.current;
    if (!path) {
      console.warn("Vector pathRef is not set");
      return;
    }
    if (!scrollContainer) {
      console.warn("Scroll panel ref is not set");
      return;
    }
    const totalLength = path.getTotalLength();
    (path.style as any).strokeDasharray = totalLength;
    (path.style as any).strokeDashoffset = totalLength;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight =
        scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const scrollProgress = scrollTop / scrollHeight;
      const drawLength = totalLength * scrollProgress;
      (path.style as any).strokeDashoffset = totalLength - drawLength;
    };
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  // Add Roman numeral SVGs for dynamic mapping
  const romanNumeralSVGs = [
    // I
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="15"
      viewBox="0 0 8 15"
      fill="none"
    >
      <path
        d="M0.31543 14.5449V12.5571H3.07268V2.53271H0.31543V0.544922H7.86047V2.53271H5.29558V12.5571H7.86047V14.5449H0.31543Z"
        fill="#E72125"
      />
    </svg>,
    // II
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="15"
      viewBox="0 0 19 15"
      fill="none"
    >
      <path
        d="M0.0878906 14.5449V12.5571H2.84514V2.53271H0.0878906V0.544922H7.63293V2.53271H5.06804V12.5571H7.63293V14.5449H0.0878906Z"
        fill="#E72125"
      />
      <path
        d="M10.7749 14.5449V12.5571H13.5322V2.53271H10.7749V0.544922H18.32V2.53271H15.7551V12.5571H18.32V14.5449H10.7749Z"
        fill="#E72125"
      />
    </svg>,
    // III
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="15"
      viewBox="0 0 29 15"
      fill="none"
    >
      <path
        d="M0.0878906 14.5449V12.5571H2.84514V2.53271H0.0878906V0.544922H7.63293V2.53271H5.06804V12.5571H7.63293V14.5449H0.0878906Z"
        fill="#E72125"
      />
      <path
        d="M10.7749 14.5449V12.5571H13.5322V2.53271H10.7749V0.544922H18.32V2.53271H15.7551V12.5571H18.32V14.5449H10.7749Z"
        fill="#E72125"
      />
      <path
        d="M21.4619 14.5449V12.5571H24.2192V2.53271H21.4619V0.544922H29.007V2.53271H26.4421V12.5571H29.007V14.5449H21.4619Z"
        fill="#E72125"
      />
    </svg>,
    // IV
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="15"
      viewBox="0 0 21 15"
      fill="none"
    >
      <path
        d="M0.503418 14.5469V12.5591H3.26067V2.53466H0.503418V0.546875H8.04846V2.53466H5.48357V12.5591H8.04846V14.5469H0.503418Z"
        fill="#E72125"
      />
      <path
        d="M12.9645 14.5469L9.86525 0.546875H12.2164L14.8454 12.5591H15.2943L17.8164 0.546875H20.1034L17.111 14.5469H12.9645Z"
        fill="#E72125"
      />
    </svg>,
    // V
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="15"
      viewBox="0 0 11 15"
      fill="none"
    >
      <path
        d="M3.48351 14.0176L0.384277 0.0175781H2.73542L5.36443 12.0298H5.81328L8.33542 0.0175781H10.6224L7.63008 14.0176H3.48351Z"
        fill="#E72125"
      />
    </svg>,
  ];

  return (
    <section className="working-method bg-black pt-[170px] 2xl:pb-[187px] xl:pb-[187px] lg:pb-[180px] md:pb-0 sm:pb-0 pb-0">
      <div className="container max-w-[1439px] px-[20px] mx-auto">
        <div className="relative working-method-wrap flex 2xl:gap-[130px] xl:gap-[130px] lg:gap-[30px] md:gap-[30px] sm:gap-[30px] gap-[30px] items-start 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col">
         <svg
            className="vector-path absolute top-[7%] left-[5%] h-[923px] z-0 pointer-events-none 2xl:block xl:block lg:hidden md:hidden sm:hidden hidden w-[50%]"
            xmlns="http://www.w3.org/2000/svg"
            width="684"
            height="726"
            viewBox="0 0 684 726"
            fill="none"
          >
            <path
              ref={pathRef}
              id="method-path"
              d="M678.505 2.80078C678.505 4.27354 679.699 5.46745 681.171 5.46745C682.644 5.46745 683.838 4.27354 683.838 2.80078C683.838 1.32802 682.644 0.134115 681.171 0.134115C679.699 0.134115 678.505 1.32802 678.505 2.80078ZM579.675 104.297H579.175H579.675ZM556.56 583.398L556.234 583.018L556.56 583.398ZM123.313 691.756L123.629 691.37L123.313 691.756ZM681.171 2.80078C680.967 2.34443 680.966 2.34465 680.966 2.34504C680.965 2.3454 680.964 2.34597 680.962 2.34669C680.959 2.34814 680.954 2.35028 680.948 2.35311C680.935 2.35876 680.916 2.36717 680.892 2.37833C680.842 2.40064 680.769 2.43391 680.672 2.47802C680.479 2.56624 680.193 2.69779 679.82 2.87161C679.074 3.21925 677.982 3.73599 676.591 4.41332C673.81 5.76796 669.84 7.76514 665.075 10.3368C655.547 15.4796 642.84 22.923 630.13 32.1233C617.423 41.3215 604.695 52.2882 595.14 64.4816C585.587 76.6728 579.175 90.1297 579.175 104.297H579.675H580.175C580.175 90.4367 586.45 77.1929 595.927 65.0984C605.403 53.0062 618.05 42.1022 630.716 32.9333C643.38 23.7664 656.047 16.346 665.55 11.2168C670.301 8.65257 674.259 6.66171 677.029 5.31232C678.414 4.63763 679.502 4.12335 680.243 3.77798C680.613 3.60529 680.897 3.47484 681.088 3.38767C681.183 3.34409 681.255 3.31133 681.304 3.28953C681.328 3.27863 681.346 3.27047 681.358 3.26506C681.364 3.26236 681.368 3.26035 681.371 3.25903C681.373 3.25836 681.374 3.25789 681.375 3.25756C681.375 3.25726 681.376 3.25713 681.171 2.80078ZM579.675 104.297H579.175C579.175 118.495 585.615 128.474 595.218 136.308C604.794 144.122 617.548 149.828 630.219 155.501C642.922 161.189 655.543 166.843 664.996 174.556C674.424 182.249 680.671 191.963 680.671 205.793H681.171H681.671C681.671 191.595 675.231 181.616 665.629 173.781C656.052 165.968 643.298 160.262 630.628 154.589C617.924 148.901 605.304 143.247 595.85 135.534C586.422 127.841 580.175 118.127 580.175 104.297H579.675ZM681.171 205.793H680.671C680.671 219.623 674.424 229.338 664.996 237.03C655.543 244.743 642.922 250.397 630.219 256.085C617.548 261.758 604.794 267.464 595.218 275.278C585.615 283.113 579.175 293.092 579.175 307.289H579.675H580.175C580.175 293.46 586.422 283.745 595.85 276.053C605.304 268.339 617.924 262.685 630.628 256.998C643.298 251.325 656.052 245.618 665.629 237.805C675.231 229.97 681.671 219.991 681.671 205.793H681.171ZM579.675 307.289H579.175C579.175 321.487 585.615 331.466 595.218 339.301C604.794 347.115 617.548 352.821 630.219 358.494C642.922 364.181 655.543 369.835 664.996 377.549C674.424 385.241 680.671 394.956 680.671 408.786H681.171H681.671C681.671 394.588 675.231 384.609 665.629 376.774C656.052 368.96 643.298 363.254 630.628 357.581C617.924 351.894 605.304 346.24 595.85 338.526C586.422 330.834 580.175 321.119 580.175 307.289H579.675ZM681.171 408.786H680.671C680.671 422.686 675.578 438.239 667.234 454.347C658.893 470.45 647.322 487.07 634.415 503.093C608.6 535.14 577.471 564.758 556.234 583.018L556.56 583.398L556.886 583.777C578.152 565.49 609.329 535.829 635.194 503.721C648.126 487.666 659.739 470.989 668.122 454.807C676.501 438.632 681.671 422.913 681.671 408.786H681.171ZM556.56 583.398L556.234 583.018C503.894 628.026 422.368 676.967 340.584 703.716C258.765 730.477 176.876 734.968 123.629 691.37L123.313 691.756L122.996 692.143C176.666 736.088 259.013 731.448 340.895 704.667C422.811 677.875 504.452 628.865 556.886 583.777L556.56 583.398ZM123.313 691.756L123.629 691.37C70.5564 647.913 39.9271 585.837 22.5663 534.588C13.8876 508.968 8.52884 486.066 5.34002 469.571C3.74566 461.323 2.6939 454.678 2.04086 450.096C1.71435 447.805 1.48752 446.029 1.3424 444.828C1.26985 444.227 1.21771 443.77 1.18376 443.463C1.16678 443.309 1.15435 443.193 1.14618 443.116C1.1421 443.078 1.13908 443.049 1.13709 443.029C1.1361 443.02 1.13536 443.013 1.13488 443.008C1.13464 443.006 1.13447 443.004 1.13435 443.003C1.13424 443.002 1.13419 443.001 0.636719 443.051C0.13925 443.102 0.139327 443.102 0.139466 443.104C0.139597 443.105 0.139799 443.107 0.14006 443.11C0.140583 443.115 0.141359 443.122 0.142393 443.132C0.144461 443.152 0.147562 443.182 0.15173 443.221C0.160065 443.3 0.17267 443.418 0.189826 443.573C0.224137 443.883 0.276651 444.343 0.349618 444.948C0.495551 446.156 0.723299 447.938 1.05087 450.237C1.70599 454.834 2.76042 461.495 4.3582 469.761C7.55364 486.291 12.9229 509.237 21.6192 534.909C39.0084 586.242 69.7171 648.518 122.996 692.143L123.313 691.756Z"
              stroke="#54A3DA"
              strokeWidth="3"
              fill="none"
            />
          </svg> 

          
          <div className="relative flex flex-col gap-[60px] items-start 2xl:w-[50%] xl:w-[50%] lg:w-full md:w-full sm:w-full w-full">
            <div className="flex flex-col gap-[16px]">
              <h2 className="h2 text-white">{workingMethodTitle}</h2>
              <p className="font-lato font-normal text-[18px] leading-[28px] text-[#C3C3C3]">
                {workingDescription}
              </p>
            </div>
            {contactUsButton?.url && (
              <a href={contactUsButton.url} className="group w-max">
                <div className="btn-primary-outline w-max">
                  <div className="btn-primary">{contactUsButton.title}</div>
                </div>
              </a>
            )}
          </div>
          <div
            ref={scrollPanelRef}
            id="scroll-panel"
            className="relative 2xl:w-[50%] xl:w-[50%] lg:w-full md:w-full sm:w-full w-full max-h-[620px] overflow-y-auto custom-scrollbar"
          >
            <div className="flex flex-col gap-[10px] me-[5px]">
              {workingCycle.map((step: any, idx: number) => (
                <div
                  key={idx}
                  className={`flex flex-col items-start gap-[6px] py-[36px]${
                    idx !== workingCycle.length - 1
                      ? " border-b border-b-[#D9D9D9]"
                      : ""
                  }`}
                >
                  <span className="h-[34px] w-max p-[10px] rounded-[6px] bg-[#E72125]/10">
                    {romanNumeralSVGs[idx]}
                  </span>
                  <h4 className="h4 text-white font-bold">{step.workingCycleTitle}</h4>
                  <p className="font-lato text-white text-[16px] leading-[26px] font-medium">
                    {step.workingCycleDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-0 right-0 2xl:w-[50%] xl:w-[50%] lg:w-full md:w-full sm:w-full w-full h-[60px] bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default WorkingMethod;
