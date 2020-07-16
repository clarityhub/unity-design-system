import React from 'react';
import renderer from 'react-test-renderer';
import { ListItem, UnorderedList } from './index';

describe('<UnorderedList />', () => {
	it('renders items', () => {
		const node = (
			<UnorderedList>
				<ListItem>First item</ListItem>
				<ListItem>Second item</ListItem>
				<ListItem>Third item</ListItem>
			</UnorderedList>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});