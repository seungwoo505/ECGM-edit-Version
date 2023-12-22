'use client'
import Image, { StaticImageData } from 'next/image';
import {Names1, Main_Images1, Second_Images1, Models1, Explanations1} from './ItemBox';
import {motion, AnimatePresence} from "framer-motion";
import React, { useEffect, useState } from 'react';
import Link from 'next/link.js';
import './distribution_table_conveyorsystem.css';

export default function Distribution_Table__conveyorSystem(){
    const [selectedId, setSelectedId] = useState<String | null>(null);
    const [close1, setClose1] = useState<Boolean>(true);
    const [close2, setClose2] = useState<Boolean>(true);
    const [distribution_img, setDistribution_img] = useState<StaticImageData>(Main_Images1[0]);

    useEffect(() =>{
        const storage = localStorage.getItem("number");
        if(storage !== null){
            setSelectedId(storage);
            setClose2(false);
            setDistribution_img(Main_Images1[Number(storage)]);
            localStorage.removeItem("number");
        }
    }, []);

    const distribution_details = (e:React.MouseEvent<HTMLDivElement>) =>{
        setSelectedId(`${e.currentTarget.dataset.value}`);
        setDistribution_img(Main_Images1[Number(e.currentTarget.dataset.value)]);
        if(Number(e.currentTarget.dataset.value) < 2 ) setClose1(false);
        else setClose2(false);
    };

    const change_img = (e:React.MouseEvent<HTMLDivElement>) =>{
        setDistribution_img(Second_Images1[Number(selectedId)][Number(e.currentTarget.dataset.value)]);
    };

    const distribution_close1 = () =>{
        setClose1(true);
    };

    const distribution_close2 = () =>{
        setClose2(true);
    };
    return(
        <>
            {close1 && close2 && (
                <div className="Introduction-page" id = "Introduction-page-3">
				    <div id = "certification">
					    <div id = "grid-container">
                            {Main_Images1.map((e, i) =>{
                                return(
                                    <motion.div id ={`distribution_im${i}`} className = "Introduction_imgs" key={i} data-value={i} layoutId={`${i}`} onClick={distribution_details}>
                                        <motion.div className = "Introduction_img">
                                            <Image id = {`distribution_img${i}`} src={e} alt={`distribution_img${i}`}/>
                                        </motion.div>
                                        <motion.a id = {`distribution_txt${i}`} className = "txt">{Names1[i]}</motion.a>
                                    </motion.div>
                                );
                            })}
					    </div>
				    </div>
				    <div className = "go">
					    <Link href="/download/e-억조카다록.pdf#page=37" target = "_blank">
						    <button>카탈로그 바로가기</button>
					    </Link>
				    </div>
			    </div>
            )}

            <AnimatePresence>
                {!close1 && (
                    <motion.div className = "myModal" id = "distribution" layoutId={`${selectedId}`}>
                        <motion.span id = "distribution_close" onClick={distribution_close1}>&times;</motion.span>
                        <motion.div id = "distribution_leftimages" className = "left">
                            <Image id = "distribution_bigimg" src = {distribution_img} alt='mainImage'/>
    
                            <motion.div id = "distribution_biglittleimgs">
                                {Second_Images1[Number(selectedId)].map((e, i) =>{
                                    return(
                                        <motion.div id = {`distribution_divimg${i}`} className = "distribution_imgs" key={i} data-value={i} onClick={change_img}>
                                            <motion.a>
                                                <Image id = {`distribution_minimg${i}`} src={e} alt={`secondImage${i}`}/>
                                            </motion.a>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
    
                        <motion.div id = "distribution_rightexplanation" className = "right">
                            <motion.h1 id = "distribution_title">{Names1[Number(selectedId)]}</motion.h1>
    
                            <motion.p id = "distribution_explanation">{Explanations1[Number(selectedId)]}</motion.p>
                        </motion.div>
                        <motion.div id = "distribution_bottom">
                            <motion.h2 id = "pd">
                                PRODECT DETAILS
                            </motion.h2>
    
                            <motion.table>
                                <motion.thead id = "distribution_thead">
                                    <motion.tr>
                                        {Models1[Number(selectedId)][0].map((e, i) =>{
                                            return(
                                                <motion.td key={i}>{e}</motion.td>
                                            );
                                        })}
                                    </motion.tr>
                                </motion.thead>
    
                                <motion.tbody id = "distribution_tbody">
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
                    <motion.div className = "myModal" id = "distributions" layoutId={`${selectedId}`}>
                        <motion.span id = "distributions_close" onClick={distribution_close2}>&times;</motion.span>
                        <motion.div id = "distributions_leftimages" className = "left">
                            <Image id = "distributions_bigimg" src = {distribution_img} alt='mainImage'/>
                        </motion.div>
    
                        <motion.div id = "distributions_rightexplanation" className = "right">
                            <motion.h1 id = "distributions_title">{Names1[Number(selectedId)]}</motion.h1>
    
                            <motion.p id = "distributions_explanation">{Explanations1[Number(selectedId)]}</motion.p>
                        </motion.div>
                        <motion.div id = "distributions_bottom" className = "bottom">
                            <motion.div id = "distributions_biglittleimgs">
                                {Second_Images1[Number(selectedId)].map((e, i) =>{
                                    return(
                                        <motion.div id = {`distributions_divimg${i}`} className = "distributions_imgs" key={i} data-value={i} onClick={change_img}>
                                            <motion.a>
                                                <Image id = {`distributions_minimg${i}`} src={e} alt={`secondImage${i}`}/>
                                            </motion.a>
                                        </motion.div>
                                    );
                                })}
                                {
                                    Number(selectedId) == 2 &&(
                                        <div id = "distributions_divimg5" className = "distributions_imgs">
                                            <Link href="/download/e-억조카다록.pdf#page=38" target = "_blank">
                                                <button id = "distributions_buton">카탈로그 바로가기</button>
                                            </Link>
                                        </div>
                                    )
                                }
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}