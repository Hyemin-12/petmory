window.onload = () => {
    const selected = document.getElementById('category');
    if (selected) selected.onchange = selectedOnChange;
}

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