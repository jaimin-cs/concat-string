'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ComingSoon: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date (you can modify this)
    const targetDate = new Date('2025-08-20T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Main Content */}
      <main>
        <section className="2xl:pt-[254px] xl:pt-[254px] lg:pt-[200px] md:pt-[150px] sm:pt-[120px] pt-[120px] pb-[120px] max-w-[1440px] mx-auto px-[20px]">
          <div className="relative bg-[url('/images/comming-bg.png')] bg-no-repeat 2xl:py-[132px] xl:py-[132px] lg:py-[120px] md:py-[120px] sm:py-[120px] py-[120px] max-w-[1440px] bg-cover">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-[40px] p-[1px] bg-gradient-to-b from-[#E72125] to-[#54A3DA] -z-10"></div>
            
            <div className="container max-w-[1034px] px-[20px] mx-auto">
              <div className="flex flex-col 2xl:gap-[64px] xl:gap-[64px] lg:gap-[50px] md:gap-[40px] sm:gap-[30px] gap-[25px] items-center justify-center">
                
                {/* Coming Soon Image */}
                <div className="mb-8">
                  <Image
                    src="/images/comming.png"
                    alt="Coming Soon"
                    width={1034}
                    height={389}
                    className="w-full h-auto max-w-full"
                  />
                </div>
                
                {/* Countdown Timer */}
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[20px] w-full max-w-4xl">
                  
                  {/* Days */}
                  <div className="flex flex-col gap-[4px] items-center justify-between">
                    <h3 className="font-bold 2xl:text-[58px] xl:text-[58px] lg:text-[40px] md:text-[30px] sm:text-[30px] text-[30px] 2xl:leading-[71px] xl:leading-[71px] lg:leading-[60px] sm:leading-[50px] leading-[40px] text-white">
                      {countdown.days.toString().padStart(2, '0')}
                    </h3>
                    <div className="bg-[#292929] py-[10px] px-[40px] rounded-[6px] w-full">
                      <span className="text-[26px] leading-[31px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E72125] to-[#54A3DA] flex items-center justify-center">
                        Days
                      </span>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex flex-col gap-[4px] items-center justify-between">
                    <h3 className="font-bold 2xl:text-[58px] xl:text-[58px] lg:text-[40px] md:text-[30px] sm:text-[30px] text-[30px] 2xl:leading-[71px] xl:leading-[71px] lg:leading-[60px] sm:leading-[50px] leading-[40px] text-white">
                      {countdown.hours.toString().padStart(2, '0')}
                    </h3>
                    <div className="bg-[#292929] py-[10px] px-[40px] rounded-[6px] w-full">
                      <span className="text-[26px] leading-[31px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E72125] to-[#54A3DA] flex items-center justify-center">
                        Hours
                      </span>
                    </div>
                  </div>
                  
                  {/* Minutes */}
                  <div className="flex flex-col gap-[4px] items-center justify-between">
                    <h3 className="font-bold 2xl:text-[58px] xl:text-[58px] lg:text-[40px] md:text-[30px] sm:text-[30px] text-[30px] 2xl:leading-[71px] xl:leading-[71px] lg:leading-[60px] sm:leading-[50px] leading-[40px] text-white">
                      {countdown.minutes.toString().padStart(2, '0')}
                    </h3>
                    <div className="bg-[#292929] py-[10px] px-[40px] rounded-[6px] w-full">
                      <span className="text-[26px] leading-[31px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E72125] to-[#54A3DA] flex items-center justify-center">
                        Minutes
                      </span>
                    </div>
                  </div>
                  
                  {/* Seconds */}
                  <div className="flex flex-col gap-[4px] items-center justify-between">
                    <h3 className="font-bold 2xl:text-[58px] xl:text-[58px] lg:text-[40px] md:text-[30px] sm:text-[30px] text-[30px] 2xl:leading-[71px] xl:leading-[71px] lg:leading-[60px] sm:leading-[50px] leading-[40px] text-white">
                      {countdown.seconds.toString().padStart(2, '0')}
                    </h3>
                    <div className="bg-[#292929] py-[10px] px-[40px] rounded-[6px] w-full">
                      <span className="text-[26px] leading-[31px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E72125] to-[#54A3DA] flex items-center justify-center">
                        Seconds
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Additional Content */}
                <div className="text-center mt-8">
                  <p className="text-white text-lg mb-6">
                    We're working hard to bring you something amazing. Stay tuned!
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-[#E72125] to-[#54A3DA] text-white font-semibold rounded-lg hover:from-[#54A3DA] hover:to-[#E72125] transition-all duration-300 transform hover:scale-105"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ComingSoon;
