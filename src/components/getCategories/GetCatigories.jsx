import React from "react";
import { VALUES } from "../../MainPage/MainPage";
import Souz from "../souz/Souz";
import History from "../history/History";
import Organ from "../organ/Organ";
import Project from "../project/Project";
import OurTeam from "../ourTeam/OurTeam";
import RecipeReviewCard from "../card/Card";
import { Container } from "@mui/material";

const GetCategories = ({ action }) => {
  switch (action) {
    case VALUES.souz:
      return <Souz />;
    case VALUES.history:
      return <History children={<RecipeReviewCard />} />;
    case VALUES.organ:
      return <Organ />;
    case VALUES.project:
      return <Project children={<Container />} />;
    case VALUES.ourTeam:
      return <OurTeam />;
    default:
      return <></>;
  }
};

export default GetCategories;
