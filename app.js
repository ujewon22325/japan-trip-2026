const TRIP_START='2026-11-25';
const TRIP_END='2026-11-28';
const STORAGE_KEY='kansai-trip-manager-v2';

const SCHEDULE_VERSION='2026-09-22-shitennoji';
const ABENO_UNIQLO_UPDATE='2026-11-23-uniqlo-abeno';
const SHINSEKAI_DONKI_UPDATE='2026-11-23-donki-evening-3days';
const SHINSEKAI_DONKI_PLANS=[
  {date:'2026-11-25',id:'d1-donki-shinsekai',time:'21:30 이후 · 시간 남으면'},
  {date:'2026-11-26',id:'d2-donki-shinsekai',time:'21:00 이후 · 숙소 복귀 후 선택'},
  {date:'2026-11-27',id:'d3-donki-shinsekai',time:'21:30 이후 · 숙소 복귀 후 선택'}
];

const KUROMON_SANPEI_PLAN={
  "id": "d1-kuromon-sanpei",
  "time": "14:40-15:10 전후 (구로몬시장 일정 내)",
  "name": "해산물 식당 · 구로몬 산페이 (黒門三平)",
  "fee": "해산물덮밥 1,650엔 · 4인 6,600엔",
  "note": "구로몬시장 안에서 20~30분 들르는 선택 일정이에요. 오오키니에서 점심을 먹었다면 포장 초밥·사시미를 골라 매장에서 나눠 먹고, 점심을 건너뛰었다면 덮밥을 주문해요. 대기가 길면 시장 구경을 이어가고 16:00에는 난바 야사카 신사로 출발해요.",
  "map": "黒門三平 黒門市場店 大阪府大阪市中央区日本橋1-22-25",
  "optional": true,
  "restaurant": {
    "facts": [
      {
        "label": "위치",
        "value": "구로몬시장 안 · 大阪府大阪市中央区日本橋1-22-25"
      },
      {
        "label": "영업시간",
        "value": "일본어 공식 점포 정보 08:00~19:30(주문 마감 19:00) · 한국어 공식 안내는 20:00 마감으로 표기. 11/25 수요일 14시대는 공통 영업시간이에요."
      },
      {
        "label": "대표 메뉴",
        "value": "해산물덮밥·연어알 연어덮밥·모둠 초밥 각각 1,650엔, 참치 중뱃살덮밥 2,200엔, 성게·연어알덮밥 3,850엔. 해산물덮밥 구성은 당일 입고에 따라 달라요."
      },
      {
        "label": "주문·좌석",
        "value": "포장 초밥·사시미는 계산 후 빈자리를 이용해요. 덮밥은 계산대에서 주문·결제하고 번호표를 받은 뒤 앉으면 직원이 가져다줘요. 좌석 예약도 가능해요."
      },
      {
        "label": "결제",
        "value": "타베로그 안내 기준 Visa·Mastercard·JCB·AMEX·UnionPay와 교통계 IC 결제가 가능해요. 삼성월렛·카드 탭 결제 지원은 매장에서 확인하세요."
      }
    ],
    "sources": [
      {
        "label": "공식 점포 안내",
        "url": "https://kuromon-sanpei.co.jp/company-2/business/shop/kuromonichibamise/"
      },
      {
        "label": "공식 메뉴·가격",
        "url": "https://kuromon-sanpei.co.jp/company-2/business/shop/kuromonichibamise/kuromonmenu/"
      },
      {
        "label": "한국어 주문·좌석 예약 안내",
        "url": "https://kuromon-sanpei.co.jp/ko/%EC%BF%A0%EB%A1%9C%EB%AA%AC-%EC%82%B0%ED%8E%98%EC%9D%B4%EC%97%90-%EC%98%A4%EC%8B%A0-%EA%B2%83%EC%9D%84-%ED%99%98%EC%98%81%ED%95%A9%EB%8B%88%EB%8B%A4/"
      },
      {
        "label": "타베로그 결제 정보",
        "url": "https://tabelog.com/osaka/A2701/A270202/27050275/dtlratings/"
      },
      {
        "label": "구로몬시장 행사 공지",
        "url": "https://prtimes.jp/main/html/rd/p/000000001.000194545.html"
      }
    ]
  }
};
const KUROMON_MARKET_EVENT="11/25는 구로몬시장 블랙프라이데이 기간(11/18~28)이에요. 참여 점포의 행사 상품은 현장에서 확인하세요.";
const NANKAI_ARRIVAL_NOTE="공항에서는 난카이 난바 방면 공항급행을 타고 신이마미야역에서 내려요. 구간별 승차권이나 지원되는 개찰구에서 컨택리스 결제를 이용해요.";
const NAMBA_SHOPPING_NOTE="17:00~18:00 난바 야사카 신사 → 빅카메라 난바점 → 도톤보리 순서.";
const NAMBA_SHOPPING_PLAN={
  "id": "d1-bic-namba",
  "time": "17:00-18:00",
  "name": "빅카메라 난바점 (Bic Camera Namba Store)",
  "fee": "쇼핑 비용 별도",
  "note": "난바 야사카 신사에서 센니치마에 방향으로 걸어가요. 이동·쇼핑 포함 60분. 주소 大阪市中央区千日前2-10-1. 매장 10:00~22:00, 일부 층·매장은 21:00까지. 18:00에는 도톤보리 저녁 일정으로 이동해요.",
  "map": "Bic Camera Namba Store Osaka 2-10-1 Sennichimae"
};
const defaults={
  days:[
    {
      date:'2026-11-25',city:'오사카 남부',short:'오사카',
      notes:[
        '첫날은 항공편 지연에 대응하기 쉽도록 난바 중심으로 이동.',
        NANKAI_ARRIVAL_NOTE,
        NAMBA_SHOPPING_NOTE,
        '구로몬시장은 늦은 오후부터 일부 점포가 닫을 수 있어 도착 후 우선 방문.',
        '항공편이 늦으면 난바 야사카 신사을 먼저 생략.',
        KUROMON_MARKET_EVENT
      ],
      fallback:'난바 야사카 신사 → 신사이바시 일부 순서로 생략',
      plans:[
        {id:'d1p1',time:'공항 도착 후',...HOTEL_TRIP_UPDATE.plans.d1p1,fee:'교통비 별도'},
        {"id":"d1-naniwa-lunch","time":"13:30-14:15 (도착 후 조정)","name":"점심 · 마이도 오오키니 浪速日本橋食堂","fee":"1인 약 1,000~2,000엔 · 4인 약 4,000~8,000엔","note":"난바 도착·숙소 짐 보관 후 점심 30~45분. 닛폰바시역 10번 출구 옆 → 구로몬시장까지 도보 약 2~5분. 14:15까지 식사가 어렵거나 시장 먹거리를 먹으려면 생략. 주소: 大阪府大阪市中央区日本橋1-17-20 日本橋丸中ビル 1F. 공식 영업 09:00~다음 날 07:00, 일요일 휴무. 다른 사이트와 영업시간 차이가 있어 출발 전 재확인. 타베로그: 신용카드·전자머니 불가, QR결제 가능(브랜드 미확인); 엔화 현금 준비. 반찬을 고르고 밥·국을 추가하는 셀프 식당. 예약 불가 안내. 전화 +81-6-6630-7595. 2026-10-05 확인.","map":"浪速日本橋食堂 大阪府大阪市中央区日本橋1-17-20","optional":true},
        {id:'d1p2',time:'14:30-16:00',name:'구로몬시장',fee:'무료',note:'먹거리부터 우선. 점포별 영업시간 상이, 늦은 오후 이른 마감 주의.',map:'Kuromon Ichiba Market Osaka'},
        KUROMON_SANPEI_PLAN,
        {id:'d1-yasaka',time:'16:00-17:00',name:'난바 야사카 신사',fee:'무료',note:'06:00-17:00 개문. 구로몬시장에서 이동 포함, 17시 폐문 전에 관람. 지연 시 먼저 생략.',map:'Namba Yasaka Shrine Osaka'},
        NAMBA_SHOPPING_PLAN,
        {id:'d1p5',time:'18:00-20:00',name:'도톤보리',fee:'무료',note:"저녁 인파가 많고 식당 대기 가능. 다리 위 통행 방해 주의.\n타코야키 선택 후보 (둘 중 원하는 곳 방문 · 도톤보리 18:00~20:00 안에 20~30분, 대기 별도):\n① 크레오루 도톤보리점 くれおーる: 道頓堀1-6-4. 공식 10:00~23:00·무휴. 기본 8개 803엔 / 반숙계란+파 6개 803엔(공식 매장식사 메뉴; 포장 가격 다를 수 있음). 카드 Visa·Mastercard 등 가능 안내, 포장 판매대는 확인. 매장 식사는 1인 1음료·1주문 안내.\n② 오도리다코 도톤보리점 踊りだこ: 道頓堀1-7-24. 11:00~21:00·부정기 휴무 안내. 한 알마다 통쭈꾸미 1마리. 4개 600엔 / 6개 800엔 / 8개 1,200엔(게시 메뉴 기준). 카드·전자머니·QR 불가 안내, 현금 준비.\n2026-10-05 확인, 여행 전 가격·영업 재확인. 두 곳 모두 방문할 필요 없이 현장에서 선택.",map:'Dotonbori Osaka'},
        {id:'d1p6',time:'20:00-21:30',name:'신사이바시스지',fee:'무료',note:'점포별 폐점시간 상이. 쇼핑이 중요하면 도톤보리 저녁을 조금 앞당겨도 됨.',map:'Shinsaibashi-suji Shopping Street Osaka'}
      ]
    },
    {
      date:'2026-11-26',city:'오사카 핵심 명소 · 시텐노지',short:'오사카',
      notes: [
        "10:15 전 관광 일정은 미정. 10:40 시텐노지 → 오사카성 → 역사박물관 → 우메다 공중정원 순서.",
        "시텐노지는 중심가람 45분 우선. 정원은 여유가 있을 때만. 중심가람·정원은 주유패스 무료, 보물관은 별도.",
        "주유패스 사용 시 포함 지하철은 패스로 입장. 트래블로그를 태그하면 별도 운임 발생.",
        "우메다 공중정원 16:15 입장은 주유패스 무료 시간대가 아님. 옥상 강풍·추위 대비."
      ],
      fallback:'시텐노지 정원 생략 → 중심가람 관람 단축. 크게 지연되면 시텐노지 생략, 공중정원 16:15 유지',
      plans:[
        {"id": "d2-walk-shitennoji", "time": "10:15-10:40", "name": "숙소 → 시텐노지로 도보 이동", "fee": "무료", "note": "10:40 시텐노지 관람에 맞춰 숙소에서 서문 쪽으로 이동해요. 도보 약 20~25분 예상. 10:15 전 관광 일정은 비워뒀어요.", "map": "Shitennoji Temple West Gate Osaka"},
        {id:'d2-shitennoji',time:'10:40-11:25',name:'시텐노지 · 중심가람',fee:'500엔 · 주유패스 무료',note:'11월 08:30-16:00. 중심가람 우선, 정원은 여유 시 추가 300엔(주유패스 무료). 일반 경내 무료. 보물관 500엔 별도·이번 코스 제외. 정원 휴원일 확인.',map:'Shitennoji Temple Osaka'},
        {id:'d2-to-castle',time:'11:25-12:05',name:'시텐노지 → 오사카성 이동',fee:'교통비 별도 · 주유패스 포함',note:'시텐노지마에유히가오카역까지 도보 → 다니마치선 다니마치욘초메역 → 오사카성 도보. 총 40분 예상.',map:'Osaka Castle'},
        {id:'d2p2',time:'12:05-13:15',name:'오사카성공원 + 천수각',fee:'1,200엔 · 주유패스 무료',note:'공원·천수각 핵심 70분. 천수각 09:00-18:00, 최종 17:30. 공원 자체 무료.',map:'Osaka Castle'},
        {id:'d2-lunch',time:'13:15-14:05',name:'박물관 방향 이동 · 점심',fee:'식비 별도',note:'도보 이동 포함 50분. 오테마에·박물관 인근에서 식사, 대기 긴 식당 피하기.',map:'Otemae Osaka'},
        {id:'d2-museum',time:'14:05-15:05',name:'오사카 역사박물관',fee:'600엔 · 상설전 주유패스 무료',note:'상설전 핵심 60분. 09:30-17:00, 최종입장 16:30. 화요일 휴관.',map:'Osaka Museum of History'},
        {id:'d2-to-umeda',time:'15:05-16:00',name:'우메다 스카이빌딩으로 이동',fee:'교통비 별도 · 주유패스 포함',note:'다니마치욘초메 → 다니마치선 히가시우메다 → 스카이빌딩 도보. 총 55분 예상, 쇼핑 일정 없음.',map:'Umeda Sky Building Osaka'},
        {id:'d2-sky-entry',time:'16:00-16:15',name:'공중정원 입장 준비 · 대기',fee:'아래 입장료에 포함',note:'입장 대기 여유 15분. 혼잡에 따라 더 걸릴 수 있음.',map:'Umeda Sky Building Osaka'},
        {id:'d2p4',time:'16:15-18:30',name:'우메다 스카이빌딩 공중정원',fee:'2,000엔 · 패스 할인 조건 확인',note:'일몰부터 야경까지 관람. 이 시간은 주유패스 무료입장 대상이 아님. 09:30-22:30, 최종 22:00.',map:'Umeda Sky Building Osaka'}
      ]
    },
    {
      "date": "2026-11-27",
      "city": "교토 · 아라시야마와 단풍 야경",
      "short": "교토",
      "notes": [
        "09:30 단풍열차를 타고 도롯코 아라시야마역에서 내려 대나무숲 → 덴류지 정원 → 도게츠교 순으로 걸어요. 덴류지는 북문 입장, 정문 쪽 출구를 이용해요.",
        "한큐 아라시야마역에서 가쓰라역을 거쳐 교토가와라마치역으로 이동. 가와라마치·기온에서 점심을 먹어요.",
        "17:10 청수사 입구 도착 목표. 11/21~30 야간관람은 17:30 시작, 21:00 접수 종료, 21:30 폐문.",
        "저녁에는 기요미즈고조 → 기타하마 → 에비스초로 숙소에 돌아와요."
      ],
      "fallback": "아라시야마 세 곳은 모두 들르고 체류시간을 조정해요. 오후에는 카페·쇼핑 시간을 줄여 17:10 청수사 입구 도착을 목표로 해요.",
      "plans": [
        {
          "id": "d3-arashiyama-transit",
          "time": "06:50-09:00 전후",
          "name": "숙소 → JR 우마호리 → 도롯코 가메오카역",
          "fee": "JR 교통비 별도",
          "note": "06:50 호텔 출발 목표. JR 신이마미야→오사카→교토. 교토역 08:16 사가노선 보통으로 우마호리 08:42 하차, 도롯코 가메오카역까지 도보 약 10분.",
          "map": "Torokko Kameoka Station Kyoto"
        },
        {
          "id": "d3-romantic-train",
          "time": "09:30-09:53 전후",
          "name": "사가노 도롯코 단풍열차",
          "fee": "별도 지정석 승차권",
          "note": "도롯코 가메오카역 09:30 출발 사가노 2호. 도롯코 아라시야마역에서 09:53 전후 내려 대나무숲으로 이어가요.",
          "map": "Torokko Arashiyama Station Kyoto"
        },
        {
          "id": "d3-bamboo",
          "time": "10:00-10:40",
          "name": "아라시야마 대나무숲",
          "fee": "무료",
          "note": "도롯코 아라시야마역에서 나와 대나무숲을 걸어 덴류지 북문으로 이동. 사진과 인파를 고려해 40분을 배정했어요.",
          "map": "Arashiyama Bamboo Grove Kyoto"
        },
        {
          "id": "d3-tenryuji",
          "time": "10:40-11:35",
          "name": "덴류지 정원",
          "fee": "성인 500엔",
          "note": "대나무숲 쪽 북문에서 정원권을 사서 백화원과 소겐치 정원을 산책해요. 정문 쪽으로 나와 도게츠교 방향으로 이어가요.",
          "map": "Tenryu-ji Kyoto"
        },
        {
          "id": "d3-togetsukyo",
          "time": "11:35-12:15",
          "name": "도게츠교 · 가쓰라강",
          "fee": "무료",
          "note": "덴류지 정문에서 도게츠교까지 도보 약 5~10분. 강변과 다리에서 사진을 찍고 다리를 건너 남쪽에서 한큐역으로 이동해요.",
          "map": "Togetsukyo Bridge Kyoto"
        },
        {
          "id": "d3-to-gion",
          "time": "12:15-13:10 전후",
          "name": "한큐로 가와라마치·기온 이동",
          "fee": "한큐 교통비 별도",
          "note": "도게츠교 남쪽 → 한큐 아라시야마역 → 가쓰라역 환승 → 교토가와라마치역. 역 접근과 열차 대기까지 약 55분을 잡아요.",
          "map": "Hankyu Kyoto-Kawaramachi Station Kyoto"
        },
        {
          "id": "d3-lunch",
          "time": "13:10-14:10",
          "name": "가와라마치·기온 점심",
          "fee": "식비 별도",
          "note": "교토가와라마치역과 기온 사이에서 식사하고 쉬어요. 14:10 하나미코지 산책으로 이어가요.",
          "map": "Gion Shijo Kyoto"
        },
        {
          "id": "d3p5",
          "time": "14:10-15:00",
          "name": "기온 · 하나미코지",
          "fee": "무료",
          "note": "50분 산책. 촬영금지 표지·사유지 출입 제한 준수. 15:00 히가시야마 골목 방향 출발.",
          "map": "Hanamikoji Street Kyoto"
        },
        {
          "id": "d3p3",
          "time": "15:00-17:10",
          "name": "니넨자카 · 산넨자카 · 야사카노토",
          "fee": "무료",
          "note": "기온에서 야사카노토(외관)·니넨자카·산넨자카를 연결하고 청수사 방향으로 올라가는 130분(이동·골목·카페 포함). 상점별 폐점시간 상이. 돌계단·경사 주의, 17:10 청수사 입구 도착 목표. 고다이지 내부는 포함하지 않음.",
          "map": "Ninenzaka Sannenzaka Kyoto"
        },
        {
          "id": "d3-night-entry",
          "time": "17:10-17:30",
          "name": "청수사 입장 준비",
          "fee": "아래 입장료에 포함",
          "note": "화장실·입장권 구매·대기 여유 20분. 단풍 절정기에는 줄이 길어져 17:30 정각 입장이 보장되지 않음.",
          "map": "Kiyomizu-dera Niomon Kyoto"
        },
        {
          "id": "d3p8",
          "time": "17:30-19:00",
          "name": "청수사 야간 단풍관람",
          "fee": "500엔",
          "note": "2026/11/21~30 야간관람. 17:30 시작, 21:00 접수 종료·21:30 폐문. 약 90분 계획. 이번 일정은 청수사 야간 1회 방문. 공식·교토시 관광정보 2026-10-22 확인.",
          "map": "Kiyomizu-dera Kyoto"
        },
        {
          "id": "d3-dinner",
          "time": "19:00-20:00",
          "name": "저녁 식사 및 이동",
          "fee": "식비 별도",
          "note": "청수사에서 기요미즈고조역까지 내리막 도보 약 25~35분을 포함한 60분. 식사는 짧게, 대기·인파가 길면 출발과 숙소 복귀가 늦어질 수 있음.",
          "map": "Kiyomizu-Gojo Station Kyoto"
        },
        {
          "id": "d3-return",
          "time": "20:00-21:30 이후",
          "name": "교토 → 난바 숙소",
          "fee": "교통비 별도",
          "note": "게이한 기요미즈고조역 → 요도야바시 방면(보통·준급 또는 단바바시에서 특급 환승) → 요도야바시역 → 메트로 미도스지선 난바역 → 숙소. 약 90분 이상 예상, 21:30 이후 도착 가능.",
          "map": "Osaka Metro Namba Station"
        }
      ]
    },
    {
      "date": "2026-11-28",
      "city": "오사카 · 신세카이·아베노 → KIX",
      "short": "오사카",
      "notes": [
        "체크아웃 후 호텔 로비 셀프 보관함에 짐을 두고 오전에 쓰텐카쿠 → 유니클로 아베노 큐즈몰점 → 하루카스 300으로 이동해요. 여권과 귀중품은 지참해요.",
        "쓰텐카쿠는 시간지정 입장이라 09:00 전후를 목표로 해요. 하루카스 300은 일반 성인 현장 2,200엔, 공식 웹 사전권 1,980엔이에요.",
        "12:00 전후 전망대에서 나와 호텔 짐을 회수해요. 13:00 전후 숙소에서 출발해 난카이 신이마미야역에서 공항급행을 타고, KIX 제1터미널에 14:30 전후 도착을 목표로 해요."
      ],
      "fallback": "쓰텐카쿠 입장 대기가 길면 신세카이에서 시간을 줄이고, 하루카스 관람은 12:00 전후에 마쳐요. 짐 회수와 13:00 전후 공항 이동을 우선해요.",
      "plans": [
        {
          "id": "d4-tsutenkaku",
          "time": "09:00-10:15",
          "name": "신세카이 · 쓰텐카쿠 일반 전망대",
          "fee": "성인 1,500엔",
          "note": "숙소에서 도보 약 5분. 일반 전망대 09:00 개장, 시간지정 입장. 대기와 관람을 함께 잡은 시간이에요.",
          "map": "Tsutenkaku Osaka"
        },
        {
          "id": "d4-uniqlo-abeno",
          "time": "10:15-10:55",
          "name": "유니클로 아베노 큐즈몰점 (UNIQLO Abeno Q's Mall)",
          "fee": "쇼핑 비용 별도",
          "note": "쓰텐카쿠에서 아베노 큐즈몰 1층 유니클로로 걸어가요. 10:00~21:00 영업. 10:15~10:55에는 도보 이동·쇼핑·하루카스 쪽 이동이 포함되어 쇼핑 시간은 짧을 수 있어요. 주소: 大阪府大阪市阿倍野区阿倍野筋1-6-1 あべのキューズモール1F.",
          "map": "UNIQLO Abeno Q's Mall 1-6-1 Abenosuji Osaka"
        },
        {
          "id": "d4-harukas",
          "time": "10:55-12:00",
          "name": "아베노 하루카스 300 전망대",
          "fee": "성인 현장 2,200엔 · 공식 웹 사전권 1,980엔",
          "note": "B1층 또는 2층에서 셔틀 엘리베이터를 타고 16층 입장 게이트로 가요. 현장권은 16층에서 구매. 기본 운영 09:00~22:00.",
          "map": "Harukas 300 Observatory Osaka"
        },
        {
          "id": "d4-bag-pickup",
          "time": "12:00-12:45",
          "name": "숙소 복귀 · 짐 회수",
          "fee": "교통비 별도",
          "note": "오사카 메트로 덴노지역에서 미도스지선 우메다 방면으로 한 정거장, 도부쓰엔마에역 하차 후 숙소로 이동해 짐을 찾아요.",
          "map": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6"
        },
        {
          "id": "d4-nankai-kix",
          "time": "13:00-14:30 전후",
          "name": "숙소 → 난카이 신이마미야 → 간사이공항",
          "fee": "교통비 별도",
          "note": "숙소에서 난카이 신이마미야역까지 도보 약 7~10분. 간사이공항행 공항급행으로 직행, 승차 약 40~45분. 14:30 전후 제1터미널 도착 목표. ZE0614 최신 출발 시각은 E-Ticket에서 확인해요.",
          "map": "Kansai International Airport Terminal 1"
        }
      ]
    }
  ],
  preTripChecklist:[
    {id:'pre-passport',text:'여권 유효기간, 영문 이름, 항공권 예약 정보 일치 확인'},
    {id:'pre-vjw',text:'Visit Japan Web에 입국심사·세관 정보 등록하고 QR 화면 준비',url:'https://www.vjw.digital.go.jp/',linkLabel:'Visit Japan Web'},
    {id:'pre-flight',text:'이스타항공 ZE0611 / ZE0614 예약내역, 출발시간, 터미널 최종 확인'},
    {id:'pre-baggage',text:'이스타항공 수하물 규정 확인 — 이번 예약 무료 위탁수하물 15kg',url:'https://www.eastarjet.com/newstar/PGWIK00005',linkLabel:'수하물 규정'},
    {id:'pre-battery',text:'보조배터리·전자기기 기내 반입 조건 확인하고 위탁수하물에 넣지 않기'},
    {id:'pre-data',text:'일본용 eSIM·로밍 준비 및 출국 전 개통 방법 저장'},
    {id:'pre-money',text:'해외결제 카드, 소액 엔화 현금, 100엔 동전용 여유 현금 준비'},
    {id:'pre-tickets',text:'쓰텐카쿠 시간지정 입장과 우메다 스카이빌딩·하루카스 300 예매 조건 확인'},
    {id:'pre-haruka',text:'11/28 난카이 신이마미야→간사이공항행 공항급행 시각과 체크인 마감 확인'},
    {id:'pre-kyoto',text:'11/27 도롯코 지정석권과 덴류지·청수사 관람시간 확인'},
    {id:'pre-weather',text:'오사카·교토 날씨와 일몰시간 확인 후 방풍·보온 겉옷 준비'},
    {id:'pre-shoes',text:'교토 돌길·낙엽 대비 접지력 좋은 편한 신발 준비'},
    {id:'pre-essentials',text:'충전기, 보조배터리, 작은 우산/경량 우비, 상비품 챙기기'},
    {id:'pre-backup',text:'항공권·숙소·여행 일정·여권 사본을 휴대폰 오프라인으로 저장'}
  ],
  dailyChecklist:[
    {
      date:'2026-11-25',
      items:[
        {id:'day1-passport',text:'집에서 출발 전 여권·지갑·휴대폰·보조배터리 최종 확인'},
        {id:'day1-flight',text:'ZE0611 09:05 ICN 출발 — 공항 도착 후 체크인/수하물 위탁 여유 확보'},
        {id:'day1-bag',text:'위탁수하물 15kg 초과 여부 확인'},
        {id:'day1-vjw',text:'KIX 입국 전 Visit Japan Web QR 화면 바로 열 수 있게 준비',url:'https://www.vjw.digital.go.jp/',linkLabel:'QR 확인'},
        {id:'day1-nankai',text:'KIX 도착 후 난카이 난바 이동편 확인'},
        {id:'day1-market',text:'구로몬시장 늦은 오후 마감 대비 도착 후 우선 방문'}
      ]
    },
    {
      date:'2026-11-26',
      items:[
        {id:'day2-shitennoji',text:'시텐노지 10:40 도착 목표 · 중심가람 우선 · 주유패스 QR 및 정원 휴원일 확인',url:'https://www.shitennoji.or.jp/admission.html',linkLabel:'시텐노지 안내'},
        {id:'day2-castle',text:'오사카성 천수각 최종입장 17:30보다 충분히 일찍 도착'},
        {id:'day2-museum',text:'오사카 역사박물관 14:05 도착 목표 · 상설전 주유패스/입장권 준비'},
        {id:'day2-umeda',text:'우메다 스카이빌딩 입장권과 입장 동선 확인'},
        {id:'day2-warm',text:'우메다 옥상 강풍 대비 얇은 장갑·방풍 겉옷 챙기기'},
        {id:'day2-power',text:'저녁 야경 촬영 전 휴대폰·보조배터리 잔량 확인'}
      ]
    },
    {
      "date": "2026-11-27",
      "items": [
        {
          "id": "day3-wakeup",
          "text": "06:50 호텔 출발 · JR 신이마미야→오사카→교토 · 교토 08:16 출발→우마호리 08:42 도착 목표."
        },
        {
          "id": "day3-torokko",
          "text": "09:30 도롯코 가메오카 출발편의 승차권 확인. 09:00 전후 도롯코역 도착 목표.",
          "url": "https://www.sagano-kanko.co.jp/en/train-info/",
          "linkLabel": "도롯코 공식 시간표"
        },
        {
          "id": "day3-tenryuji",
          "text": "10:40 덴류지 북문 입장 · 대나무숲에서 진입해 정원 관람 후 정문 쪽으로 나오기.",
          "url": "https://www.tenryuji.com/en/visit/index.html",
          "linkLabel": "덴류지 공식"
        },
        {
          "id": "day3-shoes",
          "text": "긴 도보·돌계단 대비 편한 신발·우비/우산·겉옷·신발주머니 준비"
        },
        {
          "id": "day3-cash",
          "text": "덴류지 500엔＋청수사 500엔 · 기본 입장료 1인 1,000엔. 도롯코 승차권 별도."
        },
        {
          "id": "day3-night",
          "text": "17:10 청수사 입장 준비 → 17:30~19:00 야간관람 · 21:00 접수 종료",
          "url": "https://www.kiyomizudera.or.jp/event/yakan.php",
          "linkLabel": "청수사 공식"
        },
        {
          "id": "day3-rest",
          "text": "13:10~14:10 가와라마치·기온 점심 및 휴식 · 19:00~20:00 저녁과 역 이동."
        },
        {"id": "day3-rail-tickets", "text": "JR·한큐·게이한·지하철은 구간별 승차권 또는 이용 가능한 결제수단 확인. 도롯코는 별도 지정석 승차권 준비.", "url": "#icoca-guide", "linkLabel": "승차권 안내"}
      ]
    },
    {
      "date": "2026-11-28",
      "items": [
        {
          "id": "day4-bag",
          "text": "08:25 전후 체크아웃 · 로비 셀프 보관함에 짐 보관 · 여권·귀중품 지참",
          "url": "https://www.eslead-hotel.com/en/namba-3/",
          "linkLabel": "호텔 보관 안내"
        },
        {
          "id": "day4-tsuten",
          "text": "쓰텐카쿠 09:00 전후 일반 전망대 입장 시간 확인",
          "url": "https://www.tsutenkaku.co.jp/annai/",
          "linkLabel": "쓰텐카쿠"
        },
        {
          "id": "day4-harukas",
          "text": "하루카스 300 현장권은 16층에서 구매 · 공식 웹 사전권 조건 확인",
          "url": "https://www.abenoharukas-300.jp/observatory/ticket/",
          "linkLabel": "하루카스 예약"
        },
        {
          "id": "day4-train",
          "text": "짐 회수 후 13:00 전후 숙소 출발 · 난카이 신이마미야역에서 간사이공항행 공항급행 확인",
          "url": "https://www.nankai.co.jp/en_railway/access-timetable",
          "linkLabel": "난카이 시간표"
        },
        {
          "id": "day4-kix",
          "text": "KIX 제1터미널 14:30 전후 도착 목표 · 체크인 마감 확인"
        },
        {
          "id": "day4-flight",
          "text": "11/28 ZE0614 간사이 KIX 터미널 1 출발 · 18:00은 기존 계획값, E-Ticket 최신 시각·마감 확인"
        },
        {
          "id": "day4-baggage",
          "text": "오는편 예약 무료 수하물 15kg 확인 · 쇼핑 짐 무게와 기내 반입품 구분",
          "url": "https://www.eastarjet.com/newstar/PGWIK00005",
          "linkLabel": "수하물 규정"
        }
      ]
    }
  ]
};

