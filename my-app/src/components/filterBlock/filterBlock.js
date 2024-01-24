import { useState } from "react";
import FilterButtons from "../filterButtons/filterButtons";
import FilterOptions from "../filterOptions/filterOptions";
import './filterBlock.css'

function FilterBlock() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className="centerblock__filter filter">
      <FilterButtons onClick={toggleVisibility} />
      {visible && <FilterOptions />}
    </div>
  );
}

export default FilterBlock;