import React, { Fragment } from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('<Button />', () => {
	it('renders solid buttons', () => {
		const node = (
			<Fragment>
				<Button>Default</Button>
				{' '}
				<Button type="white">White</Button>
				{' '}
				<Button type="primary">Primary</Button>
				{' '}
				<Button type="danger">Danger</Button>
			</Fragment>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
    
	it('renders outline buttons', () => {
		const node = (
			<Fragment>
				<Button outline>Default</Button>
				{' '}
				<Button outline type="white">White</Button>
				{' '}
				<Button outline type="primary">Primary</Button>
				{' '}
				<Button outline type="danger">Danger</Button>
			</Fragment>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
    });
    
    it('renders link buttons', () => {
		const node = (
			<Fragment>
				<Button component="a" href="#">Link</Button>
			</Fragment>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});