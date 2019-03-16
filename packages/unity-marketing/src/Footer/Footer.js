import React from 'react';
import styled from '@emotion/styled';
import { string } from 'prop-types';
import colors from '@clarityhub/unity-core/lib/colors';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import Link from '@clarityhub/unity-web/lib/components/Link';
import Logo from '@clarityhub/unity-web/lib/components/svgs/Logo';

import {
	FacebookLogo,
	TwitterLogo,
	MediumLogo,
	LinkedInLogo,
} from '../svgs';

// TODO refactor contants throughout this component
const desktop = 820;
const mobile = 620;

const FooterWrapper = styled.footer`
    background-color: ${colors.dark.default};
    color: ${colors.dove.default};
    padding-bottom: 48px;
    padding-top: 21px;
    position: relative;
    z-index: 1;

    @media (max-width: ${desktop}px) {
        padding-bottom: 10px;
    }
`;

const FooterGrid = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1000px;
    padding: 1rem;

    h3 {
        font-size: ${14 / 16}rem;
        font-weight: 500;
        letter-spacing: 0.8;
        text-transform: uppercase;
    }

    ul {
        list-style: none;
        margin-top: 15px;
        padding: 0;

        li {
            font-size: ${14 / 16}rem;
            letter-spacing: 0.3px;
            line-height: ${26 / 16}rem;
        }

        a {
            border: 0 !important;
            color: inherit !important;
            transition: none !important;

            &:hover,
            &:focus {
                border-bottom: 1px solid ${colors.dove.default} !important;
                margin-bottom: -1px !important;
            }
        }
    }

    @media (max-width: $${desktop}px) {
        flex-wrap: wrap;

        text-align: center;
    }

    @media (max-width: ${mobile}px) {
        flex-direction: column;
        text-align: center;
    }
`;

const FooterColumn = styled.div`
    flex: 1;

    @media (max-width: ${mobile}px) {
        display: block;
    }

    & + & {
        padding-left: 20px;

        @media (max-width: ${mobile}px) {
            padding-left: 0;
            padding-top: 2rem;
        }
    }

    ${({ size2x }) => size2x && `
      flex: 2;

      @media (max-width: ${desktop}px) {
        flex: initial;
        width: 100%;

        // Remove the padding from the left since the 2x
        // will be on a different row
        & + .footer__grid__column {
          padding-left: 0;
        }
      }
    `}

    ${({ info }) => info && `
        @media (max-width: ${desktop}px) {
            margin-bottom: 35px;
        }

        @media (max-width: ${info}) {
            margin-bottom: 0;
        }
    `}
`;


const FooterLogoWrapper = styled.div`
    color: ${colors.dove.default};
    font-size: ${19 / 16}rem;
    letter-spacing: 0.41px;
    text-transform: uppercase;

    svg {
        height: 50px;
        width: 50px;
    }

    svg,
    span {
        vertical-align: middle;
    }

    span {
        display: inline-block;
        margin-left: 15px;
    }
`;

const FooterAdditional = styled.div`
    color: ${colors.gray.default};
    font-size: ${14 / 16}rem;
    padding-top: 51px;
    text-align: center;

    @media (max-width: ${desktop}px) {
        padding-top: 20px;
    }

    ul li {
        display: inline-block;
    }

    a {
        border: 0 !important;
        color: ${colors.gray.default} !important;
        font-size: ${14 / 16}rem !important;
        transition: color 0.3s ease-in !important;

        &:hover {
            color: ${colors.dove.default} !important;
        }
    }
`;

const FooterAdditionalContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 2rem;

    @media (max-width: ${desktop}px) {
        flex-direction: column-reverse;
    }
`;


const FooterAdditionalCopy = styled.div`
    flex: 1;

    @media (max-width: ${desktop}px) {
        margin-bottom: 20px;
    }
`;

