'use client'
import React, { useState } from 'react';
import './food_processing_equipment.css';
import {Names1, Main_Images1, Second_Images1, Models1, Explanations1} from './ItemBox';
import Image, { StaticImageData } from 'next/image';
import {motion, AnimatePresence} from "framer-motion";
import Link from 'next/link.js';

export default function Food_Processing_Equipment(){
    const [selectedId, setSelectedId] = useState<String | null>(null);
    const [close1, setClose1] = useState<boolean>(true);
    const [close2, setClose2] = useState<boolean>(true);
    const [food_img, setFood_img] = useState<StaticImageData>(Main_Images1[0]);

    const food_details = (e:React.MouseEvent<HTMLDivElement>) =>{
        setSelectedId(`${e.currentTarget.dataset.value}`);
        setFood_img(Main_Images1[Number(e.currentTarget.dataset.value)]);
        if(Number(e.currentTarget.dataset.value) < 5) setClose1(false);
        else setClose2(false);
    };

    const food_close1 = () =>{
        setClose1(true);
    };

    const food_close2 = () =>{
        setClose2(true);
    };

    const change_img = (e:React.MouseEvent<HTMLDivElement>) =>{
        setFood_img(Second_Images1[Number(selectedId)][Number(e.currentTarget.dataset.value)]);
    }

    return(
        <>
            {close1 && close2 && (
                <div className="Introduction-page" id = "Introduction-page-7">
				<div id = "certification">
					<div id = "grid-container">
                        {Main_Images1.map((e, i) =>{
                            return(
                                <motion.div id = {`process_im${i}`}className = "Introduction_imgs" key={i} data-value={i} layoutId={`${i}`} onClick={food_details} >
                                    <motion.div className = "Introduction_img">
                                        <Image id = {`process_img${i}`} src={e} alt={`process_img${i}`}/>
                                    </motion.div>
                                    <motion.a id = {`process_txt${i}`} className = "process_txt">
                                        {Names1[i]}
                                    </motion.a>
                                </motion.div>
                            );
                        })}
					</div>
				</div>

				<div className = "go">
					<Link href="/download/e-억조카다록.pdf#page=75" target = "_blank">
						<button>카탈로그 바로가기</button>
					</Link>
				</div>
			</div>
            )}

            <AnimatePresence>
                {!close1 && (
                    <motion.div className = "myModal" id = "process" layoutId={`${selectedId}`}>
                        <motion.span id = "process_close" onClick={food_close1}>&times;</motion.span>
                        <motion.div id = "process_leftimages" className = "left">
                            <Image id = "process_bigimg" src = {food_img} alt='mainImage'/>
                        </motion.div>
    
                        <motion.div id = "process_rightexplanation" className = "right">
                            <motion.h1 id = "process_title">{Names1[Number(selectedId)]}</motion.h1>
    
                            <motion.p id = "process_explanation">{Explanations1[Number(selectedId)]}</motion.p>
    
                            <motion.h2 id = "pd">
                                PRODECT DETAILS
                            </motion.h2>
    
                            <motion.p id = "process_standard">{Models1[Number(selectedId)][0][0]}</motion.p>

                            {Number(selectedId) < 2 && (
                                <>
                                    <motion.h4 id = "process_knife">
                                        칼날구성
                                    </motion.h4>
            
                                    <Image id = "process_knife_img" src={Second_Images1[Number(selectedId)][0]} alt='칼날구성'/>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}

                {!close2 && (
                    <motion.div className = "myModal" id = "second_process" layoutId={`${selectedId}`}>
                        <motion.span id = "second_process_close" onClick={food_close2}>&times;</motion.span>
                        <motion.div id = "second_process_leftimages" className = "left">
                            <Image id = "second_process_bigimg" src = {food_img} alt='mainImage'/>
    
                            <motion.div id = "second_process_biglittleimgs">
                                {Second_Images1[Number(selectedId)].map((e, i) =>{
                                    return(
                                        <motion.div id = {`second_process_divimg${i}`} className = "second_process_imgs" key={i} data-value={i} onClick={change_img}>
                                            <motion.p id = {`second_process_txt${i}`}>{Models1[Number(selectedId)][i+1][0]}</motion.p>
                                            <motion.a>
                                                <Image id = {`second_process_img${i}`} src={e} alt={`secondImage${i}`}/>
                                            </motion.a>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
    
                        <motion.div id = "second_process_rightexplanation" className = "right">
                            <motion.h1 id = "second_process_title">{Names1[Number(selectedId)]}</motion.h1>
    
                            <motion.p id = "second_process_explanation">{Explanations1[Number(selectedId)]}</motion.p>
                        </motion.div>
    
                        <motion.div id = "second_bottom">
                            <motion.h2 id = "pd">
                                PRODECT DETAILS
                            </motion.h2>
    
                            <motion.table>
                                <motion.thead id = "process_thead">
                                    <motion.tr>
                                        {Models1[Number(selectedId)][0].map((e, i) =>{
                                            return(
                                                <motion.td key={i}>{e}</motion.td>
                                            );
                                        })}
                                    </motion.tr>
                                </motion.thead>
    
                                <motion.tbody id = "process_tbody">
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
            </AnimatePresence>
        </>
    );
}