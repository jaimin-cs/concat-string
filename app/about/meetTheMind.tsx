"use client";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_MEET_OUR_TEAM } from "@/lib/queries";
import "@/css/teamlisting.css";

const MeetTheMind = () => {
  const { data } = useQuery(GET_MEET_OUR_TEAM);

  // State for popup modal
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  // Find the correct layout block
  const meetOurTeamBlock = data?.page?.flexibleContent?.flexibleContent?.find(
    (block: any) => block?.meetOurTeamTitle
  );

  if (!meetOurTeamBlock) return null;

  const { meetOurTeamTitle, teamMember, meetEveryCsian } = meetOurTeamBlock;

  // Handle opening popup
  const openPopup = (member: any) => {
    setSelectedMember(member);
    setIsPopupOpen(true);
  };

  // Handle closing popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedMember(null);
  };

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <>
      <section className="meet-the-mind bg-black py-[120px]">
        <div className="container max-w-[1440px] px-[20px] mx-auto">
          <div className="flex flex-col items-center justify-center gap-[60px]">
            <h2 className="h2 text-white text-center max-w-[1045px]">
              {meetOurTeamTitle}
            </h2>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-[30px] w-full 2xl:pb-[160px] xl:pb-[160px] lg:pb-0 md:pb-0 sm:pb-0 pb-0">
              {teamMember?.nodes?.map((member: any, idx: number) => (
                <div
                  key={idx}
                  className={`group relative h-[430px] rounded-xl overflow-hidden transition-all duration-500 py-[20px] px-[10px] flex items-end cursor-pointer ${
                    idx % 2 === 1
                      ? "2xl:translate-y-[100px] xl:translate-y-[100px] lg:translate-y-0 md:translate-y-0 sm:translate-y-0 translate-y-0"
                      : "translate-y-0"
                  }`}
                  onClick={() => openPopup(member)}
                >
                  {/* Static Background Image */}
                  <img
                    src={member.teamSetting?.memberImage?.node?.sourceUrl}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 object-top"
                    alt={member.teamSetting?.memberImage?.node?.altText}
                  />

                  {/* GIF on Hover */}
                  <img
                    src={member.teamSetting?.memberGif?.node?.sourceUrl}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 object-top"
                    alt={member.teamSetting?.memberGif?.node?.altText}
                  />

                  {/* Content Area */}
                  <div className="bg-white rounded-[12px] p-[15px] relative w-full z-10 flex items-center gap-[10px]">
                    <span className="bg-gradient-to-b from-[#E72125] to-[#8E1D1D] text-white rounded-[6px] flex items-center justify-center text-[22px] font-denton leading-[100%] p-[10px] w-max">
                      {member.teamSetting?.memberName}
                    </span>
                    <p className="text-[#707070] font-lato text-[15px] leading-[26px] group-hover:text-[17px] transition-all duration-500">
                      {member.teamSetting?.memberShortDesignation ||
                        member.teamSetting?.memberDesignation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {meetEveryCsian?.url && (
              <a href={meetEveryCsian.url} className="group">
                <div className="btn-primary-outline">
                  <div className="btn-primary">{meetEveryCsian.title}</div>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>
      {/* Popup Modal */}
      {isPopupOpen && selectedMember && (
        <div
          className="fixed inset-0 z-50 z-[9999999]"
          onClick={handleBackdropClick}
        >
          {/*  Backdrop with blur effect  */}
          <div
            className="absolute inset-0 bg-black bg-opacity-[0.02] backdrop-blur-[20px] bg-cover"
            style={{
              backgroundImage: `url(${selectedMember?.teamSetting?.memberDetailBackgroundImage?.node?.sourceUrl})`,
            }}
          ></div>

          {/*  Modal Container  */}
          <div className="relative flex items-center justify-center min-h-screen p-[20px]">
            <div className="bg-[#292929] max-h-[calc(100vh-80px)] overflow-y-auto rounded-[20px] shadow-[0px_24px_54px_0px_rgba(0,0,0,0.65)] w-full max-w-[1400px] xl:h-[744px] xl:h-[auto] md:h-auto sm:h-auto h-auto relative overflow-hidden custom-scrollbar">
              {/*  Close Button  */}
              <button
                onClick={closePopup}
                className="absolute xl:top-[40px] xl:right-[40px] top-[20px] right-[20px] z-20 w-[43.84px] h-[43.84px] rounded-full flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M10.9603 10.9601C11.7413 10.1791 12.905 10.0764 13.5594 10.7308L33.1099 30.2813C33.7643 30.9357 33.6617 32.0994 32.8806 32.8804C32.0996 33.6615 30.9359 33.7641 30.2815 33.1098L10.731 13.5592C10.0766 12.9048 10.1792 11.7412 10.9603 10.9601Z"
                      fill="#E72125"
                    />
                    <path
                      d="M32.8802 10.9598C33.6613 11.7409 33.7639 12.9045 33.1096 13.5589L13.559 33.1094C12.9046 33.7638 11.741 33.6612 10.9599 32.8801C10.1789 32.0991 10.0762 30.9354 10.7306 30.281L30.2811 10.7305C30.9355 10.0761 32.0992 10.1788 32.8802 10.9598Z"
                      fill="#E72125"
                    />
                  </g>
                </svg>
              </button>

              {/*  Modal Content  */}
              <div className="flex lg:flex-row flex-col xl:h-[744px] h-auto">
                {/*  Profile Image Section  */}
                <div className="xl:w-[520px] lg:w-[420px] w-full xl:h-[auto] lg:h-[100%] h-[auto] relative xl:p-[100px] xl:pr-[20px] lg:p-[40px] p-[20px] pr-[20px] lg:pr-[0px] rounded-[10px] overflow-hidden">
                  <div className="w-full h-full">
                    <div className="w-full h-full overflow-hidden rounded-[10px]">
                      <img
                        src={
                          selectedMember?.teamSetting?.memberImage?.node
                            ?.sourceUrl
                        }
                        alt={
                          selectedMember?.teamSetting?.memberImage?.node
                            ?.altText
                        }
                        className="w-full h-full object-cover object-top  aspect-[400/470]"
                      />
                    </div>
                  </div>
                </div>

                {/*  Content Section  */}
                <div className="flex-1  lg:p-[100px] lg:p-[100px] md:p-[40px] p-[20px] lg:pl-[40px] xl:pr-[86px]  xl:pt-[100px] lg:pr-[40px]  lg:pt-[60px] md:pr-[40px] lg:pb-[20px] custom-scrollbar xl:max-h-[644px] lg:max-h-[100%] max-h-none">
                  {/*  Vertical Scroll Indicator (Desktop Only)  */}

                  <div className="space-y-6  custom-scrollbar lg:max-h-[544px] max-h-none overflow-y-auto md:pr-[20px] pr-[0px]">
                    {/*  Name and Title  */}
                    <div>
                      <h2 className="font-denton font-bold text-[36px] lg:text-[48px] xl:text-[58px] 2xl:text-[66px] leading-[1.325] text-white mb-4">
                        {selectedMember?.teamSetting?.memberFullName ||
                          selectedMember?.teamSetting?.memberName}
                      </h2>
                      <p className="font-lato text-[27px] text-[#E72125] mb-6">
                        {selectedMember?.teamSetting?.memberDesignation}
                      </p>
                    </div>

                    {/*  Description  */}
                    {selectedMember?.teamSetting?.memberDescription && (
                      <p className="font-lato text-[16px] leading-[1.625] text-[#C3C3C3]">
                        {selectedMember.teamSetting.memberDescription}
                      </p>
                    )}

                    {/*  Details  */}
                    {selectedMember?.teamSetting?.memberInfo && (
                      <div className="space-y-2">
                        {selectedMember.teamSetting.memberInfo.map(
                          (info: any, index: number) => (
                            <p
                              key={index}
                              className="font-lato text-[17px] leading-[1.647] text-[#E9E9E9]"
                            >
                              {info.infoTitle}: {info.infoValue}
                            </p>
                          )
                        )}
                      </div>
                    )}

                    {/*  Social Links  */}
                    {selectedMember?.teamSetting?.socialLinkTitle &&
                      selectedMember?.teamSetting?.socialLink && (
                        <div className="space-y-4">
                          <h4 className="font-denton font-bold text-[22px] leading-[1.273] text-white">
                            {selectedMember.teamSetting.socialLinkTitle}
                          </h4>
                          <div className="flex space-x-4">
                            <a
                              href={selectedMember.teamSetting.socialLink.url}
                              target="_blank"
                              className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center hover:bg-[#E72125] transition-colors duration-300"
                            >
                              {selectedMember.teamSetting.socialSvg && (
                                <img
                                  src={
                                    selectedMember.teamSetting.socialSvg.node
                                      .sourceUrl
                                  }
                                  alt={
                                    selectedMember.teamSetting.socialSvg.node
                                      .altText
                                  }
                                  className="w-[12px] h-[12px]"
                                />
                              )}
                            </a>
                          </div>
                        </div>
                      )}

                    {/*  Experience Section  */}
                    {selectedMember?.teamSetting?.memberExperienceTitle &&
                      selectedMember?.teamSetting
                        ?.memberExperienceDiscription && (
                        <div className="!mt-[50px]">
                          <h3 className="font-denton font-medium text-[40px] leading-[1.325] text-white">
                            {selectedMember.teamSetting.memberExperienceTitle}
                          </h3>
                          <p className="font-lato text-[16px] leading-[1.625] text-[#C3C3C3]">
                            {
                              selectedMember.teamSetting
                                .memberExperienceDiscription
                            }
                          </p>
                        </div>
                      )}

                    {/*  Skills Section  */}
                    {selectedMember?.teamSetting?.profileSkillTitle &&
                      selectedMember?.teamSetting?.skillsDetail &&
                      selectedMember.teamSetting.skillsDetail.length > 0 && (
                        <div className="space-y-6">
                          <h3 className="font-denton font-medium text-[40px] leading-[1.325] text-white">
                            {selectedMember.teamSetting.profileSkillTitle}
                          </h3>

                          {selectedMember.teamSetting.skillsDetail.map(
                            (skill: any, index: number) => (
                              <div key={index} className="relative">
                                <div className="bg-[#D9D9D9] bg-opacity-50 border border-white rounded-[20px] h-[46px] relative overflow-hidden">
                                  <div
                                    className="absolute inset-0 rounded-[50px] h-[38px] top-[4px] left-[4px]"
                                    style={{
                                      background: `linear-gradient(to right, ${skill.skillStartColour}, ${skill.skillEndColour})`,
                                      width: skill.skillPercentage,
                                    }}
                                  ></div>
                                  <div className="absolute inset-0 flex items-center justify-between px-6">
                                    <span className="font-denton font-normal text-[18px] text-white">
                                      {skill.skillTitle}
                                    </span>
                                    <span className="font-denton font-normal text-[18px] text-white">
                                      {skill.skillPercentage}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MeetTheMind;
