window.onload = () => {
    const selected = document.getElementById('category');
    if (selected) selected.onchange = selectedOnChange;

    const openInfo = document.getElementById('open-info');
    if (openInfo) openInfo.onclick = openInfoPopup;
    
    const closeInfo = document.getElementById('close-info');
    if (closeInfo) closeInfo.onclick = closeInfoPopup;
}

// 카테고리 변경 시 페이지 띄우는 함수
const selectedOnChange = () => {
    const option = document.getElementById('category').options[document.getElementById('category').selectedIndex].value

    if (option === "Pet Show" ) {
        document.getElementById('pet-show-page').style.display = 'block';
        document.getElementById('animal-hospital-page').style.display = 'none';
        document.getElementById('abandoned-animal-page').style.display = 'none';
    } else if (option === "Animal Hospital") {
        document.getElementById('pet-show-page').style.display = 'none';
        document.getElementById('animal-hospital-page').style.display = 'block';
        document.getElementById('abandoned-animal-page').style.display = 'none';
    } else if (option === "Abandoned Animal") {
        document.getElementById('pet-show-page').style.display = 'none';
        document.getElementById('animal-hospital-page').style.display = 'none';
        document.getElementById('abandoned-animal-page').style.display = 'block';
    }
}

// 포스트 클릭 시 팝업 띄우는 함수
const openInfoPopup = () => {
    document.getElementById('pet-show-info').style.display = 'block';
}

// 팝업에서 X 클릭 시 창 닫히는 함수
const closeInfoPopup = () => {
    document.getElementById('pet-show-info').style.display = 'none';
}