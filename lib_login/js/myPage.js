const $el = document.querySelector('.myPage-edit-container');

const $ni = document.querySelector('.myPage-user-nickname');
const $id = document.querySelector('.myPage-user-id');
const $co = document.querySelector('.myPage-user-comment');

function Edit() {
    $el.innerHTML = `<div class="edt-nickname-container"><p>닉네임</p><input id="edt-nickname" type="text" placeholder="닉네임을 입력하세요." /></div><div class="edt-id-container"><p>아이디</p><input id="edt-id" type="text" placeholder="아이디를 입력하세요." /></div><div class="edt-pw-container"><p>비밀번호</p><input id="edt-pw" type="password" placeholder="비밀번호를 입력하세요." /></div><div class="edt-email-container"><p>이메일</p><input id="edt-email" type="email" placeholder="이메일을 입력하세요." /></div><div class="edt-comment-container"><p>한줄소개</p><input id="edt-comment" type="text" placeholder="소개를 입력하세요." /></div><button id="editok-button" onclick="editOK()">저장</button>`
}
function editOK() {
    var nv = document.getElementById('edt-nickname').value;
    var iv = document.getElementById('edt-id').value;
    var cv = document.getElementById('edt-comment').value;

    if(nv != ""){
        $ni.innerHTML = nv
    }
    else {
        $ni.innerHTML = `펫모리`
    }

    if(iv != ""){
        $id.innerHTML = `#${iv}`
    }
    else {
        $id.innerHTML = `#PetMory`
    }
    
    if(cv != ""){
        $co.innerHTML = cv
    }
    else {
        $co.innerHTML = `comment`
    }

    $el.innerHTML = ``
}