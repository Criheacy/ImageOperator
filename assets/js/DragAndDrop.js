function IsDroppableTarget(obj) {
	var classNames = obj.className;
	console.log(classNames, typeof(classNames));
	classNames = classNames.split(' ');
	if (classNames.indexOf('unset') !== -1)
		return true;
	return false;
}

document.addEventListener('dragstart', (event) => {
	event.dataTransfer.setData('draggingVariableText', event.target.innerHTML);
	document.getElementsByClassName('header_panel')[0].innerHTML = '开始拖动';
	event.target;
	console.log(event.dataTransfer.getData('draggingVariableText'));
})

document.addEventListener('dragover', (event) => {
	event.preventDefault();
})

document.addEventListener('drop', (event) => {
	if (IsDroppableTarget(event.target)) {
		event.target.innerHTML = event.dataTransfer.getData('draggingVariableText');
	}
})