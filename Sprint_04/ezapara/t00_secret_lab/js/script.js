let a = 1;
function transformation() {
    if (a == 1) {
        document.getElementById('hero').innerText = 'Hulk';
        document.getElementById('hero').style.fontSize = '130px';
        document.getElementById('hero').style.letterSpacing = '6px';
        document.getElementById('lab').style.backgroundColor = '#70964b';
        a = 2;
        return 
    }
    if (a == 2) {
        document.getElementById('hero').innerText = 'Bruce Banner';
        document.getElementById('hero').style.fontSize = '60px';
        document.getElementById('hero').style.letterSpacing = '2px';
        document.getElementById('lab').style.backgroundColor = '#ffb300';
        a = 1;
        return 
    }
}




