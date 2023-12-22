'use client'
import './cold_and_hot_water_basin__exhaust_hood.css';
import { useEffect, useState } from 'react';
import {Names1, Main_Images1, Second_Images1, Models1, Explanations1} from './ItemBox';
import Image, { StaticImageData } from 'next/image';
import {motion, AnimatePresence} from "framer-motion";
import Link from 'next/link.js';

export default function Cold_and_Hot_Water_Basin__Exhaust_Hood(){
    const [selectedId, setSelectedId] = useState<String | null>(null);
    const [close1, setClose1] = useState<Boolean>(true);
    const [close2, setClose2] = useState<Boolean>(true);
    const [cold_img, setCold_img] = useState<StaticImageData>(Main_Images1[0]);

    useEffect(() =>{
        const storage = localStorage.getItem("number");
        if(storage !== null){
            setSelectedId(storage);
            if(Number(storage) < 2) setClose1(false);
            else if(Number(storage) >= 2) setClose2(false);
            setCold_img(Main_Images1[Number(storage)]);
            localStorage.removeItem("number");
        }
    }, []);

    const cold_details = (e:React.MouseEvent<HTMLDivElement>) =>{
        setSelectedId(`${e.currentTarget.dataset.value}`);
        setCold_img(Main_Images1[Number(e.currentTarget.dataset.value)]);
        if(Number(e.currentTarget.dataset.value) < 2) setClose1(false);
        else setClose2(false);
    };

    const change_img = (e:React.MouseEvent<HTMLDivElement>) =>{
        setCold_img(Second_Images1[Number(selectedId)][Number(e.currentTarget.dataset.value)]);
    };

    const cold_close1 = () =>{
        setClose1(true);
    };

    const cold_close2 = () =>{
        setClose2(true);
    };

    return(
        <>
            {close1 && close2 && (
                <div className="Introduction-page" id = "Introduction-page-8">
                    <div id = "certification">
                        <div id = "grid-container">
                            {Main_Images1.map((e, i) =>{
                                return(
                                    <motion.div id = {`kitchen_im${i}`} className = "Introduction_imgs" key={i} data-value={i} layoutId={`${i}`} onClick={cold_details}>
                                        <motion.div className = "Introduction_img">
                                            <Image id = {`kitchen_img${i}`} src={e} alt={`kitchen_img${i}`}/>
                                        </motion.div>
                                        <motion.a id = {`kitchen_txt${i}`} className = "txt">{Names1[i]}</motion.a>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className = "go">
                        <Link href="/download/e-억조카다록.pdf#page=99" target = "_blank">
                            <button>카탈로그 바로가기</button>
                        </Link>
                    </div>
                </div>
            )}

            <AnimatePresence>
                {!close1 && (
                    <motion.div className = "myModal" id = "kitchen" layoutId={`${selectedId}`}>
                        <motion.span id = "kitchen_close" onClick={cold_close1}>&times;</motion.span>
                        <motion.div id = "kitchen_leftimages" className = "left">
                            <Image id = "kitchen_bigimg" src = {cold_img} alt='mainImage'/>
    
                            <motion.div id = "kitchen_biglittleimgs">
                                {Second_Images1[Number(selectedId)].map((e, i) =>{
                                    return(
                                        <motion.div id = {`kitchen_divimg${i}`} className = "kitchen_imgs" key={i} data-value={i} onClick={change_img}>
                                            <motion.a>
                                                <Image id = {`kitchen_minimg${i}`} src={e} alt={`secondImage${i}`}/>
                                            </motion.a>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
    
                        <motion.div id = "kitchen_rightexplanation" className = "right">
                            <motion.h1 id = "kitchen_title">{Names1[Number(selectedId)]}</motion.h1>
    
                            <motion.p id = "kitchen_explanation">{Explanations1[Number(selectedId)]}</motion.p>
                        </motion.div>
                        <motion.div id = "kitchen_bottom">
                            <motion.h2 id = "pd">
                                PRODECT DETAILS
                            </motion.h2>
    
                            <motion.table>
                                <motion.thead id = "kitchen_thead">
                                    <motion.tr>
                                        {Models1[Number(selectedId)][0].map((e, i) =>{
                                            return(
                                                <motion.td key={i}>{e}</motion.td>
                                            );
                                        })}
                                    </motion.tr>
                                </motion.thead>
    
                                <motion.tbody id = "kitchen_tbody">
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
                    <motion.div className = "myModal" id = "kitchens" layoutId={`${selectedId}`}>
                        <motion.span id = "kitchens_close" onClick={cold_close2}>&times;</motion.span>
                        <motion.div id = "kitchens_leftimages" className = "left">
                            <Image id = "kitchens_bigimg" src = {cold_img} alt='mainImage'/>
                        </motion.div>
    
                        <motion.div id = "kitchens_rightexplanation" className = "right">
                            <motion.h1 id = "kitchens_title">{Names1[Number(selectedId)]}</motion.h1>
    
                            <motion.p id = "kitchens_explanation">{Explanations1[Number(selectedId)]}</motion.p>
                        </motion.div>

                        <motion.div id = "kitchens_bottom" className = "bottom">
                            <motion.div id = "kitchens_biglittleimgs">
                                {Second_Images1[Number(selectedId)].map((e, i) =>{
                                    return(
                                        <motion.div id = {`kitchens_divimg${i}`} className = "kitchens_imgs" key={i} data-value={i} onClick={change_img}>
                                            <motion.a>
                                                <Image id = {`kitchens_minimg${i}`} src={e} alt={`secondImage${i}`}/>
                                            </motion.a>
                                        </motion.div>
                                    );
                                })}
                                { Number(selectedId) == 3 &&(
                                    <motion.div id = "kitchens_divimg5" className = "kitchens_imgs">
                                        <Link href="/image/8-취반기기&냉온음수대&배기후드/주방환기시스템사양서.pdf" target = "_blank">
                                            <motion.button id = "kitchens_buton">사양서 바로가기</motion.button>
                                        </Link>
                                    </motion.div>
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