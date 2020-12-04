window.onload = function() {
	var clickCount = -1;




	var libtn = document.getElementsByClassName("content_Click");
	for (let i = 0; i < libtn.length; i++) {
		libtn[i].onclick = function() {
			clickCount--;
			console.log(clickCount)
		}
	}

	var cancelBtn = document.getElementById("cancelBtn");
	cancelBtn.onclick = function() {
		console.log(clickCount);
		window.history.go(clickCount);
		clickCount = -1;
	}



	var topBtn = document.getElementById("topBtn");
	topBtn.onclick = function() {
		window.scrollTo(0, 0);
		clickCount--;
	}
	var bottonBtn = document.getElementById("bottonBtn");
	bottonBtn.onclick = function() {
		window.scrollTo(0, document.body.scrollHeight);
		clickCount--;
	}

}
