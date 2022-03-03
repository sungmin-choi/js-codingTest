
const bfs = (room,dstRoom,src,dst,N,M) =>{
    const dx = [0,1,-1,0];
    const dy = [1,0,0,-1];
    const [gx,gy] = dst;
    const q=[];
    q.push([src[0],src[1]]);
    dstRoom[src[0]][src[1]] = 1;
    while(dstRoom[gx][gy]===0 ){
      const [cx,cy] = q.shift();
      for(let i=0;i<4;i++){
        const px = cx+dx[i];
        const py = cy+dy[i];
        if(px<N && px>=0 && py<M && py>=0){
          if(room[px][py]!==1 && dstRoom[px][py]===0){
            dstRoom[px][py]=dstRoom[cx][cy]+1;
            q.push([px,py]);
          }
        }
      }
    }
    return dstRoom[gx][gy]-1;
  }
  
  
  const robotPath = function (room, src, dst) {
    // TODO: 여기에 코드를 작성합니다.
    const N = room.length;
    const M = room[0].length;
    const dstRoom = [];
    for(let i=0;i<N;i++){
      dstRoom.push(Array(M).fill(0));
    }
    return bfs(room,dstRoom,src,dst,N,M);
  };

  