const TAX_REFUND_NOTICE="면세 환급: KIX 도착 후 짐을 부치기 전에 여권·구매품 전부로 반출 확인 → 초록색은 완료, 빨간색은 세관 검사 → 수하물 위탁. 환급 방법·시기·수수료는 구매 매장 안내 확인.";
const TAX_REFUND_PLAN={"id": "day4-tax-refund", "time": "KIX 도착 후 · 짐 위탁 전", "name": "KIX 면세 반출 확인 → 수하물 위탁", "fee": "환급 수수료는 매장·업체 조건 확인", "note": "면세 환급: KIX 도착 후 짐을 부치기 전에 여권·구매품 전부로 반출 확인 → 초록색은 완료, 빨간색은 세관 검사 → 수하물 위탁. 환급 방법·시기·수수료는 구매 매장 안내 확인. 단말기 또는 출국장 전용 Wi-Fi의 Visit Japan Web 이용. 구매자 여권·영수증·환급 안내서 준비. 자세한 내용은 면세 환급 안내에서 확인.", "map": "Kansai International Airport"};
const TAX_REFUND_PRE={"id": "pre-tax-refund", "text": "11월부터 새 면세 환급제 적용: 매장 환급 등록·구매품 보관·귀국일 짐 위탁 전 반출 확인 절차 읽기", "url": "#tax-refund", "linkLabel": "면세 환급 안내"};
const TAX_REFUND_DAILY=[{"id": "day4-tax-goods", "text": "면세 등록한 구매품 전부·구매자 여권·영수증·환급 안내서 준비"}, {"id": "day4-tax-before-bag", "text": "KIX 짐 위탁 전 면세 단말기/Visit Japan Web 반출 확인 → 빨간색이면 검사 → 확인 후 짐 위탁", "url": "#tax-refund", "linkLabel": "공항 절차"}];
const refundDay=defaults.days.find(d=>d.date===TRIP_END);
refundDay.notes.push(TAX_REFUND_NOTICE);
refundDay.plans.push(TAX_REFUND_PLAN);
defaults.preTripChecklist.push(TAX_REFUND_PRE);
defaults.dailyChecklist.find(d=>d.date===TRIP_END).items.push(...TAX_REFUND_DAILY);

