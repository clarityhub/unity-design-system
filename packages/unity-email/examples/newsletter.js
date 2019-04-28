import React from 'react';

import MJMLRenderer from '../renderers/MJMLRenderer';
import EmailTemplate from '../templates/EmailTemplate';

import { GraySection, WhiteSection } from '../components/Sections';
import Box from '../components/Box';
import Column from '../components/Column';
import Divider from '../components/Divider';
import ClarityHubLogo from '../components/ClarityHubLogo';
import Typography from '../components/Typography';
import Link from '../components/Link';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Emojify from '../components/Emojify';

const renderer = new MJMLRenderer();

const { html } = renderer.render(
	<EmailTemplate
		title="*|MC:SUBJECT|*"
		preview="Dynamic email"
	>
		<GraySection>
			<Column>
				<Box marginTop={2} marginBottom={2}>
					<Box marginBottom={2}>
						<ClarityHubLogo width="400px" />
					</Box>
					<Box>
						<Typography center type="h1">
							Example Newsletter
						</Typography>

						<Typography center type="text">
							Your weekly dose of hot open-source issues that you can contribute to by
							{' '}
							<Link href="https://www.clarityhub.io">Clarity Hub</Link>
						</Typography>
						<Typography center type="text">
							Half way through January! How are your resolutions?
						</Typography>
					</Box>
				</Box>
			</Column>
		</GraySection>

		<WhiteSection>
			<Column>
				<Box marginTop={1} marginBottom={1}>
					{/* ITEM */}
					<Box marginBottom={2} marginTop={2}>
						<Typography type="h2">
							TS type of "previousQueryResult" on updateQuery <i>in apollo-client</i>
						</Typography>
						<Typography type="text">
							When using the updateQuery function on subscribeToMore (that gets passed as prop to the render prop from Query), the first argument previousQueryResult is in TypeScript defined as Object:
						</Typography>

						<Box>
							<Typography center type="text">
								<i><b>apollo-client</b> – <Emojify>:rocket: A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server</Emojify></i>
							</Typography>
						</Box>

						<Button center href="#" type="primary">
							Help Out
						</Button>
					</Box>
					{/* END ITEM */}
					<Divider />

					<Box>
						<Typography center type="subtext">
							If you have any feedback or want to get in touch, just hit reply. We'll get back to you as soon as we can.
						</Typography>
					</Box>
				</Box>
			</Column>
		</WhiteSection>

		<Footer />
	</EmailTemplate>
);

export default html;
