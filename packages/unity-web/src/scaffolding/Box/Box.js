import styled from '@emotion/styled';
import { bool, oneOf } from 'prop-types';

const Box = styled.div`
	padding-top: ${({ withGutterTop, withGutter }) => withGutterTop || withGutter ? '1rem' : '0rem'};
	padding-bottom: ${({ withGutterBottom, withGutter }) => withGutterBottom || withGutter ? '1rem' : '0rem'};
	padding-left: ${({ withGutterLeft, withGutter }) => withGutterLeft || withGutter ? '1rem' : '0rem'};
	padding-right: ${({ withGutterRight, withGutter }) => withGutterRight || withGutter ? '1rem' : '0rem'};
	float: ${({ pull }) => pull ? pull : 'inherit'};
`;

/**
 * Hack for docz and react-docgen
 */
const BoxProps = () => <div />;
BoxProps.propTypes = {
	pull: oneOf(['left', 'right']),
	withGutter: bool,
	withGutterBottom: bool,
	withGutterLeft: bool,
	withGutterRight: bool,
	withGutterTop: bool,
};

BoxProps.defaultProps = {
	withGutter: false,
	withGutterTop: false,
	withGutterBottom: false,
	withGutterLeft: false,
	withGutterRight: false,
};

Box.propTypes = BoxProps.propTypes;
Box.defaultProps = BoxProps.defaultProps;
export { BoxProps };

export default Box;

