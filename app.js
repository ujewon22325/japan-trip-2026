const TRIP_START='2026-11-25';
const TRIP_END='2026-11-28';
const STORAGE_KEY='kansai-trip-manager-v2';

const SCHEDULE_VERSION='2026-09-22-shitennoji';
const defaults={
  days:[
    {
      date:'2026-11-25',city:'오사카 남부',short:'오사카',
      notes:[
        '첫날은 항공편 지연에 대응하기 쉽도록 난바 중심으로 이동.',
        '구로몬시장은 늦은 오후부터 일부 점포가 닫을 수 있어 도착 후 우선 방문.',
        '항공편이 늦으면 난바 야사카 신사을 먼저 생략.'
      ],
      fallback:'난바 야사카 신사 → 신사이바시 일부 순서로 생략',
      plans:[
        {id:'d1p1',time:'공항 도착 후',name:'KIX → 난바 (난카이)',fee:'교통비 별도',note:'라피트 최단 약 34분. 항공편 도착시간에 맞춰 선택.',map:'Nankai Namba Station Osaka'},
        {id:'d1p2',time:'14:30-16:00',name:'구로몬시장',fee:'무료',note:'먹거리부터 우선. 점포별 영업시간 상이, 늦은 오후 이른 마감 주의.',map:'Kuromon Ichiba Market Osaka'},
        {id:'d1-yasaka',time:'16:00-17:00',name:'난바 야사카 신사',fee:'무료',note:'06:00-17:00 개문. 구로몬시장에서 이동 포함, 17시 폐문 전에 관람. 지연 시 먼저 생략.',map:'Namba Yasaka Shrine Osaka'},
        {id:'d1p4',time:'17:00-18:00',name:'호젠지 · 호젠지요코초',fee:'무료',note:'경내 상시 참배 가능. 사무소/고슈인 10:00-18:00 기준.',map:'Hozenji Temple Osaka'},
        {id:'d1p5',time:'18:00-20:00',name:'도톤보리',fee:'무료',note:'저녁 인파가 많고 식당 대기 가능. 다리 위 통행 방해 주의.',map:'Dotonbori Osaka'},
        {id:'d1p6',time:'20:00-21:30',name:'신사이바시스지',fee:'무료',note:'점포별 폐점시간 상이. 쇼핑이 중요하면 도톤보리 저녁을 조금 앞당겨도 됨.',map:'Shinsaibashi-suji Shopping Street Osaka'}
      ]
    },
    {
      date:'2026-11-26',city:'오사카 핵심 명소 · 시텐노지',short:'오사카',
      notes:[
        '쓰텐카쿠 → 시텐노지 → 오사카성 → 역사박물관 → 공중정원. 이동시간은 예상값.',
        '주유패스 이용자는 쓰텐카쿠 1층 티켓센터에서 당일 시간지정권 교환. 09:00 입장은 확정이 아니므로 일찍 방문.',
        '시텐노지는 중심가람 45분 우선. 정원은 여유가 있을 때만. 중심가람·정원은 주유패스 무료, 보물관은 별도.',
        '주유패스 사용 시 포함 지하철은 패스로 입장. 트래블로그를 태그하면 별도 운임 발생.',
        '우메다 공중정원 16:15 입장은 주유패스 무료 시간대가 아님. 옥상 강풍·추위 대비.'
      ],
      fallback:'시텐노지 정원 생략 → 중심가람 관람 단축. 크게 지연되면 시텐노지 생략, 공중정원 16:15 유지',
      plans:[
        {id:'d2p1',time:'09:00-10:15',name:'신세카이 + 쓰텐카쿠',fee:'1,500엔 · 주유패스 무료',note:'시간지정 입장제. 패스는 당일 현장 시간지정권 교환 필요. 늦은 입장 배정 시 뒤 일정 조정.',map:'Tsutenkaku Osaka'},
        {id:'d2-walk-shitennoji',time:'10:15-10:40',name:'시텐노지로 도보 이동',fee:'무료',note:'도보 약 25분 예상. 실제 출구·보행속도에 따라 달라짐.',map:'Shitennoji Temple Osaka'},
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
      date:'2026-11-27',city:'교토 단풍 집중',short:'교토',
      notes:[
        '청수사-히가시야마-난젠지-에이칸도 중심으로 동부 교토에 집중.',
        '교토 단풍 최성수기라 버스보다 철도+도보 우선.',
        '하루 보행량이 많으므로 점심 60분 이상 휴식 권장.',
        '청수사는 아침 입장 후 퇴장했다가 저녁에 재입장하면 새 티켓 필요.'
      ],
      fallback:'고다이지 내부 → 난젠지 유료구역 순서로 생략. 청수사·에이칸도는 유지',
      plans:[
        {id:'d3p1',time:'05:30-07:00',name:'난바 → 교토 → 청수사',fee:'교통비 별도',note:'단풍 성수기: 철도 + 도보/택시 우선.',map:'Kiyomizu-dera Kyoto'},
        {id:'d3p2',time:'07:00-08:30',name:'청수사 아침',fee:'500엔',note:'06:00 개문. 이른 아침 추천.',map:'Kiyomizu-dera Kyoto'},
        {id:'d3p3',time:'08:30-10:00',name:'산넨자카 · 니넨자카 · 야사카노토',fee:'무료',note:'돌계단과 경사, 젖은 낙엽 미끄럼 주의.',map:'Sannenzaka Kyoto'},
        {id:'d3p4',time:'10:00-11:00',name:'고다이지 / 주변',fee:'+800엔',note:'시간이 밀릴 가능성이 높아 선택 일정. 재입장 불가.',map:'Kodai-ji Kyoto',optional:true},
        {id:'d3p5',time:'11:00-12:00',name:'기온 · 하나미코지',fee:'무료',note:'일부 촬영금지 구역. 사유지 진입·길막·마이코 추적 금지.',map:'Hanamikoji Street Kyoto'},
        {id:'d3p6',time:'13:30-15:00',name:'난젠지 경내 · 수로각',fee:'무료',note:'방장정원 600엔, 삼문 600엔 선택. 난젠인은 2027년 봄까지 관람 중단 안내.',map:'Nanzen-ji Kyoto'},
        {id:'d3p7',time:'15:00-16:30',name:'에이칸도 주간 단풍',fee:'1,500엔',note:'주간 접수 09:00-16:00, 17:00 폐문. 15:00 도착 목표.',map:'Eikando Zenrinji Kyoto'},
        {id:'d3p8',time:'18:00-19:30',name:'청수사 야간 특별관람',fee:'500엔',note:'11/21-30. 최종입장 21:00. 아침과 별도 입장료.',map:'Kiyomizu-dera Kyoto'}
      ]
    },
    {
      date:'2026-11-28',city:'나라 반일 → KIX',short:'나라',
      notes:[
        '16:00 전 공항 도착이 목표지만 실제 이동은 15:00 전후 KIX 도착 목표.',
        '긴테쓰나라역 도착 즉시 짐 보관. 유인 수하물 보관은 09:00부터.',
        '나라→KIX 추천은 JR나라 → 덴노지 → 하루카.',
        '정확한 11/28 열차 시간은 출발 1개월 전과 여행 직전 재확인.'
      ],
      fallback:'나라공원 산책시간 축소 → 점심 테이크아웃. 공항 이동은 지연시키지 않기',
      plans:[
        {id:'d4p1',time:'07:30-08:20',name:'오사카난바 → 긴테쓰나라',fee:'약 680엔',note:'일반열차 중심. 도착 즉시 짐 보관.',map:'Kintetsu Nara Station'},
        {id:'d4p2',time:'08:20-08:35',name:'긴테쓰나라역 코인로커',fee:'약 400-1,500엔+',note:'대형 로커 성수기 소진 가능. 현금형은 100엔 동전 필요할 수 있음.',map:'Kintetsu Nara Station'},
        {id:'d4p3',time:'08:35-09:35',name:'나라공원',fee:'무료',note:'사슴은 야생동물. 비닐·종이 관리, 먹이를 오래 들고 놀리지 않기.',map:'Nara Park'},
        {id:'d4p4',time:'09:35-11:00',name:'도다이지 대불전',fee:'800엔',note:'11-3월 08:00-17:00. 공식 안내 기준 현금.',map:'Todai-ji Nara'},
        {id:'d4p5',time:'11:00-12:20',name:'긴테쓰나라 복귀 · 짐 회수 · 점심',fee:'식비 별도',note:'늦으면 테이크아웃.',map:'Kintetsu Nara Station'},
        {id:'d4p6',time:'12:20-15:00',name:'JR나라 → 덴노지 → 하루카 → KIX',fee:'교통비 별도',note:'공항 15:00 전후 도착 목표. HARUKA One-way Ticket은 자격·구매조건 재확인.',map:'Kansai International Airport'}
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
    {id:'pre-tickets',text:'쓰텐카쿠·우메다 스카이빌딩 등 사전예약/시간지정 티켓 필요 여부 확인'},
    {id:'pre-haruka',text:'11/28 JR나라→덴노지→KIX 실제 열차 시각과 HARUKA 할인권 조건 확인'},
    {id:'pre-kyoto',text:'출발 1주 전 청수사·에이칸도·고다이지·난젠지·오사카 역사박물관 운영시간·공사·입장료 재확인'},
    {id:'pre-weather',text:'오사카·교토·나라 날씨와 일몰시간 확인 후 방풍·보온 겉옷 준비'},
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
        {id:'day2-tsuten',text:'쓰텐카쿠 시간지정 입장권/예약시간 확인'},
        {id:'day2-shitennoji',text:'시텐노지 10:40 도착 목표 · 중심가람 우선 · 주유패스 QR 및 정원 휴원일 확인',url:'https://www.shitennoji.or.jp/admission.html',linkLabel:'시텐노지 안내'},
        {id:'day2-castle',text:'오사카성 천수각 최종입장 17:30보다 충분히 일찍 도착'},
        {id:'day2-museum',text:'오사카 역사박물관 14:05 도착 목표 · 상설전 주유패스/입장권 준비'},
        {id:'day2-umeda',text:'우메다 스카이빌딩 입장권과 입장 동선 확인'},
        {id:'day2-warm',text:'우메다 옥상 강풍 대비 얇은 장갑·방풍 겉옷 챙기기'},
        {id:'day2-power',text:'저녁 야경 촬영 전 휴대폰·보조배터리 잔량 확인'}
      ]
    },
    {
      date:'2026-11-27',
      items:[
        {id:'day3-wakeup',text:'05:30 이동 시작에 맞춰 전날 알람·교통편 준비'},
        {id:'day3-shoes',text:'긴 도보와 돌계단 대비 편한 신발·우비/우산 준비'},
        {id:'day3-cash',text:'청수사·에이칸도 등 입장료용 엔화 현금 준비'},
        {id:'day3-eikando',text:'에이칸도 주간 최종접수 16:00 — 15:00 도착 목표 지키기'},
        {id:'day3-night',text:'청수사 야간 재입장용 입장료 별도 준비'},
        {id:'day3-rest',text:'점심 휴식 60분 이상 확보하고 수분 보충'}
      ]
    },
    {
      date:'2026-11-28',
      items:[
        {id:'day4-bag',text:'체크아웃 전 여권·충전기·개인물품 빠짐없이 확인'},
        {id:'day4-locker',text:'긴테쓰나라역 도착 즉시 코인로커 확보'},
        {id:'day4-cash',text:'도다이지 현금 800엔과 코인로커용 현금 준비'},
        {id:'day4-train',text:'JR나라→덴노지→하루카 실시간 운행상태와 승강장 확인'},
        {id:'day4-kix',text:'15:00 전후 KIX 도착 목표 — 관광 일정 때문에 공항 이동 미루지 않기'},
        {id:'day4-flight',text:'ZE0614 18:00 KIX 출발 — 체크인·수하물 위탁 마감시간 확인'},
        {id:'day4-baggage',text:'귀국편도 무료 위탁수하물 15kg 기준으로 쇼핑 짐 무게 확인',url:'https://www.eastarjet.com/newstar/PGWIK00005',linkLabel:'수하물 규정'}
      ]
    }
  ]
};

function clone(v){return JSON.parse(JSON.stringify(v));}
function newId(){return (crypto.randomUUID&&crypto.randomUUID())||('id'+Date.now()+Math.random().toString(16).slice(2));}
function freshState(){return {scheduleVersion:SCHEDULE_VERSION,data:clone(defaults),completed:{},checklistDone:{},expenses:[]};}
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

function loadState(){
  try{
    const x=JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(x&&x.data&&x.data.days){
      if(!Array.isArray(x.data.preTripChecklist))x.data.preTripChecklist=clone(defaults.preTripChecklist);
      if(!Array.isArray(x.data.dailyChecklist))x.data.dailyChecklist=clone(defaults.dailyChecklist);
      if(!x.completed)x.completed={};
      if(!x.checklistDone)x.checklistDone={};
      if(!Array.isArray(x.expenses))x.expenses=[];
      return migrateSchedule(x);
    }
  }catch(e){}
  return freshState();
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
function renderTabs(){
  const tabs=document.querySelector('#dayTabs'); tabs.innerHTML='';
  state.data.days.forEach(function(d,i){
    const b=document.createElement('button'); b.className='day-tab'+(i===selectedDay?' active':'');
    b.innerHTML='DAY '+(i+1)+'<small>'+esc(d.short)+' · '+d.date.slice(5).replace('-','/')+'</small>';
    b.onclick=function(){selectedDay=i;render();};
    tabs.appendChild(b);
  });
}
function renderSummary(){
  const d=state.data.days[selectedDay];
  document.querySelector('#dayTitle').textContent='DAY '+(selectedDay+1)+' · '+d.city;
  const done=d.plans.filter(function(p){return state.completed[p.id];}).length;
  document.querySelector('#todaySummary').innerHTML='<div><strong>'+d.date+' · '+esc(d.city)+'</strong><span>'+d.plans.length+'개 일정 중 '+done+'개 완료</span></div><span class="critical">'+esc(d.fallback)+'</span>';
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
    node.querySelector('.check-btn').onclick=function(){state.completed[plan.id]=!state.completed[plan.id];save();renderTimeline();renderSummary();renderStats();renderTravelTools();};
    const map=node.querySelector('.map-link');
    if(plan.map)map.href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(plan.map); else map.hidden=true;
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
    a.href=item.url; a.target='_blank'; a.rel='noopener'; a.className='check-link';
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
    state=migrateSchedule(imported);selectedDay=chooseInitialDay();save();render();alert('백업을 불러왔습니다.');
  }
  catch(err){alert('올바른 백업 파일이 아닙니다.');}
  e.target.value='';
};

window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferredInstallPrompt=e;document.querySelector('#installBtn').hidden=false;});
document.querySelector('#installBtn').onclick=async function(){if(!deferredInstallPrompt)return;deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;document.querySelector('#installBtn').hidden=true;};
if('serviceWorker' in navigator)window.addEventListener('load',function(){navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(function(){});});
render();


