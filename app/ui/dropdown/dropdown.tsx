import { RequestAction, State } from "@/app/reducers/requestDetails";
import { ActionDispatch, ChangeEvent } from "react";

export default function DropDown(props: {
  requestState: State;
  dispatch: ActionDispatch<[action: RequestAction]>;
}) {
  const { requestState, dispatch } = props;
  const getTextColor = (method: string): string | undefined => {
    switch (method) {
      case "get":
        return "text-green-700";
      case "post":
        return "text-yellow-700";
      case "put":
        return "text-blue-700";
      case "patch":
        return "text-purple-700";
      case "delete":
        return "text-red-800";
    }
  };

  const onChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "change_method", payload: { method: evt.target.value } });
  };

  return (
    <div className="cursor-pointer font-semibold">
      <select
        onChange={onChange}
        className={`w-28 p-2 bg-transparent box-border focus:outline-0 focus:border-2 focus:rounded-s-lg focus:border-blue-400 ${getTextColor(requestState.method)} cursor-pointer`}
        name="post_method"
        id="post_method"
      >
        <option className={`${getTextColor("get")}`} value="get">
          GET
        </option>
        <option className={`${getTextColor("post")}`} value="post">
          POST
        </option>
        <option className={`${getTextColor("put")}`} value="put">
          PUT
        </option>
        <option className={`${getTextColor("patch")}`} value="patch">
          PATCH
        </option>
        <option className={`${getTextColor("delete")}`} value="delete">
          DELETE
        </option>
      </select>
    </div>
  );
}
