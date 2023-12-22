import Hot_and_cold_drinking_fountain1 from '/public/image/8-취반기기&냉온음수대&배기후드/냉온음수대1.png';
import Hot_and_cold_drinking_fountain2 from '/public/image/8-취반기기&냉온음수대&배기후드/냉온음수대2.png';
import Hot_and_cold_drinking_fountain3 from '/public/image/8-취반기기&냉온음수대&배기후드/냉온음수대3.png';
import Hot_and_cold_drinking_fountain4 from '/public/image/8-취반기기&냉온음수대&배기후드/냉온음수대4.png';
import Hydraulic_scrubber from '/public/image/8-취반기기&냉온음수대&배기후드/수압식세미기.png';
import Exhaust_hood1 from '/public/image/8-취반기기&냉온음수대&배기후드/배기후드1.png';
import Exhaust_hood2 from '/public/image/8-취반기기&냉온음수대&배기후드/배기후드2.png';
import Exhaust_hood3 from '/public/image/8-취반기기&냉온음수대&배기후드/배기후드3.png';
import Exhaust_hood4 from '/public/image/8-취반기기&냉온음수대&배기후드/배기후드4.png';
import Kitchen_ventilation_module_ceiling_system1 from '/public/image/8-취반기기&냉온음수대&배기후드/주방환기 모듈 천장시스템1.png';
import Kitchen_ventilation_module_ceiling_system2 from '/public/image/8-취반기기&냉온음수대&배기후드/주방환기 모듈 천장시스템2.png';
import Kitchen_ventilation_module_ceiling_system3 from '/public/image/8-취반기기&냉온음수대&배기후드/주방환기 모듈 천장시스템3.png';

const Names1 = ["냉온음수대", "수압식세미기", "배기후드", "주방환기 모듈 천장시스템"];

const Main_Images1 = [Hot_and_cold_drinking_fountain1, Hydraulic_scrubber, Exhaust_hood1, Kitchen_ventilation_module_ceiling_system1];

const Second_Images1 = [
    [ Hot_and_cold_drinking_fountain1, Hot_and_cold_drinking_fountain2, Hot_and_cold_drinking_fountain3, Hot_and_cold_drinking_fountain4 ],
    [],
    [ Exhaust_hood1, Exhaust_hood2, Exhaust_hood3, Exhaust_hood4 ],
    [ Kitchen_ventilation_module_ceiling_system1, Kitchen_ventilation_module_ceiling_system2, Kitchen_ventilation_module_ceiling_system3]
];

const Models1 = [
    [
        ["모델", "규격"],
        ["EGWF-1200", "1200*750*1800"],
		["EGWF-1500", "1500*750*1800"],
		["EGWF-1800", "1800*750*1800"],
		["EGWF-2100", "2100*750*1800"]
    ],

    [
        ["모델", "용량", "규격"],
        ["ECR-40", "40㎏", "Ø590*1250"]
    ],

    [],

    []
];

const Explanations1 = [
    `대용량 정수기로 식수 공급시 사용된다.
	냉수, 온수 수량은 원하는대로 제작 가능하다.
	상부 컵찬장도 주문에 따라 달라진다.
	주문제작`,

    `수량의 쌀을 세미하기에 편리하다.
	원통의 몸체에 하부는 원뿔형의 깔데기 모양으로 하고 상부테두리는 턱을 주어 오버플로우 기능을 할 수 있도록 한다.
	세미관은 중앙에 세우며 쌀과 물의 혼합이 원만한 간격을 유지하도록 하며 좌.우로 회전할 수 있도록 한다.
	전기선이 필요없어 설치가 편리하다.`,

    `현장여건에 따라 주문제작합니다.`,

    `현장여건에 따라 주문제작합니다.`
];

export {Names1, Main_Images1, Second_Images1, Models1, Explanations1};