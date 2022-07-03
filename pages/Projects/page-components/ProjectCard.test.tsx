import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { ProjectCard } from "./ProjectCard";
import { Theme } from "../../../theme";
import gameProjectMockData from "../../../mocks/gameProjects.json";

const renderTest = () => {
  render(
    <ThemeProvider theme={Theme}>
      <ProjectCard project={gameProjectMockData[1]}/>
    </ThemeProvider>
  );
}

const playMock = jest.fn();
const pauseMock = jest.fn();

window.HTMLMediaElement.prototype.play = () => playMock();
window.HTMLMediaElement.prototype.pause = () => pauseMock();

describe("ProjectCard", () => {
  let user;
  beforeAll(() => {
    user = userEvent.setup();
    renderTest();
  });

  it("should render correct title", () => {
    const projectTitle = screen.getByRole("heading", {level: 2});
    expect(projectTitle.textContent).toBe("Project P.O.D");
  });
  it("should render correct summary", () => {
    const projectSummary = screen.getByText("A real-time strategy game featuring resource and building management, and wave based combat");
    expect(projectSummary).toBeVisible();
  });
  it("should render correct cover image", () => {
    const projectCoverImage = screen.getByRole("img") as HTMLImageElement;
    expect(projectCoverImage.src).toBe("http://localhost/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fme5qn7sh%2Fproduction%2Fadd039a056d4fc37edd675de4954f1781420e27f-1080x1080.png&w=3840&q=75");
  });
  it("should play video when hovering over project card", () => {
    const projectCoverImage = screen.getByRole("img") as HTMLImageElement;
    const projectCard = screen.getByTestId("projectcard-container");
    user.hover(projectCard);
    fireEvent.transitionEnd(projectCoverImage);
    expect(playMock).toHaveBeenCalled();
  });
  it("should pause and reset when not hovering over project card anymore", () => {
    const projectCard = screen.getByTestId("projectcard-container");
    user.unhover(projectCard);
    expect(pauseMock).toHaveBeenCalled();
  });

  cleanup();
});
