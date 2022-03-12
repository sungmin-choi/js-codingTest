function getDirection(flag){
  if(flag) return [[0,1],[1,0],[0,-1],[-1,0]];
  else return [[1,0],[0,1],[-1,0],[0,-1]];
}

function isChangeDirection(dx,dy,cx,cy,n,count){
  if(dx===0 && dy===1){
    if(cy === n-count-1) return true;
  }else if(dx===0 && dy===-1){
    if(cy === count) return true;
  }else if(dx === 1 && dy===0){
    if(cx === n-count-1) return true;
  }else if(dx ===-1 && dy===0){
    if(cx === count) return true;
  }
  return false;
}

function getGoalSpot(n){
  const goal = Math.floor(n/2);
  if(n%2 === 0){
    return [[goal,goal],[goal,goal-1],[goal-1,goal],[goal-1,goal-1]]
  }else{
    return [[goal,goal],[goal,goal],[goal,goal],[goal,goal]];
  }
}
function getStartPoint(n){
  return [[0,0],[0,n-1],[n-1,0],[n-1,n-1]];
}
function getMap(n){
  const map =[];
  for(let i=0;i<n;i++){
    map.push(Array(n).fill(0));
  }
  return map;
}
function solution(n, clockwise) {
  let answer = [[]];
  const map = getMap(n);
  const getDir = getDirection(clockwise);
  const getGoal = getGoalSpot(n);
  const startPoint = getStartPoint(n);
  for(let i=0;i<4;i++){
    let [cx,cy] = startPoint[i];
    const [gx,gy] = getGoal[i];
    let changedir=1;
    let count =1;
    let curDir
    if(clockwise){
      if(i===2)curDir=3;
      else if(i===3)curDir=2;
      else curDir=i;
    }
    else{
      if(i===0)curDir=0;
      else if(i===1)curDir = 3;
      else if(i===2)curDir =1;
      else if(i===3)curDir=2;
    }

    while(true){
      map[cx][cy] = count;
      if(cx===gx && cy===gy) break;
      let [dx,dy] = getDir[curDir];
      if(isChangeDirection(dx,dy,cx,cy,n,changedir)){
        curDir = curDir>2?0:curDir+1;
        changedir++;
        [dx,dy] = getDir[curDir];
      }
      [cx,cy] = [cx+dx,cy+dy];
      count++;
    }
  }
  return map;
}

console.log(solution(6, false));