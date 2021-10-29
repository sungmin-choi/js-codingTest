let line = [[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]];


function getCrossing(line){
    let crossing=[];
    line.forEach((equation,index,line) => {
        const [a,b,e]=equation;
        const restLine = line.slice(index+1);
        restLine.forEach(equation=>{
            const [c,d,f]=equation;
            if((a*d-b*c)!==0){
                const x = (b*f-e*d)/(a*d-b*c);
                const y = (e*c-a*f)/(a*d-b*c);
                if(Number.isInteger(x) && Number.isInteger(y)){
                    crossing.push([x,y]);
                }
            }
        })
        
    });
    return crossing;
}

function solution(line){
    let crossing=[];
    crossing = getCrossing(line);
    console.log(crossing);
    let row = crossing.map(ele=>ele[1]);
    let column = crossing.map(ele=>ele[0]);
    let zeroPoint=[Math.max(...row),Math.max(...column)];
    row = Math.max(...row)-Math.min(...row)+1;
    
    column=Math.max(...column)-Math.min(...column)+1;
    
    console.log(zeroPoint);
    let result = Array.from({length:row},()=>Array.from({length:column},()=>'.'));
    crossing.forEach(ele=>{
        let [x,y]=ele;
        x=x+zeroPoint[1];
        y=zeroPoint[0]-y;
        result[y][x]='*';

    })
    result=result.map(ele=>ele.join(""));
    console.log(result);

}

solution(line);