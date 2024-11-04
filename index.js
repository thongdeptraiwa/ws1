//slide
var anh2 = [];
var index = 0;

// function check_index(x){
//     switch(x){
//         case 0:{
//             document.querySelector("#img_baner").src = "./image/trangWeb0.jpeg";
//             break;
//         }
//         case 1:{
//             document.querySelector("#img_baner").src = "./image/trangWeb1.jpeg";
//             break;
//         }
//         case 2:{
//             document.querySelector("#img_baner").src = "./image/trangWeb2.jpeg";
//             break;
//         }
//         case 3:{
//             document.querySelector("#img_baner").src = "./image/trangWeb3.jpeg";
//             break;
//         }
//         case 4:{
//             document.querySelector("#img_baner").src = "./image/trangWeb4.jpeg";
//             break;
//         }
//     };
// }
function anh0(){
    index=0;
    document.querySelector("#img_baner").src = anh2[index].src;
}
function anh1(){
    index=1;
    document.querySelector("#img_baner").src = anh2[index].src;
}
function anh2(){
    index=2;
    document.querySelector("#img_baner").src = anh2[index].src;
}
function anh3(){
    index=3;
    document.querySelector("#img_baner").src = anh2[index].src;
}
function anh4(){
    index=4;
    document.querySelector("#img_baner").src = anh2[index].src;
}
function load_img(){
    for(let i=0; i < 5; i++){
        anh2[i] = new Image();
        anh2[i].src = "./image/trangWeb"+i+".jpeg";
    }
}
// function tien_cuoi(){
//     index=anh2.length - 1;
//     document.querySelector("#anh2").src = anh2[index].src;
//     load_index();
// }
// function lui_1(){
//     if(index > 0){
//         index--;
//     }
//     document.querySelector("#anh2").src = anh2[index].src;
//     load_index();
// }
// function tien_1(){
//     if(index < anh2.length -1){
//         index++;
//     }
//     document.querySelector("#anh2").src = anh2[index].src;
//     load_index();
// }
// function load_index(){
//     document.querySelector("#index").innerHTML = (index+1)+"/"+anh2.length;
// }
setInterval(() => {
    index++;
    if(index==2){
        index++;
    }
    if(index==4){
        index=0;
    }
    document.querySelector("#img_baner").src = anh2[index].src;
}, 1000);
//hover
function hover_sp(x){
    x.style.boxShadow = "0 0 5px rgb(255, 253, 253)";
}
function out_hover_sp(x){
    x.style.boxShadow = "0 0 5px rgba(255, 253, 253, 0)";
}