'use client';
import Link from "next/link";
import Image from 'next/image';
import './performance.css';
import Construction from '/public/image/소개바/시공사진.jpg';
import { usePathname } from "next/navigation";

export default function Performance({
    children,
  }: {
    children: React.ReactNode
  }){
    const pathname = usePathname();
    return(
        <div id = "middel">
            <div>
                <Image
                src={Construction}
                alt="시공"/>
            </div>
		    <div className="Performance-triggers">
			    <Link id="page1" className={"Performance-touch-button " + (pathname === "/Performance/MajorClient" ? "shadow" : "")} href= "/Performance/MajorClient">거래처</Link>
			    <Link id="page2" className={"Performance-touch-button " + (pathname === "/Performance/ConstructionPhotos" ? "shadow" : "")} href= "/Performance/ConstructionPhotos">시공사진</Link>
		    </div>
            {children}
        </div>
    );
}