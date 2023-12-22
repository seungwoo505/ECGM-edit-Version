'use client'
import './general_equipment.css';
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image.js';
import {motion, AnimatePresence} from "framer-motion";
import Link from 'next/link';
import {Names1, Names2, Names3, Names4, Main_Images1, Main_Images2, Main_Images3, Main_Images4, Second_Images1, Second_Images2, Second_Images3, Second_Images4, Models1, Models2, Models3, Models4, Explanations1, Explanations2, Explanations3, Explanations4} from './ItemBox';

export default function General_Equipmet(){
    const [page, setpage] = useState<number>(0);
    const [selectedId, setSelectedId] = useState<String | null | undefined>(null);
    const [close, setClose] = useState<Boolean>(true);
    const [genenal_img, setGenenal_img] = useState<StaticImageData>(Main_Images1[0]);

    const names = [Names1, Names2, Names3, Names4];
    const main_images = [Main_Images1, Main_Images2, Main_Images3, Main_Images4];
    const second_images = [Second_Images1, Second_Images2, Second_Images3, Second_Images4];
    const thead = ["모델", "규격"];
    const models = [Models1, Models2, Models3, Models4];
    const explanations = [Explanations1, Explanations2, Explanations3, Explanations4];

    
    useEffect(() =>{
        const storage = localStorage.getItem("number");
        if(storage !== null){
            setpage(Number(storage?.split(",")[0]));
            setSelectedId(storage?.split(",")[1]);
            setClose(false);
            setGenenal_img(Main_Images4[Number(storage?.split(",")[1])]);
            localStorage.removeItem("number");
        }
    }, []);

    const genenal_details = (e:React.MouseEvent<HTMLDivElement>) =>{
        setSelectedId(`${e.currentTarget.dataset.value}`);
        setGenenal_img(main_images[page][Number(e.currentTarget.dataset.value)]);
        setClose(false);
    };

    const genenal_close = () =>{
        setClose(true);
    };

    const change_img = (e:React.MouseEvent<HTMLDivElement>) => {
        setGenenal_img(second_images[page][Number(selectedId)][Number(e.currentTarget.dataset.value)]);
    };

    const genenal_one = () =>{
        setpage(0);
    };

    const genenal_two = () =>{
        setpage(1);
    };

    const genenal_three = () =>{
        setpage(2);
    };

    const genenal_four = () =>{
        setpage(3);
    };

    return(
        <>
			{close && (<div className="Introduction-page" id = "Introduction-page-1">
				<div id = "certification">
					<div id = "grid-container">
						{/*제품*/}
                        {names[page].map((e, i) =>{
                            return(
                                <motion.div id = {`genenal_im${i}`} key={`${i}`} data-value={i} className = { e == "" ? "blank Introduction_imgs" : "Introduction_imgs"} layoutId={`${i}`} onClick={genenal_details}>
							        <motion.div className = "Introduction_img">
								        <Image id = {`genenal_img${i}`} src={main_images[page][i]} alt={`genenal_img${i}`}/>
							        </motion.div>
							        <motion.a id = {`genenal_txt${i}`} className = "txt">{e}</motion.a>
						        </motion.div>
                            );
                        })}
					</div>

					{/*구역 이동*/}
					<div className = "paginate">
						<div className = "go">
							<Link href="/download/e-억조카다록.pdf#page=5" target = "_blank">
								<button>카탈로그 바로가기</button>
							</Link>
						</div>
      					<a id = "genenal_one" className={page === 0 ? "currentPage" : ""} onClick={genenal_one}>1</a> {/*초기 첫 페이지 */}
      					<a id = "genenal_two" className={page === 1 ? "currentPage" : ""} onClick={genenal_two}>2</a>
      					<a id = "genenal_three" className={page === 2 ? "currentPage" : ""} onClick={genenal_three}>3</a>
      					<a id = "genenal_four" className={page === 3 ? "currentPage" : ""} onClick={genenal_four}>4</a>
    				</div>
				</div>
			</div>)}

			{/*상세 기능*/}
            <AnimatePresence>
                {!close && (
                    <motion.div className = "myModal" id = "genenal" layoutId={`${selectedId}`}>
                        <motion.span id = "genenal_close" onClick={genenal_close}>&times;</motion.span>
                        <motion.div id = "genenal_leftimages" className = "left">
                            <Image id = "genenal_bigimg" src = {genenal_img} alt='mainImage'/>
    
                            <motion.div id = "genenal_biglittleimgs">
                                {second_images[page][Number(selectedId)].map((e, i) =>{
                                    return(
                                        <motion.div id = {`genenal_divimg${i}`} className = "genenal_imgs" data-value={i} key={i} onClick={change_img}>
                                            <motion.a>
                                                <Image id = {`genenal_minimg${i}`} src={e} alt={`secondImage${i}`}/>
                                            </motion.a>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
    
                        <motion.div id = "genenal_rightexplanation" className = "right">
                            <motion.h1 id = "genenal_title">{names[page][Number(selectedId)]}</motion.h1>
    
                            <motion.p id = "genenal_explanation">{explanations[page][Number(selectedId)]}</motion.p>
                        </motion.div>
                        <motion.div id = "genenal_bottom">
                            <motion.h2 id = "pd">
                                PRODECT DETAILS
                            </motion.h2>
    
                            <motion.table>
                                <motion.thead id = "genenal_thead">
                                    <motion.tr>
                                        {thead.map((e, i)=>{
                                            return(
                                                <motion.td key={i}>{e}</motion.td>
                                            );
                                        })}
                                    </motion.tr>
                                </motion.thead>

                                <motion.tbody id = "genenal_tbody">
                                    {models[page][Number(selectedId)].map((e, i)=>{
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