import React from 'react';
import renderer, { act } from 'react-test-renderer';

import Button from '../Button';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuItemDivider from './MenuItemDivider';

describe('<Menu />', () => {
	const instance = {
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				height: 0,
				outerHeght: 0,
				width: 0,
			};
		},
	};
	function createNodeMock() {
		return instance;
	}

	it('renders a button', () => {
		const node = (
			<Menu
				inline
				noPortal
				items={[
					<MenuItem>Item 1</MenuItem>,
					<MenuItem>Item 2</MenuItem>,
					<MenuItem>Item 3</MenuItem>,
					<MenuItemDivider />,
					<MenuItem>Long Item 4</MenuItem>,
				]}
			>
				{({ open }) => (
					<Button onClick={open}>Open Menu</Button>
				)}
			</Menu>
		);
		const tree = renderer.create(node, { createNodeMock }).toJSON();

		expect(tree).toMatchSnapshot();
	});
    
	it('renders menu items', () => {
		const node = (
			<Menu
				noPortal
				inline
				items={[
					<MenuItem>Item 1</MenuItem>,
					<MenuItem>Item 2</MenuItem>,
					<MenuItem>Item 3</MenuItem>,
					<MenuItemDivider />,
					<MenuItem>Long Item 4</MenuItem>,
				]}
			>
				{({ open }) => (
					<Button onClick={open}>Open Menu</Button>
				)}
			</Menu>
		);
		const component = renderer.create(node, { createNodeMock });

		act(component.root.findByType('button').props.onClick);

		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});


