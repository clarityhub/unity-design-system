import { useContext } from 'react';

import ToastManager from '../../contexts/ToastManager';
import { copyToClipboard }  from './utilities';

const CopyToClipboard = ({ children }) => {
	const { createToast } = useContext(ToastManager);

	const onClick = (data) => {
		copyToClipboard(data);

		createToast({
			dedupId: 'copy-to-clipboard',
			message: 'Copied!',
			type: 'success',
		});
	};

	return children({ onClick });
};

export default CopyToClipboard;
