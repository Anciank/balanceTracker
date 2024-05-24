import AddBalance from "@/components/AddBalance";
import BalanceList from "@/components/BalanceList";

export default function Home() {
  return (

      <div className="flex justify-center">
        <AddBalance />
        <BalanceList />
      </div>
  );
}
