import React, { Component } from 'react';
import { string } from 'prop-types';
import styled from '@emotion/styled';

import Textarea from '../Textarea';
import Label from '../Label';
import { offset } from '../../utilities/position';
import { animation } from 'polished';

const ControlledTextarea = styled.div`
    width: 100%;
`;

let textareaCount = 0;

export default class LabelledTextarea extends Component {
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

        this.textareaId = `textarea-${String(textareaCount)}`;

        textareaCount++;

        this.state = {
            height: 0,
        };
    }


    componentDidMount() {
        this.calcSize();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.calcSize();
        }
    }

    calcSize = () => {
        if (this.textarea) {
            const { height } = offset(this.textarea);

            this.setState({
                height,
            });
        }
    }

    animationFrameCb = () => {
        this.calcSize();

        if (!this.stop) {
            window.requestAnimationFrame(this.animationFrameCb);
        }
    }

    onMouseDown = () => {
        this.stop = false;
        window.requestAnimationFrame(this.animationFrameCb)
        window.addEventListener('onMouseUp', this.onMouseUp);
    }

    onMouseUp = () => {
        this.stop = true;
        window.removeEventListener('onMouseUp', this.onMouseUp);
    }

    render() {
        const { label, value, defaultValue, ...rest } = this.props;
        const { height } = this.state;

        const optionalAttributes = {};

        if (defaultValue || value) {
            optionalAttributes['data-not-empty'] = true;
        }

        return (
            <ControlledTextarea>
                <Textarea
                    {...rest}

                    id={this.textareaId}
                    targetRef={ref => this.textarea = ref}
                    defaultValue={defaultValue}
                    value={value}

                    {...optionalAttributes}
                    onMouseDown={this.onMouseDown}

                    label={label}
                    height={`${height}px`}
                >
                    <Label
                        htmlFor={this.textareaId}
                    >
                        {label}
                    </Label>
                </Textarea>
            </ControlledTextarea>
        );
    }
}
