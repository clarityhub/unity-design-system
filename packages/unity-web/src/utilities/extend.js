
/**
 * Only works with extending Classes
 *
 * @param {*} displayName 
 * @param {*} Comp – Must be a class 
 * @param {*} overrides 
 * @param {*} additionalProps 
 */
const extend = (displayName, Comp, overrides = {}, additionalProps = {}) => {
	const NewComp = class extends Comp {
		constructor(props) {
			super(props);

			Object.entries(overrides).forEach(([key, value]) => {
				if (typeof value === 'function') {
					this[key] = value.bind(this);
				} else {
					this[key] = value;
				}
			});
		}
	};

	NewComp.displayName = displayName || Comp.name;
	NewComp.propTypes = {
		...Comp.propTypes,
		...additionalProps,
	};

	return NewComp;
};

export default extend;