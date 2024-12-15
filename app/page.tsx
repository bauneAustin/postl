"use client";
import { useReducer } from "react";
import { initialState, requestReducer } from "./reducers/requestDetails";
import RequestDialog from "./ui/requestDialog/requestDialog";
import RequestOptions from "./ui/requestDialog/requestOptions";
import Table from "./ui/table/table";
import { Cog6ToothIcon } from "@heroicons/react/16/solid";
import ResponseBody from "./ui/response/responseBody";

export default function Home() {
  // @ts-expect-error need to look into why ts unhappy here
  const [requestState, dispatch] = useReducer(requestReducer, initialState);

  return (
    <div className="flex flex-col h-full w-full overflow-y-hidden">
      <main className="flex flex-col h-full w-full items-stretch">
        <div className="flex w-full h-14 bg-silver-50 shadow-md align-middle">
          <span className="relative top-2 ml-4 text-4xl text-silver-800 italic">
            Postl
          </span>
          <div className="flex w-8 h-8 relative text-silver-700 ml-auto top-3 right-2 cursor-pointer">
            <Cog6ToothIcon />
          </div>
        </div>
        <div className="flex w-full h-full">
          <div className="flex w-28 flex-col bg-silver-50 p-4"></div>
          <div className="flex flex-col w-full items-center p-8 overflow-y-auto">
            <RequestDialog requestState={requestState} dispatch={dispatch} />
            <RequestOptions requestState={requestState} dispatch={dispatch} />
            <Table requestState={requestState} dispatch={dispatch} />
            <ResponseBody requestState={requestState} />
          </div>
        </div>
      </main>
    </div>
  );
}
