import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import renderer from 'react-test-renderer';

import Typography from '../Typography';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import AccordionSummary from './AccordionSummary';
import AccordionDetails from './AccordionDetails';

describe('<Accordion />', () => {
	it('renders with panels', () => {
		const node = (
			<Accordion>
				<AccordionItem>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
					>
						<Typography inline noMargin noPadding type="text" style={{ marginRight: '30px' }}><b>General settings</b></Typography>
						<Typography inline noMargin noPadding type="text">I am an expansion panel</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                    maximus est, id dignissim quam.
						</Typography>
					</AccordionDetails>
				</AccordionItem>
				<AccordionItem>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
					>
						<Typography inline noMargin noPadding type="text" style={{ marginRight: '30px' }}><b>General settings</b></Typography>
						<Typography inline noMargin noPadding type="text">I am an expansion panel</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                    maximus est, id dignissim quam.
						</Typography>
					</AccordionDetails>
				</AccordionItem>
				<AccordionItem>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
					>
						<Typography inline noMargin noPadding type="text" style={{ marginRight: '30px' }}><b>General settings</b></Typography>
						<Typography inline noMargin noPadding type="text">I am an expansion panel</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                    maximus est, id dignissim quam.
						</Typography>
					</AccordionDetails>
				</AccordionItem>
			</Accordion>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});