const ATM_STOPS=[
  {
    "date": "2026-11-25",
    "plan": {
      "id": "d1-seven-atm",
      "time": "난바 도착 후 · 점심 전 (5~10분)",
      "name": "출금 · 세븐일레븐 오사카 닛폰바시역 동쪽점",
      "fee": "인출금은 지출 아님 · 수수료는 카드/ATM 조건 확인",
      "note": "난카이 난바 도착·숙소 짐 보관 후 닛폰바시역 동쪽 점포에서 출금 → 오오키니 식당/구로몬시장. 도착일은 일본 아침 일정이 없어 첫 식사 전에 배치. 식당까지 도보 약 3~5분 추정; 숙소 경유·추가 거리는 미정.\n주소: 大阪府大阪市中央区日本橋1-4-12. 세븐은행 공식: 24시간·ATM 2대. 출금 5~10분(대기 별도). Mastercard 실물 트래블로그 카드·카드 PIN·엔화 잔액 준비. 삼성월렛 휴대폰 태그 출금 지원은 확인되지 않아 실물 카드 기준. 점검·카드사 제한 시 이용 불가할 수 있음. 2026-10-06 확인.",
      "map": "セブン-イレブン 大阪日本橋駅東店 大阪市中央区日本橋1-4-12",
      "optional": true,
      "atm": {
        "label": "세븐일레븐 오사카 닛폰바시역 동쪽점",
        "jp": "セブン-イレブン 大阪日本橋駅東店",
        "address": "大阪府大阪市中央区日本橋1-4-12",
        "hours": "24시간 (ATM 2대 · 점검·카드사 이용시간 제외)",
        "official": "https://location.sevenbank.co.jp/sevenbank/spot/detail?code=0000020877",
        "checked": "2026-10-06"
      }
    },
    "route": {
      "kind": "도보 · 출금",
      "title": "난바 → 닛폰바시역 동쪽 세븐일레븐 → 점심",
      "steps": [
        "난카이 난바역 도착 후 숙소 짐 보관. 숙소 미정이므로 점포까지 실제 길찾기 확인.",
        "센니치마에 거리에서 닛폰바시역 방향으로 이동해 日本橋1-4-12 점포의 세븐은행 ATM에서 출금.",
        "출금 후 浪速日本橋食堂까지 도보 약 3~5분 추정. 식당을 생략하면 구로몬시장으로 바로 이동."
      ],
      "tip": "난카이 난바 도착·숙소 짐 보관 후 닛폰바시역 동쪽 점포에서 출금 → 오오키니 식당/구로몬시장. 도착일은 일본 아침 일정이 없어 첫 식사 전에 배치. 식당까지 도보 약 3~5분 추정; 숙소 경유·추가 거리는 미정.",
      "origin": "Nankai Namba Station",
      "destination": "セブン-イレブン 大阪日本橋駅東店 大阪市中央区日本橋1-4-12"
    },
    "walk": [
      "출금 경유",
      "점포 → 식당",
      "약 3~5분 추정",
      "숙소 출발·추가 거리 미정. 기존 여행 총 도보거리에는 ATM 경유를 중복 가산하지 않음. 출금 5~10분·대기 별도."
    ],
    "note": "난카이 난바 도착·숙소 짐 보관 후 닛폰바시역 동쪽 점포에서 출금 → 오오키니 식당/구로몬시장. 도착일은 일본 아침 일정이 없어 첫 식사 전에 배치. 식당까지 도보 약 3~5분 추정; 숙소 경유·추가 거리는 미정."
  },
  {
    "date": "2026-11-26",
    "plan": {
      "id": "d2-seven-atm",
      "time": "08:35-08:45 (필요 시)",
      "name": "출금 · 세븐일레븐 오사카 에비스니시 1초메점",
      "fee": "인출금은 지출 아님 · 수수료 조건 확인",
      "note": "숙소 근처 大阪市浪速区恵美須西1-2-1 점포. 호텔에서 도보 약 3~5분 추정. 세븐은행 공식 24시간·ATM 1대(2026-11-01 확인, 점검·카드사 제한 별도). 출금 후 시텐노지로 이동할 준비를 해요. 실물 카드·PIN·엔화 잔액 준비, 출금 5~10분·대기 별도.",
      "map": "セブン-イレブン 大阪恵美須西1丁目店 大阪府大阪市浪速区恵美須西1-2-1",
      "atm": {
        "label": "세븐일레븐 오사카 에비스니시 1초메점",
        "jp": "セブン-イレブン 大阪恵美須西1丁目店",
        "address": "大阪府大阪市浪速区恵美須西1-2-1",
        "hours": "24시간 · ATM 1대 (점검·카드사 제한 별도)",
        "official": "https://location.sevenbank.co.jp/sevenbank/spot/detail?code=0000007338",
        "checked": "2026-11-01"
      },
      "optional": true
    },
    "route": {
      "kind": "도보 · 출금",
      "title": "호텔 → 에비스니시 1초메점 → 다음 일정",
      "steps": [
        "호텔(恵美須西2-8-6)에서 북쪽 에비스초역 주변 恵美須西1-2-1 점포로 도보 약 3~5분 추정.",
        "출금 후 10:15 전후 시텐노지로 이동할 준비를 해요."
      ],
      "origin": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6",
      "destination": "セブン-イレブン 大阪恵美須西1丁目店 大阪府大阪市浪速区恵美須西1-2-1",
      "tip": "출금 선택 일정. 공식 ATM 24시간·1대, 대기·점검 별도."
    },
    "walk": [
      "출금 경유",
      "호텔 → 에비스니시 1초메점",
      "약 3~5분 추정",
      "숙소 주변 출금 동선. 다음 목적지까지 걷기는 각 이동 안내 참고."
    ],
    "note": "숙소 근처 大阪市浪速区恵美須西1-2-1 점포. 호텔에서 도보 약 3~5분 추정. 세븐은행 공식 24시간·ATM 1대(2026-11-01 확인, 점검·카드사 제한 별도). 출금 후 시텐노지로 이동할 준비를 해요. 실물 카드·PIN·엔화 잔액 준비, 출금 5~10분·대기 별도."
  },
  {
    "date": "2026-11-27",
    "plan": {
      "id": "d3-seven-atm",
      "time": "06:25-06:40 (필요 시)",
      "name": "출금 · 세븐일레븐 오사카 에비스니시 1초메점",
      "fee": "인출금은 지출 아님 · 수수료 조건 확인",
      "note": "숙소 근처 大阪市浪速区恵美須西1-2-1 점포. 호텔에서 도보 약 3~5분 추정. 세븐은행 공식 24시간·ATM 1대(2026-11-01 확인, 점검·카드사 제한 별도). 출금 후 06:50 호텔 출발에 맞춰 돌아와요. 전날 저녁 출금도 가능해요. 실물 카드·PIN·엔화 잔액 준비, 출금 5~10분·대기 별도.",
      "map": "セブン-イレブン 大阪恵美須西1丁目店 大阪府大阪市浪速区恵美須西1-2-1",
      "atm": {
        "label": "세븐일레븐 오사카 에비스니시 1초메점",
        "jp": "セブン-イレブン 大阪恵美須西1丁目店",
        "address": "大阪府大阪市浪速区恵美須西1-2-1",
        "hours": "24시간 · ATM 1대 (점검·카드사 제한 별도)",
        "official": "https://location.sevenbank.co.jp/sevenbank/spot/detail?code=0000007338",
        "checked": "2026-11-01"
      },
      "optional": true
    },
    "route": {
      "kind": "도보 · 출금",
      "title": "호텔 → 에비스니시 1초메점 → 다음 일정",
      "steps": [
        "호텔(恵美須西2-8-6)에서 북쪽 에비스초역 주변 恵美須西1-2-1 점포로 도보 약 3~5분 추정.",
        "출금 후 호텔에 돌아와 06:50 출발. 전날 저녁 출금도 가능해요."
      ],
      "origin": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6",
      "destination": "セブン-イレブン 大阪恵美須西1丁目店 大阪府大阪市浪速区恵美須西1-2-1",
      "tip": "출금 선택 일정. 공식 ATM 24시간·1대, 대기·점검 별도."
    },
    "walk": [
      "출금 경유",
      "호텔 → 에비스니시 1초메점",
      "약 3~5분 추정",
      "숙소 주변 출금 동선. 다음 목적지까지 걷기는 각 이동 안내 참고."
    ],
    "note": "숙소 근처 大阪市浪速区恵美須西1-2-1 점포. 호텔에서 도보 약 3~5분 추정. 세븐은행 공식 24시간·ATM 1대(2026-11-01 확인, 점검·카드사 제한 별도). 출금 후 06:50 호텔 출발에 맞춰 돌아와요. 전날 저녁 출금도 가능해요. 실물 카드·PIN·엔화 잔액 준비, 출금 5~10분·대기 별도."
  },
  {
    "date": "2026-11-28",
    "plan": {
      "id": "d4-seven-atm",
      "time": "08:40-08:50 (필요 시)",
      "name": "출금 · 세븐일레븐 오사카 에비스니시 1초메점",
      "fee": "인출금은 지출 아님 · 수수료 조건 확인",
      "note": "숙소 근처 大阪市浪速区恵美須西1-2-1 점포. 호텔에서 도보 약 3~5분 추정. 세븐은행 공식 24시간·ATM 1대(2026-11-01 확인, 점검·카드사 제한 별도). 호텔에 짐을 맡긴 뒤 필요 시 출금하고 쓰텐카쿠 쪽으로 걸어요. 실물 카드·PIN·엔화 잔액 준비, 출금 5~10분·대기 별도.",
      "map": "セブン-イレブン 大阪恵美須西1丁目店 大阪府大阪市浪速区恵美須西1-2-1",
      "atm": {
        "label": "세븐일레븐 오사카 에비스니시 1초메점",
        "jp": "セブン-イレブン 大阪恵美須西1丁目店",
        "address": "大阪府大阪市浪速区恵美須西1-2-1",
        "hours": "24시간 · ATM 1대 (점검·카드사 제한 별도)",
        "official": "https://location.sevenbank.co.jp/sevenbank/spot/detail?code=0000007338",
        "checked": "2026-11-01"
      },
      "optional": true
    },
    "route": {
      "kind": "도보 · 출금",
      "title": "호텔 → 에비스니시 1초메점 → 다음 일정",
      "steps": [
        "호텔(恵美須西2-8-6)에서 북쪽 에비스초역 주변 恵美須西1-2-1 점포로 도보 약 3~5분 추정.",
        "호텔에 짐을 맡기고 출금한 뒤 쓰텐카쿠로 걸어요."
      ],
      "origin": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6",
      "destination": "セブン-イレブン 大阪恵美須西1丁目店 大阪府大阪市浪速区恵美須西1-2-1",
      "tip": "출금 선택 일정. 공식 ATM 24시간·1대, 대기·점검 별도."
    },
    "walk": [
      "출금 경유",
      "호텔 → 에비스니시 1초메점",
      "약 3~5분 추정",
      "숙소 주변 출금 동선. 다음 목적지까지 걷기는 각 이동 안내 참고."
    ],
    "note": "숙소 근처 大阪市浪速区恵美須西1-2-1 점포. 호텔에서 도보 약 3~5분 추정. 세븐은행 공식 24시간·ATM 1대(2026-11-01 확인, 점검·카드사 제한 별도). 호텔에 짐을 맡긴 뒤 필요 시 출금하고 쓰텐카쿠 쪽으로 걸어요. 실물 카드·PIN·엔화 잔액 준비, 출금 5~10분·대기 별도."
  }
];
function applyAtmStops(x){
  if(x.sevenAtmUpdate==='2026-10-06')return x;
  const key=STORAGE_KEY+'-before-seven-atm-2026-10-06';
  if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(x));
  ATM_STOPS.forEach(stop=>{
    if(x.kobeDayUpdate===KOBE_DAY_UPDATE&&stop.date===KOBE_DAY.date)return;
    const day=x.data.days.find(d=>d.date===stop.date);
    if(!day)return;
    if(!day.plans.some(p=>p.id===stop.plan.id)){
      const at=stop.date===TRIP_START?day.plans.findIndex(p=>p.id==='d1-naniwa-lunch'||p.id==='d1p2'):0;
      day.plans.splice(at<0?Math.min(1,day.plans.length):at,0,clone(stop.plan));
    }
    if(!Array.isArray(day.notes))day.notes=[];
    const note='出金 / 출금: '+stop.note;
    if(!day.notes.includes(note))day.notes.push(note);
    let group=x.data.dailyChecklist.find(g=>g.date===stop.date);
    if(!group){group={date:stop.date,items:[]};x.data.dailyChecklist.push(group);}
    const id=stop.plan.id+'-check';
    if(!group.items.some(i=>i.id===id))group.items.unshift({id,text:stop.plan.time+' · '+stop.plan.atm.label+'에서 필요 시 출금 · 실물 카드·PIN·엔화 잔액 확인',url:stop.plan.atm.official,linkLabel:'공식 ATM 위치'});
  });
  x.sevenAtmUpdate='2026-10-06';localStorage.setItem(STORAGE_KEY,JSON.stringify(x));return x;
}
ATM_STOPS.forEach(stop=>{
  const day=defaults.days.find(d=>d.date===stop.date);
  const at=stop.date===TRIP_START?day.plans.findIndex(p=>p.id==='d1-naniwa-lunch'):0;
  day.plans.splice(at<0?1:at,0,clone(stop.plan));
  day.notes.push('出金 / 출금: '+stop.note);
  defaults.dailyChecklist.find(g=>g.date===stop.date).items.unshift({id:stop.plan.id+'-check',text:stop.plan.time+' · '+stop.plan.atm.label+'에서 필요 시 출금 · 실물 카드·PIN·엔화 잔액 확인',url:stop.plan.atm.official,linkLabel:'공식 ATM 위치'});
});

