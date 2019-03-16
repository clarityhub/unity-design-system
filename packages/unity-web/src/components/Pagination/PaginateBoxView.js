
import React, { Component } from 'react';
import { bool, func, node, number, oneOfType, string } from 'prop-types';
import PageView from './PageView';
import BreakView from './BreakView';

export default class PaginationBoxView extends Component {
  static propTypes = {
  	activeClassName: string,
  	activeLinkClassName: string,
  	breakClassName: string,
  	breakLabel: oneOfType([string, node]),
  	breakLinkClassName: string,
  	containerClassName: string,
  	disableInitialCallback: bool,
  	disabledClassName: string,
  	extraAriaContext: string,
  	marginPagesDisplayed: number,
  	nextClassName: string,
  	nextLabel: node,
  	nextLinkClassName: string,
  	nextRenderer: func,
  	onPageChange: func,
  	pageClassName: string,
  	pageCount: number,
  	pageLinkClassName: string,
  	pageRangeDisplayed: number,
  	pageRenderer: func,
  	previousClassName: string,
  	previousLabel: node,
  	previousLinkClassName: string,
  	previousRenderer: func,
  	selected: number,
  };

  static defaultProps = {
  	pageCount: 10,
  	pageRangeDisplayed: 2,
  	marginPagesDisplayed: 3,
  	activeClassName: 'selected',
  	previousClassName: 'previous',
  	nextClassName: 'next',
  	previousLabel: 'Previous',
  	nextLabel: 'Next',
  	breakLabel: '...',
  	disabledClassName: 'disabled',
  	disableInitialCallback: false,
  };

  componentDidMount() {
  	const { initialPage, disableInitialCallback } = this.props;
  	// Call the callback with the initialPage item:
  	if (typeof initialPage !== 'undefined' && !disableInitialCallback) {
  		this.callCallback(initialPage);
  	}
  }

  handlePreviousPage = evt => {
  	const { selected } = this.props;
  	evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
  	if (selected > 0) {
  		this.handlePageSelected(selected - 1, evt);
  	}
  };

  handleNextPage = evt => {
  	const { selected, pageCount } = this.props;

  	evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
  	if (selected < pageCount - 1) {
  		this.handlePageSelected(selected + 1, evt);
  	}
  };

  handlePageSelected = (selected, evt) => {
  	evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);

  	if (this.props.selected === selected) return;

  	this.setState({ selected: selected });

