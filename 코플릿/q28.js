const robotPath2 = function (room, src, sDir, dst, dDir) {
    const N = room.length;
    const M = room[0].length;
    const dx = [-1,0,1,0];
    const dy = [0,1,0,-1];
    const q = [[src[0],src[1],sDir]];
    room[src[0]][src[1]] = 's';
    let lastDir;
    const [gx,gy] = dst;
    while(q.length>0){
        const [cx,cy,cdir] = q.shift();
        if(cx===gx && cy===gy){
            let cnt = Math.abs(dDir-cdir)===2?2:1;
            return cnt+room[cx][cy]
        }
        for(let i=0;i<4;i++){
            let [nx,ny] = [cx+dx[i],cy+dy[i]];
            while(true){
                if(nx>=0 && nx<N && ny>=0 && ny<M){
                    if(room[nx][ny]===0){
                        let cnt = Math.abs((i+1)-cdir)===2?2:1
                        if(room[cx][cy] === 's'){
                            room[nx][ny] = cnt+1;
                        }
                        else{
                            room[nx][ny] = cnt+room[cx][cy]+1;
                        }
                        q.push([nx,ny,i+1]);
                    }else{
                        break;
                    }
                    [nx,ny] = [nx+dx[i],ny+dy[i]];
                }else{
                    break;
                }
            }

        }
    }
};

room = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0],
  ];
  src = [4, 2];
  sDir = 1;
  dst = [2, 2];
  dDir = 3;
  output = robotPath2(room, src, sDir, dst, dDir);
  console.log(output); // --> 7