'use client';
import Link from "next/link";
import './aboutus.css';
import Image from "next/image";
import { useState, useEffect } from "react";
import greeting_bar from '/public/image/소개바/인사말.jpg';
import history_bar from '/public/image/소개바/회사연혁.jpg';
import businessitem_bar from '/public/image/소개바/영업종목.jpg';
import cretufucates_bar from '/public/image/소개바/인증서및수상.jpg';
import { usePathname } from "next/navigation";

export default function AboutUsLayout({
    children,
  }: {
    children: React.ReactNode
  }){
    const pathname = usePathname();
    const [bar, setBar] = useState(greeting_bar);

    useEffect(()=>{
      setBar(pathname == "/AboutUs/Greeting" ? greeting_bar : pathname === "/AboutUs/History" ? history_bar : pathname === "/AboutUs/BusinessItem" ? businessitem_bar : cretufucates_bar);
    }, [pathname]);
    return(
        <>
          <div><Image id = "minbar" src={bar} alt="bar"/></div>
          <div className="AboutUs-triggers">
		        <Link href= "/AboutUs/Greeting" id="page1" className={ "AboutUs-touch-button " + (bar === greeting_bar ? "shadow" : "") }>인사말</Link>
		        <Link href= "/AboutUs/History" id="page2" className={ "AboutUs-touch-button " + (bar === history_bar ? "shadow" : "") }>회사연혁</Link>
		        <Link href= "/AboutUs/BusinessItem" id="page3" className={ "AboutUs-touch-button " + (bar === businessitem_bar ? "shadow" : "") }>영업종목</Link>
		        <Link href= "/AboutUs/Cretificates" id="page4" className={ "AboutUs-touch-button " + (bar === cretufucates_bar ? "shadow" : "") }>인증서 및 수상</Link>
	        </div>
          <div id="AboutUs-main" className="AboutUs-perspective">
            {children}
          </div>
        </>
    );
}