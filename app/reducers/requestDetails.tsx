export type TableRowDetail = {
  keyValue: string;
  value: string;
  id: string;
};

export type State = {
  method: string;
  detail: string;
  url: string;
  queryTableRows: TableRowDetail[];
  response?: { data?: unknown; status: number };
};

export interface RequestAction {
  type:
    | "update_url"
    | "change_method"
    | "change_details"
    | "change_query_table"
    | "add_query_table_row"
    | "remove_query_table_row"
    | "update_response";
  payload: {
    method?: string;
    detail?: string;
    url?: string;
    queryRow?: TableRowDetail;
    id?: string;
    response?: { data?: unknown; status: number };
  };
}

export const initialState: State = {
  method: "get",
  detail: "params",
  url: "",
  queryTableRows: [{ keyValue: "key", value: "value", id: "1" }],
};

export const requestReducer = (prevState: State, action: RequestAction) => {
  switch (action.type) {
    case "update_url":
      return { ...prevState, url: action.payload.url };
    case "change_method":
      return {
        ...prevState,
        method: action?.payload?.method || initialState.method,
      };
    case "change_details":
      return {
        ...prevState,
        detail: action?.payload?.detail || initialState.detail,
      };
    case "change_query_table":
      const { queryRow } = action?.payload;
      return {
        ...prevState,
        queryTableRows: prevState.queryTableRows?.map((row) => {
          if (row.id === queryRow?.id) {
            return queryRow;
          }
          return row;
        }),
      };
    case "add_query_table_row":
      const updatedQueryTableRows = [...prevState.queryTableRows];
      if (action.payload.queryRow) {
        updatedQueryTableRows.push(action.payload.queryRow);
      }
      return { ...prevState, queryTableRows: updatedQueryTableRows };
    case "remove_query_table_row":
      const filteredRows = prevState.queryTableRows.filter((row) => {
        return row.id !== action.payload.id;
      });
      return { ...prevState, queryTableRows: filteredRows };
    case "update_response":
      return { ...prevState, response: action.payload.response };
  }
};
