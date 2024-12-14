import { RequestAction, State } from "@/app/reducers/requestDetails";
import { ActionDispatch } from "react";

export default function RequestOptions(props: {
  requestState: State;
  dispatch: ActionDispatch<[action: RequestAction]>;
}) {
  const { requestState, dispatch } = props;
  const selectedStyle = "box-border border-b-[2px] border-red-900";

  const onClick = (detail: string) => {
    dispatch({ type: "change_details", payload: { detail: detail } });
  };

  return (
    <div className="flex mt-4 w-full">
      <div
        onClick={() => onClick("params")}
        className={`ml-2 mr-4 text-sm text-silver-900 cursor-pointer ${requestState.detail === "params" ? selectedStyle : ""}`}
      >
        Params
      </div>
      <div
        onClick={() => onClick("headers")}
        className={`mr-4 text-sm text-silver-900 cursor-pointer ${requestState.detail === "headers" ? selectedStyle : ""}`}
      >
        Headers
      </div>
      <div
        onClick={() => onClick("body")}
        className={`mr-4 text-sm text-silver-900 cursor-pointer ${requestState.detail === "body" ? selectedStyle : ""}`}
      >
        Body
      </div>
    </div>
  );
}
