import React from 'react';
import renderer from 'react-test-renderer';
import { mdiNotebookOutline } from '@mdi/js';

import Button from '../Button';
import Empty from './Empty';

describe('<Empty />', () => {
	it('renders default', () => {
		const node = (
			<Empty />
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('renders complex', () => {
		const node = (
			<Empty
				icon={mdiNotebookOutline}
				message="Create your first Notebook"
				details="Notebooks let you organize your customer interviews, notes, and photos together in one place."
				actions={[
					<div>
						<Button type="primary">
                            Create a Notebook
						</Button>
					</div>,
				]}
			/>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});