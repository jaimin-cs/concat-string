import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "@/lib/queries";

interface ConnectNowProps {
  userId?: string | null;
}

const ConnectNow: React.FC<ConnectNowProps> = ({ userId }) => {
  const { data: authorsData } = useQuery(GET_AUTHORS);

  // Get the author data for dynamic content
  const author = React.useMemo(() => {
    if (!authorsData?.users?.nodes || !userId) return null;
    return authorsData.users.nodes.find((user: any) => user.id === userId);
  }, [authorsData, userId]);

  const contactSection = author?.userProfileImage?.contactSection;
  const contactTitle = contactSection?.contactTitle;
  const contactDescription = contactSection?.contactDescription;
  const contactLink = contactSection?.contactLink;
  const bgImage = contactSection?.bgImage?.node?.sourceUrl;

  return (
    <section
      className="bg-cover 2xl:py-[165px] xl:py-[165px] lg:py-[150px] lg:py-[140px] md:py-[120px] sm:py-[120px] py-[120px] mb-[120px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container max-w-[1177px] px-[20px] mx-auto">
        <div className="flex items-center justify-center flex-col">
          <h2 className="h2 text-white text-center mb-[16px]">
            {contactTitle}
          </h2>
          <p className="font-lato font-medium text-white text-[16px] leading-[26px] 2xl:mb-[60px] xl:mb-[60px] lg:mb-[40px] md:mb-[30px] sm:mb-[30px] mb-[20px] text-center max-w-[1019px]">
            {contactDescription}
          </p>
          {contactLink && (
            <a
              href={contactLink.url}
              target={contactLink.target}
              className="inline-block group"
            >
              <div className="btn-primary-outline">
                <div className="btn-primary">{contactLink.title}</div>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConnectNow;
