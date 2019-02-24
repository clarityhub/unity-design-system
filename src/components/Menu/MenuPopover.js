/** @jsx jsx */

import React, { Component } from 'react';
import { jsx, css } from '@emotion/core';
import { arrayOf, node } from 'prop-types';

import borders from '../../theme/borders';
import { variants } from '../../theme/fonts';
import colors from '../../theme/colors';
import { noOverflow } from '../../utilities/position';

const menuPopoverWrapper = () => css`
    background-color: ${colors.white};
    border: 1px solid ${colors.gray};
    border-radius: ${borders.borderRadius};
    position: absolute;
    z-index: 99999999;

    ${variants.button}

    font-size: 1rem;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 0;
        padding: 0;
    }
`;

class MenuPopover extends Component {
    static propTypes = {
        items: arrayOf(node).isRequired,
    }

    state = {
        position: {},
    }

    componentDidMount() {
        this.setState({
            position: this.getPosition(this.props, this.popover),
        });
    }

    componentWillUpdate(nextProps) {
        if (nextProps.left !== this.props.left) {
            this.setState({
                position: this.getPosition(nextProps, this.popover),
            });
        }
    }

    getPosition = (props, el) => {
        return noOverflow(props.position, el);
    }

    render() {
        const { position } = this.state;
        const { items, innerRef } = this.props;

        return (
            <div
                ref={(ref) => { this.popover = ref; innerRef(ref)}}
                css={menuPopoverWrapper}
                style={{
                    top: `${position.bottom || 0}px`,
                    left: `${position.left || 0}px`,
                }}
            >
                <ul>
                    {items.map((item, i) => (
                        <li key={i}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default React.forwardRef((props, ref) => <MenuPopover innerRef={ref} {...props} />);
