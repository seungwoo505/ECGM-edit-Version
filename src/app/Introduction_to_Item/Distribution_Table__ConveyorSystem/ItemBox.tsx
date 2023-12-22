import Food_tray1 from '/public/image/3-자율배식대일반배식대류/밥배식대1.png';
import Food_tray2 from '/public/image/3-자율배식대일반배식대류/밥배식대2.png';
import Side_dish_stand1 from '/public/image/3-자율배식대일반배식대류/반찬배식대1.png';
import Side_dish_stand2 from '/public/image/3-자율배식대일반배식대류/반찬배식대2.png';
import Autonomous_distribution_platform1 from '/public/image/3-자율배식대일반배식대류/자율배식대1.png';
import Autonomous_distribution_platform2 from '/public/image/3-자율배식대일반배식대류/자율배식대2.png';
import Autonomous_distribution_platform3 from '/public/image/3-자율배식대일반배식대류/자율배식대3.png';
import Autonomous_distribution_platform4 from '/public/image/3-자율배식대일반배식대류/자율배식대4.png';
import Catering__eating_conveyor_system1 from '/public/image/3-자율배식대일반배식대류/콘베어1.png';
import Catering__eating_conveyor_system2 from '/public/image/3-자율배식대일반배식대류/콘베어2.png';
import Catering__eating_conveyor_system3 from '/public/image/3-자율배식대일반배식대류/콘베어3.png';
import Catering__eating_conveyor_system4 from '/public/image/3-자율배식대일반배식대류/콘베어4.png';

const Names1 = ["밥배식대", "반찬배식대", "자율배식대", "배식용/퇴식용 콘베이어시스템"];

const Main_Images1 = [Food_tray1, Side_dish_stand1, Autonomous_distribution_platform1, Catering__eating_conveyor_system1];

const Second_Images1 = [
    [Food_tray1, Food_tray2],
    [Side_dish_stand1, Side_dish_stand2],
    [Autonomous_distribution_platform1, Autonomous_distribution_platform2, Autonomous_distribution_platform3, Autonomous_distribution_platform4],
    [Catering__eating_conveyor_system1, Catering__eating_conveyor_system2, Catering__eating_conveyor_system3, Catering__eating_conveyor_system4]
];

const Models1 = [
    [
        ["모델", "규격"],
        ["-", "650*650*850"]
    ],

    [
        ["규격", "사양"],
        ["900*650*850", "2구"],
		["1200*650*850", "3구"],
		["1500*650*850", "4구"]
    ],

    [],

    []
]

const Explanations1 = [
    `밥을 배식하는 배식대로 사용하며 상판을 밥솥의 깊이 만큼 턱을 주어야하며 밥솥을 편리하게 넣을 수 있도록 전면은 터지게 한다.
	상판, 몸체등 모든부위를 STS-304 27종으로 제작한다.
	주문제작이 가능하며 주문에 따라 보온, 비보온으로 제작한다.`,

    `조리된 음식을 받드에 담아 상부에 거치하여 배식이 용이하도록 사용하며 용도에 따라 보온기능, 보냉기능을 추가하여 제작할 수 있다.
	상부는 홈을내어 받드를 거치할 수 있도록 홈을 내어 제작한다.
	하부는 찬장 또는 오픈찬장으로 제작하여 받드나 기물등을 보관할 수 있도록 한다.
	상판, 몸체등 모든 부위를 STS-304 27종으로 제작한다.
	주문제작이 가능하며 주문에 따라 보온, 비보온, 보냉으로 제작한다.`,

    `식당에 설치하여 사용하는 배식대이며, 자율적으로 배식을 하는데 사용한다.
	주문제작`,

    `짧은 시간에 많은 인원의 식사를 제공시 주방 종사원의 인력절감과 식사하는 사람의 퇴식을 편리하게 처리하는데 사용한다.
	주문제작`
];
export {Names1, Main_Images1, Second_Images1, Models1, Explanations1};