import { useEffect, useState } from "react";
import { IProjectResponse } from "../../models/IProjectResponse";
import { getProjects } from "../../services/projectService";
import "../Projects/projects.scss";

export const Projects = () => {
  const [projects, setProjects] = useState<IProjectResponse[]>([]);

  useEffect(() => {
    const getData = async () => {
      let projectsFromGit = await getProjects();
      setProjects(projectsFromGit);
    };

    if (projects.length > 0) return;

    getData();
  });

  let projectHtml = projects
    .filter((p) => p.description)
    .map((project) => {
      if (project.description !== "")
        return (
          <div className="projects" key={project.id}>
            <div className="projects__container">
              <h3 className="projects__container__title">{project.name}</h3>
              <span className="projects__container__description">
                {project.description}
              </span>
              <br />
              <button className="projects__button">Se projekt</button>
            </div>
          </div>
        );
    });

  return <div> {projectHtml} </div>;
};
