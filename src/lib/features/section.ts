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
  windowWidth: number;
};

const initialState: initialStateType = {
  experience: 0,
  projects: 0,
  section: SectionEnum.ABOUT,
  windowWidth: 0,
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
    setWidth: (state, action: PayloadAction<number>) => {
      state.windowWidth = action.payload;
    },
  },
});

export default sectionSlice.reducer;

export const { setExperience, setProjects, setSection, setWidth } =
  sectionSlice.actions;
