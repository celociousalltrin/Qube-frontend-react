import { List } from "react-content-loader";
import { generateTableBody, generateTableHeader } from "../../utils/common";

import "./style.css";

export const SpreadSheet = ({
  header,
  data,
  isFetched,
  renderSlot,
  renderCompSlot = () => {},
}) => {
  return (
    <div className="spreadSheet-container">
      {isFetched ? (
        <>
          {renderCompSlot()}
          <table className="table-container">
            <thead className="table-head">
              <tr>{generateTableHeader(header)}</tr>
            </thead>
            <tbody>{generateTableBody(header, data, renderSlot)}</tbody>
          </table>
        </>
      ) : (
        <>
          <List />
        </>
      )}
    </div>
  );
};
