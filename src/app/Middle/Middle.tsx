'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import {Names, Explanations, Images, Urls, url_current} from './Product';
import Link from "next/link";
import Image from 'next/image';
import Consulting from "/public/image/메인/consulting.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Middle.css";

export default function Middle(){
	return(
		<div id = "middles">
			<div id = "sidebar">
				<p>고객상담</p>
				<p>032-578-3060</p>
				<p>FAX. 032-567-3067</p>
				<p>A/S. 032-578-3060</p>
			</div>
			<div id = "intro">
				<p id = "mp">MAJOR PRODUCTS</p>
				<p id = "mii">메인 제품 사진</p>
				<Swiper
					pagination={{
						clickable: true
					}}
					modules={[Pagination]}
					loop={true}
					id="middle_slides"
					>
					{Names.map((e, i)=>{
						return(
							<SwiperSlide className = "middle_slide" key={i}>
								<Image 
									src={Images[i]} 
									alt={`${Names[i]}`}
								/>
								<div>
									<h1>{Names[i]}</h1>
									<p>
										{Explanations[i]}
									</p>

									<div>
										<Link href={Urls[i]} onClick={() => localStorage.setItem('number', `${url_current[i]}`)}>
											<button>
												제품 바로가기
											</button>
										</Link>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}
