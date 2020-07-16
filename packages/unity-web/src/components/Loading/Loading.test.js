import React, { Fragment } from 'react';
import renderer from 'react-test-renderer';

import Loading from './Loading';

describe('<Loading />', () => {
	it('renders text', () => {
		const node = (
			<Fragment>
				<Loading />
				<Loading flex size={2} />
			</Fragment>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});