function clone(v){return JSON.parse(JSON.stringify(v));}
function newId(){return (crypto.randomUUID&&crypto.randomUUID())||('id'+Date.now()+Math.random().toString(16).slice(2));}
ATM_STOPS.forEach(stop=>{const p=HOTEL_TRIP_UPDATE.plans[stop.plan.id];if(p){Object.assign(stop.plan,clone(p));stop.note=p.note;if(HOTEL_TRIP_UPDATE.routes[stop.plan.id])stop.route=clone(HOTEL_TRIP_UPDATE.routes[stop.plan.id]);}});
updateHotelTripData(defaults);
updateFlightTripData(defaults);

const KYOTO_UPDATE='2026-11-22-torokko';
const PREVIOUS_KYOTO_UPDATE='2026-10-22-arashiyama';
function applyKyotoUpdate(x, persist=true){
  if(x.kyotoUpdate===KYOTO_UPDATE)return x;
  const key=STORAGE_KEY+'-before-'+KYOTO_UPDATE;
  if(persist&&!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(x));
  const target=defaults.days.find(d=>d.date==='2026-11-27');
  const index=x.data.days.findIndex(d=>d.date===target.date);
  if(index>=0){
    const old=x.data.days[index];
    const managed=new Set(target.plans.map(p=>p.id).concat(['d3p1','d3p2','d3p4','d3-to-eikando','d3p7','d3p6']));
    const custom=old.plans.filter(p=>!managed.has(p.id));
    x.data.days[index]=clone(target);
    if(x.kyotoUpdate===PREVIOUS_KYOTO_UPDATE){
      const afternoonIds=new Set(['d3p5','d3p3','d3-night-entry','d3p8','d3-dinner','d3-return']);
      x.data.days[index].plans=x.data.days[index].plans.map(plan=>
        afternoonIds.has(plan.id)?(old.plans.find(p=>p.id===plan.id)||plan):plan
      );
    }
    x.data.days[index].plans.push(...custom);
    const customNotes=(old.notes||[]).filter(n=>!(/^(?:2026-10-22 수정|05:30 (?:난바 |숙소·)|덴류지 정원은 2026|청수사 아침·고다이지|09:30~10:45 아라시야마|점심 12:30~13:30|교토 관람 순서·식사|出金 \/ 출금: 숙소 (?:→ 점포 출금|근처 大阪市浪速区恵美須西1-2-1).*05:30)/.test(n)));
    customNotes.forEach(n=>{if(!x.data.days[index].notes.includes(n))x.data.days[index].notes.push(n);});
  }else x.data.days.push(clone(target));
  const group=defaults.dailyChecklist.find(g=>g.date===target.date);
  const existing=x.data.dailyChecklist.find(g=>g.date===target.date);
  if(existing){
    const ids=new Set(group.items.map(i=>i.id));
    existing.items=clone(group.items).concat(existing.items.filter(i=>i.id!=='day3-eikando'&&!ids.has(i.id)));
  }else x.data.dailyChecklist.push(clone(group));
  const pre=x.data.preTripChecklist.find(i=>i.id==='pre-kyoto');
  if(pre)pre.text=defaults.preTripChecklist.find(i=>i.id==='pre-kyoto').text;
  if(x.admissionOptions){
    delete x.admissionOptions.kodaiji;
    delete x.admissionOptions.garden;
    delete x.admissionOptions.sanmon;
  }
  x.kyotoUpdate=KYOTO_UPDATE;
  if(persist)localStorage.setItem(STORAGE_KEY,JSON.stringify(x));
  return x;
}
function applyHotelUpdate(x){
  if(x.hotelUpdate===HOTEL_TRIP_UPDATE.version)return x;
  const key=STORAGE_KEY+'-before-'+HOTEL_TRIP_UPDATE.version;
  if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(x));
  updateHotelTripData(x.data);
  x.hotelUpdate=HOTEL_TRIP_UPDATE.version;
  localStorage.setItem(STORAGE_KEY,JSON.stringify(x));
  return x;
}

function applyFlightUpdate(x){
  if(x.flightUpdate===FLIGHT_BOOKING.version)return x;
  const key=STORAGE_KEY+'-before-'+FLIGHT_BOOKING.version;
  if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(x));
  updateFlightTripData(x.data);
  x.flightUpdate=FLIGHT_BOOKING.version;
  localStorage.setItem(STORAGE_KEY,JSON.stringify(x));
  return x;
}

function scheduleBackupKey(){
  const kobeBackup=STORAGE_KEY+'-before-'+KOBE_DAY_UPDATE;
  if(localStorage.getItem(kobeBackup))return kobeBackup;
  const arrivalBackup=STORAGE_KEY+'-before-'+NAMBA_ARRIVAL_UPDATE;
  if(localStorage.getItem(arrivalBackup))return arrivalBackup;
  const returnBackup=STORAGE_KEY+'-before-'+OSAKA_RETURN_UPDATE;
  if(localStorage.getItem(returnBackup))return returnBackup;
  const kyoto=STORAGE_KEY+'-before-'+KYOTO_UPDATE;
  if(localStorage.getItem(kyoto))return kyoto;
  const flight=STORAGE_KEY+'-before-'+FLIGHT_BOOKING.version;
  if(localStorage.getItem(flight))return flight;
  const hotel=STORAGE_KEY+'-before-'+HOTEL_TRIP_UPDATE.version;
  if(localStorage.getItem(hotel))return hotel;
  const previousKyoto=STORAGE_KEY+'-before-'+PREVIOUS_KYOTO_UPDATE;
  return localStorage.getItem(previousKyoto)?previousKyoto:STORAGE_KEY+'-before-'+SCHEDULE_VERSION;
}

function freshState(){return applyVerifiedScheduleCorrections(applyShinsekaiDonkiUpdate(applyKobeDayUpdate({nambaArrivalUpdate:NAMBA_ARRIVAL_UPDATE,osakaReturnUpdate:OSAKA_RETURN_UPDATE,kuromonSanpeiUpdate:true,flightUpdate:FLIGHT_BOOKING.version,hotelUpdate:HOTEL_TRIP_UPDATE.version,kyotoUpdate:KYOTO_UPDATE,scheduleVersion:SCHEDULE_VERSION,data:clone(defaults),completed:{},checklistDone:{},expenses:[]},false),false));}
function migrateSchedule(x){
  if(x.scheduleVersion===SCHEDULE_VERSION)return x;
  // Keep the complete pre-update state recoverable, including personal edits.
  const backupKey=STORAGE_KEY+'-before-'+SCHEDULE_VERSION;
  if(!localStorage.getItem(backupKey))localStorage.setItem(backupKey,JSON.stringify(x));
  const oldDays=x.data.days;
  x.data.days=clone(defaults.days).map(function(day){
    const old=oldDays.find(function(d){return d.date===day.date;});
    if(old&&x.scheduleVersion==='2026-09-21-museum'&&day.date!=='2026-11-26')return old;
    if(old)day.plans.push(...old.plans.filter(function(p){return !/^d[1-4]p\d+$/.test(p.id)&&!day.plans.some(function(n){return n.id===p.id;});}));
    return day;
  });
  const mergeItems=function(old,items){const ids=new Set(old.map(function(i){return i.id;}));return old.concat(items.filter(function(i){return !ids.has(i.id);}));};
  x.data.preTripChecklist=mergeItems(x.data.preTripChecklist||[],defaults.preTripChecklist);
  defaults.dailyChecklist.forEach(function(group){
    const old=x.data.dailyChecklist.find(function(g){return g.date===group.date;});
    if(old){
      old.items=mergeItems(old.items,group.items);
      if(group.date==='2026-11-26')old.items=old.items.map(item=>item.id==='day2-museum'?clone(group.items.find(n=>n.id===item.id)):item);
    }else x.data.dailyChecklist.push(clone(group));
  });
  x.scheduleVersion=SCHEDULE_VERSION;
  localStorage.setItem(STORAGE_KEY,JSON.stringify(x));
  return x;
}


function addOokiniLunch(x){
  if(x.ookiniUpdate==='2026-10-05')return x;
  const backupKey=STORAGE_KEY+'-before-ookini-2026-10-05';
  if(!localStorage.getItem(backupKey))localStorage.setItem(backupKey,JSON.stringify(x));
  const day=x.data.days.find(d=>d.date==='2026-11-25');
  if(day&&!day.plans.some(p=>p.id==='d1-naniwa-lunch')){
    const lunch=clone(defaults.days[0].plans.find(p=>p.id==='d1-naniwa-lunch'));
    const market=day.plans.findIndex(p=>p.id==='d1p2');
    day.plans.splice(market>=0?market:Math.min(1,day.plans.length),0,lunch);
  }
  x.ookiniUpdate='2026-10-05';
  localStorage.setItem(STORAGE_KEY,JSON.stringify(x));
  return x;
}

function addTakoyakiChoices(x){
  if(x.takoyakiUpdate==='2026-10-05')return x;
  const plan=x.data.days.find(d=>d.date==='2026-11-25')?.plans.find(p=>p.id==='d1p5');
  if(plan&&!String(plan.note||'').includes('타코야키 선택 후보'))plan.note=(plan.note||'')+"\n타코야키 선택 후보 (둘 중 원하는 곳 방문 · 도톤보리 18:00~20:00 안에 20~30분, 대기 별도):\n① 크레오루 도톤보리점 くれおーる: 道頓堀1-6-4. 공식 10:00~23:00·무휴. 기본 8개 803엔 / 반숙계란+파 6개 803엔(공식 매장식사 메뉴; 포장 가격 다를 수 있음). 카드 Visa·Mastercard 등 가능 안내, 포장 판매대는 확인. 매장 식사는 1인 1음료·1주문 안내.\n② 오도리다코 도톤보리점 踊りだこ: 道頓堀1-7-24. 11:00~21:00·부정기 휴무 안내. 한 알마다 통쭈꾸미 1마리. 4개 600엔 / 6개 800엔 / 8개 1,200엔(게시 메뉴 기준). 카드·전자머니·QR 불가 안내, 현금 준비.\n2026-10-05 확인, 여행 전 가격·영업 재확인. 두 곳 모두 방문할 필요 없이 현장에서 선택.";
  x.takoyakiUpdate='2026-10-05';
  localStorage.setItem(STORAGE_KEY,JSON.stringify(x));return x;
}

