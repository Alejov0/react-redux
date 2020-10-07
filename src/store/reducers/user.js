const initialState = null

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SIGN_IN':
			return { ...payload }
		case 'UPDATE_USER':
			return { ...state, ...payload }
		case 'SIGN_OUT':
			return false
		default:
			return state
	}
}
