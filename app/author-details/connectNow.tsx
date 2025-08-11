import React from 'react'

const ConnectNow = () => {
  return (
     <section className="bg-[url(/images/author/connect.png)] bg-cover 2xl:py-[165px] xl:py-[165px] lg:py-[150px] lg:py-[140px] md:py-[120px] sm:py-[120px] py-[120px] mb-[120px]">
        <div className="container max-w-[1177px] px-[20px] mx-auto">
            <div className="flex items-center justify-center flex-col">
                <h2 className="h2 text-white text-center mb-[16px]">Want to Connect or Collaborate?</h2>
                <p className="font-lato font-medium text-white text-[16px] leading-[26px] 2xl:mb-[60px] xl:mb-[60px] lg:mb-[40px] md:mb-[30px] sm:mb-[30px] mb-[20px] text-center max-w-[1019px]">Have an idea, project, or opportunity in mind? We're always open to meaningful conversations and impactful partnerships. Let's build something great together—reach out today!</p>
                <a href="#" className="inline-block group">
                    <div className="btn-primary-outline">
                        <div className="btn-primary">
                            Connect Now
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default ConnectNow