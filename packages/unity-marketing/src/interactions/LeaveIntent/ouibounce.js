/**
Copyright (c) 2014 Carl Sednaoui

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
export default function ouibounce(customConfig) {
	var config = customConfig || {},
		aggressive = config.aggressive || false,
		sensitivity = setDefault(config.sensitivity, 20),
		timer = setDefault(config.timer, 1000),
		delay = setDefault(config.delay, 0),
		callback = config.callback || function () { },
		cookieExpire = setDefaultCookieExpire(config.cookieExpire) || '',
		cookieDomain = config.cookieDomain ? ';domain=' + config.cookieDomain : '',
		cookieName = config.cookieName ? config.cookieName : 'viewedOuibounceModal',
		sitewide = config.sitewide === true ? ';path=/' : '',
		_delayTimer = null,
		_html = document.documentElement;

	function setDefault(_property, _default) {
		return typeof _property === 'undefined' ? _default : _property;
	}

	function setDefaultCookieExpire(days) {
		// transform days to milliseconds
		var ms = days * 24 * 60 * 60 * 1000;

		var date = new Date();
		date.setTime(date.getTime() + ms);

		return "; expires=" + date.toUTCString();
	}

	setTimeout(attachOuiBounce, timer);
	function attachOuiBounce() {
		if (isDisabled()) { return; }

		_html.addEventListener('mouseleave', handleMouseleave);
		_html.addEventListener('mouseenter', handleMouseenter);
		_html.addEventListener('keydown', handleKeydown);
	}

	function handleMouseleave(e) {
		if (e.clientY > sensitivity) { return; }

		_delayTimer = setTimeout(fire, delay);
	}

	function handleMouseenter() {
		if (_delayTimer) {
			clearTimeout(_delayTimer);
			_delayTimer = null;
		}
	}

	var disableKeydown = false;
	function handleKeydown(e) {
		if (disableKeydown) { return; }
		else if (!e.metaKey || e.keyCode !== 76) { return; }

		disableKeydown = true;
		_delayTimer = setTimeout(fire, delay);
	}

	function checkCookieValue(cookieName, value) {
		return parseCookies()[cookieName] === value;
	}

	function parseCookies() {
		// cookies are separated by '; '
		var cookies = document.cookie.split('; ');

		var ret = {};
		for (var i = cookies.length - 1; i >= 0; i--) {
			var el = cookies[i].split('=');
			ret[el[0]] = el[1];
		}
		return ret;
	}

	function isDisabled() {
		return checkCookieValue(cookieName, 'true') && !aggressive;
	}

	// You can use ouibounce without passing an element
	// https://github.com/carlsednaoui/ouibounce/issues/30
	function fire() {
		if (isDisabled()) { return; }

		callback();

		callback();
		disable();
	}
    
	function teardown() {
		// remove listeners
		_html.removeEventListener('mouseleave', handleMouseleave);
		_html.removeEventListener('mouseenter', handleMouseenter);
		_html.removeEventListener('keydown', handleKeydown);
	}

	function disable(custom_options) {
		var options = custom_options || {};

		// you can pass a specific cookie expiration when using the OuiBounce API
		// ex: _ouiBounce.disable({ cookieExpire: 5 });
		if (typeof options.cookieExpire !== 'undefined') {
			cookieExpire = setDefaultCookieExpire(options.cookieExpire);
		}

		// you can pass use sitewide cookies too
		// ex: _ouiBounce.disable({ cookieExpire: 5, sitewide: true });
		if (options.sitewide === true) {
			sitewide = ';path=/';
		}

		// you can pass a domain string when the cookie should be read subdomain-wise
		// ex: _ouiBounce.disable({ cookieDomain: '.example.com' });
		if (typeof options.cookieDomain !== 'undefined') {
			cookieDomain = ';domain=' + options.cookieDomain;
		}

		if (typeof options.cookieName !== 'undefined') {
			cookieName = options.cookieName;
		}

		if (typeof window !== 'undefined') {
			window.document.cookie = cookieName + '=true' + cookieExpire + cookieDomain + sitewide;
		}

		teardown();
	}

	return {
		fire: fire,
		disable: disable,
		isDisabled: isDisabled,
		teardown: teardown,
	};
}

/*exported ouibounce */