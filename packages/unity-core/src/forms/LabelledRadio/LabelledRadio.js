import React, { Component } from 'react';
import { string } from 'prop-types';
import styled from '@emotion/styled';

import Radio from '../Radio';
import Label from '../Label';

const ControlledRadio = styled.div`
    width: 100%;
`;

let radioCount = 0;

export default class LabelledRadio extends Component {
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

    	this.radioId = `Radio-${String(radioCount)}`;

    	radioCount++;
    }

    render() {
    	const { label, value, defaultValue, ...rest } = this.props;

    	const optionalAttributes = {};

    	if (defaultValue || value) {
    		optionalAttributes['data-not-empty'] = true;
    	}

    	return (
    		<ControlledRadio>
    			<Radio
    				{...rest}

    				id={this.radioId}
    				defaultValue={defaultValue}
    				value={value}

    				{...optionalAttributes}

    				label={label}
    			>
    				<Label
    					htmlFor={this.radioId}
    				>
    					{label}
    				</Label>
    			</Radio>
    		</ControlledRadio>
    	);
    }
}
