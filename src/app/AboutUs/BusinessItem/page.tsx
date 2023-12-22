import Image from "next/image";
import business_item from "/public/image/회사소개/business_item.jpg";

export default function BusinessItem(){
    return(
        <div className="AboutUs-page AboutUs-page-3">
            <Image src={business_item} alt="영업종목"/>
        </div>
    );
}