'use client'
import './refrigerating_appliances.css';
import React, { useState } from 'react';
import {Names1, Names2, Main_Images1, Main_Images2, Second_Images1, Second_Images2, Models1, Models2, Explanations1, Explanations2} from './ItemBox';
import {motion, AnimatePresence} from "framer-motion";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export default function Refrigerating_Appliances() {
    const names = [Names1, Names2];
    const main_images = [Main_Images1, Main_Images2];
    const second_images = [Second_Images1, Second_Images2];
    const models = [Models1, Models2];
    const explanations = [Explanations1, Explanations2];

    const [page, setPage] = useState<number>(0);
    const [selectedId, setSelectedId] = useState<String | null>(null);
    const [refrigerating_img, setRefrigerating_img] = useState<StaticImageData>(Main_Images1[Number(selectedId)]);
    const [close, setClose] = useState<boolean>(true);

    const refrigerating_details = (e:React.MouseEvent<HTMLDivElement>) =>{
        setSelectedId(`${e.currentTarget.dataset.value}`);
        setRefrigerating_img(main_images[page][Number(e.currentTarget.dataset.value)]);
        setClose(false);
    };

    const change_img = (e:React.MouseEvent<HTMLDivElement>) =>{
        setRefrigerating_img(second_images[page][Number(selectedId)][Number(e.currentTarget.dataset.value)]);
    };

    const refrigerating_close = () =>{
        setClose(true);
    };

    const refrigerating_one = () =>{
        setPage(0);
    };

    const refrigerating_two = () =>{
        setPage(1);
    };

    return(
        <>
            {close && (
                <div className="Introduction-page" id = "Introduction-page-4">
				    <div id = "certification">
					    <div id = "grid-container">
                            {names[page].map((e, i) =>{
                                return(
                                    <motion.div id = {`refrigerator_im${i}`} className = {e == "" ? "blank Introduction_imgs" :"Introduction_imgs"} key={i} data-value={i} layoutId={`${i}`} onClick={refrigerating_details}>
							            <motion.div className = "Introduction_img">
								            <Image id ={`refrigerator_img${i}`} src={main_images[page][i]} alt={`refrigerator_img${i}`}/>
							            </motion.div>
							            <motion.a id = {`refrigerator_txt${i}`} className = "process_txt">
								            {e}
							            </motion.a>
						            </motion.div>
                                );
                            })}

	    				    <div className = "paginate">
	    					    <div className = "go">
								    <Link href="/download/e-억조카다록.pdf#page=45" target = "_blank">
									    <button>카탈로그 바로가기</button>
								    </Link>
							    </div>
	      					    <a id = "refrigerator_one" className={page === 0 ? "currentPage" : ""} onClick ={refrigerating_one}>1</a>
	      					    <a id = "refrigerator_two" className={page === 1 ? "currentPage" : ""} onClick={refrigerating_two}>2</a>
	    				    </div>
					    </div>
				    </div>
			    </div>
            )}

            <AnimatePresence>
                {!close && (
                    <motion.div className = "myModal" id = "refrigerator" layoutId={`${selectedId}`}>
                        <motion.span id = "refrigerator_close" onClick={refrigerating_close}>&times;</motion.span>
                        <motion.div id = "refrigerator_leftimages" className = "left">
                            <Image id = "refrigerator_bigimg" src = {refrigerating_img} alt='mainImage'/>
    
                            <motion.div id = "refrigerator_biglittleimgs">
                                {second_images[page][Number(selectedId)].map((e, i) =>{
                                    return(
                                        <motion.div id = {`refrigerator_divimg${i}`} className = "refrigerator_imgs" key={i} data-value={i} onClick={change_img}>
                                            <motion.a>
                                                <Image id = {`refrigerator_minimg${i}`} src={e} alt={`secondImage${i}`}/>
                                            </motion.a>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
    
                        <motion.div id = "refrigerator_rightexplanation" className = "right">
                            <motion.h1 id = "refrigerator_title">{names[page][Number(selectedId)]}</motion.h1>
    
                            <motion.p id = "refrigerator_explanation">{explanations[page][Number(selectedId)]}</motion.p>
    
                            <motion.h2 id = "pd">
                                <motion.br/><motion.br/>PRODECT DETAILS
                            </motion.h2>
    
                            <motion.p id = "refrigerator_standard">{models[page][Number(selectedId)]}</motion.p>
    
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}