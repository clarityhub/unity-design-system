import React from 'react';
import { string, func, number, bool } from 'prop-types';

const PageView = ({ pageRenderer, ...props }) => {
	let pageClassName = props.pageClassName;
	let pageLinkClassName = props.pageLinkClassName;
	let page = props.page;

	const onClick = props.onClick;
	const href = props.href;

	let ariaLabel =
    'Page ' +
    props.page +
    (props.extraAriaContext ? ' ' + props.extraAriaContext : '');
	let ariaCurrent = null;

	if (props.selected) {
		ariaCurrent = 'page';
		ariaLabel = 'Page ' + props.page + ' is your current page';

		if (typeof pageClassName !== 'undefined') {
			pageClassName = pageClassName + ' ' + props.activeClassName;
		} else {
			pageClassName = props.activeClassName;
		}

		if (typeof pageLinkClassName !== 'undefined') {
			if (typeof props.activeLinkClassName !== 'undefined') {
				pageLinkClassName = pageLinkClassName + ' ' + props.activeLinkClassName;
			}
		} else {
			pageLinkClassName = props.activeLinkClassName;
		}
	}

	return (
		<li className={pageClassName}>
			{pageRenderer({
				onClick,
				className: pageLinkClassName,
				href,
				ariaLabel,
				ariaCurrent,
				onKeyPress: onClick,
				page,
			})}
		</li>
	);
};

PageView.propTypes = {
	activeClassName: string,
	activeLinkClassName: string,
	extraAriaContext: string,
	onClick: func.isRequired,
	page: number.isRequired,
	pageClassName: string,
	pageLinkClassName: string,
	pageRenderer: func.isRequired,
	selected: bool.isRequired,
};

export default PageView;