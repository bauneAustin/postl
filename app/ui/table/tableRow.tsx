import { ChangeEvent } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";

export default function TableRow({
  keyValue,
  value,
  id,
  onChange,
  onRemove,
}: {
  keyValue: string;
  value: string;
  id: string;
  onChange: (evt: ChangeEvent<HTMLElement>, type: string, id: string) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <tr>
      <td className="border border-1 border-silver-950 border-opacity-30 p-2">
        <XMarkIcon
          onClick={() => onRemove(id)}
          className="w-6 h-6 ml-1 text-silver-900 hover:text-silver-800 cursor-pointer"
        />
      </td>
      <td className="border border-1 border-silver-950 border-opacity-30 p-2">
        <input
          className="w-96 focus:outline-none ml-2"
          onChange={(evt: ChangeEvent<HTMLElement>) =>
            onChange(evt, "keyValue", id)
          }
          type="text"
          value={keyValue}
        />
      </td>
      <td className="border border-1 border-silver-950 border-opacity-30 p-2">
        <input
          className="w-96 focus:outline-none ml-2"
          onChange={(evt: ChangeEvent<HTMLElement>) =>
            onChange(evt, "value", id)
          }
          type="text"
          value={value}
        />
      </td>
    </tr>
  );
}
