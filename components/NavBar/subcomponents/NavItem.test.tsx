import { cleanup, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { NavItem } from "./NavItem";
import { colors, Theme } from "../../../theme";

const renderTest = (primary?: boolean) => {
  render(
    <ThemeProvider theme={Theme}>
      <NavItem primary={primary} href="somewhere.com">Test nav item</NavItem>
    </ThemeProvider>
  );
}

const primaryStyle = `
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.accent_300};
`;

describe("NavItem", () => {
  afterEach(cleanup);
  
  it("should render correct text and href", () => {
    renderTest();
    const navItem = screen.getByRole("link", {name: /Test nav item/i});
    
    expect(navItem).toBeInTheDocument();
  });

  it("should render correct style if is primary", () => {
    renderTest(true);
    const navItem = screen.getByRole("link", {name: /Test nav item/i});
    const navItemContainer = screen.getByTestId("nav-item");

    expect(navItem).toBeInTheDocument();
    expect(navItemContainer).toHaveStyle(primaryStyle);
  });
});
