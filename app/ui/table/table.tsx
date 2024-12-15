"use client";
import { v4 as uuidv4 } from "uuid";
import { PlusIcon } from "@heroicons/react/16/solid";
import { ActionDispatch, ChangeEvent } from "react";
import TableRow from "./tableRow";
import {
  RequestAction,
  State,
  TableRowDetail,
} from "@/app/reducers/requestDetails";
export default function Table(props: {
  requestState: State;
  dispatch: ActionDispatch<[action: RequestAction]>;
}) {
  const { requestState, dispatch } = props;

  const onChange = (
    evt: ChangeEvent<HTMLElement>,
    type: string,
    id: string,
  ) => {
    const queryRow: TableRowDetail = requestState.queryTableRows?.filter(
      (row: TableRowDetail) => row.id === id,
    )[0];
    // @ts-expect-error need to look into why ts unhappy here
    queryRow[type] = evt?.target?.value;
    dispatch({ type: "change_query_table", payload: { queryRow } });
  };

  const addRow = () => {
    const newRow: TableRowDetail = {
      keyValue: "newKey",
      value: "newVal",
      id: uuidv4(),
    };
    dispatch({ type: "add_query_table_row", payload: { queryRow: newRow } });
  };

  const onRemove = (id: string) => {
    dispatch({ type: "remove_query_table_row", payload: { id } });
  };

  return (
    <div className="">
      <table className="table-fixed w-full mt-10 ml-2 mr-2">
        <thead>
          <tr>
            <th className="border border-1 border-silver-950 border-opacity-30 w-12 p-2"></th>
            <th className="border border-1 border-silver-950 border-opacity-30 text-left p-2">
              Key
            </th>
            <th className="border border-1 border-silver-950 border-opacity-30 rounded-tr-lg text-left p-2">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {requestState?.queryTableRows?.map((row) => {
            return (
              <TableRow
                onChange={onChange}
                onRemove={onRemove}
                keyValue={row.keyValue}
                value={row.value}
                id={row.id}
                key={row.id}
              />
            );
          })}
        </tbody>
      </table>
      <div className="flex w-full justify-start mt-4 ml-4 mb-4">
        <button
          onClick={addRow}
          className="w-5 h-3 p-4 relative rounded bg-silver-900 text-silver-100 hover:bg-silver-800 cursor-pointer"
        >
          <PlusIcon className="relative h-10 w-10 text-silver-100 bottom-5 right-5" />
        </button>
      </div>
    </div>
  );
}
