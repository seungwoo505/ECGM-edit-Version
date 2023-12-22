'use client';
import Image from "next/image";
import Link from "next/link";
import "./servicecenter.css";
import notice_bar from '/public/image/소개바/공지사항.jpg';
import follow_bar from '/public/image/소개바/사후관리.jpg';
import reference_bar from '/public/image/소개바/자료실.jpg';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ServiceCenter({
    children,
  }: {
    children: React.ReactNode
  }){
    const pathname = usePathname();
    const [bar, setBar] = useState(notice_bar);
    
    useEffect(() =>{
      setBar(pathname === "/ServiceCenter/Notice" ? notice_bar : pathname === "/ServiceCenter/follow_Management" ? follow_bar : reference_bar);
    }, [pathname]);

    return(
        <>
		      <div><Image id = "minbar" src={bar} alt="bar"/></div>
	        <div className="ServiceCenter-triggers">
		        <Link href="/ServiceCenter/Notice" id="page1" className={ "ServiceCenter-touch-button " + (bar === notice_bar ? "shadow" : "")}>공지사항</Link>
		        <Link href="/ServiceCenter/follow_Management" id="page2" className={ "ServiceCenter-touch-button " + (bar === follow_bar ? "shadow" : "")}>사후관리</Link>
		        <Link href="/ServiceCenter/Reference_Room" id="page3" className={ "ServiceCenter-touch-button " + (bar === reference_bar ? "shadow" : "")}>자료실</Link>
	        </div>
            {children}
        </>
    );
}