import React from 'react';
import styled from '@emotion/styled';
import { arrayOf, shape, func, string } from 'prop-types';
import { variants } from '@clarityhub/unity-core/lib/typography';
import colors from '@clarityhub/unity-core/lib/colors';

import Link from '../Link';

const BreadcrumbsWrapper = styled.nav`
    ${variants.text.string}

    color: ${colors.black.default};
`;

const BreadcrumbList = styled.ol`
    display: flex;
    flex-wrap: wrap;
    padding: .75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
`;

const Breadcrumb = styled.li`
    & + &:before {
        display: inline-block;
        padding-right: .5rem;
        padding-left: .5rem;
        color: ${colors.gray.default};
        content: "/";
    }

    a,
    a:visited {
        color: ${colors.black.default};
    }
`;

const defaultLinkRenderer = ({ path, children }) => (
	<Link href={path}>{children}</Link>
);

const Breadcrumbs = ({ crumbs, linkRenderer = defaultLinkRenderer }) => {
	return (
		<BreadcrumbsWrapper ariaLabel="breadcrumb">
			<BreadcrumbList>
				{crumbs.map((crumb, i) => {
					const isCurrent = i === (crumbs.length - 1);
            
					return (
						<Breadcrumb key={i} ariaCurrent={isCurrent ? 'page' : false}>
							{crumb.path ? linkRenderer({
								path: crumb.path,
								children: crumb.title,
							}) : crumb.title}
						</Breadcrumb>
					);
				})}
			</BreadcrumbList>
		</BreadcrumbsWrapper>
	);
};

/**
 * Hack for docz and react-docgen
 */
const BreadcrumbsPropTypes = () => <div />;
BreadcrumbsPropTypes.propTypes = {
	crumbs: arrayOf(shape({
		title: string.isRequired,
		path: string,
	})),
	linkRenderer: func,
};
Breadcrumbs.propTypes = BreadcrumbsPropTypes.propTypes;
export { BreadcrumbsPropTypes };

export default Breadcrumbs;