  	// Call the callback with the new selected item:
  	this.callCallback(selected);
  };

  getForwardJump() {
  	const { selected, pageCount, pageRangeDisplayed } = this.props;

  	const forwardJump = selected + pageRangeDisplayed;
  	return forwardJump >= pageCount ? pageCount - 1 : forwardJump;
  }

  getBackwardJump() {
  	const { selected, pageRangeDisplayed } = this.props;

  	const backwardJump = selected - pageRangeDisplayed;
  	return backwardJump < 0 ? 0 : backwardJump;
  }

  handleBreakClick = (index, evt) => {
  	evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);

  	const { selected } = this.props;

  	this.handlePageSelected(
  		selected < index ? this.getForwardJump() : this.getBackwardJump(),
  		evt
  	);
  };

  callCallback = selectedItem => {
  	if (
  		typeof this.props.onPageChange !== 'undefined' &&
      typeof this.props.onPageChange === 'function'
  	) {
  		this.props.onPageChange({ selected: selectedItem });
  	}
  };

    pageRenderer = (props) => {
    	const { pageRenderer } = this.props;
    	const {
    		page,
    		onClick,
    		className,
    		ariaLabel,
    		ariaCurrent,
    	} = props;

    	if (pageRenderer) {
    		return pageRenderer(props);
    	}

    	return (
    		<a
    			onClick={onClick}
    			role="button"
    			className={className}
    			href="/#"
    			tabIndex="0"
    			aria-label={ariaLabel}
    			aria-current={ariaCurrent}
    			onKeyPress={onClick}
    		>
    			{page}
    		</a>
    	);
    }

    previousRenderer = (props) => {
    	const { previousRenderer } = this.props;
    	const {
    		onClick,
    		className,
    		onKeyPress,
    		ariaDisabled,
    		children,
    	} = props;

    	if (previousRenderer) {
    		return previousRenderer(props);
    	}

    	return (
    		<a
    			onClick={onClick}
    			className={className}
    			tabIndex="0"
    			href="/#"
    			role="button"
    			onKeyPress={onKeyPress}
    			aria-disabled={ariaDisabled}
    		>
    			{children}
    		</a>
    	);
    }

    nextRenderer = (props) => {
    	const { nextRenderer } = this.props;
    	const {
    		onClick,
    		className,
    		onKeyPress,
    		ariaDisabled,
    		children,
    	} = props;

    	if (nextRenderer) {
    		return nextRenderer(props);
    	}

    	return (
    		<a
    			onClick={onClick}
    			className={className}
    			tabIndex="0"
    			href="/#"
    			role="button"
    			onKeyPress={onKeyPress}
    			aria-disabled={ariaDisabled}
    		>
    			{children}
    		</a>
    	);
    }

    getPageElement(index) {
    	const {
    		pageClassName,
    		pageLinkClassName,
    		activeClassName,
    		activeLinkClassName,
    		extraAriaContext,
    		selected,
    	} = this.props;

    	return (
    		<PageView
    			key={index}
    			onClick={this.handlePageSelected.bind(null, index)}
    			selected={selected === index}
    			pageClassName={pageClassName}
    			pageLinkClassName={pageLinkClassName}
    			activeClassName={activeClassName}
    			activeLinkClassName={activeLinkClassName}
    			extraAriaContext={extraAriaContext}
    			pageRenderer={this.pageRenderer}
    			page={index + 1}
    		/>
    	);
    }

  pagination = () => {
  	const items = [];
  	const {
  		pageRangeDisplayed,
  		pageCount,
  		marginPagesDisplayed,
  		breakLabel,
  		breakClassName,
  		breakLinkClassName,
  		selected,
  	} = this.props;

  	if (pageCount <= pageRangeDisplayed) {
  		for (let index = 0; index < pageCount; index++) {
  			items.push(this.getPageElement(index));
  		}
  	} else {
  		let leftSide = pageRangeDisplayed / 2;
  		let rightSide = pageRangeDisplayed - leftSide;

  		// If the selected page index is on the default right side of the pagination,
  		// we consider that the new right side is made up of it (= only one break element).
  		// If the selected page index is on the default left side of the pagination,
  		// we consider that the new left side is made up of it (= only one break element).
  		if (selected > pageCount - pageRangeDisplayed / 2) {
  			rightSide = pageCount - selected;
  			leftSide = pageRangeDisplayed - rightSide;
  		} else if (selected < pageRangeDisplayed / 2) {
  			leftSide = selected;
  			rightSide = pageRangeDisplayed - leftSide;
  		}

  		let index;
  		let page;
  		let breakView;
  		let createPageView = index => this.getPageElement(index);

  		for (index = 0; index < pageCount; index++) {
  			page = index + 1;

  			// If the page index is lower than the margin defined,
  			// the page has to be displayed on the left side of
  			// the pagination.
  			if (page <= marginPagesDisplayed) {
  				items.push(createPageView(index));
  				continue;
  			}

  			// If the page index is greater than the page count
  			// minus the margin defined, the page has to be
  			// displayed on the right side of the pagination.
  			if (page > pageCount - marginPagesDisplayed) {
  				items.push(createPageView(index));
  				continue;
  			}

  			// If the page index is near the selected page index
  			// and inside the defined range (pageRangeDisplayed)
  			// we have to display it (it will create the center
  			// part of the pagination).
  			if (index >= selected - leftSide && index <= selected + rightSide) {
  				items.push(createPageView(index));
  				continue;
  			}

  			// If the page index doesn't meet any of the conditions above,
  			// we check if the last item of the current "items" array
  			// is a break element. If not, we add a break element, else,
  			// we do nothing (because we don't want to display the page).
  			if (breakLabel && items[items.length - 1] !== breakView) {
  				breakView = (
  					<BreakView
  						key={index}
  						breakLabel={breakLabel}
  						breakClassName={breakClassName}
  						breakLinkClassName={breakLinkClassName}
  						onClick={this.handleBreakClick.bind(null, index)}
  					/>
  				);
  				items.push(breakView);
  			}
  		}
  	}

  	return items;
  };
  

  render() {
  	const {
  		disabledClassName,
  		previousClassName,
  		nextClassName,
  		pageCount,
  		containerClassName,
  		previousLinkClassName,
  		previousLabel,
  		nextLinkClassName,
  		nextLabel,
  		selected,
  	} = this.props;

  	const previousClasses =
      previousClassName + (selected === 0 ? ` ${disabledClassName}` : '');
  	const nextClasses =
      nextClassName +
      (selected === pageCount - 1 ? ` ${disabledClassName}` : '');

  	const previousAriaDisabled = selected === 0;
  	const nextAriaDisabled = selected === pageCount - 1;

  	return (
  		<ul className={containerClassName}>
  			<li className={previousClasses}>
  				{this.previousRenderer({
  					onClick: this.handlePreviousPage,
  					className: previousLinkClassName,
  					onKeyPress: this.handlePreviousPage,
  					disabled: previousAriaDisabled,
  					ariaDisabled: String(previousAriaDisabled),
  					children: previousLabel,
  				})}
  			</li>

  			{this.pagination()}

  			<li className={nextClasses}>
  				{this.nextRenderer({
  					onClick: this.handleNextPage,
  					className: nextLinkClassName,
  					onKeyPress: this.handleNextPage,
  					disabled: nextAriaDisabled,
  					ariaDisabled: String(nextAriaDisabled),
  					children: nextLabel,
  				})}
  			</li>
  		</ul>
  	);
  }
}