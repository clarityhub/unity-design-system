import React from 'react';
import styled from '@emotion/styled';
import colors from '@clarityhub/unity-core/lib/colors';

import Link from '../Link';
import Paginate from './PaginateBoxView';

// XXX need a Link renderer (with on clicks and stuff)

// TODO max-width
const Container = styled.div`
    margin: 3rem 1rem;
    text-align: center;

    li {
        display: inline-block;

    }

    li + li {
        margin-left: 1rem;
    }

    @media (max-width: 820px) {
        li:first-child,
        li:last-child {
            display: block;
            margin: 1rem;
        }
    }
`;

const Item = styled.div`
    a {
        border: 0;
        color: ${colors.primary.default};
        text-align: center;
        padding: 0.5rem;

        &:hover {
            border: 0;
        }

        &:visited {
            color: ${colors.primary.default};
        }

        ${({ selected }) => selected && `
            background-color: ${colors.primary.default};
            color: ${colors.white.default};

            &:visited {
                color: ${colors.white.default};
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
                Next &raquo;
			</Link>
		);
	},
	previousRenderer = ({ index, disabled }) => {
		const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();

		return (
			<Link href={`/${previousUrl}`}>
                &laquo; Previous
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

export default Pagination;
