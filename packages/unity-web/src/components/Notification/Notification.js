/** @jsx jsx */
import { jsx, css } from '@emotion/core';
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

const Notification = ({ children,  ...props }) => (
	<div
		css={notificationStyles(props)}
		role="alert"
		{...props}
	>
		<Typography
			color="white"
			type="text2"
			noMargin
			noPadding
		>
			{children}
		</Typography>
	</div>
);

export default Notification;
