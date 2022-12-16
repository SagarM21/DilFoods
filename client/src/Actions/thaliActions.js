import axios from "axios";

export const getAllThalis = () => async (dispatch) => {
	dispatch({ type: "GET_THALI_REQUEST" });

	try {
		const response = await axios.get("/api/thalis/getAllThalis");
		console.log(response);
		dispatch({ type: "GET_THALI_SUCCESS", payload: response.data });
	} catch (error) {
		dispatch({ type: "GET_THALI_FAILED", payload: error });
	}
};
