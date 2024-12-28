import { State } from "@/app/reducers/requestDetails";

export default function ResponseBody(props: { requestState: State }) {
  const { requestState } = props;

  return (
    <div className="mt-auto min-h-72 w-full p-2 bg-silver-100 rounded mb-4">
      <span className="block text-silver-950 h-8 w-full underline decoration-2 decoration-red-900 underline-offset-2">
        Response
      </span>
      <div className="h-full w-full mt-6">
        <pre>{JSON.stringify(requestState?.response, null, 2)}</pre>
      </div>
    </div>
  );
}
