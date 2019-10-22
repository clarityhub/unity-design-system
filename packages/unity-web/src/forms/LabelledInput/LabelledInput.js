import React, { Component } from 'react';
import { string, node } from 'prop-types';
import styled from '@emotion/styled';

import Input from '../Input';
import Label from '../Label';

const ControlledInput = styled.div`
    width: 100%;
`;

let inputCount = 0;

export default class LabelledInput extends Component {
    static propTypes = {
    	defaultValue: string,
    	label: string.isRequired,
    	prefixIcon: node,
    	value: string,
    }

    static defaultProps = {
    	type: 'text',
    }


    constructor(props) {
    	super(props);

    	this.inputId = `input-${String(inputCount)}`;

    	inputCount++;
    }

    render() {
    	const { label, error, value, defaultValue, prefixIcon, ...rest } = this.props;

    	const optionalAttributes = {};

    	if (defaultValue || value) {
    		optionalAttributes['data-not-empty'] = true;
    	}

    	return (
    		<ControlledInput>
    			<Input
    				{...rest}

    				id={this.inputId}
    				defaultValue={defaultValue}
    				error={error}
    				prefixIcon={prefixIcon}
    				value={value}

    				{...optionalAttributes}

    				label={label}
    			>
    				<Label
    					htmlFor={this.inputId}
    					error={error}
    				>
    					{label}
    				</Label>
    			</Input>
    		</ControlledInput>
    	);
    }
}