function addTaxRefundInfo(x){
  if(x.taxRefundUpdate==='2026-10-06')return x;
  const backupKey=STORAGE_KEY+'-before-tax-refund-2026-10-06';
  if(!localStorage.getItem(backupKey))localStorage.setItem(backupKey,JSON.stringify(x));
  const day=x.data.days.find(d=>d.date===TRIP_END);
  if(day){
    if(!day.plans.some(p=>p.id===TAX_REFUND_PLAN.id))day.plans.push(clone(TAX_REFUND_PLAN));
    if(!Array.isArray(day.notes))day.notes=[];
    if(!day.notes.includes(TAX_REFUND_NOTICE))day.notes.push(TAX_REFUND_NOTICE);
  }
  if(!x.data.preTripChecklist.some(i=>i.id===TAX_REFUND_PRE.id))x.data.preTripChecklist.push(clone(TAX_REFUND_PRE));
  let group=x.data.dailyChecklist.find(g=>g.date===TRIP_END);
  if(!group){group={date:TRIP_END,items:[]};x.data.dailyChecklist.push(group);}
  TAX_REFUND_DAILY.forEach(i=>{if(!group.items.some(n=>n.id===i.id))group.items.push(clone(i));});
  x.taxRefundUpdate='2026-10-06';
  localStorage.setItem(STORAGE_KEY,JSON.stringify(x));
  return x;
}

function applyKuromonSanpeiUpdate(x){
  if(x.kuromonSanpeiUpdate)return x;
  const day=x.data.days.find(d=>d.date===TRIP_START);
  if(day){
    const marketIndex=day.plans.findIndex(plan=>plan.id==='d1p2');
    const existing=day.plans.find(plan=>plan.id===KUROMON_SANPEI_PLAN.id || /[쿠구]로몬\s*산페이|黒門三平/.test(plan.name));
    if(marketIndex>=0&&!existing)day.plans.splice(marketIndex+1,0,clone(KUROMON_SANPEI_PLAN));
    if(!Array.isArray(day.notes))day.notes=[];
    if(!day.notes.includes(KUROMON_MARKET_EVENT))day.notes.push(KUROMON_MARKET_EVENT);
  }
  x.kuromonSanpeiUpdate=true;
  localStorage.setItem(STORAGE_KEY,JSON.stringify(x));
  return x;
}

const OSAKA_RETURN_UPDATE='2026-11-23-tennoji-return';
function applyOsakaReturnUpdate(x){
  if(x.osakaReturnUpdate===OSAKA_RETURN_UPDATE)return x;
  const backupKey=STORAGE_KEY+'-before-'+OSAKA_RETURN_UPDATE;
  if(!localStorage.getItem(backupKey))localStorage.setItem(backupKey,JSON.stringify(x));
  const harukasPattern=/하루카스|ハルカス|harukas/i;
  const legacyNara=/나라공원|긴테쓰나라|JR나라|도다이지|나라마치|가스가타이샤|奈良|東大寺|\bNara\b|Todaiji|Todai-ji/i;
  const osakaDay=x.data.days.find(day=>day.date==='2026-11-26');
  const revisedOsaka=defaults.days.find(day=>day.date==='2026-11-26');
  if(osakaDay){
    const retired=new Set(['d2p1']);
    const revised=new Set(['d2-seven-atm','d2-walk-shitennoji']);
    osakaDay.plans=osakaDay.plans.filter(p=>!retired.has(p.id)&&!harukasPattern.test(p.name+' '+p.map))
      .map(p=>revised.has(p.id)?clone(revisedOsaka.plans.find(item=>item.id===p.id)):p);
    const outdated=new Set(["쓰텐카쿠 → 시텐노지 → 오사카성 → 역사박물관 → 공중정원. 이동시간은 예상값.", "주유패스 이용자는 쓰텐카쿠 1층 티켓센터에서 당일 시간지정권 교환. 09:00 입장은 확정이 아니므로 일찍 방문.", "시텐노지는 중심가람 45분 우선. 정원은 여유가 있을 때만. 중심가람·정원은 주유패스 무료, 보물관은 별도.", "주유패스 사용 시 포함 지하철은 패스로 입장. 트래블로그를 태그하면 별도 운임 발생.", "우메다 공중정원 16:15 입장은 주유패스 무료 시간대가 아님. 옥상 강풍·추위 대비.", "숙소에서 쓰텐카쿠까지 도보 약 5분. 08:35 근처 ATM은 필요 시만 방문, 관람 종료 뒤 도부쓰엔마에역 경유 같은 호텔 복귀."]);
    osakaDay.notes=[...new Set([...revisedOsaka.notes,...(osakaDay.notes||[]).filter(note=>!outdated.has(note)&&!harukasPattern.test(note)&&!/^出金 \/ 출금: .*쓰텐카쿠/.test(note))])];
  }
  const index=x.data.days.findIndex(day=>day.date===TRIP_END);
  const revisedReturn=clone(defaults.days.find(day=>day.date===TRIP_END));
  if(index>=0){
    const old=x.data.days[index];
    const revisedIds=new Set(revisedReturn.plans.map(p=>p.id));
    const retained=old.plans.filter(p=>!/^d4p[1-6]$/.test(p.id)&&!revisedIds.has(p.id)&&!legacyNara.test(p.name+' '+p.map));
    const outdatedNotes=new Set(["16:00 전 공항 도착이 목표지만 실제 이동은 15:00 전후 KIX 도착 목표.", "긴테쓰나라역 도착 즉시 짐 보관. 유인 수하물 보관은 09:00부터.", "나라→KIX 추천은 JR나라 → 덴노지 → 하루카.", "정확한 11/28 열차 시간은 출발 1개월 전과 여행 직전 재확인.", "면세 환급: KIX 도착 후 짐을 부치기 전에 여권·구매품 전부로 반출 확인 → 초록색은 완료, 빨간색은 세관 검사 → 수하물 위탁. 환급 방법·시기·수수료는 구매 매장 안내 확인.", "ICOCA 반납: 하루카 도착·출구 개찰 후 JR 간사이공항역 창구(05:30~23:00). 10~20분＋대기 여유; 줄이 길면 면세·체크인 우선. 반납은 선택.", "07:00 전후 호텔 체크아웃·짐 전부 지참 → 에비스초→닛폰바시/긴테쓰닛폰바시→나라. 호텔에 짐을 남기지 않고 긴테쓰나라역 보관 후 공항 직행. 12:20 공항 이동·16:00 전 KIX 도착 우선.", "항공 예약 확인(2026-11-03): ZE0614 · 간사이 KIX 출발 터미널 1 · 무료 수하물 15kg. 18:00→19:50는 기존 계획으로, E-Ticket에서 재확인. 공항 15:00 목표·16:00 전 도착 계획 유지."]);
    revisedReturn.notes.push(...(old.notes||[]).filter(note=>!outdatedNotes.has(note)&&!legacyNara.test(note)&&!revisedReturn.notes.includes(note)));
    revisedReturn.plans.push(...retained);
    x.data.days[index]=revisedReturn;
  }
  for(const group of x.data.dailyChecklist){
    if(group.date!=='2026-11-26'&&group.date!==TRIP_END)continue;
    const defaultsForDay=defaults.dailyChecklist.find(entry=>entry.date===group.date).items;
    const removed=new Set(['day2-tsuten','day4-locker','day4-cash','day4-hotel-checkout']);
    const managed=new Set(defaultsForDay.map(item=>item.id));
    group.items=[...clone(defaultsForDay),...group.items.filter(item=>!managed.has(item.id)&&!removed.has(item.id)&&!legacyNara.test(item.text)&&!(group.date==='2026-11-26'&&harukasPattern.test(item.text)))];
  }
  for(const item of x.data.preTripChecklist){
    if(['pre-tickets','pre-haruka','pre-weather'].includes(item.id))item.text=defaults.preTripChecklist.find(p=>p.id===item.id).text;
  }
  x.osakaReturnUpdate=OSAKA_RETURN_UPDATE;
  localStorage.setItem(STORAGE_KEY,JSON.stringify(x));
  return x;
}

const NAMBA_ARRIVAL_UPDATE='2026-11-23-nankai-bic';
function applyNambaArrivalUpdate(x){
  if(x.nambaArrivalUpdate===NAMBA_ARRIVAL_UPDATE)return x;
  const backup=STORAGE_KEY+'-before-'+NAMBA_ARRIVAL_UPDATE;
  if(!localStorage.getItem(backup))localStorage.setItem(backup,JSON.stringify(x));
  const retired=new Set(['d1p4','d1-icoca-buy','d4-icoca-return']);
  for(const day of x.data.days){
    const oldSlot=day.plans.findIndex(plan=>plan.id==='d1p4');
    const oldIndex=oldSlot<0?-1:day.plans.slice(0,oldSlot).filter(plan=>!retired.has(plan.id)).length;
    day.plans=day.plans.filter(plan=>!retired.has(plan.id));
    day.notes=(day.notes||[]).filter(note=>!/^ICOCA (?:구매|반납):/.test(note));
    if(day.date!==TRIP_START)continue;
    const arrival=day.plans.find(plan=>plan.id==='d1p1');
    if(arrival)Object.assign(arrival,clone(HOTEL_TRIP_UPDATE.plans.d1p1));
    if(!day.plans.some(plan=>plan.id===NAMBA_SHOPPING_PLAN.id)){
      const dinner=day.plans.findIndex(plan=>plan.id==='d1p5');
      day.plans.splice(oldIndex>=0?oldIndex:dinner>=0?dinner:day.plans.length,0,clone(NAMBA_SHOPPING_PLAN));
    }
    day.notes=[...new Set([...day.notes,NANKAI_ARRIVAL_NOTE,NAMBA_SHOPPING_NOTE])];
  }
  const oldChecks=new Set(['pre-icoca','day1-icoca-buy','day3-icoca-balance','day4-icoca-return']);
  x.data.preTripChecklist=x.data.preTripChecklist.filter(item=>!oldChecks.has(item.id));
  for(const group of x.data.dailyChecklist){
    group.items=group.items.filter(item=>!oldChecks.has(item.id));
    const arrival=group.items.find(item=>item.id==='day1-nankai');
    const updated=defaults.dailyChecklist.find(day=>day.date===group.date);
    if(arrival)arrival.text=updated.items.find(item=>item.id==='day1-nankai').text;
    if(group.date==='2026-11-27'&&!group.items.some(item=>item.id==='day3-rail-tickets')){
      group.items.push(clone(updated.items.find(item=>item.id==='day3-rail-tickets')));
    }
  }
  x.nambaArrivalUpdate=NAMBA_ARRIVAL_UPDATE;
  localStorage.setItem(STORAGE_KEY,JSON.stringify(x));
  return x;
}

const KOBE_DAY_UPDATE='2026-11-23-kobe-day-2';
const KOBE_DAY = {
  "date": "2026-11-26",
  "city": "고베 · 누노비키에서 하버랜드까지",
  "short": "고베",
  "notes": [
    "11/26 (목) 08:20 숙소 출발. 신고베에서 시작해 기타노·산노미야·난킨마치·메리켄파크를 거쳐 하버랜드로 내려와요.",
    "누노비키 크리스마스 시즌 목요일 로프웨이 상행 마지막 16:45 · 하행 마지막 17:15. 강풍 운휴 여부를 출발 전에 확인하세요.",
    "포트타워 전망대는 선택이에요. 하버랜드에서는 17:30부터 KOBE UMIAKARI 조명과 저녁을 즐겨요."
  ],
  "fallback": "로프웨이가 운휴하면 신고베에서 기타노로 바로 이동해 이후 일정을 앞당겨요. 시간이 밀리면 기타노 실내 관람과 포트타워 전망대부터 생략하세요.",
  "plans": [
    {
      "id": "d2-seven-atm",
      "time": "08:05-08:15 (필요 시)",
      "name": "출금 · 세븐일레븐 오사카 에비스니시 1초메점",
      "fee": "인출금은 지출 아님 · 수수료 조건 확인",
      "note": "숙소 근처 大阪市浪速区恵美須西1-2-1 점포. 호텔에서 도보 약 3~5분 추정. 세븐은행 공식 24시간·ATM 1대(2026-11-01 확인, 점검·카드사 제한 별도). 출금은 08:20 고베 출발 전에 마쳐요. 현금이 있거나 대기 줄이 길면 생략하세요. 실물 카드·PIN·엔화 잔액 준비, 출금 5~10분·대기 별도.",
      "map": "セブン-イレブン 大阪恵美須西1丁目店 大阪府大阪市浪速区恵美須西1-2-1",
      "atm": {
        "label": "세븐일레븐 오사카 에비스니시 1초메점",
        "jp": "セブン-イレブン 大阪恵美須西1丁目店",
        "address": "大阪府大阪市浪速区恵美須西1-2-1",
        "hours": "24시간 · ATM 1대 (점검·카드사 제한 별도)",
        "official": "https://location.sevenbank.co.jp/sevenbank/spot/detail?code=0000007338",
        "checked": "2026-11-01"
      },
      "optional": true
    },
    {
      "id": "d2-kobe-to-shinkobe",
      "time": "08:20",
      "name": "오사카 숙소 → 신고베",
      "fee": "철도 운임 별도",
      "note": "JR 신이마미야 → 오사카역 → JR 고베선 산노미야역. 산노미야에서 고베 시영 지하철로 신고베역까지 한 정거장. 환승·도보 포함 약 80~100분 배정.",
      "map": "Kobe Nunobiki Herb Gardens Ropeway Sanroku Station"
    },
    {
      "id": "d2-kobe-herb-gardens",
      "time": "10:00",
      "name": "누노비키 허브원 · 로프웨이",
      "fee": "왕복 성인 2,500엔 (크리스마스 시즌)",
      "note": "신고베역에서 산로쿠역(山麓駅) 매표소까지 도보. 정상 전망과 고베 크리스마스 마켓을 둘러본 뒤, 기타노로 가기 전 로프웨이로 내려와요. 강풍 시 운휴할 수 있어요.",
      "map": "Kobe Nunobiki Herb Gardens Ropeway Sanroku Station"
    },
    {
      "id": "d2-kobe-kitano",
      "time": "12:30",
      "name": "기타노 이진칸 거리",
      "fee": "거리 무료 · 내부 관람 선택",
      "note": "서양식 건축 거리 산책에 40~60분 배정. 건물 내부 유료 관람은 여유 있을 때 선택해요.",
      "map": "Kitano Ijinkan-gai Kobe"
    },
    {
      "id": "d2-kobe-lunch",
      "time": "13:40",
      "name": "산노미야 점심",
      "fee": "식비 별도",
      "note": "기타노에서 산노미야 번화가로 내려와 고베규 런치나 카페를 선택해요. 식당 대기 약 30분을 감안해요.",
      "map": "Sannomiya Center Gai Kobe"
    },
    {
      "id": "d2-kobe-nankinmachi",
      "time": "15:00",
      "name": "난킨마치 · 모토마치",
      "fee": "거리 무료 · 식비·쇼핑 별도",
      "note": "산노미야에서 모토마치 방면으로 걸어 차이나타운 먹거리와 상점을 둘러봐요. 점포별 영업시간은 달라요.",
      "map": "Nankinmachi Chinatown Kobe"
    },
    {
      "id": "d2-kobe-meriken",
      "time": "16:15",
      "name": "메리켄파크 · 고베 포트타워",
      "fee": "공원 무료 · 전망대 선택 1,000엔 / 옥상 포함 1,200엔",
      "note": "BE KOBE 조형물과 항구 풍경을 보고, 전망대는 시간이 남을 때 선택해요. 전망대는 시간 지정권이 필요하고, 당일권은 빈자리가 있을 때 구매 가능해요.",
      "map": "Meriken Park Kobe"
    },
    {
      "id": "d2-kobe-harborland",
      "time": "17:30",
      "name": "하버랜드 모자이크 · KOBE UMIAKARI",
      "fee": "조명 관람 무료 · 저녁 별도",
      "note": "메리켄파크에서 항구를 따라 모자이크로 걸어가요. 항구 야경과 하버랜드 일루미네이션을 보고 저녁을 먹어요.",
      "map": "Kobe Harborland umie Mosaic"
    },
    {
      "id": "d2-kobe-return",
      "time": "19:30",
      "name": "JR 고베역 → 오사카 숙소 복귀",
      "fee": "철도 운임 별도",
      "note": "모자이크에서 JR 고베역으로 이동. JR 고베선으로 오사카역, 오사카 순환선으로 신이마미야역까지 간 뒤 숙소로 걸어요. 환승·도보 포함 약 70~90분 배정.",
      "map": "JR Kobe Station"
    }
  ]
};
const KOBE_CHECKLIST = [
  {
    "id": "d2-seven-atm-check",
    "text": "08:05~08:15 · 필요하면 숙소 근처 세븐일레븐에서 출금",
    "url": "https://location.sevenbank.co.jp/sevenbank/spot/detail?code=0000007338",
    "linkLabel": "공식 ATM 위치"
  },
  {
    "id": "day2-kobe-depart",
    "text": "08:20 호텔 출발 · JR 신이마미야에서 오사카역으로 이동"
  },
  {
    "id": "day2-kobe-ropeway",
    "text": "누노비키 로프웨이 운휴 공지와 목요일 운행시간 확인",
    "url": "https://www.kobeherb.com/topics/40537",
    "linkLabel": "허브원 공식 안내"
  },
  {
    "id": "day2-kobe-port",
    "text": "포트타워 전망대 방문 시 시간 지정권 확인",
    "url": "https://www.kobe-port-tower.com/en/ticket/",
    "linkLabel": "포트타워 공식 요금"
  },
  {
    "id": "day2-kobe-lights",
    "text": "하버랜드 모자이크 일루미네이션 확인",
    "url": "https://harborland.co.jp/special/kobe-umiakari/",
    "linkLabel": "KOBE UMIAKARI 공식 안내"
  }
];
const PREVIOUS_DAY_TWO_PLANS = new Set([
  ...defaults.days.find(day=>day.date===KOBE_DAY.date).plans.map(plan=>plan.id),
  'd2p1', 'd2p3', 'd2-return-hotel',
]);
const PREVIOUS_DAY_TWO_CHECKS = new Set([
  ...defaults.dailyChecklist.find(day=>day.date===KOBE_DAY.date).items.map(item=>item.id),
  'day2-tsuten',
]);

