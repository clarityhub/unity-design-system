import React, { Fragment } from 'react';
import renderer from 'react-test-renderer';

import Typography from '../Typography';
import Card, {
	CardBody,
} from './index';

describe('<Card />', () => {
	it('renders a simple card', () => {
		const node = (
			<Card>
				<CardBody>
					<Typography type="text">
                        Default
					</Typography>
				</CardBody>
			</Card>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
    
	it('renders different card types', () => {
		const node = (
			<Fragment>
				<Card type="notification">
					<CardBody>
						<Typography type="text" color="white">
                Notification
						</Typography>
					</CardBody>
				</Card>
				<Card flat type="highlight">
					<CardBody>
						<Typography type="text" color="dark">
                Highlight
						</Typography>
					</CardBody>
				</Card>
				<Card flat type="callout">
					<CardBody>
						<Typography type="text" color="dark">
                Callout
						</Typography>
					</CardBody>
				</Card>
			</Fragment>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});