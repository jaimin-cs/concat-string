"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_TEAM_LISTING } from "@/lib/queries";
import "@/css/teamlisting.css";

interface TeamMember {
  teamSetting: {
    memberName: string;
    memberShortDesignation: string | null;
    memberImage: {
      node: {
        altText: string;
        sourceUrl: string;
      };
    };
    memberGif: {
      node: {
        altText: string;
        sourceUrl: string;
      };
    };
    memberFullName: string | null;
    memberDesignation: string;
    memberDescription: string | null;
    memberInfo: Array<{
      infoTitle: string;
      infoValue: string;
    }> | null;
    socialLinkTitle: string | null;
    socialLink: {
      title: string;
      url: string;
    } | null;
    socialSvg: {
      node: {
        altText: string;
        sourceUrl: string;
      };
    } | null;
    memberExperienceTitle: string | null;
    memberExperienceDiscription: string | null;
    profileSkillTitle: string | null;
    skillsDetail: Array<{
      skillEndColour: string;
      skillPercentage: string;
      skillStartColour: string;
      skillTitle: string;
    }> | null;
    memberDetailBackgroundImage: {
      node: {
        altText: string;
        sourceUrl: string;
      };
    } | null;
  };
}

interface TeamGroup {
  teamGroupTitle: string;
  teamMember: {
    nodes: TeamMember[];
  };
}

const TeamSection: React.FC = () => {
  const { data: teamListingData, loading, error } = useQuery(GET_TEAM_LISTING);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const teamListingLayout =
    teamListingData?.page?.flexibleContent?.flexibleContent?.find(
      (item: any) => item?.teamListTitle
    );

  // Get "The Vision Architects" group (first group)
  const visionArchitectsGroup = teamListingLayout?.teamGroup?.[0];

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsPopupOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = "auto";
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isPopupOpen) {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isPopupOpen]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        Loading team data...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center min-h-[400px] text-red-500">
        <div className="text-center">
          <div>Error loading team data</div>
          <div className="text-sm mt-2">{error.message}</div>
        </div>
      </div>
    );
  if (!visionArchitectsGroup)
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        No team data available
      </div>
    );

  return (
    <>
      <section className="meet-the-mind bg-black py-[50px] sm:py-[60px] md:py-[80px] lg:py-[120px] lg:pt-[100px]">
        <div className="container max-w-[1640px] px-[10px] sm:px-[20px] mx-auto">
          <div className="flex flex-col items-center justify-center gap-[30px] sm:gap-[40px] md:gap-[60px] bg-[rgba(231,33,37,0.2)] rounded-[14px] p-[16px] sm:p-[40px] md:p-[60px] lg:p-[100px]">
            <h3 className="h3 text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[58px] 2xl:text-[66px] font-bold leading-[28px] sm:leading-[35px] md:leading-[45px] lg:leading-[60px] xl:leading-[75px] 2xl:leading-[87px] font-denton text-white text-center max-w-[1045px]">
              {visionArchitectsGroup.teamGroupTitle}
            </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[16px] sm:gap-[24px] md:gap-[30px] w-full 2xl:pb-[100px] xl:pb-[100px] lg:pb-0 md:pb-0 sm:pb-0 pb-0">
              {visionArchitectsGroup.teamMember?.nodes?.map(
                (member: TeamMember, memberIndex: number) => (
                  <div
                    key={memberIndex}
                    className="group relative aspect-[447/587] rounded-xl overflow-hidden transition-all duration-500 py-[15px] sm:py-[15px] md:py-[20px] px-[15px] sm:px-[15px] md:px-[15px] flex items-end cursor-pointer translate-y-0"
                    onClick={() => handleMemberClick(member)}
                  >
                    {/*  Static Background Image  */}
                    <img
                      src={member.teamSetting.memberImage?.node?.sourceUrl}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 object-top"
                      alt={member.teamSetting.memberImage?.node?.altText}
                    />
                    {/*  GIF on Hover  */}
                    <img
                      src={member.teamSetting.memberGif?.node?.sourceUrl}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      alt={member.teamSetting.memberGif?.node?.altText}
                    />
                    {/*  Content Area  */}
                    <div className="bg-white rounded-[12px] p-[8px] sm:p-[12px] md:p-[15px] relative w-full z-10 flex items-center gap-[6px] sm:gap-[10px]">
                      <span className="bg-gradient-to-b from-[#E72125] to-[#8E1D1D] text-white rounded-[6px] flex items-center justify-center text-[16px] sm:text-[18px] md:text-[22px] font-denton leading-[100%] p-[8px] sm:p-[10px] w-max">
                        {member.teamSetting.memberName}
                      </span>
                      <p className="text-[#707070] font-lato text-[12px] sm:text-[14px] md:text-[15px] leading-[18px] sm:leading-[22px] md:leading-[26px] group-hover:text-[13px] sm:group-hover:text-[15px] md:group-hover:text-[17px] transition-all duration-500">
                        {member.teamSetting.memberShortDesignation ||
                          member.teamSetting.memberDesignation}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
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
              backgroundImage: `url(${
                selectedMember?.teamSetting.memberDetailBackgroundImage?.node
                  ?.sourceUrl ||
                visionArchitectsGroup.memberDetailBackgroundImage?.node
                  ?.sourceUrl
              })`,
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
                          selectedMember?.teamSetting.memberImage?.node
                            ?.sourceUrl
                        }
                        alt={
                          selectedMember?.teamSetting.memberImage?.node?.altText
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
                        {selectedMember?.teamSetting.memberFullName ||
                          selectedMember?.teamSetting.memberName}
                      </h2>
                      <p className="font-lato text-[27px] text-[#E72125] mb-6">
                        {selectedMember?.teamSetting.memberDesignation}
                      </p>
                    </div>

                    {/*  Description  */}
                    {selectedMember?.teamSetting.memberDescription && (
                      <p className="font-lato text-[16px] leading-[1.625] text-[#C3C3C3]">
                        {selectedMember.teamSetting.memberDescription}
                      </p>
                    )}

                    {/*  Details  */}
                    {selectedMember?.teamSetting.memberInfo && (
                      <div className="space-y-2">
                        {selectedMember.teamSetting.memberInfo.map(
                          (info, index) => (
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
                    {selectedMember?.teamSetting.socialLinkTitle &&
                      selectedMember?.teamSetting.socialLink && (
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
                    {selectedMember?.teamSetting.memberExperienceTitle &&
                      selectedMember?.teamSetting
                        .memberExperienceDiscription && (
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
                    {selectedMember?.teamSetting.profileSkillTitle &&
                      selectedMember?.teamSetting.skillsDetail &&
                      selectedMember.teamSetting.skillsDetail.length > 0 && (
                        <div className="space-y-6">
                          <h3 className="font-denton font-medium text-[40px] leading-[1.325] text-white">
                            {selectedMember.teamSetting.profileSkillTitle}
                          </h3>

                          {selectedMember.teamSetting.skillsDetail.map(
                            (skill, index) => (
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

export default TeamSection;
