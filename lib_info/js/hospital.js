// AJAX(Asynchronous JavaScript And XML)로 url 호출하기
const getNameByAPI = (url) => {
    // XMLHttpRequest 만들기
    let xhr = new XMLHttpRequest();
    
    // callback
    xhr.onreadystatechange = () => {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            // sucess
            // console.log("성공!");
            show(xhr.response);
        } else {
            // fail
        }
    }
    
    // 요청을 보낼 방식, url, 비동기여부 설정하기
    xhr.open("GET", url, true);
    
    // 요청 전송하기
    xhr.send();
}

var count = 4;
const show = (jsonString) => {
    // jsonString -> JSON
    let json = JSON.parse(jsonString); // JSON.stringify() : JSON -> String
    var addContent = document.createElement("div");
    addContent.classList.add("box");
    var hName = document.createElement("div");
    hName.classList.add("hospital-name");
    var hLoc = document.createElement("div");
    hLoc.classList.add("hospital-loc");
    var hTel = document.createElement("div");
    hTel.classList.add("hospital-tel");
    for (let i = count; i < 50; i++) {
        if (json["Animalhosptl"][1]["row"][i]["BSN_STATE_NM"] === "정상" && json["Animalhosptl"][1]["row"][i]["LOCPLC_FACLT_TELNO"] != null) {
            hName.innerHTML = `<i class='bx bx-plus-medical'></i> ${json["Animalhosptl"][1]["row"][i]["BIZPLC_NM"]}`;
            addContent.appendChild(hName);
            hLoc.innerHTML = `<i class='bx bxs-map'></i> ${json["Animalhosptl"][1]["row"][i]["REFINE_ROADNM_ADDR"]}`;
            addContent.appendChild(hLoc);
            hTel.innerHTML = `<i class='bx bxs-phone'></i> ${json["Animalhosptl"][1]["row"][i]["LOCPLC_FACLT_TELNO"]}`;
            addContent.appendChild(hTel);
            document.querySelector('#animal-hospital-page').appendChild(addContent);
            count++;
            break;
        } else {
            count++;
        }
    }
}

const KEY = "935467f751a8405990b7aa3e5750f7c6";
const url = `https://openapi.gg.go.kr/Animalhosptl?KEY=${KEY}&Type=json`;
console.log(url);

window.onscroll = function(e) {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { 
        setTimeout(function(){
            getNameByAPI(url);
            getNameByAPI(url);
        }, 1000)  
    }
}