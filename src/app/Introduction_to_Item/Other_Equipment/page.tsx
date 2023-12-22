import Image from 'next/image.js';
import './other_equipment.css';
import {hospital, etc} from './ItemBox';
import Link from 'next/link.js';

export default function Other_Equipment(){
    return(
        <div className="Introduction-page" id = "Introduction-page-9">
            {/* 병원 기기류 */}
		    <div className = "etc">
				<Image src={hospital} alt='hospital'/>


				<Link href="/download/e-억조카다록.pdf#page=107" target = "_blank">
					<div>
						<p>병원기기 카탈로그바로가기</p>
					</div>
				</Link>
			</div>

			{/* 기타 주방용품류 */}
			<div className = "etc">
				<Image src={etc} alt='etc'/>

				<Link href="/download/e-억조카다록.pdf#page=83" target = "_blank">
					<div>
						<p>기타주방용품 카탈로그바로가기</p>
					</div>
				</Link>
			</div>
		</div>
    );
}