// app/page.jsx
'use client';

import TopBar from '../components/TopBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // For Swiper 10.x+
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide1 from '../components/Slide1';
import Slide2 from '../components/Slide2';
import Slide3 from "../components/Slide3";
import Slide4 from '@/components/Slide4';
import Slide5 from '@/components/Slide5';
import Slide6 from '@/components/Slide6';
import Slide7 from '@/components/Slide7';
import Slide8 from '@/components/Slide8';
import Slide9 from '@/components/Slide9';
import Slide10 from '@/components/Slide10';
// Import additional slides
import CommentsDesktop from '../components/CommentsDesktop';
import CommentsMobile from '@/components/CommentsMobile';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="flex-grow hidden sm:flex flex-col items-center justify-center p-4">
        <div className="w-full h-3/4">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            className="h-full"
          >
            <SwiperSlide><Slide1 /></SwiperSlide>
            <SwiperSlide><Slide2 /></SwiperSlide>
            <SwiperSlide> <Slide3/> </SwiperSlide>
            <SwiperSlide> <Slide4/> </SwiperSlide>
            <SwiperSlide> <Slide5/> </SwiperSlide>
            <SwiperSlide> <Slide6/> </SwiperSlide>
            <SwiperSlide> <Slide7/> </SwiperSlide>
            <SwiperSlide> <Slide8/> </SwiperSlide>
            <SwiperSlide> <Slide9/> </SwiperSlide>
            <SwiperSlide> <Slide10/> </SwiperSlide>
          </Swiper>
        </div>
      </main>
        <div className='flex sm:hidden w-full min-h-[90vh] items-center justify-center'>
          <CommentsMobile/>
        </div>
    </div>
  );
}
