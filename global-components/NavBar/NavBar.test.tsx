import { cleanup, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { NavBar } from "./NavBar";
import { colors, Theme } from "../../theme";

const renderTest = () => {
  render(
    <ThemeProvider theme={Theme}>
      <NavBar/>
    </ThemeProvider>
  );
}

const primaryStyle = `
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.accent_300};
`;

describe("NavBar", () => {
  afterEach(cleanup);
  
  it("should render correct number of nav items", () => {
    renderTest();
    const navItems = screen.getAllByTestId("nav-item");

    expect(navItems.length).toBe(4);
  });

  it("should render name as first and primary NavItem", () => {
    renderTest();
    const navItems = screen.getAllByTestId("nav-item");

    expect(navItems[0]).toHaveStyle(primaryStyle);
    expect(navItems[0].textContent).toBe("Khang Trinh");
  });
});
