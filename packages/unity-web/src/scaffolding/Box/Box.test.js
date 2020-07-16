import React, { Fragment } from 'react';
import renderer from 'react-test-renderer';

import Box from './Box';

describe('<Box />', () => {
	it('renders text', () => {
		const node = (
			<Box>
				Children
			</Box>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
    
	it('renders types and colors', () => {
		const node = (
			<Fragment>
				<Box align="center" background="primary">
                    primary
				</Box>
				<Box align="center" type="danger">
                    danger (type)
				</Box>
				<Box align="center" color="danger">
                    danger (color)
				</Box>

			</Fragment>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('renders paddings and margins', () => {
		const node = (
			<Fragment>
				<Box padding="large">
					<div>padding</div>
				</Box>

				<div>
					<Box margin="large" padding="large">
						<div>padding + margin</div>
					</Box>
				</div>
			</Fragment>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
    
	it('renders a simple grid', () => {
		const node = (
			<Box
				direction="row"
				padding="medium"
				gap="small"
			>
				<Box flex padding="medium" />
				<Box flex padding="medium" />
				<Box flex={3} padding="medium" />
			</Box>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});