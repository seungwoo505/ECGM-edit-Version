'use client'
import './cooperative_company.css';
import { useState } from 'react';
import {Names1, Names2, Names3, Main_Images1, Main_Images2, Main_Images3, url1, url2, url3} from './ItemBox';
import Image from 'next/image';

export default function Cooperative_Company(){
    const names = [Names1, Names2, Names3];
    const main_images = [Main_Images1, Main_Images2, Main_Images3];
    const urls = [url1, url2, url3];
    const [page, setPage] = useState<number>(0);

    const company_one = () =>{
        setPage(0);
    };

    const company_two = () =>{
        setPage(1);
    };

    const company_three = () =>{
        setPage(2);
    };

    return(
        <div className="Introduction-page" id = "Introduction-page-10">
                {names[page].map((e, i) =>{
                    return(
                        <div className = "partner firsts hovers" key={i}>
                            <a id = {`partner_url${i}`} href={urls[page][i]} target = "_blank">
                                <Image id = {`partner_img${i}`} src={main_images[page][i]} alt={`partner_img${i}`}/>
                                <p id = "partner_txt01">{e}</p>
                            </a>
                        </div>
                    );
                })}

	    		<div className = "paginate">
	      			<a id = "partner_one" className={page === 0 ? "currentPage" : ""} onClick ={company_one}>1</a>
	      			<a id = "partner_two" className={page === 1 ? "currentPage" : ""} onClick ={company_two}>2</a>
	      			<a id = "partner_three" className={page === 2 ? "currentPage" : ""} onClick ={company_three}>3</a>
	    		</div>
			</div>
    );
}