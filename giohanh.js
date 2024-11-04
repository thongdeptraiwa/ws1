const key_items = "items";
var items = new Array();
var giamGia=1;

function onclick_tang_sl(x){
    //tăng sl
    var goc = items[x].soLuong *1;
    items[x].soLuong = goc +1;

    //tính tổng gia item
    tong_gia_sp(x)
}
function onclick_giam_sl(x){
    //tăng sl
    var goc = items[x].soLuong *1;
    if(goc != 1){
        items[x].soLuong = goc -1;
    }
    
    //tính tổng gia item
    tong_gia_sp(x) 
}
function tong_gia_sp(x){
    items[x].tongGia = items[x].gia * items[x].soLuong;
    // chuyền qua localStorage
    localStorage.setItem(key_items,JSON.stringify(items));
    //load lại trang
    load_items();
}
function check_cbox(x,i){
    if(x.checked){
        items[i].cbox = true;
    }else{
        items[i].cbox = false;
    }
    // chuyền qua localStorage
    localStorage.setItem(key_items,JSON.stringify(items));
    //load lại trang
    load_items();
}
function check_giam_gia(){
    var code = document.querySelector('#code_giam_gia').value;
    if(code === '1234'){
        alert("giảm giá 40%");
        giamGia=0.6;
        //load lại trang
        load_items()
        return;
    }
    if(code === '12345'){
        alert("giảm giá 50%");
        giamGia=0.5;
        //load lại trang
        load_items()
        return;
    }
    alert("Nhập sai code giảm giá!");
    giamGia=1;
    //load lại trang
    load_items()
}
function xoa_item(x){
    //xoa item thứ i
    items.splice(x,1);//tại vị trí thứ x - xóa 1 phần tử
    // chuyền qua localStorage
    localStorage.setItem(key_items,JSON.stringify(items));
    //load lại trang
    load_items();
}

function load_items(){
    
    //lấy data
    if(items[0] == null){
        //lấy gắn value localStorage vào item[]
        let data = JSON.parse(localStorage.getItem(key_items));
        items=data;
        console.log(items);
    }
    //check trùng item
    for(let i=0; i<items.length; i++){
        if((i+1) < items.length){
            if(items[i].img == items[i+1].img && items[i].dungLuong == items[i+1].dungLuong && items[i].mau == items[i+1].mau){
                let tam= (items[i].soLuong *1 +1);
                items[i].soLuong = tam;     
                items.splice(i+1,1);
            }
        }
    }
     // chuyền qua localStorage
     localStorage.setItem(key_items,JSON.stringify(items));
    
    var kq='';
    var tong_gia_items=0;

    for(let i=0; i<items.length; i++){
        ///check cbox
        let checkbox='';
        if(items[i].cbox === true){
            //checkbox tự true
            checkbox = 'checked="true"';
            //tổng gia items
            tong_gia_items+=items[i].tongGia *1;
        }else{
            checkbox = '';
        }

        kq+=`<tr>
                <td><input type="checkbox" class="cbox_sp" onclick="check_cbox(this,${i})" ${checkbox}></td>
                <td><img class="img_sp_giohang" src="${items[i].img}" alt="" width="150px" height="150px"></td>
                <td>
                    <p class="ten_sp">${items[i].ten}</p>
                    <p>Dung Lượng: ${items[i].dungLuong}</p>
                    <p>Màu: ${items[i].mau}</p>
                    <p>Giá: <span>${items[i].gia}</span></p>
                </td>
                <td>
                    <div class="div_sl_tong">
                        <label class="sl">${items[i].soLuong}</label>
                        <div class="tang_giam_sl">
                            <img src="./image/icon_up.png" alt="" onclick="onclick_tang_sl(${i})">
                            <img src="./image/icon_down.png" alt="" onclick="onclick_giam_sl(${i})">
                        </div>
                    </div>
                </td>
                <td>                    
                    <p id="tong_gia_sp" class="tong_gia">${items[i].tongGia}</p>
                </td>
                <td>
                    <button id="btn_x" onclick="xoa_item(${i})">x</button>
                </td>
            </tr>`;
    };
    //xuất items
    document.querySelector("#tbl_items").innerHTML = kq;
    //xuất tổng tiền items
    document.querySelector("#tong_tien_cac_sp").innerHTML = tong_gia_items+"đ";
    //xuất tổng hóa đơn
    document.querySelector("#tong_cong").innerHTML = tong_gia_items*giamGia+"đ";
}
