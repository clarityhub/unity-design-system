import React from 'react';
import renderer from 'react-test-renderer';

import Link from '../Link';
import Button from '../Button';

import Pagination from './Pagination';

describe('<Pagination />', () => {
	it('renders paginiation bar', () => {
		const node = (
			<Pagination
				index={4}
				first={1}
				last={120}
				pageCount={120}
			/>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('uses renderers', () => {
		const node = (
			<Pagination
				index={1}
				pageCount={120}

				nextRenderer={({ index, disabled }) => {
					return (
						<Button>
                            Next &raquo;
						</Button>
					);
				}}
				previousRenderer={({ index, disabled }) => {
					return (
						<Button>
                            &laquo; Previous
						</Button>
					);
				}}
				pageRenderer={({ page }) => {
					const url = page === 1 ? '' : page;

					return (
						<Link href={`#/${url}`}>
							{page}
						</Link>
					);
				}}
			/>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});