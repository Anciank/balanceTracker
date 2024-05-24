import { getData } from "@/services/actions"

export default function BalanceList() {
  const data = getData();
  return <>
    <ul>
      {data}
    </ul>
  </>
}