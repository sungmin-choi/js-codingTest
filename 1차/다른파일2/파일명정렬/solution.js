let files=["img12.png","img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"];

function transFormFile(file){
    let number="";
    let head="";
    for(let i=0;i<file.length;i++){
        if(isNaN(file[i]) || file[i]===' '){
            head+=file[i];
        }else{
            let count=0;
            while(!isNaN(file[i]) && count<5){
                count++;
                number+=file[i];
                i++;
            }
            break;
        }
    }
    return [head,number];    
}
function transformFiles(files){
    let _files=[];
    files.forEach((file,index)=>{
        const [head,number] = transFormFile(file);
        _files.push([head.toLowerCase(),+number,index]);
    });
    return _files;
}

function filesSort(files){
    let _files=files.sort((a,b)=>{
        if(a[0]===b[0]){
            if(a[1]===b[1]){
                return a[2]-b[2];
            }
            return a[1]-b[1];
        }
            if(a[0]>b[0])return 1;
            else return -1;
    })
    return _files;
}

function solution(files) {
    let answer = [];
    let _files=transformFiles(files);
    console.log(_files);
    _files=filesSort(_files);
    console.log(_files);
    _files.forEach(_file=>{
        answer.push(files[_file[2]]);
    })
    return answer;
}
console.log(solution(files));


