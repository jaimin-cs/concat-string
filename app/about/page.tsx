import React from "react";
import WhoWeAre from "@/app/about/whoWeAre";
import WorkingMethod from "@/app/about/workingMethod";
import MeetTheMind from "@/app/about/meetTheMind";
import Empowering from "@/app/about/empowering";
import Technology from "@/app/about/technology";
import Timeline from "@/app/about/timeline";
import VisionSlider from "@/components/visionSlider";

const page = () => {
  return (
    <>
      <Empowering />
      <WhoWeAre />
      <Technology />
      <Timeline />
      <WorkingMethod />
      <MeetTheMind />
      <VisionSlider padding="pb-[173px]" />
    </>
  );
};

export default page;
