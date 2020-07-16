import React from 'react';
import renderer from 'react-test-renderer';

import ButtonGroup from './ButtonGroup';

describe('<ButtonGroup />', () => {
	it('renders a group of items', () => {
		const { ButtonGroupItem } = ButtonGroup;
		const node = (
			<ButtonGroup>
				<ButtonGroupItem>Mon</ButtonGroupItem>
				<ButtonGroupItem selected>Tue</ButtonGroupItem>
				<ButtonGroupItem>Wed</ButtonGroupItem>
				<ButtonGroupItem>Thu</ButtonGroupItem>
				<ButtonGroupItem selected>Fri</ButtonGroupItem>
				<ButtonGroupItem>Sat</ButtonGroupItem>
				<ButtonGroupItem>Sun</ButtonGroupItem>
			</ButtonGroup>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});