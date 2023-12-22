'use client'
import React, { useEffect, useState } from 'react';
import './disinfection_equipment.css';
import {Names1, Main_Images1, Second_Images1, Models1, Explanations1} from './ItemBox';
import Image, { StaticImageData } from 'next/image';
import {motion, AnimatePresence} from "framer-motion";
import Link from 'next/link.js';

export default function Disinfection_Equipment() {
    const [selectedId, setSelectedId] = useState<String | null>(null);
    const [close1, setClose1]= useState<boolean>(true);
    const [close2, setClose2]= useState<boolean>(true);
    const [disinfection_img, setDisinfection_img] = useState<StaticImageData>(Main_Images1[0]);

    useEffect(() =>{
        const storage = localStorage.getItem("number");
        if(storage !== null){
            setSelectedId(storage);
            setClose1(false);
            setDisinfection_img(Main_Images1[Number(Storage)]);
            localStorage.removeItem("number");
        }
    }, []);

    const disinfection_details = (e:React.MouseEvent<HTMLDivElement>) =>{
        setSelectedId(`${e.currentTarget.dataset.value}`);
        setDisinfection_img(Main_Images1[Number(e.currentTarget.dataset.value)]);
        if(Number(e.currentTarget.dataset.value) == 2) setClose2(false);
        else setClose1(false);
    };

    const disinfection_close1 = () =>{
        setClose1(true);
    };

    const disinfection_close2 = () =>{
        setClose2(true);
    };

    const change_img = (e:React.MouseEvent<HTMLDivElement>) =>{
        setDisinfection_img(Second_Images1[Number(selectedId)][Number(e.currentTarget.dataset.value)]);
    };

    return(
        <>
            {close1 && close2 && (
                <div className="Introduction-page" id = "Introduction-page-6">
				<div id = "certification">
					<div id = "grid-container">
                        {Names1.map((e, i) =>{
                            return(
                                <motion.div id = {`disinfection_im${i}`} className = {e == "" ? "blank Introduction_imgs" :"Introduction_imgs"} key={i} data-value={i} layoutId={`${i}`} onClick={disinfection_details}>
							        <motion.div className = "Introduction_img">
								        <Image id = {`disinfection_img${i}`} src={Main_Images1[i]} alt={`disinfection_img${i}`}/>
							        </motion.div>
							        <motion.a id = {`disinfection_txt${i}`} className = "txt">{e}</motion.a>
						        </motion.div>
                            );
                        })}
					</div>
				</div>

				<div className = "go">
					<Link href="/download/e-억조카다록.pdf#page=65" target = "_blank">
						<button>카탈로그 바로가기</button>
					</Link>
				</div>
			</div>
            )}

            <AnimatePresence>
                {!close1 && (
                    <motion.div className = "myModal" id = "disinfection" layoutId={`${selectedId}`}>
                        <motion.span id = "disinfection_close" onClick={disinfection_close1}>&times;</motion.span>
                        <motion.div id = "disinfection_leftimages" className = "left">
                            <Image id = "disinfection_bigimg" src={disinfection_img} alt="mainImage"/>
        
                            <motion.div id = "disinfection_biglittleimgs">
                                {Second_Images1[Number(selectedId)].map((e, i)=>{
                                    return(
                                        <motion.div id = "disinfection_divimg1" className = "disinfection_imgs" key={i} data-value={i} onClick={change_img}>
                                            <motion.a>
                                                <Image id = "disinfection_minimg1" src={e} alt={`secondImage${i}`}/>
                                            </motion.a>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
        
                        <motion.div id = "disinfection_rightexplanation" className = "right">
                            <motion.h1 id = "disinfection_title">{Names1[Number(selectedId)]}</motion.h1>
        
                            <motion.p id = "disinfection_explanation">{Explanations1[Number(selectedId)]}</motion.p>
        
                        </motion.div>
                        <motion.div id = "disinfection_bottom">
                            <motion.h2 id = "pd">
                                PRODECT DETAILS
                            </motion.h2>
        
                            <motion.table>
                                <motion.thead id = "disinfection_thead">
                                    <motion.tr>
                                        {Models1[Number(selectedId)][0].map((e, i) =>{
                                            return(
                                                <motion.td key={i}>{e}</motion.td>
                                            );
                                        })}
                                    </motion.tr>
                                </motion.thead>
        
                                <motion.tbody id = "disinfection_tbody">
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

                {!close2 && (
                    <motion.div className = "myModal" id = "disinfections" layoutId={`${selectedId}`}>
                        <motion.span id = "disinfections_close" onClick={disinfection_close2}>&times;</motion.span>
                        <motion.h1 id = "disinfections_title">{Names1[Number(selectedId)]}</motion.h1>
                        <motion.div id = "disinfections_leftimages" className = "left">
        
                            <motion.div id = "disinfections_biglittleimgs">
                                {Second_Images1[Number(selectedId)].map((e, i) =>{
                                    return(
                                        <motion.div id = {`disinfections_divimg${i}`} className = "disinfections_imgs" key={i}>
                                            <motion.a>
                                                <Image id = {`disinfections_minimg${i}`} src={e} alt={`secondImage${i}`}/>
                                            </motion.a>
                                        </motion.div>
                                    );
                                })}
                                <motion.div id = "disinfections_divimg10" className = "disinfections_imgs">
                                    <Link href="/download/e-억조카다록.pdf#page=65" target = "_blank">
                                        <motion.button id = "disinfections_buton">카탈로그 바로가기</motion.button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}