function applyKobeDayUpdate(x,persist=true){
  if(x.kobeDayUpdate===KOBE_DAY_UPDATE)return x;
  const backupKey=STORAGE_KEY+'-before-'+KOBE_DAY_UPDATE;
  if(persist&&!localStorage.getItem(backupKey))localStorage.setItem(backupKey,JSON.stringify(x));

  const index=x.data.days.findIndex(day=>day.date===KOBE_DAY.date);
  const revised=clone(KOBE_DAY);
  if(index>=0){
    const previous=x.data.days[index];
    revised.plans.push(...previous.plans.filter(plan=>!PREVIOUS_DAY_TWO_PLANS.has(plan.id)));
    const previousNotes=new Set(defaults.days.find(day=>day.date===KOBE_DAY.date).notes);
    revised.notes.push(...(previous.notes||[]).filter(note=>!previousNotes.has(note)&&!/(시텐노지|오사카성|오사카 역사박물관|우메다 공중정원|주유패스)/.test(note)));
    x.data.days[index]=revised;
  }

  const group=x.data.dailyChecklist.find(day=>day.date===KOBE_DAY.date);
  if(group){
    group.items=clone(KOBE_CHECKLIST).concat(group.items.filter(item=>!PREVIOUS_DAY_TWO_CHECKS.has(item.id)));
  }else{
    x.data.dailyChecklist.push({date:KOBE_DAY.date,items:clone(KOBE_CHECKLIST)});
  }
  const ticketReminder=x.data.preTripChecklist.find(item=>item.id==='pre-tickets');
  if(ticketReminder)ticketReminder.text=ticketReminder.text.replace('우메다 스카이빌딩·','');
  x.kobeDayUpdate=KOBE_DAY_UPDATE;
  if(persist)localStorage.setItem(STORAGE_KEY,JSON.stringify(x));
  return x;
}

function applyAbenoUniqloUpdate(x,persist=true){
  if(x.abenoUniqloUpdate===ABENO_UNIQLO_UPDATE)return x;
  const backupKey=STORAGE_KEY+'-before-'+ABENO_UNIQLO_UPDATE;
  if(persist&&!localStorage.getItem(backupKey))localStorage.setItem(backupKey,JSON.stringify(x));
  const day=x.data.days.find(d=>d.date==='2026-11-28');
  const revised=defaults.days.find(d=>d.date==='2026-11-28');
  if(day&&revised){
    const oldNote='체크아웃 후 호텔 로비 셀프 보관함에 짐을 두고 오전에 쓰텐카쿠 → 덴노지 텐시바 → 하루카스 300. 여권과 귀중품은 지참해요.';
    day.city=revised.city;
    day.notes=(day.notes||[]).filter(note=>note!==oldNote);
    if(!day.notes.includes(revised.notes[0]))day.notes.unshift(revised.notes[0]);
    day.plans=day.plans.filter(p=>p.id!=='d4-tennoji');
    const uniqlo=revised.plans.find(p=>p.id==='d4-uniqlo-abeno');
    if(!day.plans.some(p=>p.id===uniqlo.id)){
      const i=day.plans.findIndex(p=>p.id==='d4-harukas');
      day.plans.splice(i>=0?i:day.plans.length,0,clone(uniqlo));
    }
    if(x.completed)delete x.completed['d4-tennoji'];
  }
  x.abenoUniqloUpdate=ABENO_UNIQLO_UPDATE;
  if(persist)localStorage.setItem(STORAGE_KEY,JSON.stringify(x));
  return x;
}

function applyShinsekaiDonkiUpdate(x,persist=true){
  if(x.shinsekaiDonkiUpdate===SHINSEKAI_DONKI_UPDATE)return x;
  const backupKey=STORAGE_KEY+'-before-'+SHINSEKAI_DONKI_UPDATE;
  if(persist&&!localStorage.getItem(backupKey))localStorage.setItem(backupKey,JSON.stringify(x));
  SHINSEKAI_DONKI_PLANS.forEach(function(target){
    const day=x.data.days.find(d=>d.date===target.date);
    if(!day||day.plans.some(p=>p.id===target.id))return;
    day.plans.push({
      id:target.id,
      time:target.time,
      name:'[선택] 메가돈키호테 신세카이점 (MEGAドン・キホーテ新世界店)',
      fee:'쇼핑 비용 별도',
      note:'저녁 본 일정과 숙소 복귀를 마친 뒤 시간·체력이 남으면 방문. 영업 09:00~다음 날 05:00 · 정기휴무 없음. 주소: 大阪市浪速区恵美須東3-4-36. 도부쓰엔마에역 5번 출구 도보 약 1분. 식품·주류·의약품·면세 대응(의약품은 03:00까지).',
      map:'MEGA Don Quijote Shinsekai 3-4-36 Ebisuhigashi Osaka',
      optional:true
    });
  });
  x.shinsekaiDonkiUpdate=SHINSEKAI_DONKI_UPDATE;
  if(persist)localStorage.setItem(STORAGE_KEY,JSON.stringify(x));
  return x;
}

function upgradeStoredSchedule(x){
  return applyVerifiedScheduleCorrections(applyShinsekaiDonkiUpdate(applyAbenoUniqloUpdate(applyKobeDayUpdate(applyNambaArrivalUpdate(applyOsakaReturnUpdate(applyKuromonSanpeiUpdate(applyFlightUpdate(applyHotelUpdate(applyKyotoUpdate(applyAtmStops(addTaxRefundInfo(addTakoyakiChoices(addOokiniLunch(migrateSchedule(x)))))))))))))));
}

function loadState(){
  try{
    const x=JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(x&&x.data&&x.data.days){
      if(!Array.isArray(x.data.preTripChecklist))x.data.preTripChecklist=clone(defaults.preTripChecklist);
      if(!Array.isArray(x.data.dailyChecklist))x.data.dailyChecklist=clone(defaults.dailyChecklist);
      if(!x.completed)x.completed={};
      if(!x.checklistDone)x.checklistDone={};
      if(!Array.isArray(x.expenses))x.expenses=[];
      return upgradeStoredSchedule(x);
    }
  }catch(e){}
  return freshState();
}
const VERIFIED_SCHEDULE_FIELDS = {
  "d1-donki-shinsekai": {
    "time": [
      "21:30 이후 · 시간 남으면",
      "21:30 이후 · 숙소 체크인 후 선택"
    ]
  },
  "d2-kobe-herb-gardens": {
    "fee": [
      "왕복 성인 2,500엔 (크리스마스 시즌)",
      "크리스마스 시즌 성인 왕복 3,300엔 · 4인 13,200엔"
    ]
  },
  "d2-kobe-harborland": {
    "note": [
      "메리켄파크에서 항구를 따라 모자이크로 걸어가요. 항구 야경과 하버랜드 일루미네이션을 보고 저녁을 먹어요.",
      "메리켄파크에서 항구를 따라 모자이크로 걸어가요. 17:30은 모자이크 방문 예정 시각입니다. 조명 운영 시간은 장소마다 다릅니다. 야경을 보고 저녁을 먹어요."
    ]
  },
  "d3-romantic-train": {
    "note": [
      "도롯코 가메오카역 09:30 출발 사가노 2호. 도롯코 아라시야마역에서 09:53 전후 내려 대나무숲으로 이어가요.",
      "도롯코 가메오카역 09:30 출발 사가노 2호. 도롯코 아라시야마역에서 09:53 전후 내려 대나무숲으로 이어가요. 09:53은 공식 시간표의 아라시야마역 출발 시각이므로 하차는 그 직전입니다."
    ]
  },
  "d4-tsutenkaku": {
    "note": [
      "숙소에서 도보 약 5분. 일반 전망대 09:00 개장, 시간지정 입장. 대기와 관람을 함께 잡은 시간이에요.",
      "숙소에서 도보 약 5분. 일반 전망대 09:00 개장, 시간지정 입장. 09:00은 개장 시각입니다. 패스·교환권 사용 시 당일 현장에서 입장 시간을 지정하므로 바로 입장하지 못할 수 있어요."
    ]
  },
  "d4-harukas": {
    "fee": [
      "성인 현장 2,200엔 · 공식 웹 사전권 1,980엔",
      "성인 현장 2,200엔 · 웹 사전권 1,980엔(전날인 11/27까지 구매)"
    ]
  },
  "d4-nankai-kix": {
    "note": [
      "숙소에서 난카이 신이마미야역까지 도보 약 7~10분. 간사이공항행 공항급행으로 직행, 승차 약 40~45분. 14:30 전후 제1터미널 도착 목표. ZE0614 최신 출발 시각은 E-Ticket에서 확인해요.",
      "숙소에서 난카이 신이마미야역까지 도보 약 7~10분. 간사이공항행 공항급행으로 직행, 승차 약 40~45분. 제1터미널 14:30 전후 도착 목표예요. 아래 도착 시각은 공항역 기준입니다. 13:55 열차는 14:38 역 도착이라 목표보다 늦는 대체편입니다. ZE0614 최신 출발 시각은 E-Ticket에서 확인해요."
    ]
  }
};
const VERIFIED_DAY_NOTES = {
  "포트타워 전망대는 선택이에요. 하버랜드에서는 17:30부터 KOBE UMIAKARI 조명과 저녁을 즐겨요.": "포트타워 전망대는 선택이에요. 17:30에는 하버랜드 모자이크를 방문해요. KOBE UMIAKARI 점등 시간은 장소마다 달라요.",
  "쓰텐카쿠는 시간지정 입장이라 09:00 전후를 목표로 해요. 하루카스 300은 일반 성인 현장 2,200엔, 공식 웹 사전권 1,980엔이에요.": "쓰텐카쿠는 09:00 개장, 입장 시간 지정제예요. 하루카스 300은 성인 현장 2,200엔, 11/27까지 웹 사전 구매 시 1,980엔이에요."
};
const VERIFIED_PLAN_LINKS = {
  "d2-kobe-to-shinkobe": {
    "map": "Kobe Nunobiki Herb Gardens Ropeway Sanroku Station",
    "links": [
      [
        "https://www.google.com/maps/search/?api=1&query=Kobe+Nunobiki+Herb+Gardens+Ropeway+Sanroku+Station",
        "로프웨이 하부역 지도"
      ],
      [
        "https://www.kobeherb.com/access/",
        "신고베역에서 산로쿠역 가는 길"
      ]
    ]
  },
  "d2-kobe-herb-gardens": {
    "map": "Kobe Nunobiki Herb Gardens Ropeway Sanroku Station",
    "links": [
      [
        "https://www.google.com/maps/search/?api=1&query=Kobe+Nunobiki+Herb+Gardens+Ropeway+Sanroku+Station",
        "로프웨이 하부역 지도"
      ],
      [
        "https://www.kobeherb.com/tips/kobechristmasmarket/",
        "크리스마스 시즌 공식 요금"
      ]
    ]
  },
  "d2-kobe-meriken": {
    "map": "Meriken Park Kobe",
    "links": [
      [
        "https://www.google.com/maps/search/?api=1&query=Meriken+Park+Kobe",
        "메리켄파크 지도"
      ],
      [
        "https://www.kobe-port-tower.com/ticket/",
        "포트타워 입장권·공식 안내"
      ]
    ]
  },
  "d2-kobe-harborland": {
    "map": "Kobe Harborland umie Mosaic",
    "links": [
      [
        "https://www.google.com/maps/search/?api=1&query=Kobe+Harborland+umie+Mosaic",
        "모자이크 지도"
      ],
      [
        "https://harborland.co.jp/special/kobe-umiakari/",
        "장소별 점등 시간"
      ]
    ]
  },
  "d3-arashiyama-transit": {
    "map": "Torokko Kameoka Station Kyoto",
    "links": [
      [
        "https://www.google.com/maps/search/?api=1&query=Torokko+Kameoka+Station+Kyoto",
        "도롯코 가메오카 탑승역 지도"
      ],
      [
        "https://timetable.jr-odekake.net/train-timetable/22821?date=20261127",
        "JR 교토 08:16 공식 시간표"
      ],
      [
        "https://timetable.jr-odekake.net/train-timetable/4571?date=20261127",
        "JR 교토 08:27 공식 시간표"
      ]
    ]
  },
  "d3-romantic-train": {
    "map": "Torokko Arashiyama Station Kyoto",
    "links": [
      [
        "https://www.google.com/maps/search/?api=1&query=Torokko+Kameoka+Station+Kyoto",
        "탑승 · 도롯코 가메오카역"
      ],
      [
        "https://www.google.com/maps/search/?api=1&query=Torokko+Arashiyama+Station+Kyoto",
        "하차 · 도롯코 아라시야마역"
      ],
      [
        "https://www.sagano-kanko.co.jp/cms/wp-content/uploads/2026/01/260120_00_%E3%80%90%E7%A2%BA%E5%AE%9A%E3%80%912026%E5%B9%B4%E9%81%8B%E8%A1%8C%E3%82%B9%E3%82%B1%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%90HP%E3%80%91.pdf",
        "도롯코 2026년 시간표"
      ]
    ]
  },
  "d4-tsutenkaku": {
    "map": "Tsutenkaku Osaka",
    "links": [
      [
        "https://www.google.com/maps/search/?api=1&query=Tsutenkaku+Osaka",
        "쓰텐카쿠 지도"
      ],
      [
        "https://www.tsutenkaku.co.jp/annai/index.html",
        "입장 시간 지정 공식 안내"
      ]
    ]
  },
  "d4-uniqlo-abeno": {
    "map": "UNIQLO Abeno Q's Mall 1-6-1 Abenosuji Osaka",
    "links": [
      [
        "https://map.uniqlo.com/jp/ja/detail/10101346",
        "유니클로 공식 점포 지도"
      ]
    ]
  },
  "d4-harukas": {
    "map": "Harukas 300 Observatory Osaka",
    "links": [
      [
        "https://www.google.com/maps/search/?api=1&query=Harukas+300+Observatory+Osaka",
        "하루카스 300 지도"
      ],
      [
        "https://www.abenoharukas-300.jp/observatory/information.html",
        "하루카스 300 공식 요금·구매 안내"
      ]
    ]
  },
  "day4-tax-refund": {
    "map": "Kansai International Airport",
    "links": [
      [
        "https://www.nta.go.jp/publication/pamph/shohi/menzei/201805/pdf/caution_kr.pdf",
        "일본 국세청 한국어 안내"
      ],
      [
        "https://www.kixdutyfree.jp/en/airport_tax_refund_guide_info.html",
        "간사이공항 출국장 면세 절차"
      ]
    ]
  }
};
const PINNED_TRIP_PLACES = {
  "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6": {
    "id": "ChIJ_4AIjDbnAGARV489qXmh8vE",
    "label": "에스리드 난바 사우스 III 지도"
  },
  "セブン-イレブン 大阪恵美須西1丁目店 大阪府大阪市浪速区恵美須西1-2-1": {
    "id": "ChIJi6GBTGfnAGAR2OQy2ktNC_E",
    "label": "에비스니시 1초메점 지도"
  }
};

