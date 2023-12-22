import Image from "next/image";
import Greetings from "/public/image/회사소개/greetings.jpg";
export default function Greeting(){
    return(
        <div className="AboutUs-page AboutUs-page-1">
            <Image src={Greetings} alt="인사말"/>
        </div>
    );
}