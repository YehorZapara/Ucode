let stones = document.querySelectorAll('.stone');

let offsetX;
let offsetY;

for (let elem of stones) {
	elem.addEventListener('click', clickStone);
}

function clickStone() {

	this.classList.toggle('active');
	if(this.hasAttribute('draggable')) {
		this.removeEventListener('dragend', dragStone);
		this.removeEventListener('dragstart', dragStoneStart);
		this.removeAttribute('draggable');
	} else {
		this.addEventListener('dragend', dragStone);
		this.addEventListener('dragstart', dragStoneStart);
		this.draggable ='true';
	}
	
}

function dragStone(e) {
	this.style.top = (e.pageY - offsetY) + 'px' ;
	this.style.left = (e.pageX - offsetX) + 'px';
}

function dragStoneStart(e) {
	offsetX = e.offsetX;
	offsetY = e.offsetY;
}