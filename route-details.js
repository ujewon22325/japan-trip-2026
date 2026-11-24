const ROUTE_DETAILS={
  "d1-bic-namba": {"kind": "도보", "title": "난바 야사카 신사 → 빅카메라 난바점", "steps": ["신사에서 난카이 난바역·난바시티 쪽으로 북상.", "센니치마에2-10-1 빅카메라 난바점으로 이동. 신사에서 도보 약 15~20분 예상."], "origin": "Namba Yasaka Shrine Osaka", "destination": "Bic Camera Namba Store Osaka 2-10-1 Sennichimae", "tip": "https://www.biccamera.com/bc/i/shop/shoplist/shop013.jsp"},
  "d1-naniwa-lunch":{"kind":"도보","title":"난카이 난바역 → 닛폰바시역 10번 출구 옆 식당","steps":["숙소 짐 보관 후 센니치마에 거리를 동쪽 닛폰바시역 방향으로 이동. 난바역에서 도보 약 10~15분 추정, 숙소 경유는 별도.","닛폰바시역 10번 출구 옆 日本橋丸中ビル 1층 浪速日本橋食堂 도착.","식사 후 구로몬시장 북서쪽 입구로 도보 약 2~5분."],"tip":"14:15까지 식사가 어렵다면 식당을 생략하고 시장부터 방문.","origin":"Nankai Namba Station","destination":"浪速日本橋食堂 大阪府大阪市中央区日本橋1-17-20"},
  "d1p1": {"kind": "난카이 전철 + 도보", "title": "간사이공항역 → 난카이 신이마미야역 → 숙소", "steps": ["제1터미널 입국장 → 2층 연결다리 → 간사이공항역 난카이 개찰구.", "난카이 일반 승차권을 발매기에서 구매하거나 지원하는 컨택리스 카드로 전용 개찰구를 이용해요. 난바 방면 공항급행(空港急行) 탑승.", "신이마미야역에 내려 난카이 북쪽 출구에서 호텔까지 도보 약 7~10분."], "origin": "Nankai Kansai Airport Station", "destination": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6"},
  "d1p2": {"kind":"도보","title":"난카이 난바역 → 구로몬시장","steps":["난카이 난바역 북쪽/난바 중심부로 나와 닛폰바시(日本橋)·구로몬시장 표지를 따라 동쪽으로 이동.","센니치마에 거리에서 닛폰바시 2초메 쪽으로 가서 구로몬시장 서쪽 입구로 진입. 지하철을 타면 오사카 메트로 난바역 → 닛폰바시역(센니치마에선, 1정거장) 후 10번 출구 부근."],"origin":"Nankai Namba Station","destination":"Kuromon Ichiba Market"},
  "d1-kuromon-sanpei": {"kind": "도보", "title": "구로몬시장 입구 → 구로몬 산페이", "steps": ["닛폰바시역 10번 출구 또는 기존 점심 식당에서 구로몬시장 아케이드로 들어가요.", "시장 안의 黒門三平(日本橋1-22-25) 간판을 찾아 들어가요. 식사 후 같은 시장 통로에서 구경을 이어가요.", "다음 일정은 16:00 출발 기준 난바 야사카 신사예요."], "origin": "Osaka Metro Nippombashi Station Exit 10", "destination": "黒門三平 黒門市場店 大阪府大阪市中央区日本橋1-22-25"},
  "d1-yasaka": {"kind":"도보","title":"구로몬시장 → 난바 야사카 신사","steps":["구로몬시장 서쪽 입구로 돌아와 난카이 난바역 쪽으로 서쪽 이동.","난카이 난바역 남쪽을 지나 난바나카(難波中) 방향으로 내려가 난바 야사카 신사 정문으로 이동."],"tip":"구로몬시장의 어느 점포에서 출발하는지에 따라 거리 차이 있음.","origin":"Kuromon Ichiba Market","destination":"Namba Yasaka Shrine"},
  "d1p5": {"kind": "도보", "title": "빅카메라 난바점 → 도톤보리 에비스바시", "steps": ["빅카메라에서 센니치마에·도톤보리 방향으로 이동.", "강변 에비스바시와 글리코 간판 쪽으로 걸어요. 도보 약 5~10분 예상."], "origin": "Bic Camera Namba Store Osaka 2-10-1 Sennichimae", "destination": "Ebisubashi Bridge Dotonbori"},
  "d1p6": {"kind":"도보","title":"도톤보리 → 신사이바시스지","steps":["에비스바시를 북쪽으로 건너 에비스바시스지·신사이바시스지 아케이드를 따라 직진.","다이마루 신사이바시점·오사카 메트로 신사이바시역 주변에서 종료. 숙소 복귀는 숙소 위치에 맞춰 선택."],"origin":"Ebisubashi Bridge Dotonbori","destination":"Shinsaibashi-suji Shopping Street"},
  "d2-walk-shitennoji": {"kind": "도보", "title": "숙소 → 시텐노지 서문", "steps": ["숙소에서 동쪽 덴노지 방면으로 걸어 시텐노지 서문(石鳥居·西大門) 쪽으로 접근.", "서문에서 중심가람 안내 표지를 따라 이동."], "origin": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6", "destination": "Shitennoji Temple West Gate Osaka"},
  "d2-shitennoji": {"kind":"경내 도보","title":"시텐노지 서문 → 중심가람","steps":["서대문에서 경내 안쪽 중심가람 입구를 찾아 입장권·주유패스 대상 구역을 확인.","중심가람 관람 후 북서쪽 시텐노지마에유히가오카역 방면으로 이동할 준비."],"origin":"Shitennoji Temple west gate","destination":"Shitennoji Temple"},
  "d2-to-castle": {"kind":"지하철 + 도보","title":"시텐노지마에유히가오카역 → 다니마치욘초메역 → 오사카성","steps":["시텐노지 서쪽에서 북쪽으로 걸어 오사카 메트로 시텐노지마에유히가오카역(T26)으로 이동.","다니마치선 다이니치 방면 승차, 다니마치욘초메역(T23) 하차(다니마치큐초메·다니마치로쿠초메 다음). 환승 없음.","9번 출구 쪽으로 나와 바바초·오테몬 방향으로 걸어 오사카성 공원 진입 → 오테몬·사쿠라몬을 지나 천수각."],"tip":"하차역부터 천수각까지 공원 내 보행이 길어 40분 이동칸은 빠듯할 수 있음.","origin":"Shitennoji-mae Yuhigaoka Station","destination":"Osaka Castle Main Tower"},
  "d2p2": {"kind":"경내 도보","title":"오사카성 천수각 → 사쿠라몬·오테몬","steps":["천수각 본마루에서 내려와 사쿠라몬을 거쳐 서쪽 오테몬으로 이동.","오테몬 밖 오테마에 식당가와 역사박물관 쪽으로 나올 수 있도록 서쪽 출구 사용."],"origin":"Osaka Castle Main Tower","destination":"Otemon Gate Osaka Castle"},
  "d2-lunch": {"kind":"도보","title":"오사카성 오테몬 → 오테마에·역사박물관","steps":["오테몬을 나와 서쪽 오테마에 거리·오사카부청 앞을 따라 이동.","오사카 역사박물관(다니마치욘초메역 9번 출구 바로 옆) 근처에서 식사 후 박물관으로 이동."],"tip":"원래 50분 칸에 걷기와 점심이 모두 포함되므로 대기가 길면 박물관 관람을 줄여야 함.","origin":"Otemon Gate Osaka Castle","destination":"Osaka Museum of History"},
  "d2-museum": {"kind":"박물관 내 이동","title":"오사카 역사박물관 입구 → 상설전시","steps":["오테마에 거리의 박물관 입구로 진입. 가까운 지하철역은 다니마치욘초메역(T23/C18), 9번 출구.","상설전시 관람 후 같은 출입구로 나와 지하철 다니마치선 개찰구로 이동."],"origin":"Osaka Museum of History","destination":"Tanimachi 4-chome Station"},
  "d2-to-umeda": {"kind":"지하철 + 도보","title":"다니마치욘초메역 → 히가시우메다역 → 스카이빌딩","steps":["역사박물관 앞 다니마치욘초메역(T23)에서 다니마치선 다이니치 방면 승차.","히가시우메다역(T20) 하차(덴마바시·미나미모리마치 다음). 환승 없이 중앙 개찰구에서 JR 오사카역·그랜드프런트 오사카 안내를 따라 서쪽 이동.","오사카역 북쪽 우메키타 광장 쪽으로 나와 스카이빌딩·공중정원 표지를 따라 도보 이동."],"tip":"히가시우메다역에서 빌딩까지 역내 통로와 지상 보행이 길다. 횡단보도·공사 동선은 현장 표지 우선.","origin":"Tanimachi 4-chome Station","destination":"Umeda Sky Building"},
  "d2-sky-entry": {"kind":"건물 내 이동","title":"우메다 스카이빌딩 1층 → 공중정원 접수","steps":["스카이빌딩 사이의 공중정원(空中庭園展望台) 입구 표지를 찾아 입장 동선으로 이동.","엘리베이터·에스컬레이터를 따라 39층 티켓 카운터로 올라가 입장 준비."],"origin":"Umeda Sky Building","destination":"Kuchu Teien Observatory"},
  "d2p4": {"kind":"관람·복귀","title":"공중정원 → 숙소 방향","steps":["공중정원 관람 뒤 같은 동선으로 스카이빌딩 1층까지 내려옴.","난바 숙소 복귀 시 JR 오사카역 남쪽 오사카 메트로 우메다역(M16)까지 걸어가 미도스지선 나카모즈 방면 → 난바역(M20) 하차."],"tip":"이날 마지막 일정 뒤 복귀편을 함께 표기했으며 숙소 정확한 위치에 맞춰 최종 도보를 확인.","origin":"Umeda Sky Building","destination":"Osaka Metro Namba Station"},
  "d3-arashiyama-transit": {"kind": "JR 전철 + 도보", "title": "호텔 → 신이마미야 → 오사카 → 교토 → 우마호리", "steps": ["호텔에서 JR 신이마미야역까지 도보 약 7~10분. 오사카 방면 JR 열차를 타고 오사카역에서 JR 교토선으로 환승.", "오사카역에서 교토 정차 신쾌속을 이용해 교토역 08:05 전후 도착 목표. 08:16 사가노선 소노베행 보통은 31번 승강장 기준이며 현장 안내판을 확인해요.", "JR 우마호리(馬堀)역 08:42 하차 후 도롯코 가메오카역(トロッコ亀岡駅)까지 도보 약 10분. 대체편은 교토역 32번 승강장 08:27 출발, 우마호리 08:57 도착입니다. 당일 안내판을 확인하세요."], "origin": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6", "destination": "Torokko Kameoka Station Kyoto"},
  "d3-romantic-train": {"kind": "관광열차", "title": "도롯코 가메오카 → 도롯코 아라시야마", "steps": ["09:00 전후 도롯코 가메오카역 도착 목표. 티켓에 표시된 승차역과 하차역, 탑승 안내를 확인해요.", "도롯코 아라시야마역에서 하차. 승강장에서 출구로 올라가는 계단이 약 60개 있어요."], "origin": "Torokko Kameoka Station Kyoto", "destination": "Torokko Arashiyama Station Kyoto", "tip": "사가노 2호. 예약 화면에서 도롯코 가메오카 출발·도롯코 아라시야마 하차를 확인해요."},
  "d3-bamboo": {"kind": "도보", "title": "도롯코 아라시야마역 → 대나무숲 → 덴류지 북문", "steps": ["역 출구에서 왼쪽 대나무숲 산책길로 들어가요.", "대나무숲에서 사진을 찍고 덴류지 북문 표지를 따라 정원 입구로 이동해요."], "origin": "Torokko Arashiyama Station Kyoto", "destination": "Tenryu-ji North Gate Kyoto"},
  "d3-tenryuji": {"kind": "경내 도보", "title": "덴류지 북문 → 백화원·소겐치 정원 → 정문", "steps": ["북문 매표소에서 정원 입장권 구매. 정원 관람과 사진에 약 55분 배정.", "소겐치 정원을 본 뒤 정문 쪽으로 나와 상점가 큰길을 따라 남쪽 도게츠교 방향으로 걸어요."], "origin": "Tenryu-ji North Gate Kyoto", "destination": "Tenryu-ji Main Gate Kyoto"},
  "d3-togetsukyo": {"kind": "도보", "title": "덴류지 정문 → 도게츠교 북쪽 → 다리 남쪽", "steps": ["덴류지 정문에서 상점가를 남쪽으로 걸어 도게츠교 북쪽 강변에 도착.", "가쓰라강과 다리를 보고 남쪽으로 건너요. 일정의 40분에는 정문에서의 걸음과 관람이 모두 포함돼요."], "origin": "Tenryu-ji Main Gate Kyoto", "destination": "Togetsukyo Bridge Kyoto"},
  "d3-to-gion": {"kind": "도보 + 한큐 전철", "title": "도게츠교 → 한큐 아라시야마 → 가쓰라 → 교토가와라마치", "steps": ["도게츠교 남쪽에서 한큐 아라시야마역(阪急嵐山駅)까지 도보 약 5~10분.", "한큐 아라시야마선 가쓰라행. 12:27 또는 12:44 출발을 이용하고, 가쓰라역에서 교토가와라마치행으로 환승해요.", "교토가와라마치역에서 점심 장소로 이동해요. 기온에서 식사한다면 동쪽 출구로 나와 시조오하시를 건너요."], "origin": "Hankyu Arashiyama Station Kyoto", "destination": "Hankyu Kyoto-Kawaramachi Station Kyoto"},
  "d3-lunch": {"kind": "도보", "title": "교토가와라마치역 → 시조오하시 → 기온", "steps": ["시조도리 주변에서 점심 식사. 식당이 가와라마치 쪽이면 하나미코지까지 걷는 시간도 고려해요."], "origin": "Hankyu Kyoto-Kawaramachi Station Kyoto", "destination": "Hanamikoji Street Kyoto"},
  "d3p5": {"kind": "도보", "title": "기온 · 하나미코지 산책", "steps": ["하나미코지 공공도로 산책. 사유지·촬영금지 표지 준수.", "15:00에는 야사카 신사 남쪽·네네노미치 방면으로 히가시야마 이동."], "origin": "Hanamikoji Street Kyoto", "destination": "Hanamikoji Street Kyoto"},
  "d3p3": {"kind": "도보", "title": "기온 → 야사카노토·니넨자카·산넨자카 → 청수사", "steps": ["하나미코지에서 야사카 신사 남쪽·네네노미치 방향으로 이동.", "야사카노토 외관과 니넨자카·산넨자카 골목을 연결해 산책. 사진의 묶음 일정 안에서 청수사 방향으로 진행.", "산넨자카에서 기요미즈자카 오르막을 따라 청수사 니오몬으로 이동, 17:10 도착 목표."], "origin": "Hanamikoji Street Kyoto", "destination": "Kiyomizu-dera Niomon", "tip": "고다이지 내부는 이번 코스에서 제외. 돌계단·젖은 낙엽·인파 주의."},
  "d3-night-entry": {"kind": "입장 준비 · 도보", "title": "청수사 니오몬 → 입장 준비", "steps": ["17:10부터 화장실·입장권·입장 줄 확인.", "17:30 야간 조명 시작에 맞춰 관람하되 정각 입장은 혼잡에 따라 달라짐."], "origin": "Kiyomizu-dera Niomon", "destination": "Kiyomizu-dera"},
  "d3p8": {"kind": "경내 도보", "title": "청수사 야간 단풍관람", "steps": ["17:30~19:00 본당·무대와 단풍 야경 관람.", "관람 후 기요미즈고조역 방향으로 내려가 저녁·복귀 준비. 이번 일정의 청수사 방문은 야간 1회."], "origin": "Kiyomizu-dera", "destination": "Kiyomizu-dera", "tip": "11/21~30, 21:00 접수 종료·21:30 폐문. 예약 불필요. 공식: https://www.kiyomizudera.or.jp/event/yakan.php"},
  "d3-dinner": {"kind": "도보", "title": "청수사 → 저녁 → 기요미즈고조역", "steps": ["기요미즈자카·고조자카를 내려와 고조도리를 서쪽으로 이동.", "기요미즈고조역까지 약 25~35분. 19:00~20:00 안에 간단히 저녁까지 하므로 긴 대기 식당은 피하기."], "origin": "Kiyomizu-dera", "destination": "Kiyomizu-Gojo Station", "tip": "저녁 장소는 미정. 20:00은 목표 출발시각으로 식사·혼잡에 따라 조정."},
  "d3-return": {"kind": "게이한 전철 + 지하철 + 도보", "title": "기요미즈고조 → 요도야바시 → 난바 숙소", "steps": ["게이한 기요미즈고조역(KH38)에서 요도야바시 방면 보통·준급 승차. 특급은 이 역에 정차하지 않음.", "단바바시 등 특급 정차역에서 더 빠른 요도야바시행 환승을 선택하고 요도야바시역(KH01) 하차.", "메트로 요도야바시역(M17) → 미도스지선 덴노지·나카모즈 방면 → 난바역(M20), 숙소까지 도보."], "origin": "Kiyomizu-Gojo Station", "destination": "Osaka Metro Namba Station", "tip": "20:00~21:30 이후는 90분 이상 계획. 역 환승·숙소 위치에 따라 더 늦어질 수 있음."},
  "d4-hotel-checkout": {"kind": "도보", "title": "객실 → 로비 셀프 보관함", "steps": ["태블릿으로 체크아웃한 뒤 로비 체인 잠금식 보관함에 캐리어를 맡겨요.", "빈자리가 없으면 난카이 신이마미야역 코인로커를 확인하고 공항행 열차 타기 전에 회수해요."], "origin": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6", "destination": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6", "tip": "호텔 공식: https://www.eslead-hotel.com/en/namba-3/"},
  "d4-tsutenkaku": {"kind": "도보", "title": "호텔 → 신세카이 쓰텐카쿠", "steps": ["숙소에서 신세카이 방향으로 도보 약 5분.", "쓰텐카쿠 일반 전망대는 시간지정 입장. 09:00 전후 입장을 목표로 해요."], "origin": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6", "destination": "Tsutenkaku Osaka", "tip": "운영·요금: https://www.tsutenkaku.co.jp/annai/"},
  "d4-uniqlo-abeno": {"kind": "도보", "title": "쓰텐카쿠 → 유니클로 아베노 큐즈몰점", "steps": ["쓰텐카쿠에서 신세카이를 나와 아베노·텐노지역 남서쪽으로 걸어 아베노 큐즈몰로 향해요.", "큐즈몰 1층의 유니클로를 방문해요. 10:00 영업 시작, 이 구간 40분 안에 이동과 쇼핑을 마쳐야 해요."], "origin": "Tsutenkaku Osaka", "destination": "UNIQLO Abeno Q's Mall 1-6-1 Abenosuji Osaka", "tip": "11/28 10:15~10:55 이동·쇼핑 배정. 공항 복귀시간을 우선하세요."},
  "d4-harukas": {"kind": "도보", "title": "유니클로 아베노 큐즈몰점 → 아베노 하루카스 16층 → 전망대", "steps": ["큐즈몰 1층 유니클로에서 나와 인근 아베노 하루카스 타워관으로 걸어가요.", "B1층 또는 2층에서 셔틀 엘리베이터로 16층 이동. 현장권을 사거나 공식 사전권 QR로 입장해요.", "16층 입장 게이트에서 전망대 전용 엘리베이터를 이용해요."], "origin": "UNIQLO Abeno Q's Mall 1-6-1 Abenosuji Osaka", "destination": "Harukas 300 Observatory Osaka", "tip": "공식 티켓: https://www.abenoharukas-300.jp/observatory/ticket/"},
  "d4-bag-pickup": {"kind": "지하철 + 도보", "title": "덴노지역 → 도부쓰엔마에역 → 숙소", "steps": ["하루카스에서 오사카 메트로 덴노지역(M23)으로 이동.", "미도스지선 우메다·신오사카 방면 한 정거장 → 도부쓰엔마에역(M22) → 도보로 숙소.", "로비 보관함에서 짐을 찾아요. 신이마미야역 코인로커를 썼다면 그 역에서 회수해요."], "origin": "Harukas 300 Observatory Osaka", "destination": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6"},
  "d4-nankai-kix": {"kind": "난카이 전철 + 도보", "title": "숙소 → 난카이 신이마미야역 → 간사이공항역 → 제1터미널", "steps": ["호텔에서 신이마미야역까지 도보 약 7~10분. JR 개찰이 아닌 난카이 개찰로 이동해요.", "간사이공항행 공항급행을 타고 종점 간사이공항역 하차. 배차·승강장은 당일 재확인.", "제1터미널 연결통로를 지나 출국 절차를 진행해요."], "origin": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6", "destination": "Kansai International Airport Terminal 1", "tip": "난카이 공식 시간표: https://www.nankai.co.jp/en_railway/access-timetable"},
};

function appendRouteGuide(node,plan){
  const route=ROUTE_DETAILS[plan.id];
  if(!route)return;
  const original=plan.id===KOBE_LUNCH.id?KOBE_LUNCH:defaults.days.flatMap(d=>d.plans).find(p=>p.id===plan.id);
  const changed=original&&(original.name!==plan.name||original.map!==plan.map);
  const box=document.createElement('details');box.className='route-guide';
  const summary=document.createElement('summary');
  summary.textContent=changed?'이동 경로 참고 · 기존 장소 기준':route.kind+' · '+route.title;
  box.appendChild(summary);
  const list=document.createElement('ol');
  route.steps.forEach(function(step){const li=document.createElement('li');li.textContent=step;list.appendChild(li);});
  box.appendChild(list);
  if(route.tip){const p=document.createElement('p');p.className='route-tip';p.textContent='확인: '+route.tip;box.appendChild(p);}
  const a=document.createElement('a');a.className='route-map';a.target='_blank';a.rel='noopener noreferrer';
  const mode=route.kind.includes('도보')&&!route.kind.includes('전철')&&!route.kind.includes('지하철')&&!route.kind.includes('게이한')?'walking':'transit';
  a.href=tripDirectionsUrl(route.destination,route.origin,mode);
  a.textContent='이 구간 실시간 길찾기 ↗';box.appendChild(a);
  if(changed){const small=document.createElement('small');small.textContent='수정한 일정의 장소·순서에는 원래 경로가 맞지 않을 수 있어요. 현장 출발 전에 재확인하세요.';box.appendChild(small);}
  const walk=node.querySelector('.walking-guide');(walk||node.querySelector('.plan-note')).after(box);
}


Object.assign(ROUTE_DETAILS,{
  "d1-seven-atm": {
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
  "d2-seven-atm": {
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
  "d3-seven-atm": {
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
  "d4-seven-atm": {
    "kind": "도보 · 출금",
    "title": "호텔 → 에비스니시 1초메점 → 다음 일정",
    "steps": [
      "호텔(恵美須西2-8-6)에서 북쪽 에비스초역 주변 恵美須西1-2-1 점포로 도보 약 3~5분 추정.",
      "호텔에 짐을 맡기고 출금한 뒤 쓰텐카쿠로 걸어요."
    ],
    "origin": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6",
    "destination": "セブン-イレブン 大阪恵美須西1丁目店 大阪府大阪市浪速区恵美須西1-2-1",
    "tip": "출금 선택 일정. 공식 ATM 24시간·1대, 대기·점검 별도."
  }
});

// Confirmed three-night accommodation and station access, 2026-11-01.
Object.assign(ROUTE_DETAILS, HOTEL_TRIP_UPDATE.routes);
ROUTE_DETAILS.d1p1 = {
  ...ROUTE_DETAILS.d1p1,
  steps: [
    "제1터미널 1층 세븐은행 ATM에서 출금 → 2층 연결통로 → 간사이공항역 파란색 JR 개찰구 옆 발매기에서 ICOCA 구매.",
    "빨간색 난카이 개찰구에 ICOCA를 찍고 난바 방면 공항급행(空港急行)을 타요.",
    "신이마미야역에서 같은 ICOCA를 찍고 난카이 북쪽 출구로 나와 호텔까지 도보 약 7~10분."
  ]
};

Object.assign(ROUTE_DETAILS, {
  "d2-seven-atm": {
    "kind": "도보 · 출금",
    "title": "호텔 → 에비스니시 1초메 세븐일레븐",
    "origin": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6",
    "destination": "セブン-イレブン 大阪恵美須西1丁目店 大阪府大阪市浪速区恵美須西1-2-1",
    "steps": [
      "호텔에서 북쪽 에비스초역 방향으로 약 3~5분 걸어요.",
      "출금은 08:20 고베 출발 전에 마쳐요."
    ]
  },
  "d2-kobe-to-shinkobe": {
    "kind": "JR 전철 + 지하철 + 도보",
    "title": "JR 신이마미야 → 오사카 → 산노미야 → 신고베",
    "origin": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6",
    "destination": "Kobe Nunobiki Herb Gardens Ropeway Sanroku Station",
    "steps": [
      "호텔에서 JR 신이마미야역으로 약 7~10분 걸어 오사카역행 열차를 타요.",
      "JR 오사카역에서 고베 방면 JR 고베선 신쾌속 또는 쾌속으로 환승해 JR 산노미야역(三ノ宮)에서 내려요.",
      "고베 시영 지하철 산노미야역(三宮)에서 세이신·야마테선 신고베 방면으로 한 정거장. 신고베역에서 허브원 로프웨이 산로쿠역 표지를 따라가요."
    ]
  },
  "d2-kobe-herb-gardens": {
    "kind": "도보 · 로프웨이",
    "title": "신고베역 → 누노비키 허브원 로프웨이",
    "origin": "Kobe Subway Shin-Kobe Station",
    "destination": "Kobe Nunobiki Herb Gardens Ropeway Sanroku Station",
    "steps": [
      "신고베역에서 허브원 로프웨이 산로쿠역(山麓駅)으로 걸어가요.",
      "왕복권으로 정상 전망 구역에 올라가 크리스마스 마켓을 보고, 로프웨이로 산로쿠역에 돌아와요."
    ]
  },
  "d2-kobe-kitano": {
    "kind": "도보",
    "title": "로프웨이 산로쿠역 → 기타노 이진칸 거리",
    "origin": "Kobe Nunobiki Herb Gardens Ropeway Sanroku Station",
    "destination": "Kitano Ijinkan-gai Kobe",
    "steps": [
      "로프웨이 산로쿠역에서 기타노도리를 따라 서쪽으로 걸어요.",
      "기타노 이진칸 거리에서 외관 위주로 구경하고 13:00 전후 남쪽 산노미야 방면으로 내려가요."
    ]
  },
  "d2-kobe-lunch": {
    "kind": "도보",
    "title": "기타노 이진칸 거리 → 스테이크 랜드 고베관 / 고베점",
    "origin": "Kitano Ijinkan-gai Kobe",
    "destination": "ステーキランド神戸館 神戸市中央区北長狭通1-9-17",
    "steps": [
      "기타노에서 남쪽 비탈길을 내려와 한큐 고베산노미야역 서쪽 출구 인근까지 약 10~15분 걸어요.",
      "고베관은 三宮興業ビル 6층, 고베점은 인근 宮迫ビル 1·2층이에요. 런치 마감과 대기를 고려해 13:20 전후까지 도착하세요.",
      "14:00 이후에는 브레이크 타임 없이 영업하는 고베점에서 만조쿠 세트로 식사해요."
    ]
  },
  "d2-kobe-nankinmachi": {
    "kind": "도보",
    "title": "스테이크 랜드 → 모토마치 → 난킨마치",
    "origin": "ステーキランド神戸館 神戸市中央区北長狭通1-9-17",
    "destination": "Nankinmachi Chinatown Kobe",
    "steps": [
      "고베관·고베점에서 서쪽 모토마치 방면으로 약 10분 걸어 난킨마치 입구로 들어가요."
    ]
  },
  "d2-kobe-meriken": {
    "kind": "도보",
    "title": "난킨마치 → 메리켄파크·포트타워",
    "origin": "Nankinmachi Chinatown Kobe",
    "destination": "Meriken Park Kobe",
    "steps": [
      "난킨마치에서 남쪽 항구 방면으로 내려가 메리켄파크의 BE KOBE 조형물과 포트타워를 둘러봐요."
    ]
  },
  "d2-kobe-harborland": {
    "kind": "도보",
    "title": "메리켄파크 → 하버랜드 모자이크",
    "origin": "Meriken Park Kobe",
    "destination": "Kobe Harborland umie Mosaic",
    "steps": [
      "포트타워 쪽에서 항구 산책로를 따라 하버랜드 umie 모자이크로 걸어요."
    ]
  },
  "d2-kobe-return": {
    "kind": "도보 + JR 전철",
    "title": "모자이크 → JR 고베 → 오사카 → 신이마미야",
    "origin": "Kobe Harborland umie Mosaic",
    "destination": "Eslead Hotel Namba South III Osaka Ebisunishi 2-8-6",
    "steps": [
      "모자이크에서 JR 고베역(神戸駅)으로 걸어가요.",
      "JR 고베선 오사카 방면 신쾌속 또는 쾌속으로 오사카역에 가요.",
      "JR 오사카역에서 순환선 니시쿠조·벤텐초 쪽으로 환승해 신이마미야역에 내려 숙소까지 걸어요."
    ]
  }
});

ROUTE_DETAILS["d1p1"].steps = [
  "제1터미널 1층 세븐은행 ATM에서 출금 → 2층 연결통로 → 간사이공항역 파란색 JR 개찰구 옆 발매기에서 ICOCA 구매.",
  "빨간색 난카이 개찰구에 ICOCA를 찍고 난바 방면 공항급행(空港急行)을 타요.",
  "신이마미야역에서 같은 ICOCA를 찍고 현장 표지의 북쪽 출구 또는 동쪽·쓰텐카쿠 방면 출구를 확인해 나와요. 호텔까지 도보 약 7~10분."
];
ROUTE_DETAILS["d1-hotel-bags"].steps = [
  "호텔 출입 비밀번호를 예약 안내 또는 앱 개인 예약 정보에서 확인한 뒤 로비에 입장해요. 무료 체인 잠금식 짐 보관 공간의 빈자리를 확인하세요.",
  "캐리어를 잠그고 여권·귀중품은 지참. 호텔에서 에비스초역으로 이동해 점심·시장 관광 시작."
];
ROUTE_DETAILS["d1-return-hotel"].steps = [
  "신사이바시역(M19) → 미도스지선 덴노지·나카모즈 방면 → 도부쓰엔마에역(M22).",
  "지상에서 호텔까지 도보 약 10~15분 추정. 호텔 지도와 현장 표지 우선.",
  "00:30 전 로비 태블릿에서 체크인 코드를 입력하고 ¥55,444 현장 결제 → 보관한 짐 회수."
];
ROUTE_DETAILS["d2-kobe-herb-gardens"].steps = [
  "신고베역에서 허브원 로프웨이 산로쿠역(山麓駅)까지 걸어요.",
  "매표소에서 조이패스 크리스마스 시즌 교환 여부를 확인한 뒤 로프웨이 왕복권으로 정상에 올라가요."
];
ROUTE_DETAILS["d4-hotel-checkout"].steps = [
  "로비 태블릿에서 체크아웃 코드를 확인해 입력한 뒤 무료 체인 잠금식 보관함에 캐리어를 맡겨요.",
  "빈자리가 없으면 난카이 신이마미야역 코인로커에 맡기고 공항행 열차 탑승 전에 회수해요."
];
ROUTE_DETAILS["d4-tsutenkaku"].steps = [
  "숙소에서 신세카이 방향으로 도보 약 5분.",
  "일반 전망대는 시간 지정 입장. 조이패스 바우처로 현장에서 시간을 지정하고 입장해요."
];
ROUTE_DETAILS["d4-harukas"].steps = [
  "큐즈몰 1층 유니클로에서 나와 아베노 하루카스 타워관으로 걸어요.",
  "B1층 또는 2층에서 셔틀 엘리베이터로 16층 이동. 조이패스 바우처 적용 여부를 확인해 입장해요.",
  "16층 입장 게이트에서 전망대 전용 엘리베이터를 이용해요."
];
WALKING_GUIDE.d1p1[1] = "난카이 신이마미야역 → 호텔";
