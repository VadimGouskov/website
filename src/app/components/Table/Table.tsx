import * as React from "react";
interface Entry {
  label: string;
  value: string;
}

type Table = {
  data: Entry[];
};

export const Table: React.FC<Table> = (props) => {
  return (
    <div>
      {props.data.map((row, index) => {
        return (
          <div
            key={`row-${index}`}
            className="flex border-t last-of-type:border-b border-r border-l"
          >
            <div className="border-r px-1 basis-1/3">{row.label}</div>
            <div className="flex-auto px-1">{row.value}</div>
          </div>
        );
      })}
    </div>
  );
};
