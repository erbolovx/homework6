import React, { useState } from "react";
import { variants } from "../App";
import Container from "../components/Container/Container";
import TabsComponent from "../components/Container/Tabs";
import GetCategories from "../components/getCategories/GetCatigories";

export const VALUES = {
  souz: "souz",
  history: "history",
  organ: "organ",
  project: "project",
  ourTeam: "our team",
};
export const categoriesSelect = [
  {
    value: VALUES.souz,
    label: "О союзе",
  },
  {
    value: VALUES.history,
    label: "История организации",
  },
  {
    value: VALUES.organ,
    label: "Органы управления и деятельность ",
  },
  {
    value: VALUES.project,
    label: "Реализуемые проекты",
  },
  {
    value: VALUES.ourTeam,
    label: "Наша команда",
  },
];

const MainPage = () => {
  const [value, setValue] = useState(categoriesSelect?.[0].value);
  return (
    <div>
      <Container variant={variants.mid}>
        <TabsComponent
          categoriesSelect={categoriesSelect}
          value={value}
          setValue={setValue}
        />
        <GetCategories action={value} />
      </Container>
    </div>
  );
};

export default MainPage;
