import React, { Component } from 'react';
import { string } from 'prop-types';

import Input from '../Input';
import Label from '../Label';
import styled from '@emotion/styled';

const ControlledInput = styled.div`
    label {
        font-size: 1rem;
        pointer-events: none;
        text-align: initial;
        top: 1.4rem;
    }

    input:placeholder-shown,
    input[data-not-empty],
    input:focus {
        & ~ label {
            font-size: 0.8rem;
            top: 0;
        }
    }
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
                />
                <Label
                    htmlFor={this.inputId}
                >
                    {label}
                </Label>
            </ControlledInput>
        );
    }
}
