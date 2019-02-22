/** @jsx jsx */

import { Component } from 'react';
import ReactDOM from 'react-dom';
import { func } from 'prop-types';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';

import MenuPopover from './MenuPopover';
import colors from '../../theme/colors';
import Button from '../Buttons';

// XXX move to utilities
function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
        height: rect.height,
        width: rect.width,
        bottom: rect.top + scrollTop + rect.height,
        right: rect.left + scrollLeft + rect.width,
    };
}


const MenuWrapper = styled.div`
    position: relative;
`;

const MenuTarget = styled.div`
    position: relative;
`;

let menuPortalId = 0;

class MenuPortal extends Component {
    constructor(props) {
        super(props);

        this.el = document.createElement('div');
        this.el.id = `menu-portal-${menuPortalId++}`;
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}

export const MenuItem = props => (
    <Button
        text
        css={css`
            text-align: left;
            min-width: 150px;
            width: 100%;

            &:hover {
                background-color: ${colors.muted};
            }
        `}
        {...props}
    />
);

export const MenuItemDivider = styled.hr`
    width: 100%;
    height: 0;
    border-top: 1px solid ${colors.gray};
`;

/**
 * When you click on the {children} wrapper,
 * a menu will appear below the {children}'s position.
 * 
 * The menu's position will remain within the window.
 * 
 * The menu will close when you click outside of the menu
 */
export class Menu extends Component {
    static propTypes = {
        children: func.isRequired,
    }

    state = {
        open: false,
    }

    componentDidMount() {
        this._onClickOutside = this.onClickOutside.bind(this);
        this._onKeyPress = this.onKeyPress.bind(this);

        document.addEventListener('click', this._onClickOutside);
        document.addEventListener('keypress', this._onKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this._onClickOutside);
        document.removeEventListener('keypress', this._onKeyPress);
    }

    onClickOutside = (e) => {
        if (this.menu && this.doneOpening) {        
            if (this.state.open) {
                const target = e.target;
                // check if target is within (or is) the menu
                const clickOutsideMenu = this.menu !== target && !this.menu.contains(target);
                if (clickOutsideMenu) {
                    this.close();
                }
            }
        }
    }

    onKeyPress = (e) => {
        if (this.state.open) {
            if (e.key === 'Escape') {
                this.close();
            }
        }
    }

    open = () => {
        this.doneOpening = false;

        let position = {
            top: 0,
            left: 0,
        };

        if (this.target) {
            position = offset(this.target);
        }

        this.setState(({ open }) => ({
            open: !open,
            position,
        }), () => {
            setTimeout(() => {
                this.doneOpening = true;
            }, 100);
        });
    }

    close = () => {
        this.setState({
            open: false,
        });
    }

    render() {
        const { children, items } = this.props;
        const { open, position } = this.state;

        return (
            <MenuWrapper>
                {open && (
                    <MenuPortal>
                        <MenuPopover
                            ref={ref => this.menu = ref}
                            items={items}
                            position={position}
                        />
                    </MenuPortal>
                )}

                <MenuTarget ref={ref => this.target = ref}>
                    {children({
                        open: this.open,
                    })}
                </MenuTarget>
            </MenuWrapper>
        );
    }
}