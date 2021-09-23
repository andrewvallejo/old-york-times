export const reducer = (state, { action }) => {
	const { type, value } = action
	switch (type) {
		case 'SETNEWS':
			return {
				...state,
				news: value,
				loaded: true
			}
		case 'SETSECTION':
			return {
				...state,
				section: value,
				loaded: false
			}
		default:
			return state;
	}
}

