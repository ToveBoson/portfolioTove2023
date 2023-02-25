import axios from "axios";
import { IProjectResponse } from "../models/IProjectResponse";

export async function getProjects() {
  let getProjects = await axios.get<IProjectResponse[]>(
    "https://api.github.com/users/ToveBoson/repos"
  );
  return getProjects.data;
}
