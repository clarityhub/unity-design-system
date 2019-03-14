import React from 'react';
import {
	Mjml,
	MjmlHead,
	MjmlTitle,
	MjmlFont,
	MjmlPreview,
	MjmlBody,
	MjmlSection,
	MjmlAttributes,
	MjmlAll,
	MjmlText,
	MjmlStyle,
} from 'mjml-react';
import { EMAIL_WIDTH } from './config';

// XXX
const families = [
	'Crimson Text:300,400,600,700',
	'Roboto:400,800',
	'Open Sans:300,400,600,700',
];

const EmailTemplate = ({
	title,
	preview,
	children,
}) => (
	<Mjml>
		<MjmlHead>
			<MjmlTitle>{title}</MjmlTitle>
			<MjmlPreview>{preview}</MjmlPreview>

			{/* XXX Don't hardcode font names */}
			<MjmlFont name="Crimson Text" href={`https://fonts.googleapis.com/css?family=${families[0]}`} />
			<MjmlFont name="Roboto" href={`https://fonts.googleapis.com/css?family=${families[1]}`} />
			<MjmlFont name="Open Sans" href={`https://fonts.googleapis.com/css?family=${families[2]}`} />
			<MjmlStyle>
				{`.whiteLink a {
					color: #ffffff;
					font-weight: normal;
					text-decoration: underline;
				}`}
			</MjmlStyle>
			<MjmlAttributes>
				<MjmlAll fontFamily="Roboto, Helvetica, sans-serif"></MjmlAll>
				<MjmlText fontWeight="300" fontSize="16px" color="#616161" lineHeight="24px"></MjmlText>
				<MjmlSection padding="0px"></MjmlSection>
			</MjmlAttributes>
		</MjmlHead>
		<MjmlBody width={EMAIL_WIDTH}>
			{children}
		</MjmlBody>
	</Mjml>
);

// XXX prop types

export default EmailTemplate;
