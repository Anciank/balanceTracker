import AddBalance from "@/components/AddBalance";
import BalanceList from "@/components/BalanceList";
import Header from "@/components/Header";

export default function Home() {
  return (

      <div className="flex justify-center">
        <div className="max-w-xl flex flex-col">
          <Header />
          <AddBalance />
          <BalanceList />
        </div>
      </div>
  );
}
