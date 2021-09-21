export const reducer = (state, { action }) => {
	const { type, value } = action
	switch (type) {
		case 'SETNEWS':
			return {
				...state,
				news: value,
				loaded: true
			}
		default:
			return state;
	}
}