function applyVerifiedScheduleCorrections(trip) {
  for (const day of trip.data.days) {
    for (const plan of day.plans) {
      for (const [key, [before, after]] of Object.entries(VERIFIED_SCHEDULE_FIELDS[plan.id] ?? {})) {
        if (plan[key] === before) plan[key] = after;
      }
    }
    if (Array.isArray(day.notes)) day.notes = day.notes.map(note => Object.hasOwn(VERIFIED_DAY_NOTES, note) ? VERIFIED_DAY_NOTES[note] : note);
  }
  return trip;
}

function tripDirectionsUrl(destination, origin, mode) {
  const params = new URLSearchParams({api: '1', destination});
  if (origin) params.set('origin', origin);
  if (mode) params.set('travelmode', mode);
  const destinationId = PINNED_TRIP_PLACES[destination]?.id;
  const originId = PINNED_TRIP_PLACES[origin]?.id;
  if (destinationId) params.set('destination_place_id', destinationId);
  if (originId) params.set('origin_place_id', originId);
  return 'https://www.google.com/maps/dir/?' + params;
}

function setPlanMapLinks(node, plan) {
  const mainLink = node.querySelector('.map-link');
  const verified = VERIFIED_PLAN_LINKS[plan.id];
  if (verified?.links && verified.map === plan.map) {
    const [[primaryUrl, primaryLabel], ...extraLinks] = verified.links;
    mainLink.href = primaryUrl;
    mainLink.textContent = primaryLabel + ' ↗';
    for (const [url, label] of extraLinks) {
      const link = mainLink.cloneNode();
      link.href = url;
      link.textContent = label + ' ↗';
      node.querySelector('.plan-actions').appendChild(link);
    }
    return;
  }
  if (!plan.map) {
    mainLink.hidden = true;
    return;
  }
  const params = new URLSearchParams({api: '1', query: plan.map});
  const place = PINNED_TRIP_PLACES[plan.map];
  if (place?.id) {
    params.set('query_place_id', place.id);
    mainLink.textContent = place.label + ' ↗';
  }
  mainLink.href = 'https://www.google.com/maps/search/?' + params;
}

let state=loadState();
let selectedDay=chooseInitialDay();
let deferredInstallPrompt=null;

function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
function chooseInitialDay(){
  const now=new Date(); const key=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0');
  const i=defaults.days.findIndex(function(d){return d.date===key;});
  return i>=0?i:0;
}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function yen(n){return '¥'+Number(n||0).toLocaleString('ko-KR');}
function daysBetween(a,b){return Math.ceil((b-a)/86400000);}
function allChecklistItems(){
  const pre=state.data.preTripChecklist||[];
  const daily=(state.data.dailyChecklist||[]).flatMap(function(group){return group.items||[];});
  return pre.concat(daily);
}

function renderHero(){
  const now=new Date(); now.setHours(0,0,0,0);
  const start=new Date(TRIP_START+'T00:00:00'); const end=new Date(TRIP_END+'T23:59:59');
  const badge=document.querySelector('#tripBadge'); const title=document.querySelector('#tripHeadline');
  if(now<start){badge.textContent='여행 준비 중';title.textContent='D-'+daysBetween(now,start);}
  else if(now<=end){badge.textContent='여행 중';title.textContent='오늘 일정 확인';}
  else{badge.textContent='여행 완료';title.textContent='간사이 여행 기록';}
  renderStats();
}
function renderStats(){
  document.querySelector('#doneCount').textContent=state.data.days.flatMap(d=>d.plans).filter(p=>state.completed[p.id]).length;
  document.querySelector('#expenseTotal').textContent=yen(state.expenses.reduce(function(a,b){return a+Number(b.amount||0);},0));
  const all=allChecklistItems();
  const done=all.filter(function(item){return state.checklistDone[item.id];}).length;
  document.querySelector('#checkCount').textContent=done+'/'+all.length;
}
function initViewTabs(){
  const tabs=[...document.querySelectorAll('.view-tabs [role="tab"]')];
  function showTab(activeTab){
    for(const tab of tabs){
      const selected=tab===activeTab;
      tab.setAttribute('aria-selected',String(selected));
      tab.tabIndex=selected?0:-1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden=!selected;
    }
  }
  function openTab(tab){
    if(tab.getAttribute('aria-selected')==='true')return;
    if(location.hash)history.replaceState(history.state,'',location.pathname+location.search);
    showTab(tab);
    window.scrollTo({top:0,behavior:'instant'});
  }
  function openHash(){
    if(!location.hash){
      showTab(tabs[0]);
      return;
    }
    const target=document.getElementById(location.hash.slice(1));
    const view=target?.closest('.app-view');
    if(!view)return;
    showTab(tabs.find(tab=>tab.getAttribute('aria-controls')===view.id));
    target.scrollIntoView({block:'start',behavior:'instant'});
  }
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>openTab(tab));
    tab.addEventListener('keydown',event=>{
      const order={ArrowLeft:(index+tabs.length-1)%tabs.length,ArrowRight:(index+1)%tabs.length,Home:0,End:tabs.length-1};
      if(!Object.hasOwn(order,event.key))return;
      event.preventDefault();
      const next=tabs[order[event.key]];
      openTab(next);
      next.focus({preventScroll:true});
    });
  });
  window.addEventListener('hashchange',openHash);
  openHash();
}
function renderTabs(){
  const tabs=document.querySelector('#dayTabs'); tabs.innerHTML='';
  state.data.days.forEach(function(d,i){
    const b=document.createElement('button'); b.className='day-tab'+(i===selectedDay?' active':'');
    b.type='button';
    b.setAttribute('aria-pressed',String(i===selectedDay));
    b.innerHTML='DAY '+(i+1)+'<small>'+esc(d.short)+' · '+d.date.slice(5).replace('-','/')+'</small>';
    b.onclick=function(){
      const keepFocus=document.activeElement===b;
      selectedDay=i;
      render();
      if(keepFocus)tabs.children[i].focus({preventScroll:true});
      window.scrollTo({top:0,behavior:'instant'});
    };
    tabs.appendChild(b);
  });
}
function renderSummary(){
  const d=state.data.days[selectedDay];
  document.querySelector('#dayTitle').textContent='DAY '+(selectedDay+1)+' · '+d.city;
  const done=d.plans.filter(function(p){return state.completed[p.id];}).length;
  document.querySelector('#todaySummary').textContent=d.plans.length+'개 일정 중 '+done+'개 완료';
}
function appendSanpeiInfo(node,plan){
  const restaurant=KUROMON_SANPEI_PLAN.restaurant;
  if(plan.id!==KUROMON_SANPEI_PLAN.id||plan.map!==KUROMON_SANPEI_PLAN.map)return;
  const details=document.createElement('details');
  details.className='route-guide';
  const summary=document.createElement('summary');
  summary.textContent='식당 정보 · 메뉴·가격·주문·결제';
  details.appendChild(summary);
  for(const fact of restaurant.facts){
    const row=document.createElement('p');
    const label=document.createElement('strong');
    label.textContent=fact.label+' ';
    row.append(label,fact.value);
    details.appendChild(row);
  }
  for(const source of restaurant.sources){
    const row=document.createElement('p');
    const link=document.createElement('a');
    link.href=source.url;
    link.textContent=source.label+' ↗';
    link.target='_blank';
    link.rel='noopener noreferrer';
    row.appendChild(link);
    details.appendChild(row);
  }
  node.querySelector('.plan-note').after(details);
}

const AIRPORT_EXPRESS_SCHEDULES = {
  "d1p1": {
    "title": "난카이 공항급행 · 간사이공항역 → 신이마미야역",
    "lines": [
      "11:39 → 12:22 · 11:56 → 12:38",
      "12:09 → 12:52 · 12:26 → 13:08",
      "12:39 → 13:22 · 12:56 → 13:38"
    ],
    "url": "https://kensaku.nankai.co.jp/pc/T5?USR=PC&d=1&dw=0&slCode=311-2"
  },
  "d4-nankai-kix": {
    "title": "난카이 공항급행 · 신이마미야역 → 간사이공항역",
    "lines": [
      "13:10 → 13:52 · 13:25 → 14:08 (추천)",
      "13:40 → 14:22 · 13:55 → 14:38 (대체편)"
    ],
    "url": "https://kensaku.nankai.co.jp/pc/T5?USR=PC&d=2&dw=1&slCode=306-1"
  }
};

function appendAirportExpressInfo(node, planId) {
  const schedule = AIRPORT_EXPRESS_SCHEDULES[planId];
  if (!schedule) return;
  const info = document.createElement('p');
  info.className = 'plan-note';
  const title = document.createElement('strong');
  title.textContent = schedule.title;
  const official = document.createElement('a');
  official.href = schedule.url;
  official.target = '_blank';
  official.rel = 'noopener noreferrer';
  official.textContent = '난카이 공식 시각표';
  info.append(title, '\n' + schedule.lines.join('\n') + '\n', official);
  node.querySelector('.plan-note').after(info);
}

