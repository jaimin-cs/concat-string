"use client"

import React from 'react'
import { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "@/css/author-details.css"

const FutureOfAi = () => {
    const sliderRef = useRef<Slider>(null)

  const settings = {
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: false, 
  }

  const goToPrev = () => {
    sliderRef.current?.slickPrev()
  }

  const goToNext = () => {
    sliderRef.current?.slickNext()
  }
  return (
       <section className="mb-[100px]">
        <div className="container max-w-[1600px] px-[20px] mx-auto w-full">
            <div className="bg-white/10 2xl:p-[100px] xl:p-[100px] lg:p-[80px] md:p-[60px] sm:p-[40px] p-[30px] rounded-[16px]">
                    <h3 className="font-denton font-bold 2xl:text-[66px] xl:text-[66px] lg:text-[50px] md:text-[40px] sm:text-[40px] text-[30px] 2xl:leading-[87px] lg:leading-[87px] md:leading-[50px] sm:leading-[50px] leading-[40px] text-white text-center 2xl:mb-[60px] xl:mb-[60px] lg:mb-[40px] md:mb-[30px] sm:mb-[20px] mb-[20px]">Writings from This Mind</h3>
                <div className="blog-slider !mb-0">
                      <Slider ref={sliderRef} {...settings}>
                    <div className="blog-slide-wrap">
                        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[30px] mb-[30px]">
                            <div className="bg-[#FFFF]/10 px-[20px] pt-[20px] pb-[26px] backdrop-blur-sm 2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] hover:bg-[#2E0707]">
                                <div className="flex flex-col justify-between gap-[32px] h-full">
                                <div className="flex flex-col flex-grow height-full">
                                    <img src="./images/blog/blog1.png" width="399" height="270" className="2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] mb-[18px] w-full"/>
                                    <h3 className="font-denton text-[24px] font-bold leading-[32px] text-white mb-[6px]">The Future of AI in Everyday Life</h3>
                                    <div className="flex items-center justify-between gap-[10px] w-full mb-[30px]">
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clipPath="url(#clip0_2675_7871)">
                                            <path d="M17.8656 8.64826C17.705 8.46904 13.8404 4.25391 9.00002 4.25391C4.15963 4.25391 0.295117 8.46904 0.134418 8.64826C0.0478587 8.74497 0 8.87021 0 9C0 9.12979 0.0478587 9.25503 0.134418 9.35174C0.295117 9.53096 4.1597 13.7461 9.00002 13.7461C13.8403 13.7461 17.7049 9.53096 17.8656 9.35174C17.9522 9.25502 18 9.12979 18 9C18 8.87021 17.9522 8.74498 17.8656 8.64826ZM9.00002 12.6914C6.96479 12.6914 5.30861 11.0352 5.30861 9C5.30861 6.96477 6.96479 5.30859 9.00002 5.30859C11.0352 5.30859 12.6914 6.96477 12.6914 9C12.6914 11.0352 11.0352 12.6914 9.00002 12.6914Z" fill="#E9E9E9"/>
                                            <path d="M9.52734 7.94531C9.52734 7.4148 9.7907 6.94811 10.1913 6.66105C9.83183 6.47701 9.43084 6.36328 9 6.36328C7.54618 6.36328 6.36328 7.54618 6.36328 9C6.36328 10.4538 7.54618 11.6367 9 11.6367C10.3016 11.6367 11.379 10.6863 11.5918 9.44445C10.5299 9.78634 9.52734 8.9832 9.52734 7.94531Z" fill="#E9E9E9"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2675_7871">
                                            <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">1,020 View</span>
                                        </div>
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M10.6661 2.15835C9.54833 1.46893 8.22375 1.08984 6.85547 1.08984C3.1308 1.08984 0 3.86483 0 7.41797C0 8.66373 0.387 9.85795 1.12212 10.8893L0.0952031 14.1134C-0.0132891 14.4539 0.241805 14.8008 0.597762 14.8008C0.680793 14.8008 0.762652 14.7812 0.836648 14.7435L3.95965 13.1556C4.0861 13.21 4.2141 13.2608 4.34348 13.3078C3.62043 12.1792 3.23437 10.8837 3.23437 9.52734C3.23437 5.488 6.63321 2.38261 10.6661 2.15835Z" fill="#E9E9E9"/>
                                            <path d="M16.8779 12.9987C17.613 11.9673 18 10.7731 18 9.52734C18 5.97291 14.8679 3.19922 11.1445 3.19922C7.41987 3.19922 4.28906 5.97421 4.28906 9.52734C4.28906 13.0818 7.4212 15.8555 11.1445 15.8555C12.1436 15.8555 13.139 15.6519 14.0402 15.2649L17.1634 16.8529C17.2561 16.9 17.3606 16.9187 17.4639 16.9065C17.5672 16.8944 17.6646 16.852 17.7438 16.7846C17.823 16.7173 17.8806 16.628 17.9093 16.528C17.9379 16.4281 17.9364 16.3219 17.9048 16.2228L16.8779 12.9987ZM9 10.0547C8.70877 10.0547 8.47266 9.81858 8.47266 9.52734C8.47266 9.23611 8.70877 9 9 9C9.29123 9 9.52734 9.23611 9.52734 9.52734C9.52734 9.81858 9.29123 10.0547 9 10.0547ZM11.1094 10.0547C10.8181 10.0547 10.582 9.81858 10.582 9.52734C10.582 9.23611 10.8181 9 11.1094 9C11.4006 9 11.6367 9.23611 11.6367 9.52734C11.6367 9.81858 11.4006 10.0547 11.1094 10.0547ZM13.2188 10.0547C12.9275 10.0547 12.6914 9.81858 12.6914 9.52734C12.6914 9.23611 12.9275 9 13.2188 9C13.51 9 13.7461 9.23611 13.7461 9.52734C13.7461 9.81858 13.51 10.0547 13.2188 10.0547Z" fill="#E9E9E9"/>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">560 Comments</span>
                                        </div>
                                    </div>
                                    <a href="#" className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%]">Read More 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z" fill="url(#paint0_linear_2639_7064)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_2639_7064" x1="0.000158411" y1="9.99993" x2="14.9998" y2="9.99993" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#EA070B"/>
                                            <stop offset="0.158" stopColor="#DF1418"/>
                                            <stop offset="1" stopColor="#FF686B"/>
                                            </linearGradient>
                                            </defs>
                                         </svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="bg-[#FFFF]/10 px-[20px] pt-[20px] pb-[26px] backdrop-blur-sm 2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] hover:bg-[#2E0707]">
                                <div className="flex flex-col justify-between gap-[32px] h-full">
                                <div className="flex flex-col flex-grow height-full">
                                    <img src="./images/blog/blog1.png" width="399" height="270" className="2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] mb-[18px] w-full"/>
                                    <h3 className="font-denton text-[24px] font-bold leading-[32px] text-white mb-[6px]">The Future of AI in Everyday Life</h3>
                                    <div className="flex items-center justify-between gap-[10px] w-full mb-[30px]">
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clipPath="url(#clip0_2675_7871)">
                                            <path d="M17.8656 8.64826C17.705 8.46904 13.8404 4.25391 9.00002 4.25391C4.15963 4.25391 0.295117 8.46904 0.134418 8.64826C0.0478587 8.74497 0 8.87021 0 9C0 9.12979 0.0478587 9.25503 0.134418 9.35174C0.295117 9.53096 4.1597 13.7461 9.00002 13.7461C13.8403 13.7461 17.7049 9.53096 17.8656 9.35174C17.9522 9.25502 18 9.12979 18 9C18 8.87021 17.9522 8.74498 17.8656 8.64826ZM9.00002 12.6914C6.96479 12.6914 5.30861 11.0352 5.30861 9C5.30861 6.96477 6.96479 5.30859 9.00002 5.30859C11.0352 5.30859 12.6914 6.96477 12.6914 9C12.6914 11.0352 11.0352 12.6914 9.00002 12.6914Z" fill="#E9E9E9"/>
                                            <path d="M9.52734 7.94531C9.52734 7.4148 9.7907 6.94811 10.1913 6.66105C9.83183 6.47701 9.43084 6.36328 9 6.36328C7.54618 6.36328 6.36328 7.54618 6.36328 9C6.36328 10.4538 7.54618 11.6367 9 11.6367C10.3016 11.6367 11.379 10.6863 11.5918 9.44445C10.5299 9.78634 9.52734 8.9832 9.52734 7.94531Z" fill="#E9E9E9"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2675_7871">
                                            <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">1,020 View</span>
                                        </div>
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M10.6661 2.15835C9.54833 1.46893 8.22375 1.08984 6.85547 1.08984C3.1308 1.08984 0 3.86483 0 7.41797C0 8.66373 0.387 9.85795 1.12212 10.8893L0.0952031 14.1134C-0.0132891 14.4539 0.241805 14.8008 0.597762 14.8008C0.680793 14.8008 0.762652 14.7812 0.836648 14.7435L3.95965 13.1556C4.0861 13.21 4.2141 13.2608 4.34348 13.3078C3.62043 12.1792 3.23437 10.8837 3.23437 9.52734C3.23437 5.488 6.63321 2.38261 10.6661 2.15835Z" fill="#E9E9E9"/>
                                            <path d="M16.8779 12.9987C17.613 11.9673 18 10.7731 18 9.52734C18 5.97291 14.8679 3.19922 11.1445 3.19922C7.41987 3.19922 4.28906 5.97421 4.28906 9.52734C4.28906 13.0818 7.4212 15.8555 11.1445 15.8555C12.1436 15.8555 13.139 15.6519 14.0402 15.2649L17.1634 16.8529C17.2561 16.9 17.3606 16.9187 17.4639 16.9065C17.5672 16.8944 17.6646 16.852 17.7438 16.7846C17.823 16.7173 17.8806 16.628 17.9093 16.528C17.9379 16.4281 17.9364 16.3219 17.9048 16.2228L16.8779 12.9987ZM9 10.0547C8.70877 10.0547 8.47266 9.81858 8.47266 9.52734C8.47266 9.23611 8.70877 9 9 9C9.29123 9 9.52734 9.23611 9.52734 9.52734C9.52734 9.81858 9.29123 10.0547 9 10.0547ZM11.1094 10.0547C10.8181 10.0547 10.582 9.81858 10.582 9.52734C10.582 9.23611 10.8181 9 11.1094 9C11.4006 9 11.6367 9.23611 11.6367 9.52734C11.6367 9.81858 11.4006 10.0547 11.1094 10.0547ZM13.2188 10.0547C12.9275 10.0547 12.6914 9.81858 12.6914 9.52734C12.6914 9.23611 12.9275 9 13.2188 9C13.51 9 13.7461 9.23611 13.7461 9.52734C13.7461 9.81858 13.51 10.0547 13.2188 10.0547Z" fill="#E9E9E9"/>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">560 Comments</span>
                                        </div>
                                    </div>
                                    <a href="#" className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%]">Read More 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z" fill="url(#paint0_linear_2639_7064)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_2639_7064" x1="0.000158411" y1="9.99993" x2="14.9998" y2="9.99993" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#EA070B"/>
                                            <stop offset="0.158" stopColor="#DF1418"/>
                                            <stop offset="1" stopColor="#FF686B"/>
                                            </linearGradient>
                                            </defs>
                                         </svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="bg-[#FFFF]/10 px-[20px] pt-[20px] pb-[26px] backdrop-blur-sm 2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] hover:bg-[#2E0707]">
                                <div className="flex flex-col justify-between gap-[32px] h-full">
                                <div className="flex flex-col flex-grow height-full">
                                    <img src="./images/blog/blog1.png" width="399" height="270" className="2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] mb-[18px] w-full"/>
                                    <h3 className="font-denton text-[24px] font-bold leading-[32px] text-white mb-[6px]">The Future of AI in Everyday Life</h3>
                                    <div className="flex items-center justify-between gap-[10px] w-full mb-[30px]">
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clipPath="url(#clip0_2675_7871)">
                                            <path d="M17.8656 8.64826C17.705 8.46904 13.8404 4.25391 9.00002 4.25391C4.15963 4.25391 0.295117 8.46904 0.134418 8.64826C0.0478587 8.74497 0 8.87021 0 9C0 9.12979 0.0478587 9.25503 0.134418 9.35174C0.295117 9.53096 4.1597 13.7461 9.00002 13.7461C13.8403 13.7461 17.7049 9.53096 17.8656 9.35174C17.9522 9.25502 18 9.12979 18 9C18 8.87021 17.9522 8.74498 17.8656 8.64826ZM9.00002 12.6914C6.96479 12.6914 5.30861 11.0352 5.30861 9C5.30861 6.96477 6.96479 5.30859 9.00002 5.30859C11.0352 5.30859 12.6914 6.96477 12.6914 9C12.6914 11.0352 11.0352 12.6914 9.00002 12.6914Z" fill="#E9E9E9"/>
                                            <path d="M9.52734 7.94531C9.52734 7.4148 9.7907 6.94811 10.1913 6.66105C9.83183 6.47701 9.43084 6.36328 9 6.36328C7.54618 6.36328 6.36328 7.54618 6.36328 9C6.36328 10.4538 7.54618 11.6367 9 11.6367C10.3016 11.6367 11.379 10.6863 11.5918 9.44445C10.5299 9.78634 9.52734 8.9832 9.52734 7.94531Z" fill="#E9E9E9"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2675_7871">
                                            <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">1,020 View</span>
                                        </div>
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M10.6661 2.15835C9.54833 1.46893 8.22375 1.08984 6.85547 1.08984C3.1308 1.08984 0 3.86483 0 7.41797C0 8.66373 0.387 9.85795 1.12212 10.8893L0.0952031 14.1134C-0.0132891 14.4539 0.241805 14.8008 0.597762 14.8008C0.680793 14.8008 0.762652 14.7812 0.836648 14.7435L3.95965 13.1556C4.0861 13.21 4.2141 13.2608 4.34348 13.3078C3.62043 12.1792 3.23437 10.8837 3.23437 9.52734C3.23437 5.488 6.63321 2.38261 10.6661 2.15835Z" fill="#E9E9E9"/>
                                            <path d="M16.8779 12.9987C17.613 11.9673 18 10.7731 18 9.52734C18 5.97291 14.8679 3.19922 11.1445 3.19922C7.41987 3.19922 4.28906 5.97421 4.28906 9.52734C4.28906 13.0818 7.4212 15.8555 11.1445 15.8555C12.1436 15.8555 13.139 15.6519 14.0402 15.2649L17.1634 16.8529C17.2561 16.9 17.3606 16.9187 17.4639 16.9065C17.5672 16.8944 17.6646 16.852 17.7438 16.7846C17.823 16.7173 17.8806 16.628 17.9093 16.528C17.9379 16.4281 17.9364 16.3219 17.9048 16.2228L16.8779 12.9987ZM9 10.0547C8.70877 10.0547 8.47266 9.81858 8.47266 9.52734C8.47266 9.23611 8.70877 9 9 9C9.29123 9 9.52734 9.23611 9.52734 9.52734C9.52734 9.81858 9.29123 10.0547 9 10.0547ZM11.1094 10.0547C10.8181 10.0547 10.582 9.81858 10.582 9.52734C10.582 9.23611 10.8181 9 11.1094 9C11.4006 9 11.6367 9.23611 11.6367 9.52734C11.6367 9.81858 11.4006 10.0547 11.1094 10.0547ZM13.2188 10.0547C12.9275 10.0547 12.6914 9.81858 12.6914 9.52734C12.6914 9.23611 12.9275 9 13.2188 9C13.51 9 13.7461 9.23611 13.7461 9.52734C13.7461 9.81858 13.51 10.0547 13.2188 10.0547Z" fill="#E9E9E9"/>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">560 Comments</span>
                                        </div>
                                    </div>
                                    <a href="#" className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%]">Read More 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z" fill="url(#paint0_linear_2639_7064)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_2639_7064" x1="0.000158411" y1="9.99993" x2="14.9998" y2="9.99993" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#EA070B"/>
                                            <stop offset="0.158" stopColor="#DF1418"/>
                                            <stop offset="1" stopColor="#FF686B"/>
                                            </linearGradient>
                                            </defs>
                                         </svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="bg-[#FFFF]/10 px-[20px] pt-[20px] pb-[26px] backdrop-blur-sm 2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] hover:bg-[#2E0707]">
                                <div className="flex flex-col justify-between gap-[32px] h-full">
                                <div className="flex flex-col flex-grow height-full">
                                    <img src="./images/blog/blog1.png" width="399" height="270" className="2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] mb-[18px] w-full"/>
                                    <h3 className="font-denton text-[24px] font-bold leading-[32px] text-white mb-[6px]">The Future of AI in Everyday Life</h3>
                                    <div className="flex items-center justify-between gap-[10px] w-full mb-[30px]">
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clipPath="url(#clip0_2675_7871)">
                                            <path d="M17.8656 8.64826C17.705 8.46904 13.8404 4.25391 9.00002 4.25391C4.15963 4.25391 0.295117 8.46904 0.134418 8.64826C0.0478587 8.74497 0 8.87021 0 9C0 9.12979 0.0478587 9.25503 0.134418 9.35174C0.295117 9.53096 4.1597 13.7461 9.00002 13.7461C13.8403 13.7461 17.7049 9.53096 17.8656 9.35174C17.9522 9.25502 18 9.12979 18 9C18 8.87021 17.9522 8.74498 17.8656 8.64826ZM9.00002 12.6914C6.96479 12.6914 5.30861 11.0352 5.30861 9C5.30861 6.96477 6.96479 5.30859 9.00002 5.30859C11.0352 5.30859 12.6914 6.96477 12.6914 9C12.6914 11.0352 11.0352 12.6914 9.00002 12.6914Z" fill="#E9E9E9"/>
                                            <path d="M9.52734 7.94531C9.52734 7.4148 9.7907 6.94811 10.1913 6.66105C9.83183 6.47701 9.43084 6.36328 9 6.36328C7.54618 6.36328 6.36328 7.54618 6.36328 9C6.36328 10.4538 7.54618 11.6367 9 11.6367C10.3016 11.6367 11.379 10.6863 11.5918 9.44445C10.5299 9.78634 9.52734 8.9832 9.52734 7.94531Z" fill="#E9E9E9"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2675_7871">
                                            <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">1,020 View</span>
                                        </div>
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M10.6661 2.15835C9.54833 1.46893 8.22375 1.08984 6.85547 1.08984C3.1308 1.08984 0 3.86483 0 7.41797C0 8.66373 0.387 9.85795 1.12212 10.8893L0.0952031 14.1134C-0.0132891 14.4539 0.241805 14.8008 0.597762 14.8008C0.680793 14.8008 0.762652 14.7812 0.836648 14.7435L3.95965 13.1556C4.0861 13.21 4.2141 13.2608 4.34348 13.3078C3.62043 12.1792 3.23437 10.8837 3.23437 9.52734C3.23437 5.488 6.63321 2.38261 10.6661 2.15835Z" fill="#E9E9E9"/>
                                            <path d="M16.8779 12.9987C17.613 11.9673 18 10.7731 18 9.52734C18 5.97291 14.8679 3.19922 11.1445 3.19922C7.41987 3.19922 4.28906 5.97421 4.28906 9.52734C4.28906 13.0818 7.4212 15.8555 11.1445 15.8555C12.1436 15.8555 13.139 15.6519 14.0402 15.2649L17.1634 16.8529C17.2561 16.9 17.3606 16.9187 17.4639 16.9065C17.5672 16.8944 17.6646 16.852 17.7438 16.7846C17.823 16.7173 17.8806 16.628 17.9093 16.528C17.9379 16.4281 17.9364 16.3219 17.9048 16.2228L16.8779 12.9987ZM9 10.0547C8.70877 10.0547 8.47266 9.81858 8.47266 9.52734C8.47266 9.23611 8.70877 9 9 9C9.29123 9 9.52734 9.23611 9.52734 9.52734C9.52734 9.81858 9.29123 10.0547 9 10.0547ZM11.1094 10.0547C10.8181 10.0547 10.582 9.81858 10.582 9.52734C10.582 9.23611 10.8181 9 11.1094 9C11.4006 9 11.6367 9.23611 11.6367 9.52734C11.6367 9.81858 11.4006 10.0547 11.1094 10.0547ZM13.2188 10.0547C12.9275 10.0547 12.6914 9.81858 12.6914 9.52734C12.6914 9.23611 12.9275 9 13.2188 9C13.51 9 13.7461 9.23611 13.7461 9.52734C13.7461 9.81858 13.51 10.0547 13.2188 10.0547Z" fill="#E9E9E9"/>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">560 Comments</span>
                                        </div>
                                    </div>
                                    <a href="#" className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%]">Read More 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z" fill="url(#paint0_linear_2639_7064)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_2639_7064" x1="0.000158411" y1="9.99993" x2="14.9998" y2="9.99993" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#EA070B"/>
                                            <stop offset="0.158" stopColor="#DF1418"/>
                                            <stop offset="1" stopColor="#FF686B"/>
                                            </linearGradient>
                                            </defs>
                                         </svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="bg-[#FFFF]/10 px-[20px] pt-[20px] pb-[26px] backdrop-blur-sm 2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] hover:bg-[#2E0707]">
                                <div className="flex flex-col justify-between gap-[32px] h-full">
                                <div className="flex flex-col flex-grow height-full">
                                    <img src="./images/blog/blog1.png" width="399" height="270" className="2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] mb-[18px] w-full"/>
                                    <h3 className="font-denton text-[24px] font-bold leading-[32px] text-white mb-[6px]">The Future of AI in Everyday Life</h3>
                                    <div className="flex items-center justify-between gap-[10px] w-full mb-[30px]">
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clipPath="url(#clip0_2675_7871)">
                                            <path d="M17.8656 8.64826C17.705 8.46904 13.8404 4.25391 9.00002 4.25391C4.15963 4.25391 0.295117 8.46904 0.134418 8.64826C0.0478587 8.74497 0 8.87021 0 9C0 9.12979 0.0478587 9.25503 0.134418 9.35174C0.295117 9.53096 4.1597 13.7461 9.00002 13.7461C13.8403 13.7461 17.7049 9.53096 17.8656 9.35174C17.9522 9.25502 18 9.12979 18 9C18 8.87021 17.9522 8.74498 17.8656 8.64826ZM9.00002 12.6914C6.96479 12.6914 5.30861 11.0352 5.30861 9C5.30861 6.96477 6.96479 5.30859 9.00002 5.30859C11.0352 5.30859 12.6914 6.96477 12.6914 9C12.6914 11.0352 11.0352 12.6914 9.00002 12.6914Z" fill="#E9E9E9"/>
                                            <path d="M9.52734 7.94531C9.52734 7.4148 9.7907 6.94811 10.1913 6.66105C9.83183 6.47701 9.43084 6.36328 9 6.36328C7.54618 6.36328 6.36328 7.54618 6.36328 9C6.36328 10.4538 7.54618 11.6367 9 11.6367C10.3016 11.6367 11.379 10.6863 11.5918 9.44445C10.5299 9.78634 9.52734 8.9832 9.52734 7.94531Z" fill="#E9E9E9"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2675_7871">
                                            <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">1,020 View</span>
                                        </div>
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M10.6661 2.15835C9.54833 1.46893 8.22375 1.08984 6.85547 1.08984C3.1308 1.08984 0 3.86483 0 7.41797C0 8.66373 0.387 9.85795 1.12212 10.8893L0.0952031 14.1134C-0.0132891 14.4539 0.241805 14.8008 0.597762 14.8008C0.680793 14.8008 0.762652 14.7812 0.836648 14.7435L3.95965 13.1556C4.0861 13.21 4.2141 13.2608 4.34348 13.3078C3.62043 12.1792 3.23437 10.8837 3.23437 9.52734C3.23437 5.488 6.63321 2.38261 10.6661 2.15835Z" fill="#E9E9E9"/>
                                            <path d="M16.8779 12.9987C17.613 11.9673 18 10.7731 18 9.52734C18 5.97291 14.8679 3.19922 11.1445 3.19922C7.41987 3.19922 4.28906 5.97421 4.28906 9.52734C4.28906 13.0818 7.4212 15.8555 11.1445 15.8555C12.1436 15.8555 13.139 15.6519 14.0402 15.2649L17.1634 16.8529C17.2561 16.9 17.3606 16.9187 17.4639 16.9065C17.5672 16.8944 17.6646 16.852 17.7438 16.7846C17.823 16.7173 17.8806 16.628 17.9093 16.528C17.9379 16.4281 17.9364 16.3219 17.9048 16.2228L16.8779 12.9987ZM9 10.0547C8.70877 10.0547 8.47266 9.81858 8.47266 9.52734C8.47266 9.23611 8.70877 9 9 9C9.29123 9 9.52734 9.23611 9.52734 9.52734C9.52734 9.81858 9.29123 10.0547 9 10.0547ZM11.1094 10.0547C10.8181 10.0547 10.582 9.81858 10.582 9.52734C10.582 9.23611 10.8181 9 11.1094 9C11.4006 9 11.6367 9.23611 11.6367 9.52734C11.6367 9.81858 11.4006 10.0547 11.1094 10.0547ZM13.2188 10.0547C12.9275 10.0547 12.6914 9.81858 12.6914 9.52734C12.6914 9.23611 12.9275 9 13.2188 9C13.51 9 13.7461 9.23611 13.7461 9.52734C13.7461 9.81858 13.51 10.0547 13.2188 10.0547Z" fill="#E9E9E9"/>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">560 Comments</span>
                                        </div>
                                    </div>
                                    <a href="#" className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%]">Read More 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z" fill="url(#paint0_linear_2639_7064)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_2639_7064" x1="0.000158411" y1="9.99993" x2="14.9998" y2="9.99993" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#EA070B"/>
                                            <stop offset="0.158" stopColor="#DF1418"/>
                                            <stop offset="1" stopColor="#FF686B"/>
                                            </linearGradient>
                                            </defs>
                                         </svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="bg-[#FFFF]/10 px-[20px] pt-[20px] pb-[26px] backdrop-blur-sm 2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] hover:bg-[#2E0707]">
                                <div className="flex flex-col justify-between gap-[32px] h-full">
                                <div className="flex flex-col flex-grow height-full">
                                    <img src="./images/blog/blog1.png" width="399" height="270" className="2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] mb-[18px] w-full"/>
                                    <h3 className="font-denton text-[24px] font-bold leading-[32px] text-white mb-[6px]">The Future of AI in Everyday Life</h3>
                                    <div className="flex items-center justify-between gap-[10px] w-full mb-[30px]">
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clipPath="url(#clip0_2675_7871)">
                                            <path d="M17.8656 8.64826C17.705 8.46904 13.8404 4.25391 9.00002 4.25391C4.15963 4.25391 0.295117 8.46904 0.134418 8.64826C0.0478587 8.74497 0 8.87021 0 9C0 9.12979 0.0478587 9.25503 0.134418 9.35174C0.295117 9.53096 4.1597 13.7461 9.00002 13.7461C13.8403 13.7461 17.7049 9.53096 17.8656 9.35174C17.9522 9.25502 18 9.12979 18 9C18 8.87021 17.9522 8.74498 17.8656 8.64826ZM9.00002 12.6914C6.96479 12.6914 5.30861 11.0352 5.30861 9C5.30861 6.96477 6.96479 5.30859 9.00002 5.30859C11.0352 5.30859 12.6914 6.96477 12.6914 9C12.6914 11.0352 11.0352 12.6914 9.00002 12.6914Z" fill="#E9E9E9"/>
                                            <path d="M9.52734 7.94531C9.52734 7.4148 9.7907 6.94811 10.1913 6.66105C9.83183 6.47701 9.43084 6.36328 9 6.36328C7.54618 6.36328 6.36328 7.54618 6.36328 9C6.36328 10.4538 7.54618 11.6367 9 11.6367C10.3016 11.6367 11.379 10.6863 11.5918 9.44445C10.5299 9.78634 9.52734 8.9832 9.52734 7.94531Z" fill="#E9E9E9"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2675_7871">
                                            <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">1,020 View</span>
                                        </div>
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M10.6661 2.15835C9.54833 1.46893 8.22375 1.08984 6.85547 1.08984C3.1308 1.08984 0 3.86483 0 7.41797C0 8.66373 0.387 9.85795 1.12212 10.8893L0.0952031 14.1134C-0.0132891 14.4539 0.241805 14.8008 0.597762 14.8008C0.680793 14.8008 0.762652 14.7812 0.836648 14.7435L3.95965 13.1556C4.0861 13.21 4.2141 13.2608 4.34348 13.3078C3.62043 12.1792 3.23437 10.8837 3.23437 9.52734C3.23437 5.488 6.63321 2.38261 10.6661 2.15835Z" fill="#E9E9E9"/>
                                            <path d="M16.8779 12.9987C17.613 11.9673 18 10.7731 18 9.52734C18 5.97291 14.8679 3.19922 11.1445 3.19922C7.41987 3.19922 4.28906 5.97421 4.28906 9.52734C4.28906 13.0818 7.4212 15.8555 11.1445 15.8555C12.1436 15.8555 13.139 15.6519 14.0402 15.2649L17.1634 16.8529C17.2561 16.9 17.3606 16.9187 17.4639 16.9065C17.5672 16.8944 17.6646 16.852 17.7438 16.7846C17.823 16.7173 17.8806 16.628 17.9093 16.528C17.9379 16.4281 17.9364 16.3219 17.9048 16.2228L16.8779 12.9987ZM9 10.0547C8.70877 10.0547 8.47266 9.81858 8.47266 9.52734C8.47266 9.23611 8.70877 9 9 9C9.29123 9 9.52734 9.23611 9.52734 9.52734C9.52734 9.81858 9.29123 10.0547 9 10.0547ZM11.1094 10.0547C10.8181 10.0547 10.582 9.81858 10.582 9.52734C10.582 9.23611 10.8181 9 11.1094 9C11.4006 9 11.6367 9.23611 11.6367 9.52734C11.6367 9.81858 11.4006 10.0547 11.1094 10.0547ZM13.2188 10.0547C12.9275 10.0547 12.6914 9.81858 12.6914 9.52734C12.6914 9.23611 12.9275 9 13.2188 9C13.51 9 13.7461 9.23611 13.7461 9.52734C13.7461 9.81858 13.51 10.0547 13.2188 10.0547Z" fill="#E9E9E9"/>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">560 Comments</span>
                                        </div>
                                    </div>
                                    <a href="#" className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%]">Read More 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z" fill="url(#paint0_linear_2639_7064)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_2639_7064" x1="0.000158411" y1="9.99993" x2="14.9998" y2="9.99993" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#EA070B"/>
                                            <stop offset="0.158" stopColor="#DF1418"/>
                                            <stop offset="1" stopColor="#FF686B"/>
                                            </linearGradient>
                                            </defs>
                                         </svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-slide-wrap">
                        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[30px] mb-[30px]">
                            <div className="bg-[#FFFF]/10 px-[20px] pt-[20px] pb-[26px] backdrop-blur-sm 2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] hover:bg-[#2E0707]">
                                <div className="flex flex-col justify-between gap-[32px] h-full">
                                <div className="flex flex-col flex-grow height-full">
                                    <img src="./images/blog/blog1.png" width="399" height="270" className="2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] mb-[18px] w-full"/>
                                    <h3 className="font-denton text-[24px] font-bold leading-[32px] text-white mb-[6px]">The Future of AI in Everyday Life</h3>
                                    <div className="flex items-center justify-between gap-[10px] w-full mb-[30px]">
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clipPath="url(#clip0_2675_7871)">
                                            <path d="M17.8656 8.64826C17.705 8.46904 13.8404 4.25391 9.00002 4.25391C4.15963 4.25391 0.295117 8.46904 0.134418 8.64826C0.0478587 8.74497 0 8.87021 0 9C0 9.12979 0.0478587 9.25503 0.134418 9.35174C0.295117 9.53096 4.1597 13.7461 9.00002 13.7461C13.8403 13.7461 17.7049 9.53096 17.8656 9.35174C17.9522 9.25502 18 9.12979 18 9C18 8.87021 17.9522 8.74498 17.8656 8.64826ZM9.00002 12.6914C6.96479 12.6914 5.30861 11.0352 5.30861 9C5.30861 6.96477 6.96479 5.30859 9.00002 5.30859C11.0352 5.30859 12.6914 6.96477 12.6914 9C12.6914 11.0352 11.0352 12.6914 9.00002 12.6914Z" fill="#E9E9E9"/>
                                            <path d="M9.52734 7.94531C9.52734 7.4148 9.7907 6.94811 10.1913 6.66105C9.83183 6.47701 9.43084 6.36328 9 6.36328C7.54618 6.36328 6.36328 7.54618 6.36328 9C6.36328 10.4538 7.54618 11.6367 9 11.6367C10.3016 11.6367 11.379 10.6863 11.5918 9.44445C10.5299 9.78634 9.52734 8.9832 9.52734 7.94531Z" fill="#E9E9E9"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2675_7871">
                                            <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">1,020 View</span>
                                        </div>
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M10.6661 2.15835C9.54833 1.46893 8.22375 1.08984 6.85547 1.08984C3.1308 1.08984 0 3.86483 0 7.41797C0 8.66373 0.387 9.85795 1.12212 10.8893L0.0952031 14.1134C-0.0132891 14.4539 0.241805 14.8008 0.597762 14.8008C0.680793 14.8008 0.762652 14.7812 0.836648 14.7435L3.95965 13.1556C4.0861 13.21 4.2141 13.2608 4.34348 13.3078C3.62043 12.1792 3.23437 10.8837 3.23437 9.52734C3.23437 5.488 6.63321 2.38261 10.6661 2.15835Z" fill="#E9E9E9"/>
                                            <path d="M16.8779 12.9987C17.613 11.9673 18 10.7731 18 9.52734C18 5.97291 14.8679 3.19922 11.1445 3.19922C7.41987 3.19922 4.28906 5.97421 4.28906 9.52734C4.28906 13.0818 7.4212 15.8555 11.1445 15.8555C12.1436 15.8555 13.139 15.6519 14.0402 15.2649L17.1634 16.8529C17.2561 16.9 17.3606 16.9187 17.4639 16.9065C17.5672 16.8944 17.6646 16.852 17.7438 16.7846C17.823 16.7173 17.8806 16.628 17.9093 16.528C17.9379 16.4281 17.9364 16.3219 17.9048 16.2228L16.8779 12.9987ZM9 10.0547C8.70877 10.0547 8.47266 9.81858 8.47266 9.52734C8.47266 9.23611 8.70877 9 9 9C9.29123 9 9.52734 9.23611 9.52734 9.52734C9.52734 9.81858 9.29123 10.0547 9 10.0547ZM11.1094 10.0547C10.8181 10.0547 10.582 9.81858 10.582 9.52734C10.582 9.23611 10.8181 9 11.1094 9C11.4006 9 11.6367 9.23611 11.6367 9.52734C11.6367 9.81858 11.4006 10.0547 11.1094 10.0547ZM13.2188 10.0547C12.9275 10.0547 12.6914 9.81858 12.6914 9.52734C12.6914 9.23611 12.9275 9 13.2188 9C13.51 9 13.7461 9.23611 13.7461 9.52734C13.7461 9.81858 13.51 10.0547 13.2188 10.0547Z" fill="#E9E9E9"/>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">560 Comments</span>
                                        </div>
                                    </div>
                                    <a href="#" className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%]">Read More 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z" fill="url(#paint0_linear_2639_7064)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_2639_7064" x1="0.000158411" y1="9.99993" x2="14.9998" y2="9.99993" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#EA070B"/>
                                            <stop offset="0.158" stopColor="#DF1418"/>
                                            <stop offset="1" stopColor="#FF686B"/>
                                            </linearGradient>
                                            </defs>
                                         </svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="bg-[#FFFF]/10 px-[20px] pt-[20px] pb-[26px] backdrop-blur-sm 2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] hover:bg-[#2E0707]">
                                <div className="flex flex-col justify-between gap-[32px] h-full">
                                <div className="flex flex-col flex-grow height-full">
                                    <img src="./images/blog/blog1.png" width="399" height="270" className="2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] mb-[18px] w-full"/>
                                    <h3 className="font-denton text-[24px] font-bold leading-[32px] text-white mb-[6px]">The Future of AI in Everyday Life</h3>
                                    <div className="flex items-center justify-between gap-[10px] w-full mb-[30px]">
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clipPath="url(#clip0_2675_7871)">
                                            <path d="M17.8656 8.64826C17.705 8.46904 13.8404 4.25391 9.00002 4.25391C4.15963 4.25391 0.295117 8.46904 0.134418 8.64826C0.0478587 8.74497 0 8.87021 0 9C0 9.12979 0.0478587 9.25503 0.134418 9.35174C0.295117 9.53096 4.1597 13.7461 9.00002 13.7461C13.8403 13.7461 17.7049 9.53096 17.8656 9.35174C17.9522 9.25502 18 9.12979 18 9C18 8.87021 17.9522 8.74498 17.8656 8.64826ZM9.00002 12.6914C6.96479 12.6914 5.30861 11.0352 5.30861 9C5.30861 6.96477 6.96479 5.30859 9.00002 5.30859C11.0352 5.30859 12.6914 6.96477 12.6914 9C12.6914 11.0352 11.0352 12.6914 9.00002 12.6914Z" fill="#E9E9E9"/>
                                            <path d="M9.52734 7.94531C9.52734 7.4148 9.7907 6.94811 10.1913 6.66105C9.83183 6.47701 9.43084 6.36328 9 6.36328C7.54618 6.36328 6.36328 7.54618 6.36328 9C6.36328 10.4538 7.54618 11.6367 9 11.6367C10.3016 11.6367 11.379 10.6863 11.5918 9.44445C10.5299 9.78634 9.52734 8.9832 9.52734 7.94531Z" fill="#E9E9E9"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2675_7871">
                                            <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">1,020 View</span>
                                        </div>
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M10.6661 2.15835C9.54833 1.46893 8.22375 1.08984 6.85547 1.08984C3.1308 1.08984 0 3.86483 0 7.41797C0 8.66373 0.387 9.85795 1.12212 10.8893L0.0952031 14.1134C-0.0132891 14.4539 0.241805 14.8008 0.597762 14.8008C0.680793 14.8008 0.762652 14.7812 0.836648 14.7435L3.95965 13.1556C4.0861 13.21 4.2141 13.2608 4.34348 13.3078C3.62043 12.1792 3.23437 10.8837 3.23437 9.52734C3.23437 5.488 6.63321 2.38261 10.6661 2.15835Z" fill="#E9E9E9"/>
                                            <path d="M16.8779 12.9987C17.613 11.9673 18 10.7731 18 9.52734C18 5.97291 14.8679 3.19922 11.1445 3.19922C7.41987 3.19922 4.28906 5.97421 4.28906 9.52734C4.28906 13.0818 7.4212 15.8555 11.1445 15.8555C12.1436 15.8555 13.139 15.6519 14.0402 15.2649L17.1634 16.8529C17.2561 16.9 17.3606 16.9187 17.4639 16.9065C17.5672 16.8944 17.6646 16.852 17.7438 16.7846C17.823 16.7173 17.8806 16.628 17.9093 16.528C17.9379 16.4281 17.9364 16.3219 17.9048 16.2228L16.8779 12.9987ZM9 10.0547C8.70877 10.0547 8.47266 9.81858 8.47266 9.52734C8.47266 9.23611 8.70877 9 9 9C9.29123 9 9.52734 9.23611 9.52734 9.52734C9.52734 9.81858 9.29123 10.0547 9 10.0547ZM11.1094 10.0547C10.8181 10.0547 10.582 9.81858 10.582 9.52734C10.582 9.23611 10.8181 9 11.1094 9C11.4006 9 11.6367 9.23611 11.6367 9.52734C11.6367 9.81858 11.4006 10.0547 11.1094 10.0547ZM13.2188 10.0547C12.9275 10.0547 12.6914 9.81858 12.6914 9.52734C12.6914 9.23611 12.9275 9 13.2188 9C13.51 9 13.7461 9.23611 13.7461 9.52734C13.7461 9.81858 13.51 10.0547 13.2188 10.0547Z" fill="#E9E9E9"/>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">560 Comments</span>
                                        </div>
                                    </div>
                                    <a href="#" className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%]">Read More 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z" fill="url(#paint0_linear_2639_7064)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_2639_7064" x1="0.000158411" y1="9.99993" x2="14.9998" y2="9.99993" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#EA070B"/>
                                            <stop offset="0.158" stopColor="#DF1418"/>
                                            <stop offset="1" stopColor="#FF686B"/>
                                            </linearGradient>
                                            </defs>
                                         </svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="bg-[#FFFF]/10 px-[20px] pt-[20px] pb-[26px] backdrop-blur-sm 2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] hover:bg-[#2E0707]">
                                <div className="flex flex-col justify-between gap-[32px] h-full">
                                <div className="flex flex-col flex-grow height-full">
                                    <img src="./images/blog/blog1.png" width="399" height="270" className="2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] mb-[18px] w-full"/>
                                    <h3 className="font-denton text-[24px] font-bold leading-[32px] text-white mb-[6px]">The Future of AI in Everyday Life</h3>
                                    <div className="flex items-center justify-between gap-[10px] w-full mb-[30px]">
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clipPath="url(#clip0_2675_7871)">
                                            <path d="M17.8656 8.64826C17.705 8.46904 13.8404 4.25391 9.00002 4.25391C4.15963 4.25391 0.295117 8.46904 0.134418 8.64826C0.0478587 8.74497 0 8.87021 0 9C0 9.12979 0.0478587 9.25503 0.134418 9.35174C0.295117 9.53096 4.1597 13.7461 9.00002 13.7461C13.8403 13.7461 17.7049 9.53096 17.8656 9.35174C17.9522 9.25502 18 9.12979 18 9C18 8.87021 17.9522 8.74498 17.8656 8.64826ZM9.00002 12.6914C6.96479 12.6914 5.30861 11.0352 5.30861 9C5.30861 6.96477 6.96479 5.30859 9.00002 5.30859C11.0352 5.30859 12.6914 6.96477 12.6914 9C12.6914 11.0352 11.0352 12.6914 9.00002 12.6914Z" fill="#E9E9E9"/>
                                            <path d="M9.52734 7.94531C9.52734 7.4148 9.7907 6.94811 10.1913 6.66105C9.83183 6.47701 9.43084 6.36328 9 6.36328C7.54618 6.36328 6.36328 7.54618 6.36328 9C6.36328 10.4538 7.54618 11.6367 9 11.6367C10.3016 11.6367 11.379 10.6863 11.5918 9.44445C10.5299 9.78634 9.52734 8.9832 9.52734 7.94531Z" fill="#E9E9E9"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2675_7871">
                                            <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">1,020 View</span>
                                        </div>
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M10.6661 2.15835C9.54833 1.46893 8.22375 1.08984 6.85547 1.08984C3.1308 1.08984 0 3.86483 0 7.41797C0 8.66373 0.387 9.85795 1.12212 10.8893L0.0952031 14.1134C-0.0132891 14.4539 0.241805 14.8008 0.597762 14.8008C0.680793 14.8008 0.762652 14.7812 0.836648 14.7435L3.95965 13.1556C4.0861 13.21 4.2141 13.2608 4.34348 13.3078C3.62043 12.1792 3.23437 10.8837 3.23437 9.52734C3.23437 5.488 6.63321 2.38261 10.6661 2.15835Z" fill="#E9E9E9"/>
                                            <path d="M16.8779 12.9987C17.613 11.9673 18 10.7731 18 9.52734C18 5.97291 14.8679 3.19922 11.1445 3.19922C7.41987 3.19922 4.28906 5.97421 4.28906 9.52734C4.28906 13.0818 7.4212 15.8555 11.1445 15.8555C12.1436 15.8555 13.139 15.6519 14.0402 15.2649L17.1634 16.8529C17.2561 16.9 17.3606 16.9187 17.4639 16.9065C17.5672 16.8944 17.6646 16.852 17.7438 16.7846C17.823 16.7173 17.8806 16.628 17.9093 16.528C17.9379 16.4281 17.9364 16.3219 17.9048 16.2228L16.8779 12.9987ZM9 10.0547C8.70877 10.0547 8.47266 9.81858 8.47266 9.52734C8.47266 9.23611 8.70877 9 9 9C9.29123 9 9.52734 9.23611 9.52734 9.52734C9.52734 9.81858 9.29123 10.0547 9 10.0547ZM11.1094 10.0547C10.8181 10.0547 10.582 9.81858 10.582 9.52734C10.582 9.23611 10.8181 9 11.1094 9C11.4006 9 11.6367 9.23611 11.6367 9.52734C11.6367 9.81858 11.4006 10.0547 11.1094 10.0547ZM13.2188 10.0547C12.9275 10.0547 12.6914 9.81858 12.6914 9.52734C12.6914 9.23611 12.9275 9 13.2188 9C13.51 9 13.7461 9.23611 13.7461 9.52734C13.7461 9.81858 13.51 10.0547 13.2188 10.0547Z" fill="#E9E9E9"/>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">560 Comments</span>
                                        </div>
                                    </div>
                                    <a href="#" className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%]">Read More 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z" fill="url(#paint0_linear_2639_7064)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_2639_7064" x1="0.000158411" y1="9.99993" x2="14.9998" y2="9.99993" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#EA070B"/>
                                            <stop offset="0.158" stopColor="#DF1418"/>
                                            <stop offset="1" stopColor="#FF686B"/>
                                            </linearGradient>
                                            </defs>
                                         </svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="bg-[#FFFF]/10 px-[20px] pt-[20px] pb-[26px] backdrop-blur-sm 2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] hover:bg-[#2E0707]">
                                <div className="flex flex-col justify-between gap-[32px] h-full">
                                <div className="flex flex-col flex-grow height-full">
                                    <img src="./images/blog/blog1.png" width="399" height="270" className="2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] mb-[18px] w-full"/>
                                    <h3 className="font-denton text-[24px] font-bold leading-[32px] text-white mb-[6px]">The Future of AI in Everyday Life</h3>
                                    <div className="flex items-center justify-between gap-[10px] w-full mb-[30px]">
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clipPath="url(#clip0_2675_7871)">
                                            <path d="M17.8656 8.64826C17.705 8.46904 13.8404 4.25391 9.00002 4.25391C4.15963 4.25391 0.295117 8.46904 0.134418 8.64826C0.0478587 8.74497 0 8.87021 0 9C0 9.12979 0.0478587 9.25503 0.134418 9.35174C0.295117 9.53096 4.1597 13.7461 9.00002 13.7461C13.8403 13.7461 17.7049 9.53096 17.8656 9.35174C17.9522 9.25502 18 9.12979 18 9C18 8.87021 17.9522 8.74498 17.8656 8.64826ZM9.00002 12.6914C6.96479 12.6914 5.30861 11.0352 5.30861 9C5.30861 6.96477 6.96479 5.30859 9.00002 5.30859C11.0352 5.30859 12.6914 6.96477 12.6914 9C12.6914 11.0352 11.0352 12.6914 9.00002 12.6914Z" fill="#E9E9E9"/>
                                            <path d="M9.52734 7.94531C9.52734 7.4148 9.7907 6.94811 10.1913 6.66105C9.83183 6.47701 9.43084 6.36328 9 6.36328C7.54618 6.36328 6.36328 7.54618 6.36328 9C6.36328 10.4538 7.54618 11.6367 9 11.6367C10.3016 11.6367 11.379 10.6863 11.5918 9.44445C10.5299 9.78634 9.52734 8.9832 9.52734 7.94531Z" fill="#E9E9E9"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2675_7871">
                                            <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">1,020 View</span>
                                        </div>
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M10.6661 2.15835C9.54833 1.46893 8.22375 1.08984 6.85547 1.08984C3.1308 1.08984 0 3.86483 0 7.41797C0 8.66373 0.387 9.85795 1.12212 10.8893L0.0952031 14.1134C-0.0132891 14.4539 0.241805 14.8008 0.597762 14.8008C0.680793 14.8008 0.762652 14.7812 0.836648 14.7435L3.95965 13.1556C4.0861 13.21 4.2141 13.2608 4.34348 13.3078C3.62043 12.1792 3.23437 10.8837 3.23437 9.52734C3.23437 5.488 6.63321 2.38261 10.6661 2.15835Z" fill="#E9E9E9"/>
                                            <path d="M16.8779 12.9987C17.613 11.9673 18 10.7731 18 9.52734C18 5.97291 14.8679 3.19922 11.1445 3.19922C7.41987 3.19922 4.28906 5.97421 4.28906 9.52734C4.28906 13.0818 7.4212 15.8555 11.1445 15.8555C12.1436 15.8555 13.139 15.6519 14.0402 15.2649L17.1634 16.8529C17.2561 16.9 17.3606 16.9187 17.4639 16.9065C17.5672 16.8944 17.6646 16.852 17.7438 16.7846C17.823 16.7173 17.8806 16.628 17.9093 16.528C17.9379 16.4281 17.9364 16.3219 17.9048 16.2228L16.8779 12.9987ZM9 10.0547C8.70877 10.0547 8.47266 9.81858 8.47266 9.52734C8.47266 9.23611 8.70877 9 9 9C9.29123 9 9.52734 9.23611 9.52734 9.52734C9.52734 9.81858 9.29123 10.0547 9 10.0547ZM11.1094 10.0547C10.8181 10.0547 10.582 9.81858 10.582 9.52734C10.582 9.23611 10.8181 9 11.1094 9C11.4006 9 11.6367 9.23611 11.6367 9.52734C11.6367 9.81858 11.4006 10.0547 11.1094 10.0547ZM13.2188 10.0547C12.9275 10.0547 12.6914 9.81858 12.6914 9.52734C12.6914 9.23611 12.9275 9 13.2188 9C13.51 9 13.7461 9.23611 13.7461 9.52734C13.7461 9.81858 13.51 10.0547 13.2188 10.0547Z" fill="#E9E9E9"/>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">560 Comments</span>
                                        </div>
                                    </div>
                                    <a href="#" className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%]">Read More 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z" fill="url(#paint0_linear_2639_7064)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_2639_7064" x1="0.000158411" y1="9.99993" x2="14.9998" y2="9.99993" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#EA070B"/>
                                            <stop offset="0.158" stopColor="#DF1418"/>
                                            <stop offset="1" stopColor="#FF686B"/>
                                            </linearGradient>
                                            </defs>
                                         </svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="bg-[#FFFF]/10 px-[20px] pt-[20px] pb-[26px] backdrop-blur-sm 2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] hover:bg-[#2E0707]">
                                <div className="flex flex-col justify-between gap-[32px] h-full">
                                <div className="flex flex-col flex-grow height-full">
                                    <img src="./images/blog/blog1.png" width="399" height="270" className="2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] mb-[18px] w-full"/>
                                    <h3 className="font-denton text-[24px] font-bold leading-[32px] text-white mb-[6px]">The Future of AI in Everyday Life</h3>
                                    <div className="flex items-center justify-between gap-[10px] w-full mb-[30px]">
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clipPath="url(#clip0_2675_7871)">
                                            <path d="M17.8656 8.64826C17.705 8.46904 13.8404 4.25391 9.00002 4.25391C4.15963 4.25391 0.295117 8.46904 0.134418 8.64826C0.0478587 8.74497 0 8.87021 0 9C0 9.12979 0.0478587 9.25503 0.134418 9.35174C0.295117 9.53096 4.1597 13.7461 9.00002 13.7461C13.8403 13.7461 17.7049 9.53096 17.8656 9.35174C17.9522 9.25502 18 9.12979 18 9C18 8.87021 17.9522 8.74498 17.8656 8.64826ZM9.00002 12.6914C6.96479 12.6914 5.30861 11.0352 5.30861 9C5.30861 6.96477 6.96479 5.30859 9.00002 5.30859C11.0352 5.30859 12.6914 6.96477 12.6914 9C12.6914 11.0352 11.0352 12.6914 9.00002 12.6914Z" fill="#E9E9E9"/>
                                            <path d="M9.52734 7.94531C9.52734 7.4148 9.7907 6.94811 10.1913 6.66105C9.83183 6.47701 9.43084 6.36328 9 6.36328C7.54618 6.36328 6.36328 7.54618 6.36328 9C6.36328 10.4538 7.54618 11.6367 9 11.6367C10.3016 11.6367 11.379 10.6863 11.5918 9.44445C10.5299 9.78634 9.52734 8.9832 9.52734 7.94531Z" fill="#E9E9E9"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2675_7871">
                                            <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">1,020 View</span>
                                        </div>
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M10.6661 2.15835C9.54833 1.46893 8.22375 1.08984 6.85547 1.08984C3.1308 1.08984 0 3.86483 0 7.41797C0 8.66373 0.387 9.85795 1.12212 10.8893L0.0952031 14.1134C-0.0132891 14.4539 0.241805 14.8008 0.597762 14.8008C0.680793 14.8008 0.762652 14.7812 0.836648 14.7435L3.95965 13.1556C4.0861 13.21 4.2141 13.2608 4.34348 13.3078C3.62043 12.1792 3.23437 10.8837 3.23437 9.52734C3.23437 5.488 6.63321 2.38261 10.6661 2.15835Z" fill="#E9E9E9"/>
                                            <path d="M16.8779 12.9987C17.613 11.9673 18 10.7731 18 9.52734C18 5.97291 14.8679 3.19922 11.1445 3.19922C7.41987 3.19922 4.28906 5.97421 4.28906 9.52734C4.28906 13.0818 7.4212 15.8555 11.1445 15.8555C12.1436 15.8555 13.139 15.6519 14.0402 15.2649L17.1634 16.8529C17.2561 16.9 17.3606 16.9187 17.4639 16.9065C17.5672 16.8944 17.6646 16.852 17.7438 16.7846C17.823 16.7173 17.8806 16.628 17.9093 16.528C17.9379 16.4281 17.9364 16.3219 17.9048 16.2228L16.8779 12.9987ZM9 10.0547C8.70877 10.0547 8.47266 9.81858 8.47266 9.52734C8.47266 9.23611 8.70877 9 9 9C9.29123 9 9.52734 9.23611 9.52734 9.52734C9.52734 9.81858 9.29123 10.0547 9 10.0547ZM11.1094 10.0547C10.8181 10.0547 10.582 9.81858 10.582 9.52734C10.582 9.23611 10.8181 9 11.1094 9C11.4006 9 11.6367 9.23611 11.6367 9.52734C11.6367 9.81858 11.4006 10.0547 11.1094 10.0547ZM13.2188 10.0547C12.9275 10.0547 12.6914 9.81858 12.6914 9.52734C12.6914 9.23611 12.9275 9 13.2188 9C13.51 9 13.7461 9.23611 13.7461 9.52734C13.7461 9.81858 13.51 10.0547 13.2188 10.0547Z" fill="#E9E9E9"/>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">560 Comments</span>
                                        </div>
                                    </div>
                                    <a href="#" className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%]">Read More 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z" fill="url(#paint0_linear_2639_7064)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_2639_7064" x1="0.000158411" y1="9.99993" x2="14.9998" y2="9.99993" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#EA070B"/>
                                            <stop offset="0.158" stopColor="#DF1418"/>
                                            <stop offset="1" stopColor="#FF686B"/>
                                            </linearGradient>
                                            </defs>
                                         </svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="bg-[#FFFF]/10 px-[20px] pt-[20px] pb-[26px] backdrop-blur-sm 2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] hover:bg-[#2E0707]">
                                <div className="flex flex-col justify-between gap-[32px] h-full">
                                <div className="flex flex-col flex-grow height-full">
                                    <img src="./images/blog/blog1.png" width="399" height="270" className="2xl:rounded-[16px] xl:rounded-[16px] lg:rounded-[16px] md:rounded-[15px] sm:rounded-[10px] rounded-[10px] mb-[18px] w-full"/>
                                    <h3 className="font-denton text-[24px] font-bold leading-[32px] text-white mb-[6px]">The Future of AI in Everyday Life</h3>
                                    <div className="flex items-center justify-between gap-[10px] w-full mb-[30px]">
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clipPath="url(#clip0_2675_7871)">
                                            <path d="M17.8656 8.64826C17.705 8.46904 13.8404 4.25391 9.00002 4.25391C4.15963 4.25391 0.295117 8.46904 0.134418 8.64826C0.0478587 8.74497 0 8.87021 0 9C0 9.12979 0.0478587 9.25503 0.134418 9.35174C0.295117 9.53096 4.1597 13.7461 9.00002 13.7461C13.8403 13.7461 17.7049 9.53096 17.8656 9.35174C17.9522 9.25502 18 9.12979 18 9C18 8.87021 17.9522 8.74498 17.8656 8.64826ZM9.00002 12.6914C6.96479 12.6914 5.30861 11.0352 5.30861 9C5.30861 6.96477 6.96479 5.30859 9.00002 5.30859C11.0352 5.30859 12.6914 6.96477 12.6914 9C12.6914 11.0352 11.0352 12.6914 9.00002 12.6914Z" fill="#E9E9E9"/>
                                            <path d="M9.52734 7.94531C9.52734 7.4148 9.7907 6.94811 10.1913 6.66105C9.83183 6.47701 9.43084 6.36328 9 6.36328C7.54618 6.36328 6.36328 7.54618 6.36328 9C6.36328 10.4538 7.54618 11.6367 9 11.6367C10.3016 11.6367 11.379 10.6863 11.5918 9.44445C10.5299 9.78634 9.52734 8.9832 9.52734 7.94531Z" fill="#E9E9E9"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2675_7871">
                                            <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">1,020 View</span>
                                        </div>
                                        <div className="flex gap-[8px] items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M10.6661 2.15835C9.54833 1.46893 8.22375 1.08984 6.85547 1.08984C3.1308 1.08984 0 3.86483 0 7.41797C0 8.66373 0.387 9.85795 1.12212 10.8893L0.0952031 14.1134C-0.0132891 14.4539 0.241805 14.8008 0.597762 14.8008C0.680793 14.8008 0.762652 14.7812 0.836648 14.7435L3.95965 13.1556C4.0861 13.21 4.2141 13.2608 4.34348 13.3078C3.62043 12.1792 3.23437 10.8837 3.23437 9.52734C3.23437 5.488 6.63321 2.38261 10.6661 2.15835Z" fill="#E9E9E9"/>
                                            <path d="M16.8779 12.9987C17.613 11.9673 18 10.7731 18 9.52734C18 5.97291 14.8679 3.19922 11.1445 3.19922C7.41987 3.19922 4.28906 5.97421 4.28906 9.52734C4.28906 13.0818 7.4212 15.8555 11.1445 15.8555C12.1436 15.8555 13.139 15.6519 14.0402 15.2649L17.1634 16.8529C17.2561 16.9 17.3606 16.9187 17.4639 16.9065C17.5672 16.8944 17.6646 16.852 17.7438 16.7846C17.823 16.7173 17.8806 16.628 17.9093 16.528C17.9379 16.4281 17.9364 16.3219 17.9048 16.2228L16.8779 12.9987ZM9 10.0547C8.70877 10.0547 8.47266 9.81858 8.47266 9.52734C8.47266 9.23611 8.70877 9 9 9C9.29123 9 9.52734 9.23611 9.52734 9.52734C9.52734 9.81858 9.29123 10.0547 9 10.0547ZM11.1094 10.0547C10.8181 10.0547 10.582 9.81858 10.582 9.52734C10.582 9.23611 10.8181 9 11.1094 9C11.4006 9 11.6367 9.23611 11.6367 9.52734C11.6367 9.81858 11.4006 10.0547 11.1094 10.0547ZM13.2188 10.0547C12.9275 10.0547 12.6914 9.81858 12.6914 9.52734C12.6914 9.23611 12.9275 9 13.2188 9C13.51 9 13.7461 9.23611 13.7461 9.52734C13.7461 9.81858 13.51 10.0547 13.2188 10.0547Z" fill="#E9E9E9"/>
                                            </svg>
                                        <span className="font-lato text-[16px] text-[#E9E9E9] font-normal leading-[100%]">560 Comments</span>
                                        </div>
                                    </div>
                                    <a href="#" className="flex items-center gap-[10px] text-white font-denton font-bold text-[18px] leading-[100%]">Read More 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path d="M14.8489 10.4392L7.9075 19.617C7.72435 19.8563 7.40933 19.9991 7.06134 19.9991H0.999061C0.289536 20.0284 -0.293615 19.3092 0.160232 18.7314L6.96244 10.0106L0.365361 1.26134C-0.0800613 0.674958 0.507851 -0.025701 1.21152 0.000725499H7.06134C7.40933 0.000725499 7.72435 0.143571 7.9075 0.382838L14.8489 9.56068C15.0504 9.82852 15.0504 10.1713 14.8489 10.4392Z" fill="url(#paint0_linear_2639_7064)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_2639_7064" x1="0.000158411" y1="9.99993" x2="14.9998" y2="9.99993" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#EA070B"/>
                                            <stop offset="0.158" stopColor="#DF1418"/>
                                            <stop offset="1" stopColor="#FF686B"/>
                                            </linearGradient>
                                            </defs>
                                         </svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                    </div>
                    </div>
                   </Slider>
                </div>
                <div className="flex justify-end items-end gap-[12px]">
                <button className="custom-prev" onClick={goToPrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="107" height="52" viewBox="0 0 107 52" fill="none">
                        <path d="M0 26C0 11.6406 11.6406 0 26 0H81C95.3594 0 107 11.6406 107 26C107 40.3594 95.3594 52 81 52H26C11.6406 52 0 40.3594 0 26Z" fill="#232323"/>
                        <path d="M26 0.5H81C95.0833 0.5 106.5 11.9167 106.5 26C106.5 40.0833 95.0833 51.5 81 51.5H26C11.9167 51.5 0.5 40.0833 0.5 26C0.5 11.9167 11.9167 0.5 26 0.5Z" stroke="white" strokeOpacity="0.5"/>
                        <path d="M40.3593 25.1009L48.9503 16.3509C49.1818 16.1232 49.4918 15.9972 49.8136 16C50.1354 16.0029 50.4432 16.1344 50.6708 16.3661C50.8983 16.5979 51.0274 16.9114 51.0302 17.2391C51.033 17.5669 50.9093 17.8826 50.6857 18.1184L44.1897 24.7346H65.7727C66.0982 24.7346 66.4104 24.8663 66.6405 25.1008C66.8707 25.3352 67 25.6531 67 25.9846C67 26.3162 66.8707 26.6341 66.6405 26.8685C66.4104 27.1029 66.0982 27.2346 65.7727 27.2346H44.1897L50.6857 33.8509C50.8029 33.9662 50.8964 34.1041 50.9607 34.2566C51.0251 34.4091 51.0589 34.5732 51.0603 34.7391C51.0618 34.9051 51.0307 35.0697 50.969 35.2233C50.9073 35.377 50.8162 35.5165 50.7009 35.6339C50.5857 35.7512 50.4487 35.8441 50.2978 35.9069C50.147 35.9698 49.9854 36.0014 49.8224 36C49.6595 35.9985 49.4984 35.964 49.3487 35.8985C49.199 35.833 49.0635 35.7378 48.9503 35.6184L40.3593 26.8684C40.1292 26.634 40 26.3161 40 25.9846C40 25.6532 40.1292 25.3353 40.3593 25.1009Z" fill="white"/>
                        </svg>
                </button>
                <button className="custom-next" onClick={goToNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="107" height="52" viewBox="0 0 107 52" fill="none">
                        <path d="M107 26C107 11.6406 95.3594 0 81 0H26C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52H81C95.3594 52 107 40.3594 107 26Z" fill="#232323"/>
                        <path d="M81 0.5H26C11.9167 0.5 0.5 11.9167 0.5 26C0.5 40.0833 11.9167 51.5 26 51.5H81C95.0833 51.5 106.5 40.0833 106.5 26C106.5 11.9167 95.0833 0.5 81 0.5Z" stroke="white" strokeOpacity="0.5"/>
                        <path d="M66.6407 25.1009L58.0497 16.3509C57.8182 16.1232 57.5082 15.9972 57.1864 16C56.8646 16.0029 56.5568 16.1344 56.3292 16.3661C56.1017 16.5979 55.9726 16.9114 55.9698 17.2391C55.967 17.5669 56.0907 17.8826 56.3143 18.1184L62.8103 24.7346H41.2273C40.9018 24.7346 40.5896 24.8663 40.3595 25.1008C40.1293 25.3352 40 25.6531 40 25.9846C40 26.3162 40.1293 26.6341 40.3595 26.8685C40.5896 27.1029 40.9018 27.2346 41.2273 27.2346H62.8103L56.3143 33.8509C56.1971 33.9662 56.1036 34.1041 56.0393 34.2566C55.9749 34.4091 55.9411 34.5732 55.9397 34.7391C55.9382 34.9051 55.9693 35.0697 56.031 35.2233C56.0927 35.377 56.1838 35.5165 56.2991 35.6339C56.4143 35.7512 56.5513 35.8441 56.7022 35.9069C56.853 35.9698 57.0146 36.0014 57.1776 36C57.3405 35.9985 57.5016 35.964 57.6513 35.8985C57.801 35.833 57.9365 35.7378 58.0497 35.6184L66.6407 26.8684C66.8708 26.634 67 26.3161 67 25.9846C67 25.6532 66.8708 25.3353 66.6407 25.1009Z" fill="white"/>
                        </svg>
                </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FutureOfAi