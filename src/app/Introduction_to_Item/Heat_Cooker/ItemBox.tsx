//page1
import Gas_stove__nob_ignition_method1 from '/public/image/2-열조리기기류/가스렌지(노브점화방식)1.png';
import Gas_stove__nob_ignition_method2 from '/public/image/2-열조리기기류/가스렌지(노브점화방식)2.png';
import Low_gas_stove__nob_ignition_method1 from '/public/image/2-열조리기기류/가스낮은렌지(노브점화방식)1.png';
import Low_gas_stove__nob_ignition_method2 from '/public/image/2-열조리기기류/가스낮은렌지(노브점화방식)2.png';
import Gas_pan__nob_ignition_method1 from '/public/image/2-열조리기기류/가스부침기(노브점화방식)1.png';
import Gas_pan__nob_ignition_method2 from '/public/image/2-열조리기기류/가스부침기(노브점화방식)2.png';
import Gas_stove1 from '/public/image/2-열조리기기류/가스렌지1.png';
import Gas_stove2 from '/public/image/2-열조리기기류/가스렌지2.png';
import Low_gas_stove1 from '/public/image/2-열조리기기류/가스낮은렌지1.png';
import Low_gas_stove2 from '/public/image/2-열조리기기류/가스낮은렌지2.png';
import Gas_pan1 from '/public/image/2-열조리기기류/가스부침기1.png';
import Gas_pan2 from '/public/image/2-열조리기기류/가스부침기2.png';
import Gas_pan3 from '/public/image/2-열조리기기류/가스부침기3.png';
import Gas_rotating_soup_pot1 from '/public/image/2-열조리기기류/가스회전식국솥1.png';
import Gas_rotating_soup_pot2 from '/public/image/2-열조리기기류/가스회전식국솥2.png';
import Gas_rotating_soup_pot3 from '/public/image/2-열조리기기류/가스회전식국솥3.png';
import Steam_rotating_soup_pot1 from '/public/image/2-열조리기기류/스팀회전식국솥1.png';
import Steam_rotating_soup_pot2 from '/public/image/2-열조리기기류/스팀회전식국솥2.png';
import Steam_rotating_soup_pot3 from '/public/image/2-열조리기기류/스팀회전식국솥3.png';

//page2
import Soup_pot_kantriver_system1 from '/public/image/2-열조리기기류/국솥칸트리버시스템1.png';
import Soup_pot_kantriver_system2 from '/public/image/2-열조리기기류/국솥칸트리버시스템2.png';
import Soup_pot_kantriver_system3 from '/public/image/2-열조리기기류/국솥칸트리버시스템3.png';
import Soup_pot_kantriver_system4 from '/public/image/2-열조리기기류/국솥칸트리버시스템4.png';

const Names1 = ["가스렌지(노브점화방식)", "가스낮은렌지(노브점화방식)", "가스부침기(노브점화방식)", "가스렌지", "가스낮은렌지", "가스부침기", "가스회전식국솥", "스팀회전식국솥"];

const Main_Images1 = [Gas_stove__nob_ignition_method1, Low_gas_stove__nob_ignition_method1, Gas_pan__nob_ignition_method1, Gas_stove1, Low_gas_stove1, Gas_pan1, Gas_rotating_soup_pot1, Steam_rotating_soup_pot1];

const Second_Images1 = [
    [Gas_stove__nob_ignition_method1, Gas_stove__nob_ignition_method2],
    [Low_gas_stove__nob_ignition_method1, Low_gas_stove__nob_ignition_method2],
    [Gas_pan__nob_ignition_method1, Gas_pan__nob_ignition_method2],
    [Gas_stove1, Gas_stove2],
    [Low_gas_stove1, Low_gas_stove2],
    [Gas_pan1, Gas_pan2, Gas_pan3],
    [Gas_rotating_soup_pot1, Gas_rotating_soup_pot2, Gas_rotating_soup_pot3],
    [Steam_rotating_soup_pot1, Steam_rotating_soup_pot2, Steam_rotating_soup_pot3]
];

