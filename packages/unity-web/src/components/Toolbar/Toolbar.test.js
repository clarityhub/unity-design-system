import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';
import Toolbar from './';

describe('<Toolbar />', () => {
	it('renders default', () => {
		const node = (
			<Toolbar>
				<Toolbar.Action>
					<Button
						size="small"
						type="primary"
					>
                        Add a Member
					</Button>
				</Toolbar.Action>
				<Toolbar.Action>
					<Button
						size="small"
						type="default"
					>
                        Add a Role
					</Button>
				</Toolbar.Action>
			</Toolbar>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});