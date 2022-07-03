import { cleanup, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { SocialBar } from "./SocialBar";
import { Theme } from "../../theme";

const renderTest = () => {
  render(
    <ThemeProvider theme={Theme}>
      <SocialBar/>
    </ThemeProvider>
  );
}

describe("SocialBar", () => {
  afterEach(cleanup);
  
  it("should render correct number and order of items", () => {
    renderTest();
    const socialItems = screen.getAllByTestId("social-item-anchor") as HTMLAnchorElement[];
    expect(socialItems.length).toBe(4);
    expect(socialItems[0].href).toContain("github.com");
    expect(socialItems[1].href).toContain("itch.io");
    expect(socialItems[2].href).toContain("linkedin.com");
    expect(socialItems[3].href).toContain("twitter.com");
  });
});
