import React from "react";
import OurServices from "@/app/services/ourServices";
import ServiceHighlights from "@/app/services/serviceHighlights";
import GrowthBanner from "@/app/services/growthBanner";
import ClientFeedback from "@/app/services/clientFeedback";
import WorkImpact from "@/components/WorkImpact";
import Trusted from "@/components/trusted";

const page = () => {
  return (
    <>
      <OurServices />
      <GrowthBanner />
      <ServiceHighlights />
      <WorkImpact showViewMore={false} />
      <Trusted />
      <ClientFeedback />
    </>
  );
};

export default page;
