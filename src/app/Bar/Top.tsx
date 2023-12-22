import Link from "next/link";
import Image from "next/image";
import Logo from "/public/image/메인/MainLogo.png";
import './Top.css';

export default function Top(){
	return(
		<header id = "Mainbar">
			<Link href="/">
				<Image src={Logo} id = "logo" alt="logo"/>
			</Link>
		
			<ul>
				<li><Link className = "menu" id = "Company" href = "/AboutUs/Greeting">회사소개</Link>
					<ul id = "CompanySupportingMenu">
						<li><Link href = "/AboutUs/Greeting">인사말</Link></li>
						<li><Link href = "/AboutUs/History">회사연혁</Link></li>
						<li><Link href = "/AboutUs/BusinessItem">영업종목</Link></li>
						<li><Link href = "/AboutUs/Cretificates">인증서 및 수상</Link></li>
					</ul>
				</li>

				<li><Link className = "menu" id = "Product" href = "/Introduction_to_Item/General_Equipment">제품소개</Link>
					<ul id = "ProductSupportingMenu">
						<li><Link href= "/Introduction_to_Item/General_Equipment">일반기기류</Link></li>
						<li><Link href= "/Introduction_to_Item/Heat_Cooker">열조리기기류</Link></li>
						<li><Link href= "/Introduction_to_Item/Distribution_Table__ConveyorSystem">자율배식대/콘베이어시스템</Link></li>
						<li><Link href= "/Introduction_to_Item/Refrigerating_Appliances">냉장기기류</Link></li>
						<li><Link href= "/Introduction_to_Item/Cleaning_Equipment">세척기기류</Link></li>
						<li><Link href= "/Introduction_to_Item/Disinfection_Equipment">소독기기류</Link></li>
						<li><Link href= "/Introduction_to_Item/Food_Processing_Equipment">식품가공기기류</Link></li>
						<li><Link href= "/Introduction_to_Item/Cold_and_Hot_Water_Basin__Exhaust_hood">취반기기/냉온음수대/배기후드</Link></li>
						<li><Link href= "/Introduction_to_Item/Other_Equipment">기타기기류</Link></li>
						<li><Link href= "/Introduction_to_Item/Cooperative_Company">협력사</Link></li>
					</ul>
				</li>

				<li><Link className = "menu" id = "Performance" href = "/Performance/MajorClient">시공사진</Link></li>

				<li><Link className = "menu" id = "Service" href="/ServiceCenter/Notice">고객센터</Link>
					<ul id = "ServiceSupportingMenu">
						<li><Link href= "/ServiceCenter/Notice">공지사항</Link></li>
						<li><Link href= "/ServiceCenter/follow_Management">사후관리</Link></li>
						<li><Link href= "/ServiceCenter/Reference_Room">자료실</Link></li>
					</ul>
				</li>

				<li><Link className = "menu" id = "Directions" href="/Direction">오시는 길</Link></li>
			</ul>
		</header>
	);
}