export default function errorToString(error) {
	if (typeof error === 'string') {
		return error;
	}

	if (error && error.message) {
		if (typeof error.message === 'string') {
			return error.message;
		} else if (typeof error.message.message === 'string') {
			return error.message.message;
		} else if (error.message.error) {
			return error.message.error;
		}
	}

	return 'Something bad happened';
};