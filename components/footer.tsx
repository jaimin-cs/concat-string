"use client";
import "@/css/footer.css";
import { useQuery } from "@apollo/client";
import { GET_FOOTER_MENU } from "@/lib/queries";
import { useState } from "react";
import axios from "axios";

const Footer = () => {
  const { data } = useQuery(GET_FOOTER_MENU);
  const footer = data?.page?.footerSettings;
  
  // Newsletter subscription state
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build the fields object as per WPForms API
    const fields = {
      1: {
        name: "Email Address",
        value: email,
        id: 1,
        type: "email"
      }
    };

    const payload = {
      form_id: 1217,
      fields
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT_URL}/wp-json/custom/v1/submit-form`,
        payload,
        {
          headers: {
            "Content-Type": "application/json"
          },
          timeout: 10000 // 10 second timeout
        }
      );
      setEmail("");
    } catch (error: any) {
      console.error("Newsletter subscription error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <footer className="footer 2xl:px-[110px] xl:px-[100px] lg:px-[80px] md:px-[60px] sm:px-[40px] px-[20px]">
        <div className="mx-auto px-[20px] w-full rounded-[20px] pt-[100px] bg-[radial-gradient(62.87%_106.71%_at_50%_15.94%,_#E72125_0%,_rgba(231,_33,_37,_0)_100%)]">
          <div className="container max-w-[1432px] mx-auto w-full 2xl:pb-[80px] xl:pb-[60px] lg:pb-[50px] md:pb-[40px] sm:pb-[30px] pb-[30px]">
            <div className="flex flex-col items-center justify-center 2xl:gap-[30px] xl:gap-[30px] lg:gap-[30px] md:gap-[25px] sm:gap-[25px] gap-[20px]">
              <h3 className="font-denton font-semibold text-white 2xl:text-[46px] xl:text-[46px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[25px] leading-[100%] text-center">
                {footer?.newsletterTitle}
              </h3>
              <form onSubmit={handleNewsletterSubmit} className="w-full flex flex-col justify-center items-center gap-[20px]">
                <div className="subscribe 2xl:w-[823px] xl:w-[823px] lg:w-[700px] md:w-full sm:w-full w-full">
                  <div className="input flex items-center rounded-full py-[10px] h-full 2xl:w-[823px] xl:w-[823px] lg:w-[700px] leading-[34px] 2xl:px-6 xl:px-6 lg:px-6 md:px-6 sm:px-0 px-0 md:w-full sm:w-full w-full">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      className="flex-grow bg-transparent text-white font-lato font-semibold text-[16px] lg:text-[18px] leading-[36px] px-4 rounded-full focus:outline-none placeholder:text-white"
                    />
                    <button
                      className="group 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <div className="btn-primary-outline">
                        <span className="btn-primary">{isSubmitting ? "Submitting..." : "Submit"}</span>
                      </div>
                    </button>
                  </div>
                </div>
                <button
                  className="group 2xl:w-[823px] xl:w-[823px] lg:w-[700px] md:w-full sm:w-full w-full 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <div className="btn-primary-outline 2xl:w-[823px] xl:w-[823px] lg:w-[700px] md:w-full sm:w-full w-full bg-gradient-to-b from-white to-[#54A3DA]">
                    <span className="btn-primary">{isSubmitting ? "Submitting..." : "Submit"}</span>
                  </div>
                </button>
              </form>
            </div>
            <ul className="flex flex-wrap justify-center items-center 2xl:gap-[46px] xl:gap-[46px] lg:gap-[40px] md:gap-[40px] sm:gap-[30px] gap-[20px] 2xl:pt-[80px] xl:pt-[60px] lg:pt-[50px] md:pt-[40px] sm:pt-[30px] pt-[30px] 2xl:pb-[60px] xl:pb-[60px] lg:pb-[50px] md:pb-[40px] sm:pb-[30px] pb-[30px] border-b border-[#D9D9D9]">
              {footer?.footerPaths?.map(
                (
                  item: { pathLink: { url: string; title: string } },
                  idx: number
                ) => (
                  <li key={idx}>
                    <a
                      href={item.pathLink.url}
                      className="font-denton font-bold 2xl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[20px] sm:text-[18px] text:[18px] leading-[32px] text-white hover:underline"
                    >
                      {item.pathLink.title}
                    </a>
                  </li>
                )
              )}
            </ul>
            <div className="py-[50px] flex flex-wrap flex-col gap-[20px]">
              <h4 className="font-denton font-bold text-[30px] leading-[100%] text-white">
                {footer?.servicesTitle}
              </h4>
              <ul className="flex flex-wrap items-center gap-[20px]">
                {footer?.serviceName?.nodes?.map(
                  (
                    service: {
                      title: string;
                      slug: string;
                    },
                    idx: number
                  ) => (
                    <li key={idx} className="flex items-center gap-[10px]">
                      <span className="bg-[linear-gradient(312.85deg,_#2C3894_11.22%,_#54A3DA_86.03%)] h-[6px] w-[6px] rounded-full"></span>
                      <p className="font-denton font-medium 2xl:text-[20px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[18px] text:[18px] leading-[32px] text-white hover:underline">
                        <a href={`/services/${service?.slug}`}>
                          {service.title}
                        </a>
                      </p>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 2xl:gap-[30px] xl:gap-[30px] lg:gap-[25px] md:gap-[20px] sm:gap-[20px] gap-[20px]">
              <a href={`https://maps.app.goo.gl/2ENUbrW1qMk1FeBj8`}
                    target="_blank"
                    rel="noopener noreferrer" className="p-[1px] rounded-[12px] bg-[linear-gradient(180deg,_#54A3DA_0%,_#E72125_100%)] h-full group hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.26),0_24px_124px_rgba(231,33,37,0.22)]">
                <div className="flex items-center bg-[#2B2B2B] rounded-[12px] h-full gap-[15px] w-full 2xl:py-[24px] xl:py-[24px] lg:py-[24px] md:py-[20px] sm:py-[20px] py-[20px] 2xl:px-[30px] xl:px-[30px] lg:px-[24px] md:px-[20px] sm:px-[20px] px-[20px]">
                  <span className="icon w-[50px] h-[50px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="51"
                      viewBox="0 0 50 51"
                      fill="none"
                    >
                      <circle cx="25" cy="25.8359" r="25" fill="white" />
                      <path
                        d="M25 14.8359C20.59 14.8359 17 18.3893 17 22.7593C17 26.7293 21.1467 31.2659 23.62 33.6159C24.0067 33.9826 24.5033 34.1693 25 34.1693C25.4967 34.1693 25.9933 33.9859 26.38 33.6159C28.8533 31.2659 33 26.7293 33 22.7593C33 18.3893 29.41 14.8359 25 14.8359ZM25 27.1693C22.61 27.1693 20.6667 25.2259 20.6667 22.8359C20.6667 20.4459 22.61 18.5026 25 18.5026C27.39 18.5026 29.3333 20.4459 29.3333 22.8359C29.3333 25.2259 27.39 27.1693 25 27.1693Z"
                        fill="url(#paint0_linear_985_6626)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_985_6626"
                          x1="23.9957"
                          y1="19.5732"
                          x2="23.9957"
                          y2="34.1693"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.037" stopColor="#DA2124" />
                          <stop offset="1" stopColor="#8E1D1D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span
                    
                    className="font-lato text-white font-normal text-[16px] leading-[24px] max-w-[calc(100%-65px)] cursor-pointer group-hover:text-[#E72125]"
                  >
                    {footer?.companyAddress}
                    
                  </span>
                </div>
              </a>
              <a href={`tel:${footer?.companyNumber}`} className="p-[1px] rounded-[12px] bg-[linear-gradient(180deg,_#54A3DA_0%,_#E72125_100%)] h-full group hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.26),0_24px_124px_rgba(231,33,37,0.22)]">
                <div className="flex items-center bg-[#2B2B2B] rounded-[12px] h-full gap-[15px] w-full 2xl:py-[24px] xl:py-[24px] lg:py-[24px] md:py-[20px] sm:py-[20px] py-[20px] 2xl:px-[30px] xl:px-[30px] lg:px-[24px] md:px-[20px] sm:px-[20px] px-[20px]">
                  <span className="icon w-[50px] h-[50px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                    >
                      <circle cx="25.667" cy="25.8359" r="25" fill="white" />
                      <path
                        d="M34.6537 30.6448C34.617 30.3387 34.5104 30.0452 34.3422 29.7868C34.174 29.5285 33.9487 29.3122 33.6837 29.1548L31.2771 27.7114C30.8896 27.4785 30.4353 27.3818 29.9865 27.4368C29.5377 27.4917 29.1202 27.6952 28.8004 28.0148C28.2104 28.6048 27.3137 28.7181 26.6204 28.2948C25.9737 27.9014 25.3171 27.3781 24.7237 26.7814C24.1304 26.1848 23.6037 25.5281 23.2104 24.8848C22.7871 24.1914 22.9004 23.2948 23.4904 22.7048C23.8106 22.3853 24.0146 21.9678 24.0695 21.5188C24.1245 21.0698 24.0274 20.6154 23.7937 20.2281L22.3504 17.8214C22.0271 17.2814 21.4837 16.9281 20.8604 16.8514C20.2371 16.7748 19.6237 16.9848 19.1804 17.4314L17.3637 19.2481C16.8504 19.7614 16.5971 20.4881 16.6837 21.1914C17.0671 24.2748 18.7771 27.5314 21.3737 30.1281C23.9704 32.7248 27.2304 34.4348 30.3137 34.8181C30.4037 34.8281 30.4971 34.8348 30.5904 34.8348C31.2162 34.832 31.8155 34.5816 32.2571 34.1381L34.0737 32.3214C34.2923 32.1043 34.4582 31.84 34.5588 31.5488C34.6593 31.2576 34.6918 30.9472 34.6537 30.6414V30.6448Z"
                        fill="url(#paint0_linear_985_6634)"
                      />
                      <path
                        d="M26.8467 20.5278C26.6776 20.4856 26.4987 20.5113 26.3483 20.5992C26.1978 20.6872 26.0878 20.8305 26.0416 20.9986C25.9955 21.1667 26.0169 21.3461 26.1013 21.4986C26.1857 21.651 26.3265 21.7644 26.4934 21.8145C27.8801 22.1978 28.9801 23.2978 29.3601 24.6812C29.4401 24.9778 29.7101 25.1712 30.0034 25.1712C30.0634 25.1712 30.1234 25.1645 30.1801 25.1478C30.3503 25.1003 30.4948 24.9875 30.5822 24.8339C30.6696 24.6803 30.6928 24.4984 30.6467 24.3278C30.1401 22.4912 28.6834 21.0378 26.8467 20.5278ZM26.5634 18.4978C28.0971 18.7414 29.5145 19.4639 30.6126 20.562C31.7107 21.6601 32.4332 23.0775 32.6767 24.6112C32.7301 24.9378 33.0134 25.1712 33.3334 25.1712C33.3667 25.1712 33.4034 25.1712 33.4401 25.1612C33.8034 25.1045 34.0501 24.7612 33.9934 24.3978C33.7061 22.5864 32.8528 20.9123 31.5559 19.6153C30.259 18.3184 28.5849 17.4652 26.7734 17.1778C26.4067 17.1178 26.0667 17.3678 26.0101 17.7312C25.9534 18.0945 26.2001 18.4378 26.5634 18.4945V18.4978Z"
                        fill="url(#paint1_linear_985_6634)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_985_6634"
                          x1="24.5381"
                          y1="21.2462"
                          x2="24.5381"
                          y2="34.8348"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.037" stopColor="#DA2124" />
                          <stop offset="1" stopColor="#8E1D1D" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_985_6634"
                          x1="29.4996"
                          y1="19.1298"
                          x2="29.4996"
                          y2="25.1712"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.037" stopColor="#DA2124" />
                          <stop offset="1" stopColor="#8E1D1D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span
                    
                    className="font-lato text-white font-normal text-[16px] leading-[24px] max-w-[calc(100%-65px)] group-hover:text-[#E72125]"
                  >
                    {footer?.companyNumber}
                  </span>
                </div>
              </a>
              <a href={`mailto:${footer?.companyEmail}`} className="p-[1px] rounded-[12px] bg-[linear-gradient(180deg,_#54A3DA_0%,_#E72125_100%)] h-full group hover:shadow-[inset_0_0_16px_rgba(255,255,255,0.26),0_24px_124px_rgba(231,33,37,0.22)]">
                <div className="flex items-center bg-[#2B2B2B] rounded-[12px] h-full gap-[15px] w-full 2xl:py-[24px] xl:py-[24px] lg:py-[24px] md:py-[20px] sm:py-[20px] py-[20px] 2xl:px-[30px] xl:px-[30px] lg:px-[24px] md:px-[20px] sm:px-[20px] px-[20px]">
                  <span className="icon w-[50px] h-[50px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                    >
                      <circle cx="25.3335" cy="25.8359" r="25" fill="white" />
                      <path
                        d="M32.0002 17.8359H18.6668C16.8302 17.8359 15.3335 19.3326 15.3335 21.1693V31.1693C15.3335 33.0059 16.8302 34.5026 18.6668 34.5026H32.0002C33.8368 34.5026 35.3335 33.0059 35.3335 31.1693V21.1693C35.3335 19.3326 33.8368 17.8359 32.0002 17.8359ZM32.0568 22.7093L27.1468 26.2393C26.5968 26.6359 25.9635 26.8326 25.3335 26.8326C24.7035 26.8326 24.0702 26.6359 23.5202 26.2393L18.6102 22.7093C18.5368 22.6592 18.4741 22.5949 18.4259 22.5203C18.3777 22.4457 18.3449 22.3622 18.3295 22.2747C18.314 22.1872 18.3162 22.0975 18.3358 22.0108C18.3555 21.9242 18.3924 21.8424 18.4441 21.7702C18.4959 21.698 18.5616 21.6368 18.6373 21.5904C18.713 21.5439 18.7973 21.513 18.8851 21.4996C18.9729 21.4862 19.0626 21.4904 19.1487 21.5121C19.2349 21.5338 19.3158 21.5725 19.3868 21.6259L24.2968 25.1559C24.9335 25.6159 25.7268 25.6159 26.3668 25.1559L31.2768 21.6259C31.5768 21.4093 31.9935 21.4793 32.2068 21.7793C32.4202 22.0793 32.3535 22.4959 32.0535 22.7093H32.0568Z"
                        fill="url(#paint0_linear_985_6643)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_985_6643"
                          x1="24.0781"
                          y1="21.9198"
                          x2="24.0781"
                          y2="34.5026"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.037" stopColor="#DA2124" />
                          <stop offset="1" stopColor="#8E1D1D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span
                    
                    className="font-lato text-white font-normal text-[16px] leading-[24px] max-w-[calc(100%-65px)] break-all group-hover:text-[#E72125]"
                  >
                    {footer?.companyEmail}
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="border-t border-transparent copy-right">
            <div className="container max-w-[1420px] px-[20] py-[8px] mx-auto w-full">
              <div className="flex justify-between items-center gap-[10px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">
                <span
                  className="font-lato font-normal text-white text-[18px] leading-[32px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center"
                  dangerouslySetInnerHTML={{
                    __html: footer?.rightsTitle || "",
                  }}
                />
                <ul className="flex items-center gap-[5px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">
                  <li>
                    <a
                      href={footer?.termsLink?.url}
                      className="font-lato font-normal text-[18px] leading-[32px] text-white hover:underline"
                    >
                      {footer?.termsLink?.title}
                    </a>
                  </li>
                  <li>
                    <span className="font-lato font-normal text-[18px] leading-[32px] text-white 2xl:block xl:block lg:block md:block sm:block hidden">
                      |
                    </span>
                  </li>
                  <li>
                    <a
                      href={footer?.privacyLink?.url}
                      className="font-lato font-normal text-[18px] leading-[32px] text-white hover:underline"
                    >
                      {footer?.privacyLink?.title}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full h-[16px] bg-[linear-gradient(180deg,_#E72125_0%,_#811215_100%)]"></div>
    </>
  );
};

export default Footer;
