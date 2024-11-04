//mau mặc định
var mau='den';
//item
const key_items = "items";
var items = new Array();
var dungLuong_n,mau_n,gia_n;

function img1(){
    if(mau=='den'){
        document.querySelector('.image').src = '../ASM/image/ip11_den1.webp';
    }
    if(mau=='trang'){
        document.querySelector('.image').src = '../ASM/image/ip11_trang1.webp';
    }
    if(mau=='tim'){
        document.querySelector('.image').src = '../ASM/image/ip11_tim1.webp';
    }
}
function img2(){
    if(mau=='den'){
        document.querySelector('.image').src = '../ASM/image/ip11_den2.webp';
    }
    if(mau=='trang'){
        document.querySelector('.image').src = '../ASM/image/ip11_trang2.webp';
    }
    if(mau=='tim'){
        document.querySelector('.image').src = '../ASM/image/ip11_tim2.webp';
    }
}
function img3(){
    if(mau=='den'){
        document.querySelector('.image').src = '../ASM/image/ip11_den3.webp';
    }
    if(mau=='trang'){
        document.querySelector('.image').src = '../ASM/image/ip11_trang3.webp';
    }
    if(mau=='tim'){
        document.querySelector('.image').src = '../ASM/image/ip11_tim3.webp';
    }
    mau(button)
}
function mau_den(button){
    mau= 'den';
    //img to
    document.querySelector('.image').src = '../ASM/image/ip11_den1.webp';
    //3 img nhỏ
    document.querySelector('#imgNho1').src = '../ASM/image/ip11_den1.webp';
    document.querySelector('#imgNho2').src = '../ASM/image/ip11_den2.webp';
    document.querySelector('#imgNho3').src = '../ASM/image/ip11_den3.webp';
    onclick_mau(button);
}
function mau_trang(button){
    mau= 'trang';
    //img to
    document.querySelector('.image').src = '../ASM/image/ip11_trang1.webp';
    //3 img nhỏ
    document.querySelector('#imgNho1').src = '../ASM/image/ip11_trang1.webp';
    document.querySelector('#imgNho2').src = '../ASM/image/ip11_trang2.webp';
    document.querySelector('#imgNho3').src = '../ASM/image/ip11_trang3.webp';
    onclick_mau(button);
}
function mau_tim(button){
    mau= 'tim';
    //img to
    document.querySelector('.image').src = '../ASM/image/ip11_tim1.webp';
    //3 img nhỏ
    document.querySelector('#imgNho1').src = '../ASM/image/ip11_tim1.webp';
    document.querySelector('#imgNho2').src = '../ASM/image/ip11_tim2.webp';
    document.querySelector('#imgNho3').src = '../ASM/image/ip11_tim3.webp';
    onclick_mau(button);
}
function dung_luong(button){
    //console.log(button);
    //đổi màu lại các btn
    document.querySelectorAll('.btn_dungLuong').forEach(function(course){
        course.style.borderColor = '#3b99e000';
    });
    //đổi màu viền btn đc chọn
    button.style.borderColor = '#3b99e0';
    //lấy text của btn
    dungLuong_n = button.innerHTML;
    if(dungLuong_n == "128GB"){
        gia_n = 10690000;
    }else if(dungLuong_n == "256GB"){
        gia_n = 11690000;
    }else if(dungLuong_n == "512GB"){
        gia_n = 12690000;
    }else{
        gia_n = 13690000;
    }
    document.querySelector("#item_gia").innerHTML = gia_n;
    //console.log(item.dungLuong);
}
function onclick_mau(button){
    //console.log(button);
    //đổi màu lại các btn
    document.querySelectorAll('.btn_mau').forEach(function(course){
        course.style.borderColor = '#3b99e000';
    });
    //đổi màu viền btn đc chọn
    button.style.borderColor = '#3b99e0';
    //lấy data-mau
    mau_n = button.getAttribute("data-mau");
    //console.log(item.mau);
}
function them_vao_gio_hang(){
   
    //check
    if(dungLuong_n == null){
        //alert("bạn chưa chọn dung lượng!");
        document.querySelector("#text_thongbao").innerHTML = "Bạn chưa chọn dung lượng";
        return;
    }
    if(mau_n == null){
        //alert("bạn chưa chọn màu!");
        document.querySelector("#text_thongbao").innerHTML = "Bạn chưa chọn màu!";
        return;
    }
    //thành công
    //alert("thêm thành công"); 
    document.querySelector("#text_thongbao").innerHTML = "Thêm thành công vào giỏ hành";
    let item = {
        img: '',
        ten: '',
        dungLuong: dungLuong_n,
        mau: mau_n,
        gia: gia_n,
        cbox: false,
        soLuong: '1',
        tongGia: ''
    };
    item.img = document.querySelector('#imgNho1').src;
    item.ten = document.querySelector("#item_name").innerHTML; 
    //item.gia = document.querySelector("#item_gia").getAttribute("data-gia");
    item.tongGia = item.gia * 1;

    items.push(item);

    //lưu vào localStorage
    localStorage.setItem(key_items,JSON.stringify(items));
    let data = JSON.parse(localStorage.getItem(key_items));
    console.log(data);
    
}