'use client';
import Image from 'next/image';
import './Introduction_to_Item.css';
import Link from "next/link";
import { useState, useEffect } from 'react';
import general_bar from '/public/image/소개바/일반기기.jpg';
import heat_bar from '/public/image/소개바/열조리기기.jpg';
import distribution_bar from '/public/image/소개바/자율배식대.jpg';
import refrigerating_bar from '/public/image/소개바/냉장기기.jpg';
import cleaning_bar from '/public/image/소개바/세척기기.jpg';
import disinfection_bar from '/public/image/소개바/소독기기.jpg';
import food_bar from '/public/image/소개바/식품가공기기.jpg';
import cold_bar from '/public/image/소개바/취반기기.jpg';
import other_bar from '/public/image/소개바/기타기기.jpg';
import cooperative_bar from '/public/image/소개바/협력사.jpg';
import { usePathname } from "next/navigation";

export default function IntroductionToItem({
    children,
  }: {
    children: React.ReactNode
  }){
	const pathname = usePathname();
	const [bar, setBar] = useState(general_bar);

	useEffect(()=>{
		setBar(pathname === "/Introduction_to_Item/General_Equipment" ? general_bar : pathname === "/Introduction_to_Item/Heat_Cooker" ? heat_bar : pathname === "/Introduction_to_Item/Distribution_Table__ConveyorSystem" ? distribution_bar : pathname === "/Introduction_to_Item/Refrigerating_Appliances" ? refrigerating_bar : pathname === "/Introduction_to_Item/Cleaning_Equipment" ? cleaning_bar : pathname === "/Introduction_to_Item/Disinfection_Equipment" ? disinfection_bar : pathname === "/Introduction_to_Item/Food_Processing_Equipment" ? food_bar : pathname === "/Introduction_to_Item/Cold_and_Hot_Water_Basin__Exhaust_hood" ? cold_bar : pathname === "/Introduction_to_Item/Other_Equipment" ? other_bar : cooperative_bar);
	}, [pathname]);

    return(
        <>
			<div><Image id = "minbar" src={bar} alt='bar'/></div>
		    <div className="Introduction-triggers">
			    <Link id="page1" className=  { "Introduction-touch-button " + (bar === general_bar ? "shadow" : "")} href= "/Introduction_to_Item/General_Equipment">일반기기류</Link>
			    <Link id="page2" className=  { "Introduction-touch-button " + (bar === heat_bar ? "shadow" : "")} href= "/Introduction_to_Item/Heat_Cooker">열조리기기류</Link>
			    <Link id="page3" className=  { "Introduction-touch-button " + (bar === distribution_bar ? "shadow" : "")} href= "/Introduction_to_Item/Distribution_Table__ConveyorSystem">배식대/컨베이어시스템</Link>
			    <Link id="page4" className=  { "Introduction-touch-button " + (bar === refrigerating_bar ? "shadow" : "")} href= "/Introduction_to_Item/Refrigerating_Appliances">냉장기기류</Link>
			    <Link id="page5" className=  { "Introduction-touch-button " + (bar === cleaning_bar ? "shadow" : "")} href= "/Introduction_to_Item/Cleaning_Equipment">세척기기류</Link>
			    <Link id="page6" className=  { "Introduction-touch-button " + (bar === disinfection_bar ? "shadow" : "")} href= "/Introduction_to_Item/Disinfection_Equipment">소독기기류</Link>
			    <Link id="page7" className=  { "Introduction-touch-button " + (bar === food_bar ? "shadow" : "")} href= "/Introduction_to_Item/Food_Processing_Equipment">식품가공기기류</Link>
			    <Link id="page8" className=  { "Introduction-touch-button " + (bar === cold_bar ? "shadow" : "")} href= "/Introduction_to_Item/Cold_and_Hot_Water_Basin__Exhaust_hood">냉온음수대/배기후드</Link>
			    <Link id="page9" className=  { "Introduction-touch-button " + (bar === other_bar ? "shadow" : "")} href= "/Introduction_to_Item/Other_Equipment">기타기기류</Link>
			    <Link id="page10" className= { "Introduction-touch-button " + (bar === cooperative_bar ? "shadow" : "")} href= "/Introduction_to_Item/Cooperative_Company">협력사</Link>
		    </div>
			<div id="Introduction-main" className="Introduction-perspective">
				{children}
			</div>
        </>
    );
}