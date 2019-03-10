import React, { Component } from 'react';
import { string, number } from 'prop-types';
import styled from '@emotion/styled';

import Textarea from '../Textarea';
import Label from '../Label';
import { offset } from '../../utilities/position';

const ControlledTextarea = styled.div`
    width: 100%;
`;

let textareaCount = 0;

export default class LabelledTextarea extends Component {
    static propTypes = {
        label: string.isRequired,
        value: string,
        defaultValue: string,
        grow: number,
    }

    static defaultProps = {
        grow: 5,
        type: 'text',
    }

    constructor(props) {
        super(props);

        this.textareaId = `textarea-${String(textareaCount)}`;

        textareaCount++;

        this.state = {
            height: 0,
        };

        this._onMouseUp = this.onMouseUp.bind(this);
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
            const { outerHeight } = offset(this.textarea);
            

            // if grow, auto resize height

            this.setState({
                height: outerHeight,
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
        window.addEventListener('mouseup', this._onMouseUp);
    }

    onMouseUp = () => {
        this.stop = true;
        window.removeEventListener('mouseup', this._onMouseUp);
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
