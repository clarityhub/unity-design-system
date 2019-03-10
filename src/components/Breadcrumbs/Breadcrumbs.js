import React from 'react';
import styled from '@emotion/styled';

import Link from '../Link';
import { variants } from '../../theme/fonts';
import colors from '../../theme/colors';
import { arrayOf, shape, func, string } from 'prop-types';

const BreadcrumbsWrapper = styled.nav`
    ${variants.text}

    color: ${colors.black};
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
        color: ${colors.gray};
        content: "/";
    }

    a,
    a:visited {
        color: ${colors.black};
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
