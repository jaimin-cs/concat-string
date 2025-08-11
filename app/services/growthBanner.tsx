"use client";
import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_DIGITAL_GROWTH_BANNER } from '@/lib/queries'

const GrowthBanner = () => {
  const { loading, error, data } = useQuery(GET_DIGITAL_GROWTH_BANNER)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading content</div>

  // Find the DigitalGrowthLayout from the flexible content array
  const digitalGrowthData = data?.page?.flexibleContent?.flexibleContent?.find(
    (item: any) => item.digitalGrowthTitle
  )

  const title = digitalGrowthData?.digitalGrowthTitle || "Solutions That Power Your Digital Growth"
  const description = digitalGrowthData?.growthDescription || ""

  return (
    <section className="pt-[120px] relative service-listing">
        <div className="max-w-[1440px] px-[20px] mx-auto w-full">
            <div className="flex flex-col gap-[16px] items-center justify-center">
                <h2 className="h2 text-white text-center">{title}</h2>
                <div 
                  className="font-lato font-medium text-[16px] leading-[26px] text-center text-[#C3C3C3] max-w-[1090px]"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>
        </div>
    </section>
  )
}

export default GrowthBanner