function renderTimeline(){
  const wrap=document.querySelector('#timeline'); wrap.innerHTML='';
  const tpl=document.querySelector('#timelineItemTemplate');
  state.data.days[selectedDay].plans.forEach(function(plan){
    const node=tpl.content.cloneNode(true); const item=node.querySelector('.timeline-item');
    item.id='plan-'+plan.id;
    if(state.completed[plan.id])item.classList.add('completed');
    node.querySelector('.check-btn').setAttribute('aria-pressed',String(!!state.completed[plan.id]));
    node.querySelector('.time').textContent=plan.time;
    node.querySelector('.fee').textContent=plan.fee||'';
    if(plan.optional)node.querySelector('.optional-tag').hidden=false;
    node.querySelector('.plan-name').textContent=plan.name;
    node.querySelector('.plan-note').textContent=plan.note||'';
    const atmStop=ATM_STOPS.find(s=>s.plan.id===plan.id);
    if(atmStop){
      const a=document.createElement('a');a.className='map-link';a.textContent='공식 ATM 위치·영업 ↗';a.href=atmStop.plan.atm.official;a.target='_blank';a.rel='noopener noreferrer';node.querySelector('.plan-actions').appendChild(a);
    }
    if(/^d[123]-donki-shinsekai$/.test(plan.id)){
      const official=document.createElement('a');
      official.className='map-link';
      official.textContent='메가돈키호테 공식 운영정보 ↗';
      official.href='https://www.donki.com/store/shop_detail.php?shop_id=356';
      official.target='_blank';
      official.rel='noopener noreferrer';
      node.querySelector('.plan-actions').appendChild(official);
    }
    if(plan.id==='d1-naniwa-lunch'){
      const links=node.querySelector('.plan-actions');
      [['매장 공식 정보 ↗','https://www.fujiofood.com/shop_search/shokudo/shop_1061.php'],['結제·예산 정보 ↗','https://tabelog.com/osaka/A2701/A270202/27048770/']].forEach(([label,url])=>{
        const a=document.createElement('a');a.className='map-link';a.textContent=label.replace('結','결');a.href=url;a.target='_blank';a.rel='noopener noreferrer';links.appendChild(a);
      });
    }
    if(plan.id==='d1p5'){
      const detail=document.createElement('details');detail.className='route-guide';
      const summary=document.createElement('summary');summary.textContent='타코야키 후보 · 둘 중 골라 방문';detail.appendChild(summary);
      [['크레오루 지도 ↗','https://www.google.com/maps/search/?api=1&query=くれおーる+道頓堀1-6-4'],['크레오루 공식 메뉴 ↗','https://creo-ru.com/creo-ru-store/tenpo/dotonbori/'],['오도리다코 지도 ↗','https://www.google.com/maps/search/?api=1&query=踊りだこ+道頓堀1-7-24'],['오도리다코 메뉴·영업 ↗','https://tabelog.com/osaka/A2701/A270202/27092198/']].forEach(([label,url])=>{const p=document.createElement('p');const a=document.createElement('a');a.href=url;a.textContent=label;a.target='_blank';a.rel='noopener noreferrer';p.appendChild(a);detail.appendChild(p);});
      node.querySelector('.plan-note').after(detail);
    }
    appendSanpeiInfo(node,plan);
    appendWalkingGuide(node,plan);
    appendRouteGuide(node,plan);
    appendAirportExpressInfo(node,plan.id);
    node.querySelector('.check-btn').onclick=function(){state.completed[plan.id]=!state.completed[plan.id];save();renderTimeline();renderSummary();renderStats();renderTravelTools();};
    const naverQueries={
      'd1-naniwa-lunch':'浪速日本橋食堂 오사카','d1p2':'오사카 구로몬시장','d1-kuromon-sanpei':'오사카 구로몬 산페이','d1-yasaka':'오사카 난바 야사카 신사',
      'd1-bic-namba':'오사카 빅카메라 난바점','d1p5':'오사카 도톤보리','d1p6':'오사카 신사이바시스지',
      'd1-donki-shinsekai':'메가돈키호테 신세카이점','d2-donki-shinsekai':'메가돈키호테 신세카이점','d3-donki-shinsekai':'메가돈키호테 신세카이점',
      'd2-shitennoji':'오사카 시텐노지',
      'd2p2':'오사카성 천수각','d2-museum':'오사카 역사박물관','d2p4':'오사카 우메다 스카이빌딩 공중정원',
      'd3-togetsukyo':'교토 도게츠교','d3-tenryuji':'교토 덴류지','d3-bamboo':'교토 아라시야마 대나무숲','d3p3':'교토 산넨자카 니넨자카',
      'd3p5':'교토 기온 하나미코지','d3-romantic-train':'사가노 도롯코 단풍열차','d3p8':'교토 청수사 기요미즈데라',
      'd4-tsutenkaku':'오사카 쓰텐카쿠','d4-uniqlo-abeno':'유니클로 아베노 큐즈몰점','d4-harukas':'아베노 하루카스 300 전망대'
    };
    const naver=node.querySelector('.naver-link');
    const original=defaults.days.flatMap(d=>d.plans).find(p=>p.id===plan.id);
    const isOriginal=original&&original.name===plan.name&&original.map===plan.map;
    const query=isOriginal?naverQueries[plan.id]:plan.name+' '+state.data.days[selectedDay].short+' 일본';
    if(query){
      naver.href='https://search.naver.com/search.naver?query='+encodeURIComponent(query);
      naver.title='네이버에서 '+query+' 장소 정보 검색';
      naver.setAttribute('aria-label',plan.name+' 네이버 장소 정보 검색 (새 창)');
    }else naver.hidden=true;
    setPlanMapLinks(node,plan);
    node.querySelector('.edit-link').onclick=function(){openPlanDialog(plan);};
    wrap.appendChild(node);
  });
}
function renderNotes(){
  const wrap=document.querySelector('#dayNotes'); wrap.innerHTML='';
  state.data.days[selectedDay].notes.forEach(function(n){const x=document.createElement('div');x.className='note-card';x.textContent=n;wrap.appendChild(x);});
}
function renderFallback(){
  const wrap=document.querySelector('#fallbackList'); wrap.innerHTML='';
  state.data.days.forEach(function(d,i){const x=document.createElement('div');x.className='note-card';x.innerHTML='<strong>DAY '+(i+1)+'</strong><br>'+d.fallback;wrap.appendChild(x);});
}
function makeChecklistItem(item){
  const row=document.createElement('div');
  row.className='check-item'+(state.checklistDone[item.id]?' done':'');
  const input=document.createElement('input');
  input.type='checkbox'; input.checked=!!state.checklistDone[item.id];
  input.setAttribute('aria-label',item.text+' 완료');
  input.onchange=function(e){
    state.checklistDone[item.id]=e.target.checked;
    save();
    renderChecklists();
    renderStats();
  };
  const copy=document.createElement('div'); copy.className='check-copy';
  if(item.url){
    const a=document.createElement('a');
    a.href=item.url; a.className='check-link';
    if(!String(item.url).startsWith('#')){a.target='_blank';a.rel='noopener';}
    const text=document.createElement('span'); text.textContent=item.text;
    const badge=document.createElement('small'); badge.textContent=(item.linkLabel||'바로가기')+' ↗';
    a.appendChild(text); a.appendChild(badge); copy.appendChild(a);
  }else{
    const span=document.createElement('span'); span.textContent=item.text; copy.appendChild(span);
  }
  row.appendChild(input); row.appendChild(copy);
  return row;
}
function renderPreTripChecklist(){
  const wrap=document.querySelector('#preTripChecklist'); wrap.innerHTML='';
  const items=state.data.preTripChecklist||[];
  items.forEach(function(item){wrap.appendChild(makeChecklistItem(item));});
  const done=items.filter(function(item){return state.checklistDone[item.id];}).length;
  document.querySelector('#preTripProgress').textContent=done+'/'+items.length;
}
function renderDailyChecklist(){
  const day=state.data.days[selectedDay];
  const group=(state.data.dailyChecklist||[]).find(function(x){return x.date===day.date;})||{items:[]};
  const items=group.items||[];
  const wrap=document.querySelector('#dailyChecklist'); wrap.innerHTML='';
  items.forEach(function(item){wrap.appendChild(makeChecklistItem(item));});
  const done=items.filter(function(item){return state.checklistDone[item.id];}).length;
  document.querySelector('#dailyProgress').textContent=done+'/'+items.length;
  document.querySelector('#dailyChecklistTitle').textContent='DAY '+(selectedDay+1)+' · '+day.date.slice(5).replace('-','/')+' 체크리스트';
}
function renderChecklists(){renderPreTripChecklist();renderDailyChecklist();}
function renderExpenses(){
  const wrap=document.querySelector('#expenseList'); wrap.innerHTML='';
  const rows=state.expenses.filter(function(e){return e.day===selectedDay;});
  if(!rows.length){wrap.innerHTML='<div class="note-card muted">아직 기록된 지출이 없습니다.</div>';return;}
  rows.forEach(function(e){
    const row=document.createElement('div');row.className='expense-row';
    row.innerHTML='<div><strong>'+esc(e.name)+'</strong><small>'+esc(e.category)+'</small></div><strong>'+yen(e.amount)+'</strong><button class="icon-btn" aria-label="삭제">×</button>';
    row.querySelector('button').onclick=function(){state.expenses=state.expenses.filter(function(x){return x.id!==e.id;});save();renderExpenses();renderStats();};
    wrap.appendChild(row);
  });
}
function render(){renderHero();renderTabs();renderSummary();renderChecklists();renderTimeline();renderNotes();renderExpenses();renderFallback();renderTravelTools();}

const planDialog=document.querySelector('#planDialog');
function openPlanDialog(plan){
  document.querySelector('#planDialogTitle').textContent=plan?'일정 수정':'일정 추가';
  document.querySelector('#planId').value=plan?plan.id:'';
  document.querySelector('#planTime').value=plan?plan.time:'';
  document.querySelector('#planName').value=plan?plan.name:'';
  document.querySelector('#planFee').value=plan?plan.fee:'';
  document.querySelector('#planNote').value=plan?plan.note:'';
  document.querySelector('#planMap').value=plan?plan.map:'';
  document.querySelector('#planOptional').checked=!!(plan&&plan.optional);
  document.querySelector('#deletePlanBtn').hidden=!plan;
  planDialog.showModal();
}
document.querySelector('#addPlanBtn').onclick=function(){openPlanDialog(null);};
document.querySelector('#planForm').addEventListener('submit',function(e){
  if(e.submitter&&e.submitter.value==='cancel')return;
  e.preventDefault();
  const form=e.currentTarget;if(!form.reportValidity())return;
  const day=state.data.days[selectedDay]; const pid=document.querySelector('#planId').value;
  const obj={
    id:pid||newId(),time:document.querySelector('#planTime').value.trim(),name:document.querySelector('#planName').value.trim(),
    fee:document.querySelector('#planFee').value.trim(),note:document.querySelector('#planNote').value.trim(),
    map:document.querySelector('#planMap').value.trim(),optional:document.querySelector('#planOptional').checked
  };
  if(pid){const i=day.plans.findIndex(function(p){return p.id===pid;});if(i>=0)day.plans[i]=obj;}else day.plans.push(obj);
  save();planDialog.close();render();
});
document.querySelector('#deletePlanBtn').onclick=function(){
  const pid=document.querySelector('#planId').value;if(!pid)return;
  if(confirm('이 일정을 삭제할까요?')){state.data.days[selectedDay].plans=state.data.days[selectedDay].plans.filter(function(p){return p.id!==pid;});delete state.completed[pid];save();planDialog.close();render();}
};

const expenseDialog=document.querySelector('#expenseDialog');
document.querySelector('#addExpenseBtn').onclick=function(){document.querySelector('#expenseForm').reset();expenseDialog.showModal();};
document.querySelector('#expenseForm').addEventListener('submit',function(e){
  if(e.submitter&&e.submitter.value==='cancel')return;
  e.preventDefault();if(!e.currentTarget.reportValidity())return;
  state.expenses.push({id:newId(),day:selectedDay,name:document.querySelector('#expenseName').value.trim(),amount:Number(document.querySelector('#expenseAmount').value),category:document.querySelector('#expenseCategory').value});
  save();expenseDialog.close();renderExpenses();renderStats();
});

document.querySelector('#resetBtn').onclick=function(){if(confirm('완료 체크, 수정 일정, 체크리스트, 지출 기록을 모두 초기화할까요?')){localStorage.removeItem(STORAGE_KEY);state=freshState();selectedDay=chooseInitialDay();render();}};
document.querySelector('#exportBtn').onclick=function(){
  const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');
  a.href=url;a.download='kansai-trip-backup.json';a.click();URL.revokeObjectURL(url);
};
document.querySelector('#importInput').onchange=async function(e){
  const file=e.target.files&&e.target.files[0];if(!file)return;
  try{
    const imported=JSON.parse(await file.text());
    if(!imported.data||!imported.data.days)throw new Error();
    if(!Array.isArray(imported.data.preTripChecklist))imported.data.preTripChecklist=clone(defaults.preTripChecklist);
    if(!Array.isArray(imported.data.dailyChecklist))imported.data.dailyChecklist=clone(defaults.dailyChecklist);
    if(!Array.isArray(imported.data.days)||imported.data.days.length!==4||!imported.data.days.every(d=>typeof d.date==='string'&&Array.isArray(d.plans)&&d.plans.every(p=>typeof p.id==='string'&&typeof p.name==='string')))throw new Error();
    imported.completed=imported.completed||{};imported.checklistDone=imported.checklistDone||{};imported.expenses=Array.isArray(imported.expenses)?imported.expenses:[];
    state=upgradeStoredSchedule(imported);selectedDay=chooseInitialDay();save();render();alert('백업을 불러왔습니다.');
  }
  catch(err){alert('올바른 백업 파일이 아닙니다.');}
  e.target.value='';
};

window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferredInstallPrompt=e;document.querySelector('#installBtn').hidden=false;});
document.querySelector('#installBtn').onclick=async function(){if(!deferredInstallPrompt)return;deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;document.querySelector('#installBtn').hidden=true;};
if('serviceWorker' in navigator)window.addEventListener('load',function(){navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(function(){});});
render();
initViewTabs();

function renderTravelTools(){
  const day=state.data.days[selectedDay];
  const next=day.plans.find(p=>!state.completed[p.id]);
  const wrap=document.querySelector('#nextPlan');wrap.replaceChildren();
  const label=document.createElement('p');label.className='muted';
  label.textContent=next?'다음 미완료 · '+next.time+' · '+next.name:'이 날의 일정을 모두 완료했어요.';wrap.appendChild(label);
  if(next){
    const b=document.createElement('button');b.className='ghost-btn';b.textContent='일정으로 이동';
    b.onclick=()=>document.getElementById('plan-'+next.id).scrollIntoView({behavior:'smooth',block:'center'});wrap.appendChild(b);
    if(next.map){const a=document.createElement('a');a.className='ghost-btn';a.textContent='현재 위치에서 길찾기 ↗';a.target='_blank';a.rel='noopener';a.href=tripDirectionsUrl(next.map);wrap.appendChild(a);}
  }
  document.querySelector('#deadlineNote').textContent=[
    '난바 야사카 신사 17:00 폐문 · 늦어지면 먼저 생략하세요.',
    '08:20 숙소 출발 · 10:00 누노비키 로프웨이 · 17:30 하버랜드 야경. 로프웨이 운휴 시 기타노부터 시작.',
    '09:30 도롯코 가메오카 출발 → 아라시야마 오전 관람 → 청수사 입장 준비 17:10 · 야간 17:30~19:00.',
    '12:00 전망대 관람 종료 → 호텔 짐 회수 → 13:00 전후 숙소 출발 → 난카이 공항급행 · KIX 14:30 전후 목표.'
  ][selectedDay];
  const choices=state.admissionOptions||{};
  document.querySelectorAll('[data-admission]').forEach(el=>{el.checked=!!choices[el.dataset.admission];el.onchange=()=>{state.admissionOptions=state.admissionOptions||{};state.admissionOptions[el.dataset.admission]=el.checked;save();renderTravelTools();};});
  const extra=choices.kobePortTower?1000:0;
  document.querySelector('#admissionTotal').textContent=yen(8000+extra);
  document.querySelector('#previousBackupBtn').hidden=!localStorage.getItem(scheduleBackupKey());
}
document.querySelector('#previousBackupBtn').onclick=function(){
  const raw=localStorage.getItem(scheduleBackupKey());if(!raw)return;
  const url=URL.createObjectURL(new Blob([raw],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='kansai-before-schedule-update.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
};
