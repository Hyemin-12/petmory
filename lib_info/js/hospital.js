// AJAX(Asynchronous JavaScript And XML)로 url 호출하기
const getNameByAPI = (url) => {
    // XMLHttpRequest 만들기
    let xhr = new XMLHttpRequest();
    
    // callback
    xhr.onreadystatechange = () => {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            // sucess
            // console.log("성공!");
            console.log(xhr.response);
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
    addContent.classList.add("box")
    for (let i = count; i < 30; i++) {
        if (json["LOCALDATA_020301"]["row"][i]["TRDSTATENM"] === "영업/정상") {
            addContent.innerHTML = json["LOCALDATA_020301"]["row"][i]["BPLCNM"];
            document.querySelector('#animal-hospital-page').appendChild(addContent);
            count++;
            break;
        } else {
            count++;
            break;
        }
    }
}

const KEY = "4a484c627368796534315173486349";
const url = `http://openapi.seoul.go.kr:8088/${KEY}/json/LOCALDATA_020301/1/30/`;
console.log(url);

window.onscroll = function(e) {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { 
        setTimeout(function(){
            getNameByAPI(url);
        }, 1000)  
    }
}