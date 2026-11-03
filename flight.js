const FLIGHT_BOOKING={
  "version": "2026-11-03-flight-booking",
  "provider": "NOL",
  "ticketStatus": "발권 완료",
  "adults": 4,
  "issuedOn": "2026-09-13",
  "checkedOn": "2026-11-03",
  "source": "사용자 제공 NOL 예약상세 화면",
  "flights": [
    {
      "direction": "가는편",
      "date": "2026-11-25",
      "weekday": "수",
      "airline": "이스타항공",
      "number": "ZE0611",
      "origin": "ICN",
      "originName": "인천",
      "destination": "KIX",
      "destinationName": "오사카 간사이",
      "departureTerminal": "1",
      "freeBaggageKg": 15,
      "departureTime": "09:05",
      "arrivalTime": "10:55",
      "timeSource": "기존 여행 계획 · 첨부 예약 화면에는 시각 미표기",
      "timesVerifiedFromAttachment": false
    },
    {
      "direction": "오는편",
      "date": "2026-11-28",
      "weekday": "토",
      "airline": "이스타항공",
      "number": "ZE0614",
      "origin": "KIX",
      "originName": "오사카 간사이",
      "destination": "ICN",
      "destinationName": "인천",
      "departureTerminal": "1",
      "freeBaggageKg": 15,
      "departureTime": "18:00",
      "arrivalTime": "19:50",
      "timeSource": "기존 여행 계획 · 첨부 예약 화면에는 시각 미표기",
      "timesVerifiedFromAttachment": false
    }
  ],
  "privateBookingUrl": "https://kansai-autumn-route-2026.benjamin1121847735.chatgpt.site#flight-booking"
};

function updateFlightTripData(data){
  data.flights=JSON.parse(JSON.stringify(FLIGHT_BOOKING));
  const replacements={
    'pre-flight':'NOL 발권 완료 · 성인 4명 · ZE0611/ZE0614 확인 · E-Ticket에서 최신 출발·도착 시각 재확인',
    'day1-flight':'11/25 ZE0611 인천 ICN 터미널 1 출발 · 09:05는 기존 계획값, E-Ticket 최신 시각 확인',
    'day1-bag':'가는편 예약 무료 수하물 15kg 확인 · 위탁 전 실제 무게 확인',
    'day4-flight':'11/28 ZE0614 간사이 KIX 터미널 1 출발 · 18:00은 기존 계획값, E-Ticket 최신 시각·마감 확인',
    'day4-baggage':'오는편 예약 무료 수하물 15kg 확인 · 쇼핑 짐 무게와 기내 반입품 구분'
  };
  for(const item of data.preTripChecklist||[]){if(replacements[item.id])item.text=replacements[item.id];}
  for(const group of data.dailyChecklist||[]){for(const item of group.items){if(replacements[item.id])item.text=replacements[item.id];}}
  for(const day of data.days){
    const text=day.date==='2026-11-25'
      ?'항공 예약 확인(2026-11-03): ZE0611 · 인천 ICN 출발 터미널 1 · 무료 수하물 15kg. 09:05→10:55는 기존 계획으로, 첨부 화면에 시각이 없어 E-Ticket에서 재확인.'
      :day.date==='2026-11-28'
        ?'항공 예약 확인(2026-11-03): ZE0614 · 간사이 KIX 출발 터미널 1 · 무료 수하물 15kg. 18:00→19:50는 기존 계획으로, E-Ticket에서 재확인. 공항 15:00 목표·16:00 전 도착 계획 유지.'
        :'';
    if(text&&!day.notes.includes(text))day.notes.push(text);
  }
  return data;
}
