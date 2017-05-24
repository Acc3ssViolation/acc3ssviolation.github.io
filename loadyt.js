window.onload = function()
{
	var frame = document.getElementById("frame");
	var links = [
		"TtHukQpboyk",			// GDO OP
		"WK2siEQsADk",			// HS AIWDIMLTY
		"AOai94e3MhE",			// HS Shoot to Thrill
		//"FD-gPBP-FLk",			// GDO End
		"sG9tKEV510s",			// Kobayashi OP
		"kgXPF3EhZNs",			// KonoSuba 2 OP
		"u9Dg-g7t2l4",			// Disturbed SOS
		//"ggWTIRGTHBI",			// KonoSuba 2 End
		"s4nWy8pmIM4",			// Barracuda
		"ZXhuso4OTG4",			// Renegade
		//"NKPOCJKBdmc",			// -I buy sausage
		"ieQ1rAIjzXc",			// I buy sausage
		"ES9vRfs2rbA",			// The Hoff
		"CBrWNbjw3RA",			// Annie
		
		
	];
	var prefix = "https://www.youtube.com/embed/"
	var postfix = "?autoplay=1"
	var randomLink = links[Math.floor(Math.random() * links.length)];
	frame.src = prefix + randomLink + postfix;
}
