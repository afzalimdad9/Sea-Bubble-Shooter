(function(d, params) {
	// set params
	(function(regex, qs, tokens) {
		regex = /[?&]?([^=]+)=([^&]*)/g;
		qs = d.location && d.location.search ? d.location.search.split('+').join(' ') : '';

		while ((tokens = regex.exec(qs))) {
			params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
		}
	})();

	if (typeof fg_api == "function" && typeof famobi != "undefined" && famobi instanceof fg_api) {
		// famobi api already loaded
		return false;
	}

	// load script
	(function (d, url, fgJS, firstJS) {
		fgJS = d.createElement('script');
		firstJS = d.getElementsByTagName('script')[0];
		fgJS.src = url+"?_location="+encodeURIComponent(d.location.href.split('#')[0]);
		firstJS.parentNode.insertBefore(fgJS, firstJS);
	})(d, '/assets/js/gameapi/script.js');
})(document, {});