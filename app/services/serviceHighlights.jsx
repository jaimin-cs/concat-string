"use client";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_DISCOVER_OUR_SERVICES } from "@/lib/queries";

const ServiceHighlights = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("Select Services You Want");
  const { loading, error, data } = useQuery(GET_DISCOVER_OUR_SERVICES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading services</div>;

  const servicesData = data?.page?.flexibleContent?.flexibleContent?.find(
    (item) => item.discoverServicesTitle
  );
  const services = servicesData?.ourServicesTechnology?.nodes || [];
  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const selectService = (service, serviceSlug) => {
    setSelected(service);
    setIsOpen(false);
    if (serviceSlug) {
      window.location.href = `/services/${serviceSlug}`;
    }
  };
  return (
    <section className="flex flex-col gap-[60px] items-center justify-center 2xl:pt-[100px] xl:pt-[100px] lg:pt-[80px] md:pt-[80px] sm:pt-[60px] pt-[50px]">
      <div className="max-w-[1432px] px-4 mx-auto  w-full">
        <div className="flex flex-col 2xl:gap-[60px] xl:gap-[60px] lg:gap-[50px] md:gap-[50px] sm:gap-[40px] gap-[30px] items-center justify-center">
          <h3 className="h3 text-center items-center text-white max-w-[970px] 2xl:leading-[80px] xl:leading-[80px] lg:leading-[70px] md:leading-[60px] sm:leading-[50px] leading-[40px] 2xl:text-[70px] xl:text-[70px] lg:text-[60px] md:text-[50px] sm:text-[40px] text-[30px]">
            {servicesData?.discoverServicesTitle ||
              "Discover our services that are vital for us:"}
          </h3>
          <div className="flex flex-col 2xl:gap-[60px] xl:gap-[60px] lg:gap-[50px] md:gap-[50px] sm:gap-[40px] gap-[30px]">
            {services.map((service, index) => {
              const settings = service.technologiesSettings;
              const isEven = index % 2 === 0;
              const bgColor = isEven ? "bg-[#54A3DA4D]" : "bg-[#FF00004D]";
              const webServicesList = settings?.webServicesList?.nodes || [];

              return (
                <div
                  key={index}
                  className={`${bgColor} 2xl:p-[80px] xl:p-[80px] lg:p-[60px] md:p-[50px] sm:p-[40px] p-[30px] rounded-[30px] flex items-center gap-[12px] w-full 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col`}
                >
                  {isEven ? (
                    <>
                      <div className="flex flex-col gap-[24px] items-start 2xl:w-[calc(100%-310px)] xl:w-[calc(100%-310px)] lg:w-[calc(100%-310px)] md:w-[calc(100%-310px)] sm:w-full w-full 2xl:order-1 xl:order-1 lg:order-1 md:order-1 sm:order-2 order-2">
                        <div className="flex flex-col gap-[20px]">
                          <h3 className="h3 text-white text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[66px]">
                            {settings.ourServiceTitle}
                          </h3>
                          <p className="font-lato font-medium text-[18px] leading-[28px] text-white">
                            {settings.ourServiceDescription}
                          </p>
                        </div>
                        <div className="flex flex-row flex-wrap gap-[20px] items-center">
                        {Array.isArray(webServicesList) &&
                          webServicesList.length > 0 && (
                            <div className="relative w-[330px]">
                              <button
                                type="button"
                                onClick={toggleDropdown}
                                aria-haspopup="listbox"
                                aria-expanded={isOpen}
                                className={`cursor-pointer flex items-center justify-between w-full px-[20px] py-[12px] rounded-full text-white text-[17px] font-normal leading-[100%] border border-[#E72125] transition-all duration-300 ${
                                  isOpen ? "bg-[#E72125]" : "bg-[#E72125]/10"
                                }`}
                              >
                                <span id="selected-service">{selected}</span>
                                <svg
                                  className={`w-4 h-4 transition-transform duration-300 ${
                                    isOpen ? "rotate-180" : ""
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </button>

                              {isOpen && Array.isArray(webServicesList) && (
                                <div
                                  className="absolute top-full mt-2 w-full rounded-[10px] bg-[#2B2B2B] text-white z-10 overflow-hidden"
                                  role="listbox"
                                  tabIndex={-1}
                                  aria-label="Services dropdown"
                                >
                                  <div className="p-[20px]">
                                    <ul className="flex flex-col gap-[8px] text-[18px] font-medium text-white">
                                      {webServicesList.map((serviceItem) => (
                                        <li
                                          key={serviceItem.id}
                                          onClick={() =>
                                            selectService(
                                              serviceItem.technologiesSettings
                                                .ourServiceTitle,
                                              serviceItem.slug
                                            )
                                          }
                                          className="hover:text-[#E72125] cursor-pointer transition"
                                          role="option"
                                          aria-selected={
                                            selected ===
                                            serviceItem.technologiesSettings
                                              .ourServiceTitle
                                          }
                                          tabIndex={0}
                                          onKeyDown={(e) => {
                                            if (
                                              e.key === "Enter" ||
                                              e.key === " "
                                            ) {
                                              selectService(
                                                serviceItem.technologiesSettings
                                                  .ourServiceTitle,
                                                serviceItem.slug
                                              );
                                            }
                                          }}
                                        >
                                          {
                                            serviceItem.technologiesSettings
                                              .ourServiceTitle
                                          }
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        <a
                          // href={
                          //   settings.ourServiceLink?.url || "/service-detail"
                          // }
                          href={`/services/${service?.slug}`}
                          className="flex items-center gap-[16px] font-denton text-[18px] leading-[100%] font-bold text-white hover:underline"
                        >
                          Read more
                          <img
                            src={
                              settings.redirectSvg?.node?.sourceUrl ||
                              "./images/gif/progress.gif"
                            }
                            alt={
                              settings.redirectSvg?.node?.altText || "progress"
                            }
                            width="46"
                            height="46"
                          />
                        </a>
                        </div>
                      </div>
                      <div className="flex 2xl:w-[298px] xl:w-[298px] lg:w-[298px] md:w-[298px] sm:w-full w-full 2xl:order-2 xl:order-2 lg:order-2 md:order-2 sm:order-1 order-1">
                        <img
                          src={settings.ourServiceSvg?.node?.sourceUrl}
                          alt={settings.ourServiceSvg?.node?.altText}
                          width="298"
                          height="298"
                          className="2xl:w-[298px] xl:w-[298px] lg:w-[298px] md:w-[298px] sm:w-[200px] w-[200px]"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex 2xl:w-[298px] xl:w-[298px] lg:w-[298px] md:w-[298px] sm:w-full w-full">
                        <img
                          src={settings.ourServiceSvg?.node?.sourceUrl}
                          alt={settings.ourServiceSvg?.node?.altText}
                          width="298"
                          height="298"
                          className="2xl:w-[298px] xl:w-[298px] lg:w-[298px] md:w-[298px] sm:w-[200px] w-[200px]"
                        />
                      </div>
                      <div className="flex flex-col gap-[24px] items-start 2xl:w-[calc(100%-310px)] xl:w-[calc(100%-310px)] lg:w-[calc(100%-310px)] md:w-[calc(100%-310px)] sm:w-full w-full">
                        <div className="flex flex-col gap-[20px]">
                          <h3 className="h3 text-white">
                            {settings.ourServiceTitle}
                          </h3>
                          <p className="font-lato font-medium text-[18px] leading-[28px] text-white">
                            {settings.ourServiceDescription}
                          </p>
                        </div>
                        {Array.isArray(webServicesList) &&
                          webServicesList.length > 0 && (
                            <div className="relative w-[330px]">
                              <button
                                type="button"
                                onClick={toggleDropdown}
                                aria-haspopup="listbox"
                                aria-expanded={isOpen}
                                className={`cursor-pointer flex items-center justify-between w-full px-[20px] py-[12px] rounded-full text-white text-[17px] font-normal leading-[100%] border border-[#E72125] transition-all duration-300 ${
                                  isOpen ? "bg-[#E72125]" : "bg-[#E72125]/10"
                                }`}
                              >
                                <span id="selected-service">{selected}</span>
                                <svg
                                  className={`w-4 h-4 transition-transform duration-300 ${
                                    isOpen ? "rotate-180" : ""
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </button>

                              {isOpen && Array.isArray(webServicesList) && (
                                <div
                                  className="absolute top-full mt-2 w-full rounded-[10px] bg-[#2B2B2B] text-white z-10 overflow-hidden"
                                  role="listbox"
                                  tabIndex={-1}
                                  aria-label="Services dropdown"
                                >
                                  <div className="p-[20px]">
                                    <ul className="flex flex-col gap-[8px] text-[18px] font-medium text-white">
                                      {webServicesList.map((serviceItem) => (
                                        <li
                                          key={serviceItem.id}
                                          onClick={() =>
                                            selectService(
                                              serviceItem.technologiesSettings
                                                .ourServiceTitle,
                                              serviceItem.slug
                                            )
                                          }
                                          className="hover:text-[#E72125] cursor-pointer transition"
                                          role="option"
                                          aria-selected={
                                            selected ===
                                            serviceItem.technologiesSettings
                                              .ourServiceTitle
                                          }
                                          tabIndex={0}
                                          onKeyDown={(e) => {
                                            if (
                                              e.key === "Enter" ||
                                              e.key === " "
                                            ) {
                                              selectService(
                                                serviceItem.technologiesSettings
                                                  .ourServiceTitle,
                                                serviceItem.slug
                                              );
                                            }
                                          }}
                                        >
                                          {
                                            serviceItem.technologiesSettings
                                              .ourServiceTitle
                                          }
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        <a
                          href={`/services/${service?.slug}`}
                          // href={
                          //   settings.ourServiceLink?.url || "/service-detail"
                          // }
                          className="flex items-center gap-[16px] font-denton text-[18px] leading-[100%] font-bold text-white hover:underline"
                        >
                          Read more
                          <img
                            src={
                              settings.redirectSvg?.node?.sourceUrl ||
                              "./images/gif/progress.gif"
                            }
                            alt={
                              settings.redirectSvg?.node?.altText || "progress"
                            }
                            width="46"
                            height="46"
                          />
                        </a>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceHighlights;
