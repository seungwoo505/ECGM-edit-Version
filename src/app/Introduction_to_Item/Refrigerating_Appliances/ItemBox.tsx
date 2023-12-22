//page1
import Refrigerator_1 from '/public/image/4-냉장기기류/1-냉동냉장고.png';
import Refrigerator_2 from '/public/image/4-냉장기기류/2-냉동냉장고.png';
import Refrigerator_3 from '/public/image/4-냉장기기류/3-냉동냉장고.png';
import Refrigerated_table from '/public/image/4-냉장기기류/4-냉장테이블.png';
import Drawer_type_refrigerated_table from '/public/image/4-냉장기기류/5-서랍식냉장테이블.png';
import Support_refrigeration_table from '/public/image/4-냉장기기류/6-받드냉장테이블.png';
import Topping_refrigeration_table from '/public/image/4-냉장기기류/7-토핑냉장테이블.png';
import Square_confectionery_showcase1 from '/public/image/4-냉장기기류/8-사각제과쇼케이스.png';
import Square_confectionery_showcase2 from '/public/image/4-냉장기기류/8.1-곡면제과쇼케이스.png';

//page2
import Beverage_refrigerator from '/public/image/4-냉장기기류/9-음료냉장고.png';
import Cold_storage1 from '/public/image/4-냉장기기류/10-냉동창고.jpg';
import Cold_storage2 from '/public/image/4-냉장기기류/10.1-냉동창고.jpg';
import Cold_storage3 from '/public/image/4-냉장기기류/10.2-냉동창고.jpg';
import Cold_storage4 from '/public/image/4-냉장기기류/10.3-냉동창고.jpg';


const Names1 = ["냉동냉장고", "냉동냉장고", "냉동냉장고", "냉장테이블", "서랍식냉장테이블", "받드냉장테이블", "토핑냉장테이블", "사각제과쇼케이스"];

const Main_Images1 = [Refrigerator_1, Refrigerator_2, Refrigerator_3, Refrigerated_table, Drawer_type_refrigerated_table, Support_refrigeration_table, Topping_refrigeration_table, Square_confectionery_showcase1];

const Second_Images1 = [[], [], [], [], [], [], [], [Square_confectionery_showcase1, Square_confectionery_showcase2]];

