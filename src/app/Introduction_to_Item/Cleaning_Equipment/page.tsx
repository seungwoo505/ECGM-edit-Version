'use client'
import React, { useState } from 'react';
import {Names1, Names2, Main_Images1, Main_Images2, Models1, Models2, Table1, Table2, Explanations1, Explanations2} from './ItemBox';
import Image, { StaticImageData } from 'next/image';
import {motion, AnimatePresence} from "framer-motion";
import Link from 'next/link.js';
import './cleaning.css';

export default function Cleaning_Equipment() {
    const names = [Names1, Names2];
    const main_images = [Main_Images1, Main_Images2];
    const models = [Models1, Models2];
    const tables = [Table1, Table2]
    const explanations = [Explanations1, Explanations2];

    const [page, setPage] = useState<number>(0);
    const [selectedId, setSelectedId] = useState<String | null>(null);
    const [close1, setClose1] = useState<boolean>(true);
    const [close2, setClose2] = useState<boolean>(true);

    const cleaning_details = (e:React.MouseEvent<HTMLDivElement>) =>{
        setSelectedId(`${e.currentTarget.dataset.value}`);
        if(page==0 && Number(e.currentTarget.dataset.value) == 0) setClose1(false);
        else {
            setClose2(false);
        };
    };

    const cleaning_close1 = ()=>{
        setClose1(true);
    };

    const cleaning_close2 = ()=>{
        setClose2(true);
    };

    const cleaning_one = () =>{
        setPage(0);
    };

    const cleaning_two = () =>{
        setPage(1);
    };

    return(
        <>
            {close1 && close2 && (
                <div className="Introduction-page" id = "Introduction-page-5">
				    <div id = "certification">
					    <div id = "grid-container">
                            {names[page].map((e, i)=>{
                                return(
                                    <motion.div id = {`washing_im${i}`} className = {e == "" ? "blank Introduction_imgs" :"Introduction_imgs"} key={i} data-value={i} layoutId={`${i}`} onClick={cleaning_details}>
							            <motion.div className = "Introduction_img">
								            <Image id = {`washing_img${i}`} src={main_images[page][i]} alt={`washing_img${i}`}/>
							            </motion.div>
							            <motion.a id = {`washing_txt${i}`} className = "txt">{e}</motion.a>
						            </motion.div>
                                );
                            })}
					    </div>

	    			    <div className = "paginate">
                            <div className = "go">
                                <Link href="/download/e-억조카다록.pdf#page=57" target = "_blank">
                                    <button>카탈로그 바로가기</button>
                                </Link>
                            </div>
                            <a id = "washing_one" className={page === 0 ? "currentPage" : ""} onClick={cleaning_one}>1</a>
                            <a id = "washing_two" className={page === 1 ? "currentPage" : ""} onClick={cleaning_two}>2</a>
                        </div>
                    </div>
                </div>
            )}

            <AnimatePresence>
                {!close1 && (
                    <motion.div className = "myModal" id = "washing" layoutId={`${selectedId}`}>
                        <motion.span id = "washing_close" onClick={cleaning_close1}>&times;</motion.span>
                        <motion.div id = "washing_leftimages" className = "left">
                            <Image id = "washing_bigimg" src = {main_images[page][Number(selectedId)]} alt="mainImage"/>
                        </motion.div>
    
                        <motion.div id = "washing_rightexplanation" className = "right">
                            <motion.h1 id = "washing_title">{names[page][Number(selectedId)]}</motion.h1>
    
                            <motion.h2 id = "pd">
                                PRODECT DETAILS
                            </motion.h2>
    
                            <motion.p id = "washing_standard">{explanations[page][Number(selectedId)]}</motion.p>
                        </motion.div>
                    </motion.div>
                )}

                {!close2 && (
                    <motion.div className = "myModal" id = "second_washing" layoutId={`${selectedId}`}>
                        <motion.span id = "second_washing_close" onClick={cleaning_close2}>&times;</motion.span>
                        <motion.div id = "second_washing_leftimages" className = "left">
                            <Image id = "second_washing_bigimg" src = {main_images[page][Number(selectedId)]} alt="mainImage"/>
                        </motion.div>
    
                        <motion.div id = "second_washing_rightexplanation" className = "right">
                            <motion.h1 id = "second_washing_title">{names[page][Number(selectedId)]}</motion.h1>
    
                            <motion.h2 id = "pd">
                                PRODECT DETAILS
                            </motion.h2>
    
                            <motion.table id = "second_washing_table">
                                <motion.tbody id = "second_washing_thead">
                                    {models[page][Number(selectedId)].map((e, i)=>{
                                        return(
                                            <motion.tr key={i}>
                                                {e.map((r, j)=>{
                                                    return(
                                                        <motion.td key={j} colSpan={tables[page][Number(selectedId)][i][j][0]}
                                                        rowSpan={tables[page][Number(selectedId)][i][j][1]} id={r === "" ? "tableNan" : ""}>{r}</motion.td>
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
            </AnimatePresence>
        </>
    );
}