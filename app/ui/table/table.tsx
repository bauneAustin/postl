'use client';
import { v4 as uuidv4 } from 'uuid';
import { ActionDispatch, ChangeEvent } from "react";
import TableRow from "./tableRow";
import { RequestAction, State, TableRowDetail } from '@/app/reducers/requestDetails';
export default function Table(props: { requestState: State, dispatch: ActionDispatch<[action: RequestAction]> }) {
    const { requestState, dispatch } = props;

    const onChange = (evt: ChangeEvent<HTMLElement>, type: string, id: string) => {
        const queryRow: TableRowDetail = requestState.queryTableRows?.filter((row: TableRowDetail) => row.id === id)[0];
        // @ts-ignore
        queryRow[type] = evt?.target?.value;
        dispatch({type: 'change_query_table', payload: {queryRow}});
    };

    return (
        <table className="table-fixed w-full mt-10 ml-2 mr-2">
            <thead>
                <tr>
                    <th className="border border-1 border-silver-950 border-opacity-30 w-12 p-2"></th>
                    <th className="border border-1 border-silver-950 border-opacity-30 text-left p-2">Key</th>
                    <th className="border border-1 border-silver-950 border-opacity-30 rounded-tr-lg text-left p-2">Value</th>
                </tr>
            </thead>
            <tbody>
                {
                    requestState?.queryTableRows?.map((row) => {
                        return <TableRow
                            onChange={onChange}
                            keyValue={row.keyValue}
                            value={row.value}
                            id={row.id}
                            key={row.id}/>
                    })
                }
            </tbody>
        </table>
    );
};
