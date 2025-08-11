import React from "react";
import BlogTitle from "./blogTitle";
import TechTalks from "./techTalks";
import FutureTech from "./futureTech";
import MeetWriters from "./meetWriters";
import StoryToShare from "./storyToShare";

const page = () => {
  return (
    <>
      <BlogTitle />
      <TechTalks />
      <FutureTech />
      <MeetWriters />
      <StoryToShare />
    </>
  );
};

export default page;
