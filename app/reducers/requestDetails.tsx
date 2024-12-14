export type TableRowDetail = {
    keyValue: string;
    value: string;
    id: string;
}

export type State = {
    method: string;
    detail: string;
    query: string[];
    queryTableRows: TableRowDetail[];
}

export interface RequestAction {
    type: 'change_method' | 'change_details' | 'change_query_table';
    payload: {
        method?: string;
        detail?: string;
        query?: string[];
        queryRow?: TableRowDetail;
    }
}

export const initialState: State = {
    method: 'get',
    detail: 'params',
    query: [],
    queryTableRows: [{keyValue: 'key', value: 'value', id: '1'}]
};

export const requestReducer = (state: State, action: RequestAction) => {
    switch(action.type) {
        case 'change_method':
            state.method = action?.payload?.method || initialState.method;
            break;
        case 'change_details':
            state.detail = action?.payload?.detail || initialState.detail;
            break;
        case 'change_query_table':
            const {queryRow} = action?.payload;
            state.queryTableRows = state.queryTableRows?.map(row => {
                if(row.id === queryRow?.id) {
                    return queryRow;
                }
                return row;
            });
            break;
    }

    return {...state};
}
