const key_user = "user";
var users = new Array();

if(users[0] == null){
    //lấy gắn value localStorage vào item[]
    let data = JSON.parse(localStorage.getItem(key_user));
    users=data;
    //console.log(users);
}
function check_dangnhap(){

    // var username = document.querySelector("#username");
    // var pass = document.querySelector("#pass");

    // let check_taikhoan = false;

    // for(let i=0; i<users.length; i++){
        
    //     //thanh cong
    //     if(username.value == users[i].taiKhoan && pass.value == users[i].matKhau){
    //         document.querySelector("#thongbao_dangnhap_taikhoai").innerHTML = "";
    //         document.querySelector("#thongbao_dangnhap_matkhau").innerHTML = "";
    //         //qua trang chủ
    //         window.location.href = "./index.html";
    //         return;
    //     }
    //     //tìm taid khoản
    //     if(username.value == users[i].taiKhoan){
    //         check_taikhoan = true;
    //         return;
    //     }

    // }
    let a = check_taikhoan();
    console.log(a);
    if(a == 1){
        //qua trang chủ
        document.querySelector("#thongbao_dangnhap_taikhoai").innerHTML = "";
        document.querySelector("#thongbao_dangnhap_matkhau").innerHTML = "";
        window.location.href = "./index.html";
        return;
        
    }else if(a == 3){
        document.querySelector("#thongbao_dangnhap_taikhoai").innerHTML = "Tài khoản không tồn tại!";
    }else{
        document.querySelector("#thongbao_dangnhap_taikhoai").innerHTML = "";
        document.querySelector("#thongbao_dangnhap_matkhau").innerHTML = "Sai mật khẩu!";
    }
    
    
}
function check_taikhoan(){

    for(let i=0; i<users.length; i++){
        
        //thanh cong
        if(username.value == users[i].taiKhoan && pass.value == users[i].matKhau){
            document.querySelector("#thongbao_dangnhap_taikhoai").innerHTML = "";
            document.querySelector("#thongbao_dangnhap_matkhau").innerHTML = "";
            return 1;
        }
        //tìm taid khoản
        if(username.value == users[i].taiKhoan){
            return 2;
        }

    }
    return 3;
}

  