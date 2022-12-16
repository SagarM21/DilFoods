import axios from "axios";

export const getAllThalis = () => (dispatch) => {
	dispatch({ type: "GET_THALI_REQUEST" });

	try {
		const response = axios.get("/api/thalis/getThalis");
		console.log(response);
		dispatch({ type: "GET_THALI_SUCCESS", payload: response.data });
	} catch (error) {
		dispatch({ type: "GET_THALI_FAILED", payload: error });
	}
};
