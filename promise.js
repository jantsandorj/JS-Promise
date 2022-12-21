// huvtsasaa umsuh 
// oroo huraah 
// nuuree shudee ugaah 
// breakfast
// go somewhere

//  function wearClothes(){
//     return new Promise((res,rej) =>{
//         setTimeout(() => {
//             res("Huvtsasaa umschihluu")
//         }, 1000)
//     })
//  }

//  function ismakeBed(ismakeBed){
//     return new Promise((res,rej) =>{
//         setTimeout(() => {
//             ismakeBed ? res("oroo huraasan ajil butemjtei") : rej("ajil butehgui shuu")
//         }, 1000)
//     })
//  }

//  function washteeth(min){
//     return new Promise((res,rej) =>{
//         setTimeout(() => {
//             min>1 ? res("sain ugaasan bn"): rej("haltuurdchihlaa")
//         }, 1000)
//     })
//  }
 
//  function breakfast(iseat){
//     return new Promise((res,rej) =>{
//         setTimeout(() => {
//             iseat ? res("tarhi chini sn ajillana") : rej("ulsuud anhaaral chini sul bn")
//         }, 1000)
//     })
//  }
//  function walk(meter){
//     return new Promise((res,rej) =>{
//         setTimeout(() => {
//             meter>500 ? res("Tsusan hangamj bolon hool bolovsruulah ajillagaa saijirlaa") : rej("Darhlaanii togtoltsoo sularna")
//         }, 1000)
//     })
//  }
//  wearClothes()
//     .then((res) => {
//         console.log(res)
//         return ismakeBed(true)
//     })
//     .then((res) => { 
//         console.log(res)
//         return washteeth(1)})
//     .then((res) => { 
//         console.log(res)
//         return breakfast(false)})
//     .then((res) => { 
//         console.log(res)
//         return walk(600)})
//     .then((res) => {
//         console.log(res)})
//     .catch((rej) => {
//         console.log(rej)})
//     .finally(()=>{
//         console.log("done")})

   
// async function morning (){
//     let result;
//     try {
//         result = await wearClothes()
//     console.log(result)
//     result = await ismakeBed(true)
//     console.log(result);
//     result = await washteeth(1)
//     console.log(result);
//     result = await breakfast(false)
//     console.log(result);
//     result = await walk(600)
//     console.log(result);}
//     catch {
//         let err = (rej) => {console.log(rej)};
//     }
//     finally {
//         let fin = console.log("done");
//     }
// }
// morning()


let products = [
    { productId: 1, productName: "Цүнх", shop_id: 1, category: 3 },
    { productId: 2, productName: "Гутал", shop_id: 2, category: 1 },
    { productId: 3, productName: "Хар цамц", shop_id: 1, category: 1 },
    { productId: 4, productName: "Будаа агшаагч", shop_id: 1, category: 2 },
    { productId: 5, productName: "Хутга", shop_id: 2, category: 2 },
    { productId: 6, productName: "Аяга", shop_id: 1, category: 2 },
  ];
  
  let shops = [
    { id: 1, name: "Номин" },
    { id: 2, name: "Улаанбаатар" },
    { id: 3, name: "Сансар" },
  ];
  
  // Эхлээд тухайн нэг барааны мэдээлэл харуулах
  // Сонгосон барааны дэлгүүрийн мэдээллийг харуулах
  // Тухайн дэлгүүрээс нэг ангилалд байгаа бусад барааг харуулах
  //category - Хувцас -1, Гэр ахуйн бараа -2, Хэрэглээ - 3
   
function findProduct(id){
    let prom = new Promise((resolve, reject) => {
        for (let i = 0; i < products.length; i++) {
            if ( id == products[i].productId) {
                resolve(console.log(products[i]))
            } else{
                reject("Not found a product")
            }
        }
    })
    return prom
}

function findshop() {
    let prom = new Promise((resolve, reject) => {
        for (let i = 0; i < shops.length; i++) {
            shopid = products[i].shop_id
            if (shopid == shops[i].id ) {
                resolve(console.log(shops[i].name))
            }
        }
    })
    return prom
}
function findCat(cat) {
    for (let i = 0; i < products.length; i++) {
        cat = products[i].category
        if ( shopid = products[i].shop_id) {
            let result = console.log(products[i]);
        }
    }
}
findProduct(1)