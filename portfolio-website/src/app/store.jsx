import { configureStore } from "@reduxjs/toolkit";
import AboutReducer from "./aboutSlide";
import ServicesRedurcer from "./servicesSlide";
import ExperienceRedurcer from "./experienceSlide";
import PortfolioReducer from "./portfolioSlide";
import CompetenceReducer from "./competenceSlide";
export const store = configureStore({
  reducer: {
    about: AboutReducer,
    services: ServicesRedurcer,
    experience: ExperienceRedurcer,
    portfolio: PortfolioReducer,
    competence:CompetenceReducer
  },
});
