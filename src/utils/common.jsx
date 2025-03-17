import { SpreadSheetCelltype } from "./constant";

export const generateTableHeader = (header) => {
  return header.map(({ field, name, width }) => (
    <th className="spreadSheet-header-column" key={field} style={{ width }}>
      {name}
    </th>
  ));
};

export const getNestedValue = (key, data) => {
  return key.split(".").reduce((acc, curr) => acc?.[curr], data);
};

export function formatDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function strAppendFn(value) {
  return `${value} mb`;
}

export function convertNumToDur(value) {
  const minute = String(Math.floor(value / 60)).padStart(2, "0");
  const seconds = String(value % 60).padStart(2, "0");
  return `${minute}:${seconds}`;
}

export function convertNumToDurInText(value) {
  const minute = Math.floor(value / 60);
  const seconds = value % 60;
  return `${minute} minutes ${seconds} seconds`;
}

const formatTableCell = (obj, column, renderSlot) => {
  const { formatFn, type, field, isNested } = column;

  if (type === SpreadSheetCelltype.SLOT) {
    return renderSlot(field, obj);
  }

  const value = isNested ? getNestedValue(field, obj) : obj[field];
  return value ? (formatFn ? formatFn(value) : value) : "-";
};

export const generateTableBody = (header, data, renderSlot) => (
  <>
    {data.map((obj) => (
      <tr key={obj._id}>
        {header.map((column) => (
          <td className="table-body-cell" key={column.field}>
            {formatTableCell(obj, column, renderSlot)}
          </td>
        ))}
      </tr>
    ))}
  </>
);
