'use client'
import './direction.css';
import Image from "next/image";
import directions from '/public/image/소개바/오시는길.jpg';
import { useEffect } from "react";

export default function Direction(){
    useEffect(() => {
        while(naver === null || naver === undefined){

        }
        const cityhall = new naver.maps.LatLng(37.547864975381145, 126.64354911755525);
        const map = new naver.maps.Map('map', {
            center: cityhall.destinationPoint(0,50),
            zoom: 17,
            mapTypeId: naver.maps.MapTypeId.NORMAL,
            scaleControl: true,
            logoControl: false,
            mapDataControl: false,
            zoomControl: true,
            mapTypeControl: true
        });
        const marker = new naver.maps.Marker({
            map: map,
            position: cityhall
        });

        const contentString = 
        [
            '<div class="iw_inner">',
            '   <h3>억조종합기계</h3>',
            '   <p>인천광역시 서구 원전로 8 (경서동 서부산업단지 내)<br />',
            '       전화: 032) 578-3060 | 팩스: 032) 567-3067<br />',
            '   </p>',
            '<a href = "https://map.naver.com/v5/entry/place/38431628?c=14097902.7746541,4515724.3633710,19,0,0,0,dh" target = "_blank">찾아오는 길 찾기</a>',
            '</div>'
        ].join('');

        const infowindow = new naver.maps.InfoWindow({
            content: contentString
        });

        naver.maps.Event.addListener(marker, "click", () =>{
            if(infowindow. getMap()) infowindow.close();
            else infowindow.open(map, marker);
        });

        infowindow.open(map, marker);
    }, []);
    return(
        <>
            <div>
		        <Image id = "minbar" src={directions} style={{width: "100%", height: "100%"}} alt='mapBar'/>
	        </div>

	        <div id="map"></div>
        </>
    );
}