import Image from "next/image";
import './follow.css';
import FollowManagement from '/public/image/고객센터/사후관리.jpg';

export default function follow_Management(){
    return(
        <div className="ServiceCenter-page ServiceCenter-page-2">
            <Image 
                src={FollowManagement}
                alt="사후관리"/>
        </div>
    );
}