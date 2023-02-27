import { useState } from "react";
import { FilterOption } from "src/shared/filter-option";
import styles from "./filter.module.css";

export const Filter = ({
  options,
  clickCallback,
}: {
  options: FilterOption[];
  clickCallback: (selectValue: string) => void;
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const uniqueValues: FilterOption[] = options.filter((elem, index) => {
    return (
      options.findIndex(
        (option) => option.id === elem.id && elem.id === option.id
      ) === index
    );
  });
  uniqueValues.push({ id: "", value: "all" });

  const handleClick = (id: string) => {
    setSelectedValue(id);
    clickCallback(id);
  };

  return (
    <div className={styles.filterContainer}>
      {uniqueValues.map((option) => (
        <a
          onClick={handleClick.bind(this, option.id)}
          key={option.id}
          className={`${styles.filterOption} ${
            option.id === selectedValue ? styles.selected : ""
          }`}
        >
          {option.value}
        </a>
      ))}
    </div>
  );
};
