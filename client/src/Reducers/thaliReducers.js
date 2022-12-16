export const getAllThalisReducer = (state = {}, action) => {
	switch (action.type) {
		case "GET_THALI_REQUEST":
			return {
				...state,
			};
		case "GET_THALI_SUCCESS":
			return {
				thalis: action.payload,
			};
		case "GET_THALI_FAILED":
			return {
				error: action.payload,
			};
		default:
			return state;
	}
};
