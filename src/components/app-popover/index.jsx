import { albumTypeOptions } from "../../utils/constant";
import "./style.css";

export const AppPopover = ({ selectedType, handleCheck }) => {
  return (
    <div className="popover-conatiner">
      {albumTypeOptions.map(({ label, value }) => {
        return (
          <p
            className="popover-label"
            key={value}
            onClick={() => handleCheck(value)}
          >
            <input type="checkbox" checked={selectedType.includes(value)} />
            {label}
          </p>
        );
      })}
    </div>
  );
};
