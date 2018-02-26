function positionBtn(obj, btn) {

	var absCoords = obj.aCoords;

	btn.style.left = (absCoords.left - btnWidth / 2) + 'px';
	btn.style.top = (absCoords.top - btnHeight / 2) + 'px';
}

