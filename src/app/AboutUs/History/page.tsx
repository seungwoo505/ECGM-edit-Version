'use client'
import Image from "next/image";
import './history.css';
import Historys from "/public/image/회사소개/회사연혁.jpg";
import Y10 from "/public/image/회사소개/y10.jpg";
import Y00 from "/public/image/회사소개/y00.jpg";
import Y90 from "/public/image/회사소개/y90.jpg";
import React, { useState } from "react";

export default function History(){
    const years = [Y10, Y00, Y90];
	const [year, setYear] = useState<number>(-1);
	const [year_cheak, setYear_cheak] = useState<String>("");

    const year_click = (e:React.MouseEvent) =>{
		const target = e.target as Element;
		
		if(target.id === year_cheak){
			setYear_cheak("");
			setYear(-1);
		}
        else if(target.id === "y10") {
			setYear_cheak("y10");
			setYear(0);
		}
        else if(target.id === "y00") {
			setYear_cheak("y00");
			setYear(1);
		}
        else if(target.id === "y90") {
			setYear_cheak("y90");
			setYear(2);
		}
    };

    return(
        <div className="AboutUs-page AboutUs-page-2">
			<div className = "cp">
				<Image src={Historys} alt="회사연혁"/>
			</div>
			<div id = {(year === 0 || year === 1|| year === 2) ? "round_cheak" : "round"}>
				<div id = "y10" className = {year === 0 ? "year_cheak" : "year"} onClick={year_click}>
					2010년대~현재
				</div>

				<div id = "y00" className = {year === 1 ? "year_cheak" : "year"} onClick={year_click}>
					2000년대
				</div>

				<div id = "y90" className = {year === 2 ? "year_cheak" : "year"} onClick={year_click}>
					1990년대
				</div>
			</div>

			{year_cheak && (
				<div id = "infomation">
				<Image id = "info_img" src={years[year]} alt="연혁"/>
			</div>
			)
			}
		</div>
    );
}