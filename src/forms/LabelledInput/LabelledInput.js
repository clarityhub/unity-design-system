import React, { Component } from 'react';
import { string } from 'prop-types';
import styled from '@emotion/styled';

import Input from '../Input';
import Label from '../Label';

const ControlledInput = styled.div`
    width: 100%;
`;

let inputCount = 0;

export default class LabelledInput extends Component {
    static propTypes = {
        label: string.isRequired,
        value: string,
        defaultValue: string,
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
        const { label, value, defaultValue, ...rest } = this.props;

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
                    value={value}

                    {...optionalAttributes}

                    label={label}
                >
                    <Label
                        htmlFor={this.inputId}
                    >
                        {label}
                    </Label>
                </Input>
            </ControlledInput>
        );
    }
}