const Models1 = [
    [
        ["모델", "규격", "타입", "버너", "가스소비량 (LNG)", "비고"],
        ["ECR-902SN", "900*750*850", "노브점화방식", "2열2구", "33.7㎾ (29,000 ㎉/h)", "2구"],
        ["ECR-1203SN", "1200*750*850", "노브점화방식", "2열2구", "51.0㎾ (43,500 ㎉/h)", "3구"],
        ["ECR-1503SN", "1500*750*850", "노브점화방식", "2열2구", "51.0㎾ (43,500 ㎉/h)", "3구"]
    ],

    [
        ["모델", "규격", "타입", "버너", "가스소비량 (LNG)", "비고"],
        ["ECLR-701SN", "750*750*450", "노브점화방식", "3열3구", "29.5㎾ (25,400 ㎉/h)", "1구"],
        ["ECLR-1202SN", "1200*750*450", "노브점화방식", "3열3구", "58.1㎾ (50,000 ㎉/h)", "2구"],
        ["ECLR-1502SN", "1500*750*450", "노브점화방식", "3열3구", "58.1㎾ (50,000 ㎉/h)", "2구"]
    ],

    [
        ["모델", "규격", "타입", "버너", "가스소비량 (LNG)"],
        ["ECG-602SN", "600*750*850", "노브점화방식", "일자버너(2개)", "11.6㎾ (10,000 ㎉/h)"],
        ["ECG-903SN", "900*750*850", "노브점화방식", "일자버너(3개)", "17.4㎾ (15,000 ㎉/h)"],
        ["ECG-1204SN", "1200*750*850", "노브점화방식", "일자버너(4개)", "23.3㎾ (20,000 ㎉/h)"],
        ["ECG-1506SN", "1500*750*850", "노브점화방식", "일자버너(6개)", "34.9㎾ (30,000 ㎉/h)"]
    ],

    [
        ["모델", "규격", "타입", "버너", "가스소비량 (LNG)", "비고"],
        ["ECR-903N", "900*750*850", "볼밸브타입", "2열2구, 1열1구", "39.5㎾ (34,000 ㎉/h)", "3구"],
        ["ECR-1204N", "1200*750*850", "볼밸브타입", "2열2구, 1열1구", "45.3㎾ (39,000 ㎉/h)", "4구"],
        ["ECR-1503N", "1500*750*850", "볼밸브타입", "2열2구", "51.0㎾ (43,500 ㎉/h)", "3구"],
        ["ECR-1505N", "1500*750*850", "볼밸브타입", "2열2구, 1열1구", "62.2㎾ (53,500 ㎉/h)", "5구"]
    ],

    [
        ["모델", "규격", "타입", "버너", "가스소비량 (LNG)", "비고"],
        ["ECLR-701N", "750*750*450", "볼밸브타입", "3열3구", "29.5㎾ (25,400 ㎉/h)", "1구"],
        ["ECLR-1202N", "1200*750*450", "볼밸브타입", "3열3구", "58.1㎾ (50,000 ㎉/h)", "2구"],
        ["ECLR-1502N", "1500*750*450", "볼밸브타입", "3열3구", "58.1㎾ (50,000 ㎉/h)", "2구"]
    ],

    [
        ["모델", "규격", "타입", "버너", "가스소비량 (LNG)"],
        ["ECG-602N", "600*750*850", "볼밸브타입", "일자버너(2개)", "11.6㎾ (10,000 ㎉/h)"],
        ["ECG-903N", "900*750*850", "볼밸브타입", "일자버너(3개)", "17.4㎾ (15,000 ㎉/h)"], 
        ["ECG-1204N", "1200*750*850", "볼밸브타입", "일자버너(4개)", "23.3㎾ (20,000 ㎉/h)"],
        ["ECG-1506N", "1500*750*850", "볼밸브타입", "일자버너(6개)", "34.9㎾ (30,000 ㎉/h)"]
    ],

    [
        ["모델", "규격", "타입", "버너", "가스소비량 (LNG)"],
        ["ECGK-300N", "150ℓ (300인용)", "볼밸브타입", "충염식 32구", "58.1㎾ (50,000 ㎉/h)"],
        ["ECGK-500N", "250ℓ (500인용)", "볼밸브타입", "충염식 32구", "58.1㎾ (50,000 ㎉/h)"],
        ["ECGK-300A", "150ℓ (300인용)", "자동점화방식", "충염식 32구", "58.1㎾ (50,000 ㎉/h)"],
        ["ECGK-500A", "250ℓ (500인용)", "자동점화방식", "충염식 32구", "58.1㎾ (50,000 ㎉/h)"]
    ],

    [
        ["모델", "용량", "인원", "스팀소비량", "스팀사용압력"],
        ["ECSK-300S", "150ℓ", "300인", "70㎏/hr", "1.8㎏/㎤"],
        ["ECSK-400S", "200ℓ", "400인", "74㎏/hr", "1.8㎏/㎤"],
        ["ECSK-500S", "250ℓ", "500인", "80㎏/hr", "1.8㎏/㎤"]
    ]
];

