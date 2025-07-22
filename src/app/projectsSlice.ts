// https://redux-toolkit.js.org/usage/usage-guide#simplifying-slices-with-createslice
import { createSlice } from "@reduxjs/toolkit";

export interface ProjectState {
  projects: [],
  mainProjects: [],
};

const initialState = {
  projects: [],
  mainProjects: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setMainProjects: (state, action) => {
      state.mainProjects = action.payload;
    },
  },
});

export const selectProjects = (state: {projects: ProjectState}) => state.projects.projects;
export const selectMainProjects = (state: {projects: ProjectState}) => state.projects.mainProjects;
export const { setProjects, setMainProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
