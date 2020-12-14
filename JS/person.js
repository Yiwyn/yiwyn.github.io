window.onload = function() {
	var gerenpanel = document.getElementById("content1");
	var gongzuojingPanel = document.getElementById("content2");

	var geren = document.getElementById("geren");
	var jingli = document.getElementById("jingli");

	var profile_card = document.getElementsByClassName("profile-card")[0];

	var open = false;
	window.onmousedown = function() {
		if (open) {
			gerenpanel.style.opacity = 1;
			gongzuojingPanel.style.opacity = 0;
			document.body.bgColor = "#282828"
			profile_card.style.backgroundColor = "#f4f4f4"
			open = false;
		} else {
			gerenpanel.style.opacity = 0;
			gongzuojingPanel.style.opacity = 1;
			document.body.bgColor = "#f4f4f4"
			profile_card.style.backgroundColor = "#282828"
			open = true;
		}
	}



}
