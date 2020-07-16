import React, { Fragment } from 'react';
import renderer from 'react-test-renderer';

import Image from './Image';

describe('<Image />', () => {
	it('renders images', () => {
		const node = (
			<Fragment>
				<Image src="/public/get-started.png" alt="Get Started" />
				<Image withSpacing src="/public/get-started.png" alt="Get Started" />
				<Image center src="/public/get-started.png" alt="Get Started" />
				<Image center withSpacing src="/public/get-started.png" alt="Get Started" />
			</Fragment>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});