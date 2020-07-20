import React, { useState } from 'react';
import { oneOfType, node, func, string } from 'prop-types';

const getDefaultTabFromChildren = (children) => {
	try {
		const arr = React.Children.toArray(children);
		if (arr && arr.length > 0) {
			const tabs = React.Children.toArray(arr[0].props.children);

			if (tabs && tabs.length > 0) {
				return tabs[0].props.tab;
			}
		}
	} catch (e) {
		// Do nothing
	}

	return null;
};

const TabContainer = ({ children, defaultTab, onChange = () => {} }) => {
	const [currentTab, setCurrentTab] = useState(() => {
		if (!defaultTab) {
			return getDefaultTabFromChildren(children);
		}

		return defaultTab;
	});

	const handleClick = (e, tab) => {
		setCurrentTab(tab);
		onChange(tab);
	};

	return React.Children.map(children, (child) => {
		return React.cloneElement(child, {
			_currentTab: currentTab,
			_onClick: handleClick,
		});
	});
};

TabContainer.propTypes = {
	children: oneOfType([node, func]),
	defaultTab: string,
	onChange: func,
};

export default TabContainer;
