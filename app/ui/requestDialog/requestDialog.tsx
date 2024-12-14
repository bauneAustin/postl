import { RequestAction, State } from "@/app/reducers/requestDetails";
import DropDown from "../dropdown/dropdown";
import { ActionDispatch } from "react";

export default function RequestDialog(props: { requestState: State, dispatch: ActionDispatch<[action: RequestAction]> }) {
    const { requestState, dispatch } = props;
    console.log("DIALOG: ", requestState);
    return (
        <div className='flex w-full h-18 p-1'>
            <div className="flex w-full border rounded-lg mr-2">
                <DropDown requestState={requestState} dispatch={dispatch}/>
                <span className="flex relative top-[4px] left-[8px] text-center opacity-40 text-xl">|</span>
                <input
                    className="flex-1 ml-2 border-none indent-2 focus:outline-none outline-none"
                    type="text"
                    width='w-full'
                    placeholder="Enter url"
                    />
            </div>
            <button className="p-2 rounded bg-blue-600 hover:bg-blue-500 text-silver-50 cursor-pointer">
                Send
            </button>
        </div>
    )
}