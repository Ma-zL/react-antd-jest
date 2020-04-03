import React from "react";
import Enzyme, { shallow } from "enzyme";
import { Login } from "../views/container";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("test views render", () => {
	it("should render <Login /> with background", () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find(".login_cont").exists()).toBeTruthy();
	});
});
