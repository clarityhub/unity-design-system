export default function getLocale(fallback) {
	if (navigator) {
		if (navigator.languages) {
			return navigator.languages;
		} else if (navigator.language) {
			return [navigator.language];
		} else if (navigator.browserLanguage) {
			return [navigator.browserLanguage];
		} else {
			return fallback;
		}
	} else {
		return fallback;
	}
}