const FooterAdditionalLinks = styled.div`
    flex: 1;

    @media (max-width: ${desktop}px) {
        margin-bottom: 20px;
    }

    li + li {
        margin-left: 20px;
    }
`;

const FooterAdditionalSocial = styled.div`
    flex: 1;

    @media (max-width: ${desktop}px) {
        margin-bottom: 20px;
    }

    li + li {
        margin-left: 5px;
    }

    a {
        background-color: ${colors.gray.default};
        border: 0 !important;
        border-radius: 50%;
        display: inline-block;
        height: 35px;
        transition: background-color 0.3s ease-in;
        width: 35px;

        &:hover,
        &:focus {
            background-color: ${colors.dove.default};
        }
    }

    svg {
        height: 20px;
        margin-left: 1px;
        margin-top: 8px;
        vertical-align: middle;

        path {
            fill: ${colors.dark.default};
        }
    }
`;

const Footer = ({
	title = 'Clarity Hub',
	phoneNumber = '1-855-83-CLAIR',
	email = 'support@clarityhub.io',
	facebookUsername = 'clarityhubinc',
	twitterUsername = 'clarityhubinc',
	mediumUsername = 'clarityhub',
	linkedinUsername = 'clarityhubinc',
	privacyLink,
	termsLink,
	extraColumns = [],
}) => (
	<FooterWrapper>
		<FooterGrid>
			<FooterColumn info size2x>
				<FooterLogoWrapper>
					<Logo />
					<Typography variant="heading" component="span" color="white">{title}</Typography>
				</FooterLogoWrapper>

				<ul>
					<li><Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link></li>
					<li><Link href={`mailto:${email}`}>{email}</Link></li>
				</ul>
			</FooterColumn>

			<FooterColumn>
				<Typography noPadding type="h3" color="white">Products</Typography>

				<ul>
					<li><Link href="https://www.clarityhub.io">Clarity Hub</Link></li>
					<li><Link href="https://blog.clarityhub.io">Stellar Blog</Link></li>
					<li><Link href="https://github.com/clarityhub">Open Source</Link></li>
				</ul>
			</FooterColumn>
			{extraColumns.map((c, i) => (
				<FooterColumn key={i}>
					{c}
				</FooterColumn>
			))}
		</FooterGrid>

		<FooterAdditional>
			<FooterAdditionalContainer>
				<FooterAdditionalCopy>
					<Typography variant="text">&copy; 2018 Clarity Hub, Inc. All Rights Reserved.</Typography>
				</FooterAdditionalCopy>

				<FooterAdditionalLinks>
					<ul>
						<li><Link href={privacyLink}>Privacy</Link></li>
						<li><Link href={termsLink}>Terms</Link></li>
					</ul>
				</FooterAdditionalLinks>

				<FooterAdditionalSocial>
					<ul>
						<li>
							<a href={`https://facebook.com/${facebookUsername}`} target="tab" rel="noopener noreferrer">
								<FacebookLogo />
							</a>
						</li>
						<li>
							<a href={`https://twitter.com/${twitterUsername}`} target="tab" rel="noopener noreferrer">
								<TwitterLogo />
							</a>
						</li>
						<li>
							<a href={`https://medium.com/@${mediumUsername}`} target="tab" rel="noopener noreferrer">
								<MediumLogo />
							</a>
						</li>
						<li>
							<a href={`https://linkedin.com/company/${linkedinUsername}`} target="tab" rel="noopener noreferrer">
								<LinkedInLogo />
							</a>
						</li>
					</ul>
				</FooterAdditionalSocial>
			</FooterAdditionalContainer>
		</FooterAdditional>
	</FooterWrapper>
);

Footer.propTypes = {
	email: string,
	facebookUsername: string,
	linkedinUsername: string,
	mediumUsername: string,
	phoneNumber: string,
	privacyLink: string,
	termsLink: string,
	title: string,
	twitterUsername: string,
};

export default Footer;
