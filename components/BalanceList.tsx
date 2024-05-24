import { deleteRecord, getRecords } from "@/services/actions";
import DeleteButton from "./DeleteButton";

export default async function BalanceList() {
  const data = await getRecords();
  //data is a list, foreach data item, parse the item.time 2024-05-24T03:09:35.766Z and order by it

  return (
    <>
      <ul className="flex flex-col justify-center gap-2 mt-2">
        {data.map((item) => (
          <li
            className="flex justify-between border-solid border-blue-800 border-2 items-center"
            key={item.id}
          >
            <p className="ml-3 cormorant-garamond-semibold text-xl">{(item.amountincents / 100).toString()} ¥</p>
            <DeleteButton id={item.id} />
          </li>
        ))}
      </ul>
    </>
  );
}
