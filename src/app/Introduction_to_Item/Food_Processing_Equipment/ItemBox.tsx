import Vegetable_cutter__HMV_200 from '/public/image/7-가공기기류/1-야채절단기HMV-200.png';
import Knife_composition1 from '/public/image/7-가공기기류/1-칼날구성.jpg';
import Vegetable_cutter__500 from '/public/image/7-가공기기류/2-야채절단기채고야500.png';
import Knife_composition2 from '/public/image/7-가공기기류/2-칼날구성.jpg';
import Civil_secretary__M_22S from 'public/image/7-가공기기류/3-민서기M-22S.png';
import Civil_secretary__M_12S from 'public/image/7-가공기기류/4-민서기M-12S.png';
import Civil_secretary__MN_22S from 'public/image/7-가공기기류/5-민서기MN-22S.png';
import Potato_peeler from '/public/image/7-가공기기류/6-감자탈피기.png';
import Slicer__HS1 from '/public/image/7-가공기기류/7-슬라이서HS-1N.png';
import Slicer__HS2 from '/public/image/7-가공기기류/7.1-슬라이서HS-2N.png';
import Slicer__GS1 from '/public/image/7-가공기기류/8-슬라이서GS-12A.png';
import Slicer__GS2 from '/public/image/7-가공기기류/8.1-슬라이서GS-12M.png';

const Names1 = ["야채절단기 (HMV-200)", "야채절단기 (채고야 500)", "민서기 (M-22S)", "민서기 (M-12S)", "민서기 (MN-22S)", "감자탈피기", "슬라이서 (HS 시리즈)", "슬라이서 (GS 시리즈)"];

const Main_Images1 = [Vegetable_cutter__HMV_200, Vegetable_cutter__500, Civil_secretary__M_22S, Civil_secretary__M_12S, Civil_secretary__MN_22S, Potato_peeler, Slicer__HS1, Slicer__GS1];

const Second_Images1 = [[Knife_composition1], [Knife_composition2], [], [], [], [], [Slicer__HS1, Slicer__HS2], [Slicer__GS1, Slicer__GS2]];

const Models1 = [
    [[`모    델 : HMV -200
    규    격 : W210*H620*D400
    전기사양 : 단상 220V 1/2HP, 400W
    처리능력 : 360Kg/h 이상<br>제품중량 : 18KG`]],

    [[`모    델 : HMV -200
    규    격 : W210*H620*D400
    전기사양 : 단상 220V 1/2HP, 400W
    처리능력 : 360Kg/h 이상
    제품중량 : 18KG`]],

    [[`모    델 : M-22S
    규    격 : 660*240*420mm
    전기사양 : 1Ø/ 3Ø, 220V/ 380V, 750W
    처리능력 : 300Kg/h
    Diameter of Knife : Ø76㎜
    제품중량 : 35KG`]],

    [[`모    델 : M-12S
    규    격 : 620×340×395㎜
    전기사양 : 1Ø/ 3Ø, 220V/ 380V, 750W
    처리능력 : 150Kg/h
    Diameter of Knife : Ø69㎜
    제품중량 : 27KG`]],

    [[`모    델 : MN-22S
    규    격 : 640×340×395㎜
    전기사양 : 1Ø/ 3Ø, 220V/ 380V, 1100W
    처리능력 : 300Kg/h
    Diameter of Knife : Ø76㎜
    제품중량 : 35KG`]],

    [
        ["모델", "규격", "전기용량", "처리능력", "용도"],
        ["HMP-20", "Ø470*850mm", "1Ø, 220V, 1/2HP, 0.4KW", "15~20KG", "감자,고구마,당근등"],
        ["HMP-30", "Ø600*930mm", "1Ø, 220V, 1/2HP, 0.75KW ", "25~30KG", "감자,고구마,당근등"]
    ],

    [
        ["모 델", "규격", "Motor", "Capacity", "Diameter of Knife", "Slice Thickness", "Net Weight"],
        ["HS-2N", "750*550*600", "1Ø/ 3Ø, 220V/380V, 560W", "45 slices/min", "Ø300㎜", "0.1~20mm", "78kg"],
        ["HS-1N", "600*500*500", "1Ø/3Ø, 220V/380V, 400W", "45 slices/min", "Ø300㎜" , "0.1~20mm", "37kg"],
        ["HS-300", "780*580*760", "1Ø, 220V, 550W/850W", "45 slices/min", "Ø283㎜", "0.1~20mm", "85kg/90kg"]
    ],

    [
        ["모 델", "규격", "Motor", "Diameter of Knife", "Slice Thickness", "Net Weight"],
        ["GS-12A", "650*660*700mm", "1/2HP×1phx×AC115V×60㎐", "Dia 12″", "tissus thin~1″", "86.5kg"],
        ["GS-12M", "650*600*600mm", "1/2HP×1phx×AC115×60㎐", "Dia 12″", "tissus thin~1″ thick", "65kg"]
    ]
]

