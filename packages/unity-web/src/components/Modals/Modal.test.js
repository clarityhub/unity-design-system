import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';
import ButtonSet from '../ButtonSet';
import Typography from '../Typography';
import { CardBody, CardActions } from '../Card';
import Modal from './Modal';

describe('<Modal />', () => {
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

	it('renders a Modal', () => {
		const node = (
			<Modal noPortal open={true} onClose={() => {}}>
				<CardBody>
					<Typography type="h3">Card title</Typography>
					<Typography type="h4">Card subtitle</Typography>
					<Typography type="text">
                        Meow Mix
					</Typography>

					<CardActions>
						<ButtonSet>
							<Button
								text
							>
                                Close
							</Button>
							<Button
								type="danger"
							>
                                Delete
							</Button>
						</ButtonSet>
					</CardActions>
				</CardBody>
			</Modal>
		);
		const tree = renderer.create(node, { createNodeMock }).toJSON();

		expect(tree).toMatchSnapshot();
	});
    
});


