import Image from "next/image";
import Buttom_Logo from "/public/image/메인/ButtomLogo.png";
import './Buttom.css';
import Link from "next/link";

export default function Buttom(){
	return(
		<footer id = "footer">
			<Image src = {Buttom_Logo} alt="buttom"/>
			<ul className="buttom_menu">
				<li><Link id = "Company" href = "/AboutUs/Greeting">회사소개</Link></li>

				<li><Link id = "Product" href = "/Introduction_to_Item/General_Equipment">제품소개</Link></li>

				<li><Link id = "Performance" href = "/Performance/MajorClient">시공사진</Link></li>

				<li><Link id = "Service" href="/ServiceCenter/Notice">고객센터</Link></li>

				<li><Link id = "Directions" href="/Direction">오시는 길</Link></li>
			</ul>
			<p id = "buttom_ex">상호명 : 억조종합기계(주) ㅣ 대표자 : 정경숙 ㅣ 사업자등록번호 : 137-81-23207<br/>
					주소 : 인천광역시 서구 원전로 8(경서동) ㅣ TEL : 032-578-3060 ㅣ FAX : 032-567-3067<br/>
					E-Mail : ecgm3060@naver.com ㅣ Copyright 2021. 억조종합기계(주). all rights reserved.</p>
		</footer>
	);
}