const Explanations1 = [
    `주방에서 다루는 야채를 요리에 쓰이는 용도에 따라 적당하게 가공하여 준다.
    다양한 칼날(기본7개)의 조합으로 여러가지 모양의 전처리가 가능하다.
    작동법이 간편하고 2중 안전장치로 안전성이 뛰어나다.
    원형투입구(Ø160)와 오이파이프 채용으로 감자, 양파등 둥근 야채와 오이, 대파등 가늘고 긴 야채도 원활히 작업가능하다.`,

    `주방에서 다루는 야채를 요리에 쓰이는 용도에 따라 적당하게 가공하여 준다.
    투입구가 넓어 작업성이 뛰어나다.
    2중의 안전장치 적용으로 안전성이 뛰어나다.
    야채절단기 최초로 어슷썰기가 적용되었다.(가이드파이프 별도구매)
    `,

    `고성능 중형 고급 모델
    최고급 알루미늄 재질의 컴팩트한 외형으로 협소한 장소에서도 작업 가능
    테이블타입으로 준 대형 수준의 처리 용량
    저소음, 강력한 직결식 감속기 채용
    고기와 접촉부 전체 스테인리스 스틸 사용
    탈착레버로 간단히 분리되는 헤드
    믹싱시 열발생이 없이 갈아지는 특수 설계
    PL법에 대비한 안전한 투입구 구조
    사용온도 : -2℃ ~ 2℃`,

    `최소형 고성능 실용적인 모델
    컴팩트한 외형으로 협소한 장소에서도 작업 가능
    테이블타입으로 고성능 발휘
    저소음 초강력 감속기 채용
    고기와 접촉부 전체 스테인리스 스틸 사용
    탈착 레버로 간단히 분리되는 헤드부분
    믹싱시 열발생을 최소화한 특수설계로 갈아진 고기의 변색 방지
    PL법에 대비한 안전한 투입구 구조
    사용온도 : -2℃ ~ 2℃`,

    `작지만 강력한 파워와 고성능
    컴팩트한 외형으로 협소한 장소에서도 작업이 가능
    테이블타입으로 처리용량은 준 대형 수준
    저소음 강력한 감속기 채용 (1.5HP)
    고기와 접촉부 전체 스테인리스 스틸 사용
    헤드부분 탈착레버로 간단히 분리
    믹싱시 열발생이 없이 갈아지는 특수 설계
    PL법에 대비한 안전한 투입구 구조
    사용온도 : -2℃ ~ 2℃`,

    `빠르고 간편하게 감자등의 껍질을 제거(세척 및 탈피가 동시에 가능)
    균등한 탈피능력으로 손실을 최소화
    작업이 간편하여 누구나 손쉽게 사용할 수 있다.`,

    `소시지, 햄, 가공육, 치즈, 생선, 정육등의 손쉬운 절단을 위해 디자인된 소형 고성능 햄슬라이서
    강력한 무소음의 단상, 삼상모터
    부식이 없고 인체에 무해한 최고급 알루미늄 재질인 7A를 사형주조로 사용
    강력한 기어구동 칼날 모터
    인체공학적 설계의 Chute 핸들
    사용온도 : 1℃ ~ 3℃`,

    `소시지, 햄, 가공육, 치즈, 생선, 정육등의 손쉬운 절단을 위해 디자인된 소형 고성능 햄슬라이서
    강력한 무소음의 단상, 삼상모터
    부식이 없고 인체에 무해한 최고급 알루미늄 재질인 7A를 사형주조로 사용
    강력한 기어구동 칼날 모터
    인체공학적 설계의 Chute 핸들
    사용온도 : 1℃ ~ 3℃`
];

export {Names1, Main_Images1, Second_Images1, Models1, Explanations1};