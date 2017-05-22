window.onload = function()
{
	var frame = document.getElementById("frame");
	var links = [
		"TtHukQpboyk",
		"WK2siEQsADk",
		"AOai94e3MhE",
		"FD-gPBP-FLk",
		"sG9tKEV510s",
		"kgXPF3EhZNs"
	];
	var prefix = "https://www.youtube.com/embed/"
	var postfix = "?autoplay=1"
	var randomLink = links[Math.floor(Math.random() * links.length)];
	frame.src = prefix + randomLink + postfix;
}
