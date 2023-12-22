'use client'
import React, { useState } from 'react';
import './constructionphotos.css';
import {Construction_Images1, Construction_Images2, Construction_Images3, Construction_Images4, Construction_Images5, Construction_Images6} from './ItemBox';
import Image from 'next/image';
import {motion, AnimatePresence} from "framer-motion";

export default function ConstructionPhotos(){
    const Construction_Images = [Construction_Images1, Construction_Images2, Construction_Images3, Construction_Images4, Construction_Images5, Construction_Images6];
    const [Current_Page, set_Current_page] = useState<number>(0);
    const [selectedId, setSelectedId] = useState<String | null>(null);
    const [close, setClose] = useState(true);

    const construction_details = (e:React.MouseEvent<HTMLDivElement>) =>{
        setSelectedId(`${e.currentTarget.dataset.value}`);
        setClose(false);
    }

    const one = (e:React.MouseEvent) =>{
        set_Current_page(0);
    };

    const two = (e:React.MouseEvent) =>{
        set_Current_page(1);
    };

    const three = (e:React.MouseEvent) =>{
        set_Current_page(2);
    };

    const four = (e:React.MouseEvent) =>{
        set_Current_page(3);
    };

    const five = (e:React.MouseEvent) =>{
        set_Current_page(4);
    };

    const six = (e:React.MouseEvent) =>{
        set_Current_page(5);
    };

    return(
        <>
            {close && (
                <div className="Performance-page Performance-page-2">
                    <div id = "certification">
                        <div id = "grid-container">
                            {Construction_Images[Current_Page].map((e, i) => {
                                return(
                                    <motion.div id = {`im${i}`} className = "Performance_imgs" key={i} data-value={i} layoutId={`${i}`} onClick={construction_details}>
                                        <motion.div className = "Performance_img">
                                            <motion.a>
                                                <Image id = {`img${i}`} src={e} alt={`im${i}`}/>
                                            </motion.a>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <div className = "paginate">
                            <a id = "one" className={Current_Page === 0 ? "currentPage" : ""} onClick ={one}>1</a>
                            <a id = "two" className={Current_Page === 1 ? "currentPage" : ""} onClick = {two}>2</a>
                            <a id = "three" className={Current_Page === 2 ? "currentPage" : ""} onClick = {three}>3</a>
                            <a id = "four" className={Current_Page === 3 ? "currentPage" : ""} onClick = {four}>4</a>
                            <a id = "five" className={Current_Page === 4 ? "currentPage" : ""} onClick = {five}>5</a>
                            <a id = "six" className={Current_Page === 5 ? "currentPage" : ""} onClick = {six}>6</a>
                        </div>
                    </div>
                </div>
            )}
            <AnimatePresence>
                {!close && (
                    <motion.div id = "myModal" layoutId={`${selectedId}`}>
                        <motion.span className = "close" onClick={()=> setClose(true)}>&times;</motion.span>
                        <Image id = "bigimg" src={Construction_Images[Current_Page][Number(selectedId)]} alt="인증서"/>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}