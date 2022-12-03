const $el = document.querySelector('.myPage-edit-container');

function Edit() {
    $el.innerHTML = `<div class="edt-nickname-container"><p>닉네임</p><input type="text" placeholder="닉네임을 입력하세요." /></div><div class="edt-id-container"><p>아이디</p><input type="text" placeholder="아이디를 입력하세요." /></div><div class="edt-pw-container"><p>비밀번호</p><input type="password" placeholder="비밀번호를 입력하세요." /></div><div class="edt-email-container"><p>이메일</p><input type="email" placeholder="이메일을 입력하세요." /></div><div class="edt-comment-container"><p>한줄소개</p><input type="text" placeholder="소개를 입력하세요." /></div><button id="editok-button" onclick="editOK()">저장</button>`
}
function editOK() {
    const $ni = document.querySelector('.edt-nickname-container');
    const $id = document.querySelector('.edt-id-container');
    const $pa = document.querySelector('.myPage-edit-container');
    const $em = document.querySelector('.myPage-edit-container');
    const $co = document.querySelector('.myPage-edit-container');

    $el.innerHTML = ``
}