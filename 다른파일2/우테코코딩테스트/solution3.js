function getIngredient(ings){
    let ingredient={};
    ings.forEach(ing=>{
        const [ele,price]=ing.split(' ');
        ingredient[ele]=+price;
    })
    return ingredient;
}
function getMenu(menu,ingredient){
    let _menu={};
    menu.forEach(menuInfo=>{
        let menuPrice=0;
        const [title,ings,sellPrice]=menuInfo.split(' ');
        for(let i=0;i<ings.length;i++){
            menuPrice+=ingredient[ings[i]];
        }
        _menu[title]=[menuPrice,+sellPrice];
    })
    return _menu;
}

function getSell(Nmenu,sell){
    let sellTotal=0;
    let costTotal=0;
    sell.forEach(menuInfo=>{
        const [title,count]=menuInfo.split(' ');
        sellTotal+=Nmenu[title][1]*count;
        costTotal+=Nmenu[title][0]*count;
    })
    return sellTotal-costTotal;

}

function solution(ings, menu, sell) {
    const ingredient=getIngredient(ings);
    const _menu=getMenu(menu,ingredient);
    return getSell(_menu,sell);
}