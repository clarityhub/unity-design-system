import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';
import ButtonSet from './ButtonSet';

describe('<ButtonSet />', () => {
	it('renders a set of buttons', () => {
		const node = (
			<ButtonSet>
				<Button text>Back</Button>
				<Button type="primary">Edit</Button>
				<Button outline type="danger">Delete</Button>
			</ButtonSet>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});


	it('renders a spread of buttons', () => {
		const node = (
			<ButtonSet spread>
				<Button text>Back</Button>
				<Button type="primary">Edit</Button>
				<Button outline type="danger">Delete</Button>
			</ButtonSet>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});