import React from 'react';
import { number, func } from 'prop-types';
import isPropValid from '@emotion/is-prop-valid';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import colors from '@clarityhub/unity-core/lib/colors';

import breakpoints from '../../theme/breakpoints';
import Link from '../Link';
import Paginate from './PaginateBoxView';

// XXX need a Link renderer (with on clicks and stuff)

const Container = styled.div`
    margin: 3rem 1rem;
    text-align: center;

    li {
        display: inline-block;

    }

    li + li {
        margin-left: 1rem;
    }

    @media (max-width: ${breakpoints.smallMaxWidth}px) {
        li:first-of-type,
        li:last-of-type {
            display: block;
            margin: 1rem;
        }
    }
`;

const Item = styled('div', {
	shouldForwardProp: prop => isPropValid(prop) && !['selected'].includes(prop),
})`
	a {
        border: 1px solid ${colors.gray.default};
		border-radius: 50%;
        color: ${colors.primary.default};
		font-size: 0.9rem;
        text-align: center;
		height: 2.25rem;
		width: 2.25rem;
		display: flex;
		align-items: center;
		justify-content: center;

        &:hover {
			background-color: ${colors.muted.default};
			border: 1px solid ${colors.gray.default};
        }

        &:visited {
			border: 1px solid ${colors.gray.default};
            color: ${colors.primary.default};
        }

        ${({ selected }) => selected && css`
            background-color: ${colors.primary.default};
			color: ${colors.white.default} !important;
			border: 1px solid ${colors.primary.default};
			box-shadow: ${colors.shadow.default};

			&:hover {
				background-color: ${colors.primary.default};
				border: 1px solid ${colors.primary.default};
			}

            &:visited {
                color: ${colors.white.default} !important;
            }
        `}
    }
`;

const Pagination = ({
	index,
	pageCount,
	nextRenderer = ({ index, disabled }) => {
		const nextUrl = (index + 1).toString();

		return (
			<Link href={`/${nextUrl}`}>
				&gt;
			</Link>
		);
	},
	previousRenderer = ({ index, disabled }) => {
		const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();

		return (
			<Link href={`/${previousUrl}`}>
                &lt;
			</Link>
		);
	},
	pageRenderer = ({ page }) => {
		const url = page === 1 ? '' : page;

		return (
			<Link href={`/${url}`}>
				{page}
			</Link>
		);
	},
}) => {
	if (pageCount === 1) {
		return null;
	}

	return (
		<Container>
			<Paginate
				pageCount={pageCount}
				pageRangeDisplayed={3}
				marginPagesDisplayed={1}
				selected={index - 1}
				nextRenderer={({ disabled }) => (
					disabled ? null : (
						<Item>
							{nextRenderer({ index, disabled })}
						</Item>
					)
				)}
				previousRenderer={({ disabled }) => (
					disabled ? null : (
						<Item>
							{previousRenderer({ index, disabled })}
						</Item>
					)
				)}
				pageRenderer={({ page }) => {
					return (
						<Item selected={String(page) === String(index)}>
							{pageRenderer({ page })}
						</Item>
					);
				}}
			/>
		</Container>
	);
};

Pagination.propTypes = {
	first: number,
	index: number.isRequired,
	last: number,
	nextRenderer: func,
	pageCount: number.isRequired,
	pageRenderer: func,
	previousRenderer: func,
};

export default Pagination;
