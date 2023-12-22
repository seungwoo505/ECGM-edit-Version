import Electric_disinfector1 from '/public/image/6-소독기기류/전기식기소독고1.png';
import Electric_disinfector2 from '/public/image/6-소독기기류/전기식기소독고2.png';
import Electric_disinfector3 from '/public/image/6-소독기기류/전기식기소독고3.png';
import Electric_disinfector4 from '/public/image/6-소독기기류/전기식기소독고4.png';
import Hand_sanitizer from '/public/image/6-소독기기류/손세정대(페달식).png';
import HACCP1 from '/public/image/6-소독기기류/HACCP1.png';
import HACCP2 from '/public/image/6-소독기기류/HACCP2.png';
import HACCP3 from '/public/image/6-소독기기류/HACCP3.png';
import HACCP4 from '/public/image/6-소독기기류/HACCP4.png';
import HACCP5 from '/public/image/6-소독기기류/HACCP5.png';
import HACCP6 from '/public/image/6-소독기기류/HACCP6.png';
import HACCP7 from '/public/image/6-소독기기류/HACCP7.png';
import HACCP8 from '/public/image/6-소독기기류/HACCP8.png';
import HACCP9 from '/public/image/6-소독기기류/HACCP9.png';

const Names1 = ["전기식기소독고", "손세정대(페달식)", "HACCP", ""];

const Main_Images1 = [Electric_disinfector1, Hand_sanitizer, HACCP1];

const Second_Images1 = [
    [Electric_disinfector1, Electric_disinfector2, Electric_disinfector3, Electric_disinfector4],
    [],
    [HACCP1, HACCP2, HACCP3, HACCP4, HACCP5, HACCP6, HACCP7, HACCP8, HACCP9]
];

const Models1 = [
    [
        ["모델", "규격", "전원"],
        ["ECES-901", "900*750*1950", "1P 220V"],
		["ECES-1201", "1200*750*1950", "3P 380V"],
		["ECES-1501", "1500*750*1950", "3P 380V"],
		["ECES-1801", "1800*750*1950", "3P 380V"],
		["ECES-2101", "2100*750*1950", "3P 380V"]
    ],

    [
        ["모델", "규격"],
        ["1인용", "450*450*850"]
    ],

    []
];

const Explanations1 = [
    `세척완료된 식기류를 건조하여 위생적으로 소독, 보관하는데 사용한다.
	몸체는 내.외부 이중구조로 하며 그 사이에는 밀도높은 단열재로 밀폐시켜 열손실을 줄일 수 있도록한다.
	문은 여닫이식으로 하며 문에 패킹을 부착하고 손잡이형 캐치를 부착한다.
	전기히터는 좌, 우 벽면에 설치하여 보호 칸막이를 부착하여 공기유통의 덕트역할을 할수 있도록 한다.
	상부 중앙에 공기의 순환을 위하여 팬을 설치하여 고내의 온도가 균일하게 한다.
	전기장치는 몸체의 상부쪽에 설치하고 누전차단기를 장착한다.`,

    `페달식, 전자감응식 타입으로 제작가능하다.`,

    ``
];

export {Names1, Main_Images1, Second_Images1, Models1, Explanations1};