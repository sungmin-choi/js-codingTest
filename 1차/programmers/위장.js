let clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];

let clothesMap=new Map();
for(let i=0;i<clothes.length;i++){
    if(clothesMap.get(clothes[1])===undefined){
        let item=[];
        clothesMap.set(clothes[1],item.push(clothes[0]));

    }
}