function queuePrinter(bufferSize, capacities, documents) {
    if(documents.length === 0) return 0; // 처음 들어올때 document에 아무것도 없을때 0반환.
    const workArr = [{  // 맨처음 document 인쇄작업목록(workArr)에 저장.
              size: documents.shift(), // 처번째 document 사이즈 
              count:1,  // 처음 들어와서 카운트 1 설정
            }];
    let time =1; // 총시간 

    while(workArr.length >0){ // 인쇄작업목록 아무것도 없으면 탈출    
        let currentWork = workArr[0]; // 맨처음 document
        if(currentWork.count === bufferSize) workArr.shift(); //맨처음 document.count 가 bufferSize 와 같다면 탈출.
        if(workArr.length<bufferSize && documents.length>0){// 인쇄작업목록 길이가 버퍼보다 짧고 documents에 문서가 아직 존재한다면 수행.
          let workSize = 0;
          workArr.forEach( work=> workSize+=work.size); //인쇄작업목록 안에 있는 문서들 크기 종합해서 workSize에 할당.
  
          if(workSize + documents[0]<=capacities){ // workSize 와 들어와야할 document 의 크기 합이 capacities 작다면 if문 수행
            let pushWork = {
              size: documents.shift(),
              count:0,
            }
            workArr.push(pushWork); //pushWork 인쇄작업목록에 추가.
          }
        }
        workArr.forEach((work)=>work.count++); //인쇄작업목록 안에 문서의 count 1씩 증가
        time++; // 시간 1초 증가.
    }


    return time;
  }