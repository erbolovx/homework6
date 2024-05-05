import { Tab, Tabs } from "@mui/material";
import React from "react";

const TabsComponent = ({
  categoriesSelect,
  value,
  setValue,
  valueKey = "value",
  labelKey = "label",
}) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs centered value={value} onChange={handleChange}>
        {categoriesSelect.map((tab) => (
          <Tab
            key={tab[valueKey]}
            value={tab[valueKey]}
            label={tab[labelKey]}
          ></Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default TabsComponent;
