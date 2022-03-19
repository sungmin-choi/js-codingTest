function solution(arr, processes) {
    let answer = [];
    processes = processes.map((process)=>{
        process =process.split(' ');
        if(process[0] === 'read'){
            process[0] = 'zread';
        }
        else{
            process[0] = 'awrite';
        }
        return process;
    })
    const curProcess = processes.shift(); 
    curProcess.push(0);
    let workProcesses = [curProcess];
    const waitProcesses = [];
    let time = Number(curProcess[1]);
    let nextProcess1=[];
    let nextProcess2=[];
    if(processes.length>0){
        nextProcess1 = processes.shift();
    }
    while(workProcesses.length>0 || waitProcesses.length>0){
        workProcesses.forEach((ele)=>{ //작업 프로세스의 머무는시간 더하기.
            ele[ele.length-1]++;
        })

        const a = [...workProcesses];
        for(let i=0;i<a.length;i++){
            if(a[i][a[i].length-1]=== Number(a[i][2])){
                [workProcesses,answer] = popWorkProcess(workProcesses,arr,answer,i);
            }
        }



        if(nextProcess1.length>0){
        if(Number(nextProcess1[1]) <= time){
            if(nextProcess1[0] === 'zread'){
                if(waitProcesses.length===0){
                    if(workProcesses.length===0 || workProcesses[0][0]==='zread'){
                        nextProcess1.push(0)
                        workProcesses.push(nextProcess1);
                }else{
                    waitProcesses.push(nextProcess1);
                    waitProcesses.sort()
                }
                }
                else{
                    waitProcesses.push(nextProcess1);
                    waitProcesses.sort()
                }
            }else{
                if(workProcesses.length ===0 && waitProcesses.length===0){
                    nextProcess1.push(0)
                    workProcesses.push(nextProcess1);
                }else{
                    waitProcesses.push(nextProcess1);
                    waitProcesses.sort()
                }      
            }
            if(processes.length ===0){
                nextProcess1 =[];
            }

            if(processes.length>0){
                nextProcess1 = processes.shift();
            }
        }
    }
        if(waitProcesses.length>0){
        let i=0;
        if(waitProcesses[0][0] === 'zread'){
   
        while(waitProcesses[0][0] === 'zread'){
            if(workProcesses.length===0 || workProcesses[0][0]==='zread'){
                
                const insertProcess= waitProcesses.shift();
                insertProcess.push(0);
                workProcesses.push(insertProcess);
                if(waitProcesses.length ===0) break;
            }
        }
    }
        else{
            if(workProcesses.length===0){

                    const insertProcess= waitProcesses.shift();
                    insertProcess.push(0);
                    workProcesses.push(insertProcess);
            }
        }
        }
        time++;

    }
    return answer;
}


function popWorkProcess(workProcesses,arr,answer,x){
    if(workProcesses[x][0] === 'zread'){
        let str='';
        let start = Number(workProcesses[x][3]);
        let end = Number(workProcesses[x][4]);
        for(let i=start; i<=end;i++){
            str+=arr[i];
        }
        answer.push(str);
        workProcesses.shift();
    }else if(workProcesses[0][0] === 'awrite'){
        let start = Number(workProcesses[x][3]);
        let end = Number(workProcesses[x][4]);
        let changeNum = Number(workProcesses[x][5]);
        for(let i=start; i<=end;i++){
            arr[i] = changeNum;
        }
        workProcesses.shift();
    }
    return [workProcesses,answer];
}

console.log(solution(["1","2","4","3","3","4","1","5"],["read 1 3 1 2","read 2 6 4 7","write 4 3 3 5 2","read 5 2 2 5","write 6 1 3 3 9", "read 9 1 0 7"]))