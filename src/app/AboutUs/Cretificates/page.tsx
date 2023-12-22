'use client'
import Image from "next/image";
import './cretificates.css';
import {Names1, Images1, Names2, Images2} from './ItemBox';
import React, { useState } from "react";
import {motion, AnimatePresence} from "framer-motion";

export default function Cretificates(){
    const Names = [Names1, Names2];
    const Images = [Images1, Images2];
    const [Current_Page, set_Current_page] = useState<number>(0);
    const [selectedId, setSelectedId] = useState<String | null>(null);

    const one = (e:React.MouseEvent) => {
        set_Current_page(0);
    };

    const two = (e:React.MouseEvent) =>{
        set_Current_page(1);
    };

    return(
        <div className="AboutUs-page AboutUs-page-4">
            {(selectedId === null) &&(
                <div id="certification">
                    {Names[Current_Page].map((e, i) => (
                        <motion.div id={`im${i}`} className={e == "" ? "blank AboutUs_imgs" : "AboutUs_imgs"} key={i} layoutId={`${i}`} onClick={()=> setSelectedId(`${i}`)}>
                            <motion.div className="AboutUs_img">
                                <Image id = {`img${i}`} src={Images[Current_Page][i]} alt={`img${i}`}/>
                            </motion.div>
                            <a id = {`txt${i}`}>
                                {e}
                            </a>
                        </motion.div>
                    ))}
                </div>
            )}

            <AnimatePresence>
                {selectedId && (
                    <motion.div layoutId={`${selectedId}`} id="myModal">
                        <motion.span className="close" onClick={()=>setSelectedId(null)}>&times;</motion.span>
                        <Image src={Images[Current_Page][Number(selectedId)]} alt="확대" style={{width: "70%", height: "auto"}}/>
                    </motion.div>
                )}
            </AnimatePresence>
    	    <div className = "paginate">
      		    <a id = "one" className={Current_Page === 0 ? "currentPage" : ""}  onClick ={one}>1</a>
      		    <a id = "two" className={Current_Page === 1 ? "currentPage" : ""} onClick = {two}>2</a>
    	    </div>
	    </div>
    );
}