function renderTravelTools(){
  const day=state.data.days[selectedDay];
  const next=day.plans.find(p=>!state.completed[p.id]);
  const wrap=document.querySelector('#nextPlan');wrap.replaceChildren();
  const label=document.createElement('p');label.className='muted';
  label.textContent=next?'다음 미완료 · '+next.time+' · '+next.name:'이 날의 일정을 모두 완료했어요.';wrap.appendChild(label);
  if(next){
    const b=document.createElement('button');b.className='ghost-btn';b.textContent='일정으로 이동';
    b.onclick=()=>document.getElementById('plan-'+next.id).scrollIntoView({behavior:'smooth',block:'center'});wrap.appendChild(b);
    if(next.map){const a=document.createElement('a');a.className='ghost-btn';a.textContent='현재 위치에서 길찾기 ↗';a.target='_blank';a.rel='noopener';a.href='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(next.map);wrap.appendChild(a);}
  }
  document.querySelector('#deadlineNote').textContent=[
    '난바 야사카 신사 17:00 폐문 · 늦어지면 먼저 생략하세요.',
    '시텐노지 10:40 → 역사박물관 14:05 → 공중정원 16:15 목표 · 지연 시 시텐노지 정원부터 생략.',
    '에이칸도 15:00 도착 목표 / 16:00 접수 마감 · 청수사 야간 최종입장 21:00.',
    '12:20 공항 이동 시작 · 긴테쓰나라에서 짐 회수 후 JR나라로 이동 · KIX 15:00 목표, 16:00 전 도착.'
  ][selectedDay];
  const choices=state.admissionOptions||{};
  document.querySelectorAll('[data-admission]').forEach(el=>{el.checked=!!choices[el.dataset.admission];el.onchange=()=>{state.admissionOptions=state.admissionOptions||{};state.admissionOptions[el.dataset.admission]=el.checked;save();renderTravelTools();};});
  const extra=(choices.kodaiji?800:0)+(choices.garden?600:0)+(choices.sanmon?600:0)+(choices.shitenGarden?300:0);
  document.querySelector('#admissionTotal').textContent=yen(9100+extra);
  document.querySelector('#previousBackupBtn').hidden=!localStorage.getItem(STORAGE_KEY+'-before-'+SCHEDULE_VERSION);
}
document.querySelector('#previousBackupBtn').onclick=function(){
  const raw=localStorage.getItem(STORAGE_KEY+'-before-'+SCHEDULE_VERSION);if(!raw)return;
  const url=URL.createObjectURL(new Blob([raw],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='kansai-before-schedule-update.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
};
