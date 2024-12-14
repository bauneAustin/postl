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
  response?: string;
};

export interface RequestAction {
  type:
    | "update_url"
    | "change_method"
    | "change_details"
    | "change_query_table"
    | "add_query_table_row"
    | "remove_query_table_row";
  payload: {
    method?: string;
    detail?: string;
    url?: string;
    queryRow?: TableRowDetail;
    id?: string;
  };
}

export const initialState: State = {
  method: "get",
  detail: "params",
  url: "",
  queryTableRows: [{ keyValue: "key", value: "value", id: "1" }],
};

export const requestReducer = (state: State, action: RequestAction) => {
  switch (action.type) {
    case "update_url":
      return { ...state, url: action.payload.url };
    case "change_method":
      return {
        ...state,
        method: action?.payload?.method || initialState.method,
      };
    case "change_details":
      return {
        ...state,
        detail: action?.payload?.detail || initialState.detail,
      };
    case "change_query_table":
      const { queryRow } = action?.payload;
      return {
        ...state,
        queryTableRows: state.queryTableRows?.map((row) => {
          if (row.id === queryRow?.id) {
            return queryRow;
          }
          return row;
        }),
      };
    case "add_query_table_row":
      const updatedQueryTableRows = [...state.queryTableRows];
      if (action.payload.queryRow) {
        updatedQueryTableRows.push(action.payload.queryRow);
      }
      return { ...state, queryTableRows: updatedQueryTableRows };
    case "remove_query_table_row":
      const filteredRows = state.queryTableRows.filter((row) => {
        return row.id !== action.payload.id;
      });
      return { ...state, queryTableRows: filteredRows };
  }

  return { ...state };
};
