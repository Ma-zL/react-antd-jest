import * as constants from "../funcs/constants";

// test reducer name
it("test reducer name", () => {
	expect(constants.REDUCER_NAME).toBe("login");
});

// test action types
it("test action types", () => {
	expect(constants.LOGIN_REQUEST).toBe("LOGIN/LOGIN_REQUEST");
	expect(constants.LOGIN_REQUEST_SUCCESS).toBe("LOGIN/LOGIN_REQUEST_SUCCESS");
});

// test actions
it("test actions", () => {
	const rst = constants.loginSuccess();
	expect(rst).toEqual({
		type: constants.LOGIN_REQUEST_SUCCESS,
		loginSuccess: true
	});
});
