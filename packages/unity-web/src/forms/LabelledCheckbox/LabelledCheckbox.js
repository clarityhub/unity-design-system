import React, { Component } from 'react';
import { string } from 'prop-types';
import styled from '@emotion/styled';

import Checkbox from '../Checkbox';
import Label from '../Label';

const ControlledCheckbox = styled.div`
    width: 100%;
`;

let checkboxCount = 0;

export default class LabelledCheckbox extends Component {
    static propTypes = {
    	defaultValue: string,
    	label: string.isRequired,
    	value: string,
    }

    static defaultProps = {
    	type: 'text',
    }

    constructor(props) {
    	super(props);

    	this.checkboxId = `Checkbox-${String(checkboxCount)}`;

    	checkboxCount++;
		
    	this.state = {
    		selected: this.props.selected || false,
    	};
    }

    componentDidUpdate(prevProps) {
    	if (prevProps.selected !== this.props.selected) {
    		this.setState({
    			selected: this.props.selected,
    		});
    	}
    }
	
	onChange = (e, ref) => {
		e.preventDefault();

		this.setState({
			selected: !ref.selected,
		});
	}

	render() {
    	const { selected } = this.state;
    	const { label, value, defaultValue, ...rest } = this.props;

    	const optionalAttributes = {};

    	if (defaultValue || value) {
    		optionalAttributes['data-not-empty'] = true;
    	}

    	return (
    		<ControlledCheckbox>
    			<Checkbox
    				{...rest}

    				id={this.checkboxId}
    				defaultValue={defaultValue}
    				value={value}
    				selected={selected}
					onChange={this.onChange}

					{...optionalAttributes}

    				label={label}
    			>
    				<Label
    					htmlFor={this.checkboxId}
    				>
    					{label}
    				</Label>
    			</Checkbox>
    		</ControlledCheckbox>
    	);
	}
}
