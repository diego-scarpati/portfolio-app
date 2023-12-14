import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum SectionEnum {
  "ABOUT" = "ABOUT",
  "EXPERIENCE" = "EXPERIENCE",
  "SIDE PROJECTS" = "SIDE PROJECTS",
}

type initialStateType = {
  experience: number;
  projects: number;
  section: SectionEnum;
};

const initialState: initialStateType = {
  experience: 0,
  projects: 0,
  section: SectionEnum.ABOUT,
};

const sectionSlice = createSlice({
  name: "section",
  initialState: initialState,
  reducers: {
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setSection: (state, action: PayloadAction<SectionEnum>) => {
      state.section = action.payload;
    },
  },
});

export default sectionSlice.reducer;

export const { setExperience, setProjects, setSection } = sectionSlice.actions;
