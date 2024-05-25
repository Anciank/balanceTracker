import { deleteRecord, getRecords } from "@/services/actions";
import DeleteButton from "./DeleteButton";
import { QueryResultRow } from "@vercel/postgres";
import { Record } from "@/services/definitinons";

export default async function BalanceList({ data } : { data: Record[]}) {
  return (
    <>
      <ul className="flex flex-col justify-center gap-2 mt-2">
        {data.map((item) => (
          <li
            className="flex justify-between border-solid border-blue-800 border-2 items-center"
            key={item.id}
          >
            <p className="ml-3 cormorant-garamond-semibold text-xl">{(item.amountInCents)} ¥</p>
            <DeleteButton id={item.id} />
          </li>
        ))}
      </ul>
    </>
  );
}
