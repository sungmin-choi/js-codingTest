
// 백준용
const filePath = require("fs").readFileSync('/dev/stdin', "utf8");

//const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/js코딩테스트/boj2482주사위네개/input.txt', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
const N = +input[0];
input.shift();
input = input.map((ele)=>ele.split(' '));

function solution(N,input){
    let answer = 0;
    let arr=[]
    for(let item of input){
        arr.push(item.map((ele)=>+ele));
    }
    for(let item of arr){
        let cash=0;
        let count =0;
        let qube = [0,0,0,0,0,0,0];
        for(let i=0;i<item.length;i++){
            if(qube[item[i]]===0)count +=1;
            qube[item[i]] +=1;
        }
        let index;
        switch(count){
            case 1:
                 index = qube.indexOf(4);
                cash = 50000+(index*5000);
                break;
            case 2:
                if(qube.indexOf(3)!==-1){
                     index = qube.indexOf(3);
                    cash = 10000+(index*1000);
                }else{
                    cash +=2000;
                    for(let i=1;i<qube.length;i++){
                        if(qube[i]===2){
                            cash +=i*500;
                        }
                    }
                }
                break;
            case 3:
                 index = qube.indexOf(2);
                cash = 1000+(index*100);
                break;
            case 4:
                 index = qube.lastIndexOf(1);
                cash = index*100;
                break;
                
        }
        answer = answer<cash? cash:answer;
    }

    console.log(answer);

}

solution(N,input);