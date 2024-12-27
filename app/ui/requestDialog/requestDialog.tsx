import { RequestAction, State } from "@/app/reducers/requestDetails";
import DropDown from "../dropdown/dropdown";
import { ActionDispatch, ChangeEvent } from "react";

export default function RequestDialog(props: {
  requestState: State;
  dispatch: ActionDispatch<[action: RequestAction]>;
}) {
  const { requestState, dispatch } = props;

  const onChange = (evt: ChangeEvent<HTMLElement>) => {
    // @ts-expect-error need to look into why ts unhappy here
    dispatch({ type: "update_url", payload: { url: evt?.target?.value } });
  };

  const makeRequest = async () => {
    const queryParams = new URLSearchParams();
    if (requestState.detail === "params") {
      requestState.queryTableRows.forEach((row) => {
        queryParams.set(row.keyValue, row.value);
      });
    }

    const response = await fetch(
      requestState.url + "?" + queryParams.toString(),
      {
        method: requestState.method.toUpperCase(),
      },
    )
      .then((res) => res.json())
      .then((data) => data);

    dispatch({ type: "update_response", payload: { response } });
  };

  return (
    <div className="flex w-full h-18 p-1">
      <div className="flex w-full border rounded-lg mr-2">
        <DropDown requestState={requestState} dispatch={dispatch} />
        <span className="flex relative top-[4px] left-[8px] text-center opacity-40 text-xl">
          |
        </span>
        <input
          onChange={onChange}
          value={requestState.url}
          className="flex-1 ml-2 border-none indent-2 focus:outline-none outline-none"
          type="text"
          width="w-full"
          placeholder="Enter url"
        />
      </div>
      <button
        onClick={makeRequest}
        className="p-2 rounded bg-blue-600 hover:bg-blue-500 text-silver-50 cursor-pointer"
      >
        Send
      </button>
    </div>
  );
}
