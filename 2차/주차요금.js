function solution(fees, records) {
  const [baseTime, baseCost, perTime, perCost] = fees;
  const answer = [];
  const recordsObj = {};
  for (record of records) {
    const [time, carNumber, action] = record.split(' ');
    if (!recordsObj[carNumber] && action === 'IN') {
      recordsObj[carNumber] = {
        carNumber,
        time,
        action,
        spendTime: 0,
      };
    } else if (recordsObj[carNumber] && action === 'OUT') {
      const { time: inTime } = recordsObj[carNumber];
      const outTime = time;
      let [inTimeHours, inTimeMinuts] = inTime.split(':').map((e) => +e);
      let [outTimeHours, outTimeMinuts] = outTime.split(':').map((e) => +e);
      if (inTimeMinuts > outTimeMinuts) {
        outTimeHours--;
        outTimeMinuts += 60;
      }
      recordsObj[carNumber].spendTime +=
        outTimeMinuts - inTimeMinuts + (outTimeHours - inTimeHours) * 60;
      recordsObj[carNumber].action = 'OUT';
    } else if (recordsObj[carNumber] && action === 'IN') {
      recordsObj[carNumber].time = time;
      recordsObj[carNumber].action = 'IN';
    }
  }
  Object.values(recordsObj).forEach((recordObj) => {
    let { carNumber, time, action, spendTime } = recordObj;
    if (action === 'IN') {
      let [inTimeHours, inTimeMinuts] = time.split(':').map((e) => +e);
      spendTime += (23 - inTimeHours) * 60 + (59 - inTimeMinuts);
    }
    let totalCost = 0;
    if (baseTime > spendTime) {
      totalCost = baseCost;
    } else {
      totalCost =
        baseCost + Math.ceil((spendTime - baseTime) / perTime) * perCost;
    }
    answer.push([+carNumber, totalCost]);
  });
  return answer.sort((a, b) => a[0] - b[0]).map((e) => e[1]);
}
const records = [
  '16:00 3961 IN',
  '16:00 0202 IN',
  '18:00 3961 OUT',
  '18:00 0202 OUT',
  '23:58 3961 IN',
];
const fees = [120, 0, 60, 591];

solution(fees, records);
