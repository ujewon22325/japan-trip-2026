const TRIP_START='2026-11-25';
const TRIP_END='2026-11-28';
const STORAGE_KEY='kansai-trip-manager-v2';

const defaults={
  days:[
    {
      date:'2026-11-25',city:'오사카 남부',short:'오사카',
      notes:[
        '첫날은 항공편 지연에 대응하기 쉽도록 난바 중심으로 이동.',
        '구로몬시장은 늦은 오후부터 일부 점포가 닫을 수 있어 도착 후 우선 방문.',
        '항공편이 늦으면 난바파크스/덴덴타운을 먼저 생략.'
      ],
      fallback:'난바파크스/덴덴타운 → 신사이바시 일부 순서로 생략',
      plans:[
        {id:'d1p1',time:'공항 도착 후',name:'KIX → 난바 (난카이)',fee:'교통비 별도',note:'라피트 최단 약 34분. 항공편 도착시간에 맞춰 선택.',map:'Nankai Namba Station Osaka'},
        {id:'d1p2',time:'14:30-16:00',name:'구로몬시장',fee:'무료',note:'먹거리부터 우선. 점포별 영업시간 상이, 늦은 오후 이른 마감 주의.',map:'Kuromon Ichiba Market Osaka'},
        {id:'d1p3',time:'16:00-17:00',name:'난바파크스 또는 덴덴타운',fee:'무료',note:'쇼핑·식사면 난바파크스, 전자기기·서브컬처면 덴덴타운. 지연 시 생략 가능.',map:'Namba Parks Osaka',optional:true},
        {id:'d1p4',time:'17:00-18:00',name:'호젠지 · 호젠지요코초',fee:'무료',note:'경내 상시 참배 가능. 사무소/고슈인 10:00-18:00 기준.',map:'Hozenji Temple Osaka'},
        {id:'d1p5',time:'18:00-20:00',name:'도톤보리',fee:'무료',note:'저녁 인파가 많고 식당 대기 가능. 다리 위 통행 방해 주의.',map:'Dotonbori Osaka'},
        {id:'d1p6',time:'20:00-21:30',name:'신사이바시스지',fee:'무료',note:'점포별 폐점시간 상이. 쇼핑이 중요하면 도톤보리 저녁을 조금 앞당겨도 됨.',map:'Shinsaibashi-suji Shopping Street Osaka'}
      ]
    },
    {
      date:'2026-11-26',city:'오사카 핵심 명소',short:'오사카',
      notes:[
        '쓰텐카쿠는 시간지정 입장제라 사전구매가 편함.',
        '오사카성공원 산책까지 포함해 약 2시간 확보.',
        '우메다 스카이빌딩 옥상은 11월 하순 강풍·추위 대비.'
      ],
      fallback:'우메다 쇼핑·카페 시간을 줄이고 전망대는 유지',
      plans:[
        {id:'d2p1',time:'09:00-10:30',name:'신세카이 + 쓰텐카쿠',fee:'1,500엔',note:'09:00-21:45, 최종입장 21:15. 시간지정 입장제.',map:'Tsutenkaku Osaka'},
        {id:'d2p2',time:'11:00-13:00',name:'오사카성공원 + 천수각',fee:'1,200엔',note:'천수각 09:00-18:00, 최종 17:30. 공원 자체는 무료.',map:'Osaka Castle'},
        {id:'d2p3',time:'14:30-16:15',name:'우메다 쇼핑 · 카페',fee:'무료',note:'시설별 운영시간 상이.',map:'Umeda Osaka'},
        {id:'d2p4',time:'16:15-18:30',name:'우메다 스카이빌딩 공중정원',fee:'2,000엔',note:'09:30-22:30, 최종 22:00. 일몰 전부터 야경까지 이어서 관람.',map:'Umeda Sky Building Osaka'}
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
    {id:'pre-kyoto',text:'출발 1주 전 청수사·에이칸도·고다이지·난젠지 운영시간·공사·입장료 재확인'},
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
        {id:'day2-castle',text:'오사카성 천수각 최종입장 17:30보다 충분히 일찍 도착'},
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
function freshState(){return {data:clone(defaults),completed:{},checklistDone:{},expenses:[]};}
function loadState(){
  try{
    const x=JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(x&&x.data&&x.data.days){
      if(!Array.isArray(x.data.preTripChecklist))x.data.preTripChecklist=clone(defaults.preTripChecklist);
      if(!Array.isArray(x.data.dailyChecklist))x.data.dailyChecklist=clone(defaults.dailyChecklist);
      if(!x.completed)x.completed={};
      if(!x.checklistDone)x.checklistDone={};
      if(!Array.isArray(x.expenses))x.expenses=[];
      return x;
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
  document.querySelector('#doneCount').textContent=Object.values(state.completed).filter(Boolean).length;
  document.querySelector('#expenseTotal').textContent=yen(state.expenses.reduce(function(a,b){return a+Number(b.amount||0);},0));
  const all=allChecklistItems();
  const done=all.filter(function(item){return state.checklistDone[item.id];}).length;
  document.querySelector('#checkCount').textContent=done+'/'+all.length;
}
function renderTabs(){
  const tabs=document.querySelector('#dayTabs'); tabs.innerHTML='';
  state.data.days.forEach(function(d,i){
    const b=document.createElement('button'); b.className='day-tab'+(i===selectedDay?' active':'');
    b.innerHTML='DAY '+(i+1)+'<small>'+d.short+' · '+d.date.slice(5).replace('-','/')+'</small>';
    b.onclick=function(){selectedDay=i;render();};
    tabs.appendChild(b);
  });
}
function renderSummary(){
  const d=state.data.days[selectedDay];
  document.querySelector('#dayTitle').textContent='DAY '+(selectedDay+1)+' · '+d.city;
  const done=d.plans.filter(function(p){return state.completed[p.id];}).length;
  document.querySelector('#todaySummary').innerHTML='<div><strong>'+d.date+' · '+d.city+'</strong><span>'+d.plans.length+'개 일정 중 '+done+'개 완료</span></div><span class="critical">'+d.fallback+'</span>';
}
function renderTimeline(){
  const wrap=document.querySelector('#timeline'); wrap.innerHTML='';
  const tpl=document.querySelector('#timelineItemTemplate');
  state.data.days[selectedDay].plans.forEach(function(plan){
    const node=tpl.content.cloneNode(true); const item=node.querySelector('.timeline-item');
    if(state.completed[plan.id])item.classList.add('completed');
    node.querySelector('.time').textContent=plan.time;
    node.querySelector('.fee').textContent=plan.fee||'';
    if(plan.optional)node.querySelector('.optional-tag').hidden=false;
    node.querySelector('.plan-name').textContent=plan.name;
    node.querySelector('.plan-note').textContent=plan.note||'';
    node.querySelector('.check-btn').onclick=function(){state.completed[plan.id]=!state.completed[plan.id];save();renderTimeline();renderSummary();renderStats();};
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
    row.innerHTML='<div><strong>'+e.name+'</strong><small>'+e.category+'</small></div><strong>'+yen(e.amount)+'</strong><button class="icon-btn" aria-label="삭제">×</button>';
    row.querySelector('button').onclick=function(){state.expenses=state.expenses.filter(function(x){return x.id!==e.id;});save();renderExpenses();renderStats();};
    wrap.appendChild(row);
  });
}
function render(){renderHero();renderTabs();renderSummary();renderChecklists();renderTimeline();renderNotes();renderExpenses();renderFallback();}

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
    state=imported;save();render();alert('백업을 불러왔습니다.');
  }
  catch(err){alert('올바른 백업 파일이 아닙니다.');}
  e.target.value='';
};

window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferredInstallPrompt=e;document.querySelector('#installBtn').hidden=false;});
document.querySelector('#installBtn').onclick=async function(){if(!deferredInstallPrompt)return;deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;document.querySelector('#installBtn').hidden=true;};
if('serviceWorker' in navigator)window.addEventListener('load',function(){navigator.serviceWorker.register('./sw.js').catch(function(){});});
render();
