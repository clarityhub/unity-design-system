import React from 'react';
import renderer from 'react-test-renderer';
import { ListItem, OrderedList } from './index';

describe('<OrderedList />', () => {
	it('renders items', () => {
		const node = (
			<OrderedList>
				<ListItem>First item</ListItem>
				<ListItem>Second item</ListItem>
				<ListItem>Third item</ListItem>
			</OrderedList>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});