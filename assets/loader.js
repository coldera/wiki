(function() {
var core = {

	load: function(urls, callback) {
		if(urls.length) {
	        var src = urls.shift(),
	        	type = src.replace(/^.+\./, '');

	        if(type === 'js') {
	        	core.loadJs(src, function() {
	        		core.load(urls, callback);
	        	});

	        }else if(type === 'css') {
	        	core.loadCss(src, function() {
	        		core.load(urls, callback);
	        	});

	        }

	    }else if(typeof callback === 'function') {
	    	callback();
	    }
	},

	loadJs: function(url, callback) {
        var head = document.querySelector('head'),
        	script = document.createElement('script');
        
        script.src = url;
        script.addEventListener('load', function() {
        	if(typeof callback === 'function') {
	    		callback();
	    	}
        });

        head.appendChild(script);
	},

	loadCss: function(url, callback) {
        var head = document.querySelector('head');

        var style = document.createElement('link');
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("type", "text/css");
        style.setAttribute("href", url);

        style.addEventListener('load', function() {
        	if(typeof callback === 'function') {
	    		callback();
	    	}
        });

        head.appendChild(style);

	}
};

window.Loader = core;

})();