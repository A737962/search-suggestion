import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Main1 from "./Main1";

describe("Counter testing", () => {
  test("should render the title of counter", () => {
    const wrapper = shallow(<Main1 />);
    expect(wrapper.find("div").text()).toContain("This is a counter app");
    const { getByText } = render(<Main1 />);
    const linkElement = getByText("This is a counter app");
    console.log("Wrapper is ", wrapper.debug());
    expect(linkElement).toBeInTheDocument();
  });
});
