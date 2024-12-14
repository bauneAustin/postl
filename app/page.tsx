'use client';
import { useReducer } from "react";
import { initialState, requestReducer } from "./reducers/requestDetails";
import RequestDialog from "./ui/requestDialog/requestDialog";
import RequestOptions from "./ui/requestDialog/requestOptions";
import Table from "./ui/table/table";
import { Cog6ToothIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const [requestState, dispatch] = useReducer(requestReducer, initialState);

  return (
    <div className="flex flex-col h-full w-full">
      <main className="flex flex-col h-full w-full items-stretch">
        <div className='flex w-full h-14 bg-silver-50 shadow-md align-middle'>
          <div className='flex w-8 h-8 relative text-silver-700 ml-auto top-3 right-2 cursor-pointer'>
            <Cog6ToothIcon />
          </div>
        </div>
        <div className="flex w-full h-full">
          <div className="flex h-full flex-col bg-silver-50 p-4">
            Collapsible pannel
          </div>
          <div className="flex flex-col h-full w-full items-center p-8">
            <RequestDialog requestState={requestState} dispatch={dispatch} />
            <RequestOptions requestState={requestState} dispatch={dispatch} />
            <Table requestState={requestState} dispatch={dispatch} />
          </div>
        </div>
      </main>
      <footer className="flex h-10 w-full gap-6 bg-silver-50 items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
