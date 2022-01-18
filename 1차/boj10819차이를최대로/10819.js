//const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
//const fs = require('fs');
//const filePath = process.platform ==='linux' ? '/dev/stdin' : 'C:/Users/USER/Desktop/js코딩테스트/boj2468/input.txt';

// 백준용
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");

const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/js코딩테스트/boj10819차이를최대로/input.txt', "utf8");
let input = filePath.trim().split("\n");

N= input[0];
input.shift();
input = input +'';
input = input.split(' ').map((Element)=>+Element);




