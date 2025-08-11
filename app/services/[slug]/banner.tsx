import React from "react";

interface Props {
  data: any;
}

const Banner: React.FC<Props> = ({ data }) => {
  const serviceName = data?.technology?.title;
  const bannerImage = data?.technology?.featuredImage?.node?.sourceUrl;
  const bannerAlt = data?.technology?.featuredImage?.node?.altText;

  return (
    <section
      className="bg-cover 2xl:pt-[254px] xl:pt-[254px] lg:pt-[250px] md:pt-[230px] sm:pt-[200px] pt-[200px] 2xl:pb-[334px] xl:pb-[334px] lg:pb-[330px] md:pb-[300px] sm:pb-[280px] pb-[250px] bg-no-repeat bg-bottom-left"
      style={{ backgroundImage: `url('${bannerImage}')` }}
      aria-label={bannerAlt}
    >
      <div className="container max-w-[1440px] px-[20px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="h1 text-white max-w-[662px] leading-[100%]">
            {serviceName}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
