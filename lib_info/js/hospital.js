
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

const show = (jsonString) => {
    // jsonString -> JSON
    let json = JSON.parse(jsonString); // JSON.stringify() : JSON -> String
    console.log(json["LOCALDATA_020301"]["list_total_count"])
    for (let i = 0; i < json["LOCALDATA_020301"]["list_total_count"]; i++) {
        if (json["LOCALDATA_020301"]["row"][i]["TRDSTATENM"] === "영업/정상") {
            console.log(json["LOCALDATA_020301"]["row"][i]["BPLCNM"])
        }
    }
}

const KEY = "4a484c627368796534315173486349";
let url = `http://openapi.seoul.go.kr:8088/${KEY}/json/LOCALDATA_020301/1/100/`;
console.log(url);
getNameByAPI(url);