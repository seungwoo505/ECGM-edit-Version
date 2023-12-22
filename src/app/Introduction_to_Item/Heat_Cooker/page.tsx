'use client'
import './heat_cooker.css';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import {motion, AnimatePresence} from "framer-motion";
import Link from 'next/link.js';
import {Names1, Names2, Main_Images1, Main_Images2, Second_Images1, Second_Images2, Models1, Explanations1, Explanations2} from './ItemBox';

export default function Heat_Cooker(){
    const [page, setPage] = useState<number>(0);
    const [selectedId, setSelectedId] = useState<String | null>(null);
    const [close1, setClose1] = useState<Boolean>(true);
    const [close2, setClose2] = useState<Boolean>(true);
    const [gas_img, setGas_img] = useState<StaticImageData>(Main_Images1[0]);

    const main_images = [Main_Images1, Main_Images2];
    const names = [Names1, Names2];
    const second_images = [Second_Images1, Second_Images2];
    const explanations = [Explanations1, Explanations2];

    useEffect(() =>{
        const storage = localStorage.getItem("number");
        if(storage !== null){
            setSelectedId(storage);
            setClose1(false);
            setGas_img(Main_Images1[Number(storage)]);
            localStorage.removeItem("number");
        }
    }, []);

    const gas_details = (e:React.MouseEvent<HTMLDivElement>) =>{
        setSelectedId(`${e.currentTarget.dataset.value}`);
        setGas_img(main_images[page][Number(e.currentTarget.dataset.value)]);
        if(page==0) setClose1(false);
        else if(page==1) setClose2(false);
    };

    const change_img = (e:React.MouseEvent<HTMLDivElement>) => {
        setGas_img(second_images[page][Number(selectedId)][Number(e.currentTarget.dataset.value)]);
    };

    const gas_close1 = () =>{
        setClose1(true);
    };

    const gas_close2 = () =>{
        setClose2(true);
    };

    const gas_one = () => {
        setPage(0);
    };

    const gas_two = () => {
        setPage(1);
    };

    return(
        <>
            {close1 && close2 && (
                <div className="Introduction-page" id = "Introduction-page-2">
				    <div id = "certification">
					    <div id = "grid-container">
                            {names[page].map((e, i) => {
                                return(
                                    <motion.div id = {`gas_im${i}`} className = {e == "" ? "blank Introduction_imgs" :"Introduction_imgs"} key={i} data-value={i} layoutId={`${i}`} onClick={gas_details}>
                                        <motion.div className = "Introduction_img">
                                            <Image id = {`gas_img${i}`} src={main_images[page][i]} alt={`gas_img${i}`}/>
                                        </motion.div>
                                        <motion.a id = {`gas_txt${i}`} className = "txt">{e}</motion.a>
                                    </motion.div>
                                );
                            })}
                        </div>

					    {/*구역 이동*/}
	    			    <div className = "paginate">
	    				    <div className = "go">
							    <Link href="/download/e-억조카다록.pdf#page=19" target = "_blank">
								    <button>카탈로그 바로가기</button>
							    </Link>
						    </div>
	      				    <a id = "gas_one" className={page === 0 ? "currentPage" : ""} onClick ={gas_one}>1</a> {/*초기 첫 페이지 */}
	      				    <a id = "gas_two" className={page === 1 ? "currentPage" : ""} onClick = {gas_two}>2</a>
	    			    </div>
				    </div>
			    </div>
            )}

			{/**상세 기능*/}
            <AnimatePresence>
                {page==0 && !close1 && (
                    <motion.div className = "myModal" id = "gas1" layoutId={`${selectedId}`}>
				        <motion.span id = "gas1_close" onClick={gas_close1}>&times;</motion.span>
					    <motion.div id = "gas1_leftimages" className = "left">
						    <Image id = "gas1_bigimg" src ={gas_img} alt='mainImage'/>

						    <motion.div id = "gas1_biglittleimgs">
                                {second_images[page][Number(selectedId)].map((e, i) =>{
                                    return(
                                        <motion.div id = {`gas1_divimg${i}`} className = "gas1_imgs" key={i} data-value={i} onClick={change_img}>
								            <motion.a>
									            <Image id = {`gas1_littleimg${i}`} src={e} alt={`secondImage${i}`}/>
								            </motion.a>
							            </motion.div>
                                    );
                                })}
						    </motion.div>
					    </motion.div>

					    <motion.div id = "gas1_rightexplanation" className = "right">
						    <motion.h1 id = "gas1_title">{names[page][Number(selectedId)]}</motion.h1>

						    <motion.p id = "gas1_explanation">{explanations[page][Number(selectedId)]}</motion.p>
					    </motion.div>

					    <motion.div id = "gas1_bottom">
						    <motion.h2 id = "pd">
							    PRODECT DETAILS
						    </motion.h2>

						    <motion.table>
                                <motion.thead id = "gas1_thead">
                                    <motion.tr>
                                        {Models1[Number(selectedId)][0].map((e, i) =>{
                                            return(
                                                <motion.td key={i}>{e}</motion.td>
                                            );
                                        })}
                                    </motion.tr>
                                </motion.thead>
                                            
                                <motion.tbody id = "gas1_tbody">
                                    {Models1[Number(selectedId)].slice(1).map((e, i) =>{
                                        return(
                                            <motion.tr key={i}>
                                                {e.map((r, j) =>{
                                                    return(
                                                        <motion.td key={j}>{r}</motion.td>
                                                    );
                                                })}
                                            </motion.tr>
                                        );
                                    })}
                                </motion.tbody>
						    </motion.table>
					    </motion.div>
			        </motion.div>
                )}

                {page==1 && !close2 && (
                    <motion.div className = "myModal" id = "gas2" layoutId={`${selectedId}`}>
                        <motion.span id = "gas2_close" onClick={gas_close2}>&times;</motion.span>
                        <motion.div id = "gas2_leftimages" className = "left">
                            <Image id = "gas2_bigimg" src = {gas_img} alt='mainImage'/>
                        </motion.div>
    
                        <motion.div id = "gas2_rightexplanation" className = "right">
                            <motion.h1 id = "gas2_title">{names[page][Number(selectedId)]}</motion.h1>
    
                            <motion.p id = "gas2_explanation">{explanations[page][Number(selectedId)]}</motion.p>
                        </motion.div>
                        <motion.div id = "gas2_bottom" className = "bottom">
                            <motion.div id = "gas2_biglittleimgs">
                                {second_images[page][Number(selectedId)].map((e, i) =>{
                                    return(
                                        <motion.div id = {`gas2_divimg${i}`} className = "gas2_imgs" key={i} data-value={i} onClick={change_img}>
                                            <motion.a>
                                                <Image id = {`gas2_minimg${i}`} src={e} alt={`secondImage${i}`}/>
                                            </motion.a>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}