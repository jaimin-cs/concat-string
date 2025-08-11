import React from "react";

import AboutSolutions from "@/app/service-detail/aboutSolutions";
import Banner from "@/app/service-detail/banner";
import Industries from "@/app/service-detail/industries";
import OurProcess from "@/app/service-detail/ourProcess";
import Service from "@/app/service-detail/services";
import StartBuilding from "@/app/service-detail/startBuilding";
import Technology from "@/app/service-detail/technology";
import WhyChooseUs from "@/app/service-detail/whyChooseUs";
import WhyConcatString from "@/app/service-detail/whyConcatString";
import Faq from "@/app/service-detail/faq";

const page = () => {
  return (
    <>
      <Banner />
      <AboutSolutions />
      <Service />
      <Technology />
      <WhyConcatString />
      <WhyChooseUs />
      <Industries />
      <OurProcess />
      <StartBuilding />
      <Faq />
    </>
  );
};

export default page;
