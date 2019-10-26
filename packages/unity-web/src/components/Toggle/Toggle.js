import React from 'react';
import {
	string,
	bool,
	func,
} from 'prop-types';
import styled from '@emotion/styled';
import colors from '@clarityhub/unity-core/lib/colors';
import css from '@emotion/css';
import Typography from '@clarityhub/unity-web/lib/components/Typography/Typography';

const size = 1.2;

const ToggleWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;

    ${({ center }) => center && css`
        margin-left: auto;
        margin-right: auto;
    `}
    
    * {
        box-sizing: border-box;
    }
    
    > * {
        vertical-align: middle;
    }

    > * + * {
        margin-left: 0.5rem;
    }
`;

const ToggleLabel = styled.label`
    cursor: pointer;
    font-weight: 800;
`;

const ToggleStyled = styled.button`
    background: none;
    border: none;
    width: ${size * 3}rem;
    height: ${size * 1.4}rem;
    padding: 0;
    position: relative;
    cursor: pointer;
`;

const Tracker = styled.div`
    flex: 1;
    border: 1px solid ${colors.gray.default};
    border-radius: ${size}rem;
    background-color: ${colors.white.default};
    position: relative;
    transition: all 0.2s ease;

    height: 100%;

    ${({ checked }) => checked && css`
        background-color: ${colors.primary.default};
    `}
`;

const Thumb = styled.div`
    width: ${size}rem;
    height: ${size}rem;
    box-shadow: none;
    position: absolute;
    padding: 0.2rem;
    margin: 0.2rem;
    border-radius: 50%;

    top: 0;
    left: 0;
    background-color: ${colors.gray.default};
    transform: translateX(0px);
    transition: all 0.2s ease;

    ${({ checked }) => checked && css`
        transform: translateX(${size * 2 - 0.4}rem);
        background-color: ${colors.white.default};
    `}
`;

const Toggle = ({
	id = +new Date(),
	checked,
	labelLeft,
	labelRight,
	center = false,

	onClick,
	onTouchStart,
	onTouchMove,
	onTouchEnd,
}) => {
	return (
		<ToggleWrapper center={center}>
			{labelLeft && (
				<ToggleLabel htmlFor={id}>
					<Typography noMargin noPadding>
						{labelLeft}
					</Typography>
				</ToggleLabel>
			)}
			<ToggleStyled
				id={id}
				onClick={onClick}
				onTouchStart={onTouchStart}
				onTouchMove={onTouchMove}
				onTouchEnd={onTouchEnd}
			>
				<Tracker checked={checked} />
				<Thumb checked={checked} />
			</ToggleStyled>

			{labelRight && (
				<ToggleLabel htmlFor={id}>
					<Typography noMargin noPadding>
						{labelRight}
					</Typography>
				</ToggleLabel>
			)}
		</ToggleWrapper>
	);
};

Toggle.propTypes = {
	center: bool,
    checked: bool,
    id: string,
    labelLeft: string,
    labelRight: string,

    onClick: func,
    onTouchEnd: func,
    onTouchMove: func,
    onTouchStart: func,
};

export default Toggle;
