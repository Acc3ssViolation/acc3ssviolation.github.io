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
	shuffle(links);
	var index = 0;
	
	function getNextIndex() {
		index += 1;
		if(index >= links.length) {
			shuffle(links);
			index = 0;
		}
		return index;
	}
	
	// create youtube player
        var player;
        function onYouTubePlayerAPIReady() {
            player = new YT.Player('player', {
              width: '0',
              height: '0',
              videoId: links[0],
              events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange
              }
            });
        }
	
	function onPlayerReady(event) {
		event.target.playVideo();
	}
	
	function onPlayerStateChange(event) {
		if(event.data === 0) {
			var i = getNextIndex();
			event.target.loadVideoById(links[i], 0, "default");
		}
		else if(event.data === 5) {
			// cued
			event.target.playVideo();
		}
	}
	
	function shuffle(a) {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
	}
	
	frame.src = prefix + randomLink + postfix;
}
