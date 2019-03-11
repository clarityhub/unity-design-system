import React, { Fragment } from 'react';
import { MjmlGroup, MjmlRaw } from 'mjml-react';
import Box from '../Box';
import Column from '../Column';
import Divider from '../Divider';
import { DarkSection } from '../Sections';
import Typography from '../Typography/Typography';

// XXX Move to marketing
const socialMedia = {
	facebook: 'https://www.facebook.com/clarityhubinc',
	twitter: 'https://www.twitter.com/clarityhubinc',
	linkedIn: 'https://www.linkedin.com/company/clarityhubinc/',
	website: 'clarityhub.io',
};

const SocialMediaIcon = ({ icon, href, type }) => (
	<MjmlRaw>
		<a
			href={href}
			target="_blank"
		>
			<img
				alt={`Clarity Hub ${type}`}
				src={icon}
				style={{ display: 'block' }}
				height="24"
				width="24"
			/>
		</a>
	</MjmlRaw>
); 

const SocialMedia = () => (
	<MjmlGroup width="226px">
		<Column paddingLeft="16px">
			<SocialMediaIcon
				type="Facebook"
				href={socialMedia.facebook}
				icon="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-facebook-48.png"
			/>
		</Column>
		<Column paddingLeft="16px">
			<SocialMediaIcon
				type="Twitter"
				href={socialMedia.twitter}
				icon="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-twitter-48.png"
			/>
		</Column>
		<Column paddingLeft="16px">
			<SocialMediaIcon
				type="LinkedIn"
				href={socialMedia.linkedIn}
				icon="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-linkedin-48.png"
			/>
		</Column>
		<Column paddingLeft="16px">
			<SocialMediaIcon
				type="Website"
				href={socialMedia.website}
				icon="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-link-48.png"
			/>
		</Column>
	</MjmlGroup>
);

const Copyright = () => (
	<Typography center color="white" type="text2">
		<i>Copyright © *|CURRENT_YEAR|* *|LIST:COMPANY|*, All rights reserved.</i>
	</Typography>
);

const Reason = () => (
	<Typography center color="white" type="text2">
		<i>*|IFNOT:ARCHIVE_PAGE|* *|LIST:DESCRIPTION|*</i>
	</Typography>
);

const MailingAddress = () => (
	<Typography center color="white" type="text2">
		<strong>Our mailing address is:</strong>
		<br />
		*|HTML:LIST_ADDRESS_HTML|* *|END:IF|*
	</Typography>
);

const Unsubscribe = () => (
	<Typography cssClass="whiteLink" center color="white" type="text2">
		Want to change how you receive these emails?
		<br /> You can
		{' '}
		<a href="*|UPDATE_PROFILE|*">update your preferences</a> or
		{' '}
		<a href="*|UNSUB|*">unsubscribe from this list</a>.
		<br />
		<br /> *|IF:REWARDS|* *|HTML:REWARDS|* *|END:IF|*
	</Typography>
);

const Footer = () => (
	<Fragment>
		<DarkSection>
			<Column>
				<Box marginTop={4}></Box>
			</Column>
		</DarkSection>
		<DarkSection>
			<SocialMedia />
		</DarkSection>
		<DarkSection>
			<Column>
				<Box marginTop={2}></Box>
			</Column>
		</DarkSection>
		<DarkSection>
			<Column>
				<Divider />
				<Box marginTop={2} marginBottom={2}>
					<Box marginBottom={1}>
						<Copyright />
						<Reason />
					</Box>
					
					<Box marginBottom={1}>
						<MailingAddress />
					</Box>

					<Box>
						<Unsubscribe />
					</Box>
				</Box>
			</Column>
		</DarkSection>
	</Fragment>
);

export default Footer;
