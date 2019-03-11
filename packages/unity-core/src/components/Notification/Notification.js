/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Typography from '../Typography';
import borders from '../../theme/borders';
import colors from '../../theme/colors';

const base = css`
  border-radius: ${borders.borderRadius};
  padding: 2rem;
  position: relative;
`;

const types = {
	danger: css`
    background-color: ${colors.danger};
    color: ${colors.white};
  `,
	primary: css`
    background-color: ${colors.primary};
    color: ${colors.white};
  `,
	success: css`
    background-color: ${colors.success};
    color: ${colors.white};
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
