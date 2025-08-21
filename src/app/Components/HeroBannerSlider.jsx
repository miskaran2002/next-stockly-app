// app/components/HeroBannerSlider.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const banners = [
    {
        image: "https://i.ibb.co.com/hxPG0ph0/pexels-igor-ovsyannykov-56123-205961.jpg", 
        title: "Discover Amazing Products",
        subtitle: "Browse, explore, and manage your favorite products easily",
    },
    {
        image: "https://i.ibb.co.com/ym1rKkP9/pexels-tima-miroshnichenko-6545444.jpg",
        title: "Add Products Seamlessly",
        subtitle: "Login and manage your product catalog in one place",
    },
    {
        image: "https://i.ibb.co.com/xK4pQQKS/pexels-tiger-lily-4481327.jpg",
        title: "Secure & Modern Experience",
        subtitle: "Your data and experience are safe with Stickly",
    },
];

const HeroBannerSlider = () => {
    return (
        <div className="w-full">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[300px] md:h-[500px]">
                            {/* Background image */}
                            <img
                                src={banner.image}
                                alt={`Banner ${index + 1}`}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay text */}
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
                                <div className="bg-white/80 dark:bg-[#1a1035]/70 rounded-lg px-4 py-3 max-w-[90%] md:max-w-[70%] shadow-lg">
                                    <h2 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white drop-shadow mb-2">
                                        {banner.title}
                                    </h2>
                                    <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300">
                                        {banner.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroBannerSlider;
