/** @jsx jsx */
import { Fragment } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { arrayOf, node, shape, func } from 'prop-types';
import colors from '@clarityhub/unity-core/lib/colors';

import Box from '../../scaffolding/Box';
import Layout from '../../scaffolding/Layout';
import { FlexGrid, FlexColumn } from '../../scaffolding/FlexGrid';
import Card, { CardBody } from '../../components/Card';
import Typography from '../../components/Typography';
import Button from '../../components/Buttons';
import breakpoints from '../../theme/breakpoints';

const Section = styled.div`
    flex: 1;
    padding: 3rem;
    max-width: 520px;

	display: flex;
    flex-direction: column;
    justify-content: center;

    ${Card} + ${Card} {
        margin-top: 1rem;
    }
`;

const AuthTemplate = ({ newsFeed, onSignUp, onLogin, onlyLogin = false, termsAndConditionsHref = "#", privacyPolicyHref = "#" }) => (
	<Layout css={css`
        background-color: ${colors.dove.default};
    `}>
		<FlexGrid center>
			<FlexColumn center css={css`
                background: ${colors.gradient.default};

                @media(max-width: ${breakpoints.smartphone}) {
                    display: none;
                }
            `}>
				<Section css={css`
                    margin-left: auto;
                `}>
					{newsFeed.map((item, i) => (
						<Card key={i}>
							<CardBody>
								<Typography type="h3">{item.title}</Typography>
								<Typography type="text">
									{item.content}
								</Typography>
							</CardBody>
						</Card>
					))}
				</Section>
			</FlexColumn>
			<FlexColumn center>
				<Section css={css`
                    @media(max-width: ${breakpoints.smartphone}) {
                        margin-left: auto;
                        margin-right: auto;
                    }
                `}>
					<Typography
						center
						noMargin
						noPadding
						type="h2"
					>
                        Welcome to Clarity Hub
					</Typography>
                    
					<Box margin={{ top: "small" }}>
						{
							onlyLogin ? (
								<Fragment>
									<Button type="primary" outline block onClick={onLogin}>
										Login
									</Button>
								</Fragment>
							) : (
								<Fragment>
									<Button type="primary" block onClick={onSignUp}>
										Sign Up
									</Button>

									<Typography center css={css`
										margin-top: 3rem;
										margin-bottom: 1rem;
									`}>
										Already have an account?
									</Typography>

									<Button type="primary" outline block onClick={onLogin}>
										Login
									</Button>
								</Fragment>
							)
						}
					</Box>
					
					<Typography center css={css`
						color: #666;
						font-size: 0.9rem;
						margin-top: 3rem;
						margin-bottom: 1rem;
					`}>
						By clicking on "Login" above, you acknowledge that you have read, understood, and agree to Clarity Hub's
						{' '}
						<a href={termsAndConditionsHref} target="_blank" rel="noopener noreferrer">Terms and Conditions</a> and
						{' '}
						<a href={privacyPolicyHref} target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
					</Typography>
				</Section>
			</FlexColumn>
		</FlexGrid>
	</Layout>
);

AuthTemplate.propTypes = {
	newsFeed: arrayOf(shape({
		title: node,
		content: node,
	})).isRequired,
	onLogin: func.isRequired,
	onSignUp: func.isRequired,
};

export default AuthTemplate;
