import React, { createContext, useReducer } from 'react';
import styled from '@emotion/styled';

import ModalPortal from '../../components/Modals/ModalPortal';
import Notification from '../../components/Notification';

const ToastWrapper = styled.div`
    display: flex;
    flex-flow: column;
    position: fixed;
    top: 4rem;
    left: 50%;
    z-index: 99999;

    > * {
        max-width: auto;
        margin: 0.25rem;
        display: inline-block;
        transform: translateX(-50%);
        width: auto !important;
    }
`;

const Toast = ({ message, ...props }) => (
	<Notification {...props}>
		{message}
	</Notification>
);

const ToastManager = createContext();

const initialState = {
	toasts: [],
};

const reducer = (state, action) => {
	switch (action.type) {
	case 'create': {
		if (state.toasts.find(t => t.dedupId === action.data.dedupId)) {
			return state;
		} else {
			return {
				toasts: [action.data, ...state.toasts],
			};
		}
	}
	case 'clear':
		return {
			toasts: state.toasts.filter(t => t.dedupId !== action.dedupId),
		};
	default:
		return state;
	}
};

const ToastManagerProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = {
		createToast: (data) => {
			const dedupId = data.dedupId || Date.now();

			dispatch({
				type: 'create',
				data: {
					dedupId,
					...data,
				},
			});

			// Auto clear the toast
			// TODO @anna use setinterval to have a regular
			// cadence for removing toasts
			setTimeout(() => {
				dispatch({
					type: 'clear',
					dedupId,
				});
			}, 3000);
		},
	};

	return (
		<ToastManager.Provider value={value}>
			<ModalPortal>
				<ToastWrapper>
					{state.toasts.map(t => (
						<Toast key={t.dedupId} {...t} variant="thin" />
					))}
				</ToastWrapper>
			</ModalPortal>

			{props.children}
		</ToastManager.Provider>
	);
};

export default ToastManager;
export { ToastManagerProvider };
