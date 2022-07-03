import { cleanup, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../theme";
import { Projects } from "./Projects";
import gameProjectMockData from "../../mocks/gameProjects.json";

const renderTest = () => {
  render(
    <ThemeProvider theme={Theme}>
      <Projects projectsData={gameProjectMockData}/>
    </ThemeProvider>
  );
}

describe("ProjectCard", () => {
  it("should render correct title", () => {
    renderTest();
    const projects = screen.getAllByTestId("projectcard-container");
    expect(projects).toHaveLength(4);
    cleanup();
  });
});
