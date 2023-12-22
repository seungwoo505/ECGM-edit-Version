'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import slide1 from "/public/image/메인/slide1.png";
import slide2 from "/public/image/메인/slide2.png";
import slide3 from "/public/image/메인/slide3.png";
import slide4 from "/public/image/메인/slide4.png";
import './slide.css';

export default function Slide(){
	const slides = [slide1, slide2, slide3, slide4];
	const message = ["억조종합기계(주) 홈페이지에 오신 걸 환영합니다.", "품질을 최우선으로 생각하는 기업", `주방설계, 생산, 시공, 사후관리까지
																									주방에 필요한 모든 서비스를 제공`, "앞선 신용, 앞선 기술, 세계속의 기술 창조"];

	return(
		<Swiper
			pagination={{
				type: "progressbar"
			}}
			autoplay={{
				delay: 4000,
				disableOnInteraction: false
			}}
			modules={[Autoplay, Pagination]}
			loop={true}
			id = "slide">
			{slides.map((e, i)=>{
				return(
					<SwiperSlide key={i} className='slides'>
						<Image 
							src={e} 
							alt={`slide${i}`}
						/>
						<p>{message[i]}</p>
					</SwiperSlide>
				);
			})}
			
		</Swiper>
		);
}