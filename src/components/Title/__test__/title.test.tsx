import { cleanup } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import { Title } from "components"
import Enzyme, { shallow } from "enzyme"
import React from "react"

import App from "App"

Enzyme.configure({ adapter: new Adapter() })
afterEach(cleanup)

describe("Title component tests", () => {
  test("return div with h1 with text ", () => {
    const wrapper = shallow(<App />).find(Title)

    expect(wrapper.find(Title).prop("text")).toBe("Grid game")
  })
})