const Explanations1 = [
    `일정한 용기의 음식물을 가스의 연소열로 가열 조리하는데 사용한다.
    (끓임, 볶음, 데침등)
    렌지의 형태는 2구, 3구, 4구, 5구등 원하는대로 제작이 가능하다.
    내구성이 강한 스테인리스로 제작되어 기구의 부식이 없다.
    사용시 이물질이 바닥에 직접 떨어지지 않도록 오물 거름받이를 설치한다.
    점화방식은 기존의 가스점화봉을 이용한 방식에서 탈피하여 노브점화방식으로 편리성을 높였다.`,

    `끓임 용도로 사용되며 대형 틀통으로 많은 양을 장시간 조리시에 사용한다.
    용량이 많아 큰용기에 음식을 끓일 경우 렌지 높이를 낮게하여 안전한 작업이 될 수 있도록 제작한다.
    렌지의 형태는 1구, 2구등 원하는대로 제작이 가능하다.
    점화방식은 기존의 가스점화봉을 이용한 방식에서 탈피하여 노브점화방식으로 편리성을 높였다.
    상판은 열변형 및 사용시 하중에 충분히 견딜 수 있고 벽면등이 손상되지 않도록 뒷빽을 설치한다.`,

    `다량의 음식을 같은 온도조건에서 부침, 볶음등을 할때 사용한다.
    철판표면을 가공하여 부침판으로 사용하고 고열시에도 음식물이 붙지 않는 충분한 두께로 제작한다.
    기름은 전면 홈으로 흐르게 되어 있어 청소가 용이하다.
    사용하지 않을시에는 부침판 전체를 뚜껑으로 덮어 위생적이다.
    점화방식은 기존의 가스점화봉을 이용한 방식에서 탈피하여 노브점화방식으로 편리성을 높였다.`,

    `일정한 용기의 음식물을 가스의 연소열로 가열 조리하는데 사용한다.
    (끓임, 볶음, 데침등)
    렌지의 형태는 2구,3구,4구,5구등 원하는대로 제작이 가능하다.
    내구성이 강한 스테인리스로 제작되어 기구의 부식이 없다.
    사용시 이물질이 바닥에 직접 떨어지지 않도록 오물 거름받이를 설치한다.
    점화방식은 가스점화봉을 이용한 방식이다.`,

    `끓임 용도로 사용되며 대형 틀통으로 많은 양을 장시간 조리시에 사용한다.
    용량이 많아 큰용기에 음식을 끓일 경우 렌지 높이를 낮게하여 안전한 작업이 될 수 있도록 제작한다.
    렌지의 형태는 1구, 2구등 원하는대로 제작이 가능하다.
    점화방식은 가스점화봉을 이용한 방식이다.
    상판은 열변형 및 사용시 하중에 충분히 견딜 수 있고 벽면등이 손상되지 않도록 뒷빽을 설치한다.`,

    `다량의 음식을 같은 온도조건에서 부침, 볶음등을 할때 사용한다.
    철판표면을 가공하여 부침판으로 사용하고 고열시에도 음식물이 붙지 않는 충분한 두께로 제작한다.
    기름은 전면 홈으로 흐르게 되어 있어 청소가 용이하다.
    사용하지 않을시에는 부침판 전체를 뚜껑으로 덮어 위생적이다.
    점화방식은 가스점화봉을 이용한 방식이다.`,

    `가스의 직화열로 대용량의 국을 끓이는데 사용한다.
    국솥 내피는 스테인리스 또는 주물내피로 제작이 가능하다.(선택사항)
    버너는 Z-32구를 사용한다.
    국솥외피는 스테인리스로도 제작이 가능하다.(선택사항)
    핸들은 기어식으로 하고 솥이 180도 회전하는데 이상이 없도록한다.(안전장치 부착)
    국솥에 수도파이프를 부착하여 조리시 편리하다.
    다리는 무게하중을 충분히 고려하여 제작하고 재질은 스테인리스로 한다.`,

    `스팀의 발열을 이용하여 다량의 국이나 찌개류등을 끓이는데 사용한다.
    내피와 외피를 스테인리스로 제작하여 위생적이며 다양한 크기로 제작할 수 있다.
    핸들은 기어식으로 하고 솥이 180도 회전하는데 이상이 없도록 한다.(안전장치부착)
    외피 최하단부는 배수 드레인 밸브를 부착한다.
    국솥에 수도파이프를 부착하여 조리시 편리하다.
    다리는 무게하중을 충분히 고려하여 제작하고 재질은 스테인리스로 한다.`
];

const Names2 = ["국솥칸트리버시스템", "" ,"", ""];

const Main_Images2 = [Soup_pot_kantriver_system1];

const Second_Images2 = [[Soup_pot_kantriver_system1, Soup_pot_kantriver_system2, Soup_pot_kantriver_system3, Soup_pot_kantriver_system4]];

const Explanations2 = [
    `현장여건에 따라 주문제작합니다`
];

export {Names1, Main_Images1, Second_Images1, Models1, Explanations1, Names2, Main_Images2, Second_Images2, Explanations2};