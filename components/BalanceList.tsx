import { Card, CardBody } from "@nextui-org/react";
import DeleteButton from "./DeleteButton";
import { Record, formatDate } from "@/services/definitions";

export default async function BalanceList({ data }: { data: Record[] }) {
  return (
    <>
      <ul className="flex flex-col justify-center gap-2 mt-2">
        {data.map((item) => (
          <li
            key={item.id}
          >
            <Card shadow="lg">
            <CardBody className="flex flex-row justify-between items-baseline">

            <p className="ml-3 cormorant-garamond-semibold text-xl">
              {item.amountInCents} ¥
            </p>
            <p className="cormorant-garamond-semibold text-xl">
              {formatDate(item.time)}
            </p>
            <DeleteButton id={item.id} />
            </CardBody>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