const Models1 = [
    `전체용량 : 1106L
    본    체 : 고급 스테인리스 강판
    외부크기 : 1260 x 800 x 1900(mm)
    단열방식 : 고밀도 경질 폴리우레탄
    제어방식 : 디지털
    편리한 수납형 병꽂이
    이동식 코팅선반
    고효율 LED고내등
    환경친화 신냉매
    열림고정 & 자동닫힘도어, 알람경보기능
    고강도캐스터 및 레벨링 스크류
    권장온도범위 : 냉장 0℃ ~ +5℃ / 냉동 -20℃ ~ -15℃`,

    `전체용량 : 1106L
    본    체 : 고급 스테인리스 강판
    외부크기 : 1260 x 800 x 1900(mm)
    단열방식 : 고밀도 경질 폴리우레탄
    제어방식 : 디지털
    편리한 수납형 병꽂이
    이동식 코팅선반
    고효율 LED고내등
    환경친화 신냉매
    열림고정 & 자동닫힘도어, 알람경보기능
    고강도캐스터 및 레벨링 스크류
    권장온도범위 : 냉장 0℃ ~ +5℃ / 냉동 -20℃ ~ -15℃`,

    `전체용량 : 1699L
    본    체 : 고급 스테인리스 강판
    외부크기 : 1900 x 800 x 1900(mm)
    단열방식 : 고밀도 경질 폴리우레탄
    제어방식 : 디지털
    편리한 수납형 병꽂이
    이동식 코팅선반
    고효율 LED고내등
    환경친화 신냉매
    열림고정 & 자동닫힘도어, 알람경보기능
    고강도캐스터 및 레벨링 스크류
    권장온도범위 : 냉장 0℃ ~ +5℃ / 냉동 -20℃ ~ -15℃`,

    `본    체 : 고급 스테인리스 강판
    단열방식 : 고밀도 경질 폴리우레탄
    제어방식 : 디지털
    강력 스마트 쿨링시스템
    환경친화 신냉매
    열림고정 & 자동닫힘도어
    코팅선반
    튼튼한 일체형 손잡이
    권장온도범위 : 냉장 0℃ ~ +5℃`,

    `본    체 : 고급 스테인리스 강판
    단열방식 : 고밀도 경질 폴리우레탄
    제어방식 : 디지털
    강력 스마트 쿨링시스템
    환경친화 신냉매
    열림고정 & 자동닫힘도어
    코팅선반
    튼튼한 일체형 손잡이
    서랍내부 받드 적용
    권장온도범위 : 냉장 0℃ ~ +5℃`,

    `고급 스테인리스 강판
    실용적인 메탈코팅 적용
    단열방식 : 고밀도 경질 폴리우레탄
    효율적인 아날로그 온도조절 컨트롤러
    강력 스마트 쿨링시스템
    환경친화 신냉매
    코팅선반
    튼튼한 일체형 손잡이
    권장온도범위 : 냉장 0℃ ~ +5℃`,

    `고급 스테인리스 강판
    실용적인 메탈코팅 적용
    단열방식 : 고밀도 경질 폴리우레탄
    효율적인 아날로그 온도조절 컨트롤러
    강력 스마트 쿨링시스템
    환경친화 신냉매
    코팅선반
    튼튼한 일체형 손잡이
    권장온도범위 : 냉장 0℃ ~ +5℃`,

    `제어방식 : 디지털
    전    원 : AC 220V / 60Hz
    사각 또는 곡면 타입 선택
    세련된 디자인으로 매장 분위기 UP
    패어유리 채용
    권장온도범위 : 냉장 5℃ ~ +8℃`
];

const Explanations1 = [
    `냉동, 냉장식품인 어류, 육류, 야채류등을 변질되지 않고 보관하는데 사용한다.`,

    `냉동, 냉장식품인 어류, 육류, 야채류등을 변질되지 않고 보관하는데 사용한다.`,

    `냉동, 냉장식품인 어류, 육류, 야채류등을 변질되지 않고 보관하는데 사용한다.`,

    `조리시 저온 상태로 신선하게 식자재를 보관하면서 필요시 소량의 사용량
    만큼 쓸수 있으며 상부 일반 작업대 역할을 할 수 있다.`,

    `조리시 저온 상태로  신선하게 식자재를 보관하면서 필요시 소량의 사용량
    만큼 쓸수 있으며 상부 일반 작업대 역할을 할 수 있다.`,

    ``,

    ``,

    ``
];

const Names2 = ["음료냉장고", "냉동창고", "", ""];

const Main_Images2 = [Beverage_refrigerator, Cold_storage1];

const Second_Images2 = [[], [Cold_storage1, Cold_storage2, Cold_storage3, Cold_storage4]];

const Models2 = [
    `재    질 : 냉연,아연도금 칼라강판
    외부크기 : 650 x 580 x 1890 (mm)
    권장온도범위 : 냉장 -15℃ ~ -10℃
    전    원 : AC 220V / 60Hz
    효율적인 아날로그 온도조절 콘트롤러
    간접냉각 강력 쿨링 시스템
    환경 친화 신냉매
    강력쿨링시스템
    냉연칼라강판 도어프레임
    메탈 탭 적용
    조명스위치
    3중 페어 글라스
    고효율 LED고내등
    고강도 캐스터`,

    `주문제작
    조립식 판넬로 제작하며 단열효과가 좋은 우레탄재질로 한다.
    재질을 자유롭게 선택
    WALK-IN TYPE / ROLL-IN TYPE 선택`
];

const Explanations2 = [
    "",

    "사람이 출입하여 많은양의 조리용 재료를 장시간 변질없이 신선도를 유지하여 저온저장할수 있다."
];

export {Names1, Main_Images1, Second_Images1, Models1, Explanations1, Names2, Main_Images2, Second_Images2, Models2, Explanations2};