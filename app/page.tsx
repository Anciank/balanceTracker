import AddBalance from "@/components/AddBalance";
import BalanceList from "@/components/BalanceList";
import ChartComponent from "@/components/ChartComponent";
import Header from "@/components/Header";
import { getRecords } from "@/services/actions";

export default async function Home() {
  const data = await getRecords(); 
  return (
      <div className="flex justify-center">
        <div className="max-w-xl flex flex-col px-4 sm:px-0">
          <Header />
          <AddBalance />
          <ChartComponent data={data}/>
          <BalanceList data={data}/>
        </div>
      </div>
  );
}
