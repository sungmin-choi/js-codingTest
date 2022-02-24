const LPS = function (str) {
    let left =0;
    let right = str.length-1;
    let count =0;
    let leftWord = '';
    let rightWord= '';
    while(left<right){
        if(leftWord === rightWord){
            count = leftWord.length
        }
        leftWord=leftWord+str[left];
        rightWord=str[right]+rightWord;
        left++;
        right--;
    }
    if(leftWord === rightWord){
        count = leftWord.length
    }
    return count;
};

output = LPS('aaaa');
console.log(output); // --> 2