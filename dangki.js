const key_user = "user";
var users = new Array();
function check_dangki(){
    var fullname = document.querySelector("#fullname");
    var username = document.querySelector("#username");
    var pass1 = document.querySelector("#pass1");
    var pass2 = document.querySelector("#pass2");
    var email = document.querySelector("#email");
    var sdt = document.querySelector("#sdt");

    //check fullname
    if(fullname.value == ""){
        document.querySelector("#thongbao_fullname").innerHTML = "Bạn chưa nhập họ và tên!";
        fullname.focus();
        return;
    }else{
        //thành công
        document.querySelector("#thongbao_fullname").innerHTML = "";
    }
    //username
    if(username.value != ""){
        if(username.value.length < 5){
            document.querySelector("#thongbao_username").innerHTML = "Tài khoản phải trên 5 kí tự!";
            username.focus();
            return;
        }
        //thành công
        document.querySelector("#thongbao_username").innerHTML = "";

    }else{
        document.querySelector("#thongbao_username").innerHTML = "Bạn chưa nhập tài khoản!";
        username.focus();
        return;
    }
    //check mật khẩu pass1
    if(pass1.value != ""){
        if(pass1.value.length < 5){
            document.querySelector("#thongbao_pass1").innerHTML = "Mật khẩu phải trên 5 kí tự!";
            pass1.focus();
            return;
        }
        //thành công
        document.querySelector("#thongbao_pass1").innerHTML = "";

    }else{
        document.querySelector("#thongbao_pass1").innerHTML = "Bạn chưa nhập Mật khẩu!";
        pass1.focus();
        return;
    }
    //check mật khẩu pass2
    if(pass1.value != pass2.value){
        if(pass2.value == ""){
            document.querySelector("#thongbao_pass2").innerHTML = "Bạn chưa nhập xác nhận mật khẩu!";
            pass2.focus();
            return;
        }
        document.querySelector("#thongbao_pass2").innerHTML = "Xác nhận lại mật khẩu sai!";
        pass2.focus();
        return;
    }else{
        //thành công
        document.querySelector("#thongbao_pass2").innerHTML = "";
    }
    //check email
    if(email.value == ""){
        document.querySelector("#thongbao_email").innerHTML = "Bạn chưa nhập email!";
        email.focus();
        return;
    }else{
        let flat = false;
        for(let i=0; i<email.value.length; i++){
            if(email.value[i] == "@"){
                flat = true;
                break;
            }
        }
        if(flat == false){
            document.querySelector("#thongbao_email").innerHTML = "Bạn nhập sai định dạng email!";
            email.focus();
            return;
        }
        //thành công
        document.querySelector("#thongbao_email").innerHTML = "";
    }
    //đăng kí thành công
    alert("Đăng kí thành công");
    //lấy gắn value localStorage vào item[]
    try{
        let getData = JSON.parse(localStorage.getItem(key_user));
        users=getData;
        console.log(users);
    }catch{

    }
    //thêm user
    let user = {
        taiKhoan: "",
        matKhau: ""
    };
    user.taiKhoan = username.value;
    user.matKhau = pass1.value;

    users.push(user);
    //lưu vào localStorage
    localStorage.setItem(key_user,JSON.stringify(users));
    let setData = JSON.parse(localStorage.getItem(key_user));
    console.log(setData);
}
function check_fullname(x){

    if(x.value.length < 5){
        document.querySelector("#thongbao_fullname").innerHTML = "Họ và tên phải trên 5 kí t!";
        x.focus();
        return;
    }else{
        //thành công
        document.querySelector("#thongbao_fullname").innerHTML = "";
    }
    
}
function check_username(x){

    //username
    if(x.value != ""){
        if(username.value.length < 5){
            document.querySelector("#thongbao_username").innerHTML = "Tài khoản phải trên 5 kí tự!";
            x.focus();
            return;
        }
        //thành công
        document.querySelector("#thongbao_username").innerHTML = "";

    }else{
        document.querySelector("#thongbao_username").innerHTML = "Bạn chưa nhập tài khoản!";
        x.focus();
        return;
    }
    
}
function check_pass1(x){

    //check mật khẩu pass1
    if(x.value != ""){
        if(x.value.length < 5){
            document.querySelector("#thongbao_pass1").innerHTML = "Mật khẩu phải trên 5 kí tự!";
            x.focus();
            return;
        }
        //thành công
        document.querySelector("#thongbao_pass1").innerHTML = "";

    }else{
        document.querySelector("#thongbao_pass1").innerHTML = "Bạn chưa nhập Mật khẩu!";
        x.focus();
        return;
    }
    
}
function check_pass2(x){

    var pass1 = document.querySelector("#pass1");

    //check mật khẩu pass2
    if(x.value != pass1.value){
        if(x.value == ""){
            document.querySelector("#thongbao_pass2").innerHTML = "Bạn chưa nhập xác nhận mật khẩu!";
            x.focus();
            return;
        }
        document.querySelector("#thongbao_pass2").innerHTML = "Xác nhận lại mật khẩu sai!";
        x.focus();
        return;
    }else{
        //thành công
        document.querySelector("#thongbao_pass2").innerHTML = "";
    }
    
}
function check_email(x){

    //check email
    if(x.value == ""){
        document.querySelector("#thongbao_email").innerHTML = "Bạn chưa nhập email!";
        x.focus();
        return;
    }else{
        let flat = false;
        for(let i=0; i<email.value.length; i++){
            if(email.value[i] == "@" 
            && email.value[i+1] == "g" 
            && email.value[i+2] == "m" 
            && email.value[i+3] == "a" 
            && email.value[i+4] == "i" 
            && email.value[i+5] == "l" 
            && email.value[i+6] == "."
            && email.value[i+7] == "c" 
            && email.value[i+8] == "o"
            && email.value[i+9] == "m"){
                flat = true;
                break;
            }
        }
        if(flat == false){
            document.querySelector("#thongbao_email").innerHTML = "Bạn nhập sai định dạng email!";
            x.focus();
            return;
        }
        //thành công
        document.querySelector("#thongbao_email").innerHTML = "";
    }
    
}