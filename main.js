function changeBackgroundColor(color) 
{
	if(document.getElementsByTagName('body')[0].style.backgroundColor == 'pink'){
	document.getElementsByTagName('body')[0].style.backgroundColor = 'green';
}

	else { if(document.getElementsByTagName('body')[0].style.backgroundColor == 'green'){
		document.getElementsByTagName('body')[0].style.backgroundColor='pink';
		}
	}
}

document.getElementsByTagName('body')[0].style.backgroundColor = 'pink'