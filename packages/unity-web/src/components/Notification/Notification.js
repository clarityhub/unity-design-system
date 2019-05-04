/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { node, oneOf, oneOfType, func, string } from 'prop-types';
import borders from '@clarityhub/unity-core/lib/borders';
import colors from '@clarityhub/unity-core/lib/colors';

import Typography from '../Typography';

const base = css`
  border-radius: ${borders.borderRadius.rem}rem;
  padding: 2rem;
  position: relative;
`;

const types = {
	danger: css`
    background-color: ${colors.danger.default};
    color: ${colors.white.default};
  `,
	primary: css`
    background-color: ${colors.primary.default};
    color: ${colors.white.default};
  `,
	success: css`
    background-color: ${colors.success.default};
    color: ${colors.white.default};
  `,
};

const variants = {
	block: css`
    padding: 2rem;
  `,
	thin: css`
    padding: 0.6rem 2rem;
  `,
};

const notificationStyles = ({
	type = 'danger',
	variant = 'block',
}) => css`
  ${base}
  ${types[type]}
  ${variants[variant]}
`;

const Notification = ({
	children,
	component: Component = 'div',
	type = 'danger',
	variant = 'block',
	...props
}) => (
	<Component
		css={notificationStyles({ type, variant })}
		role="alert"
		{...props}
	>
		<Typography
			color="white"
			type="text2"
			noMargin
			noPadding
			component="div"
		>
			{children}
		</Typography>
	</Component>
);

Notification.propTypes = {
	children: node,
	component: oneOfType([func, string]),
	type: oneOf([
		'danger',
		'primary',
		'success',
	]),
	variant: oneOf([
		'block',
		'thin',
	]),
};

export default Notification;
