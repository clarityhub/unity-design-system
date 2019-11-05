/**
 * Given an element, get the top, left, bottom, right, height, and width.
 */
export const offset = (el) => {
	const rect = el.getBoundingClientRect();
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	const styles = document.defaultView.getComputedStyle(el, '');
	const marginTop = parseFloat(styles.getPropertyValue('margin-top'));
	const marginBottom = parseFloat(styles.getPropertyValue('margin-bottom'));

	return {
		top: rect.top + scrollTop,
		left: rect.left + scrollLeft,
		height: rect.height,
		outerHeight: marginTop + marginBottom + rect.height,
		width: rect.width,
		bottom: rect.top + scrollTop + rect.height,
		right: rect.left + scrollLeft + rect.width,
	};
};

/**
 * Given a position, and an element, make sure that
 * the element at that position will not overflow with
 * the window.
 */
export const noOverflow = (position, el) => {
	const w = window.innerWidth;
	const rect = el.getBoundingClientRect();
	const newPosition = { ...position };

	if (position.left < 0) {
		// snap to the left
		newPosition.left = 0;
	}

	if (position.left + rect.width > w) {
		// snap to right
		newPosition.left = position.right - rect.width;
	}

	return newPosition;
};