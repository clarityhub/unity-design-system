import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { bool, func } from 'prop-types';

import { desaturate, lighten } from '../../utilities/color';
import colors from '../../theme/colors';
import borders from '../../theme/borders';

import noop from '../../utilities/noop';

const boxSize = 1.4;
const paddingSize = 0.25;

const getBorderRadius = (type) => {
  switch (type) {
    case 'checkbox':
      return `${borders.borderRadius}`;
    case 'radio':
    default:
      return `50%`;
    }
}

const SelectionWrapper = styled.button`
    border: 0;
    box-sizing: border-box;
    cursor: pointer;
    height: ${boxSize * 1.3}rem;
    position: relative;

    label {
        cursor: pointer;
        display: inline-block;
        position: relative !important;
        vertical-align: middle;

        ${({ selected }) => selected && css`
            font-weight: bold;
        `}
    }
`;

const Input = styled.input`
    height: 1px;
    position: absolute;
    left: -9999px;
    width: 1px;
`;

const Box = styled.div`
    border: 1px solid ${colors.gray};
    background: transparent;
    box-sizing: border-box;
    display: inline-block;
    height: ${boxSize}rem;
    position: relative;
    vertical-align: middle;
    width: ${boxSize}rem;

    ${({ type }) => css`
      border-radius: ${getBorderRadius(type)};
    `}

    ${({ disabled }) => disabled && css`
        background-color: ${colors.muted};
    `}

    ${({ selected, disabled, type }) => selected && css`
        &:after {
            content: '';
            background-color: ${disabled ? desaturate(lighten(colors.primary, 0.3), 0.6) : colors.primary};
            border: 1px solid transparent;
            box-sizing: border-box;
            margin: ${paddingSize}rem;
            height: ${boxSize - (2 * paddingSize)}rem;
            position: absolute;
            top: -1px;
            left: -1px;
            width: ${boxSize - (2 * paddingSize)}rem;

            ${css`
              border-radius: ${getBorderRadius(type)};
            `}
        }
    `}
`;

export default (type = 'radio') => {
  return class Selection extends Component {
    static propTypes = {
      selected: bool,
      disabled: bool,
      onChange: func,
    }

    static defaultProps = {
      selected: false,
      disabled: false,
      onChange: noop,
    }

    onChange = (e) => {
      const { onChange } = this.props;

      onChange(e, this.input);
    }

    render () {
      const { children, selected = false, disabled = false, ...rest } = this.props;

      return (
        <SelectionWrapper
          onClick={this.onChange}
          selected={selected}
          role="Selection"
          aria-checked={Boolean(selected).toString()}
        >
          <Input
            ref={ref => this.input = ref}
            type="Selection"
            selected={selected}
            disabled={disabled}
            onChange={this.onChange}
            tabIndex="-1"
            {...rest}
          />

          <Box
            selected={selected}
            disabled={disabled}
            type={type}
          />

          {children}
        </SelectionWrapper>
      );
    }
  }
}
