import { string, oneOfType, node, func } from 'prop-types';

const TabContent = ({ for: propFor, _currentTab, children }) => {
	if (propFor === _currentTab) {
		return children;
	}

	return null;
};

TabContent.propTypes = {
	children: oneOfType([node, func]),
	for: string.isRequired,
};

export default TabContent;
