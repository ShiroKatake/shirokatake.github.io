import { cleanup, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { SocialItem } from "./SocialItem";
import { Theme } from "../../../theme";
import { FaGithub } from "react-icons/fa";

const renderTest = () => {
  render(
    <ThemeProvider theme={Theme}>
      <SocialItem href="https://github.com/" icon={<FaGithub/>}>Test social item</SocialItem>
    </ThemeProvider>
  );
}

describe("SocialItem", () => {
  afterEach(cleanup);
  
  it("should render correct text and href", () => {
    renderTest();
    const socialItem = screen.getByTestId("social-item-anchor") as HTMLAnchorElement;
    
    expect(socialItem.href).toBe("https://github.com/");
    expect(socialItem.textContent).toBe("Test social item");
  });
});
