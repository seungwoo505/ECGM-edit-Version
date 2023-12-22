import cool_and_hot from "/public/image/8-취반기기&냉온음수대&배기후드/냉온음수대1.png";
import gas_rotation from "/public/image/2-열조리기기류/가스회전식국솥1.png";
import steam_rotation from "/public/image/2-열조리기기류/스팀회전식국솥1.png";
import low_stove from "/public/image/2-열조리기기류/가스낮은렌지(노브점화방식)1.png";
import stove from "/public/image/2-열조리기기류/가스렌지(노브점화방식)1.png";
import gas_pancake from "/public/image/2-열조리기기류/가스부침기(노브점화방식)1.png";
import electricity_disinfection from "/public/image/6-소독기기류/전기식기소독고1.png";
import self_catering_table from "/public/image/3-자율배식대일반배식대류/자율배식대1.png";
import electricity_soup_insulation_transport from "/public/image/일반기기류/전기식국보온운반차1.png";
import water_pressure_rice_washing_machine from "/public/image/8-취반기기&냉온음수대&배기후드/수압식세미기.png";

const Names = [
	"냉온음수대", "가스회전식국솥", "스팀회전식국솥", "가스낮은렌지(노브점화방식)", "가스렌지(노브점화방식)",
	"가스부침기(노브점화방식)", "전기식기소독고", "자율배식대", "전기식국보온운반차", "수압식세미기"
];

const Explanations = [
	`대용량 정수기로 식수 공급시 사용된다. 냉수, 온수 수량은 원하는대로 제작 가능합니다.
	상부 컵찬장도 주문에 따라 달라집니다.
	주문제작 가능합니다`,

	`가스의 직화열로 대용량의 국을 끓이는데 사용합니다.
	국솥 내피는 스테인리스 또는 주물내피로 제작이 가능합니다.(선택사항)
	버너는 Z-32구를 사용합니다.`,

	`스팀의 발열을 이용하여 다량의 국이나 찌개류등을 끓이는데 사용합니다.
	내피와 외피를 스테인리스로 제작하여 위생적이며 다양한 크기로 제작할 수 있습니다.
	핸들은 기어식으로 하고 솥이 180도 회전하는데 이상이 없도록 합니다.(안전장치부착)`,

	`끓임 용도로 사용되며 대형 틀통으로 많은 양을 장시간 조리시에 사용합니다.
	용량이 많아 큰용기에 음식을 끓일 경우 렌지 높이를 낮게하여 안전한 작업이 될수 있도록 제작합니다.
	렌지의 형태는 1구, 2구등 원하는대로 제작이 가능합니다.`,

	`일정한 용기의 음식물을 가스의 연소열로 가열 조리하는데 사용합니다. (끓임, 볶음, 데침등)
	렌지의 형태는 2구, 3구, 4구, 5구등 원하는대로 제작이 가능합니다.
	내구성이 강한 스테인리스로 제작되어 기구의 부식이 없습니다.`,

	`다량의 음식을 같은 온도조건에서 부침, 볶음등을 할때 사용합니다.
	철판표면을 가공하여 부침판으로 사용하고 고열시에도 음식물이 붙지 않는 충분한 두께로 제작합니다.
	기름은 전면 홈으로 흐르게 되어 있어 청소가 용이합니다.`,

	`세척완료된 식기류를 건조하여 위생적으로 소독 보관하는데 사용합니다.
	몸체는 내.외부 이중구조로 하며 그 사이에는 밀도높은 단열재로 밀폐시켜 열손실을 줄일수 있도록합니다.
	문은 여닫이식으로 하며 문에 패킹을 부착하고 손잡이형 캐치를 부착합니다.`,

	`식당에 설치하여 사용하는 배식대이며, 자율적으로 배식을 하는데 사용합니다.
	주문제작이 가능합니다.`,

	`조리완료된 국을 다량씩 배식부로 안전하게 운반하며 국을 배식하는데 사용합니다.
	몸체 외부는 사각형으로 하고 내부는 원형으로 제작합니다.
	몸체는 2중으로 제작하고 내부에 보온재를 넣어 장시간 보온이 되도록 합니다.`,

	`수량의 쌀을 세미하기에 편리합니다.
	원통의 몸체에 하부는 원뿔형의 깔데기 모양, 상부테두리는 턱을 주어 오버플로우 기능을 할 수 있도록 합니다.
	세미관은 중앙에 세우며 쌀과 물의 혼합이 원만한 간격을 유지하도록 하며 좌.우로 회전할 수 있도록 합니다.`
];

const Images = [
	cool_and_hot, gas_rotation, steam_rotation, low_stove, stove,
	gas_pancake, electricity_disinfection, self_catering_table, electricity_soup_insulation_transport, water_pressure_rice_washing_machine
];

const Urls= [
	"/Introduction_to_Item/Cold_and_Hot_Water_Basin__Exhaust_hood",
	"/Introduction_to_Item/Heat_Cooker",
	"/Introduction_to_Item/Heat_Cooker",
	"/Introduction_to_Item/Heat_Cooker",
	"/Introduction_to_Item/Heat_Cooker",
	"/Introduction_to_Item/Heat_Cooker",
	"/Introduction_to_Item/Disinfection_Equipment",
	"/Introduction_to_Item/Distribution_Table__ConveyorSystem",
	"/Introduction_to_Item/General_Equipment",
	"/Introduction_to_Item/Cold_and_Hot_Water_Basin__Exhaust_hood"
];

const url_current = [[0], [6], [7], [1], [0], [2], [0], [2], [3, 1], [1]] 

export {Names, Explanations, Images, Urls, url_current};