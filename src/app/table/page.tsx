import DataTable from "./navbar/chart";
import Header from "./navbar/head";
import List from "./navbar/list";
import CreateTable from "./navbar/table";

const Chart = () => {
  return (
    <div className="px-6 py-6 bg-[#DBDFE1] ">

      <div className="">
      <Header />
      </div>

      <div className="pt-10 flex items-center justify-center">
      <DataTable />
      </div>

      <div className="pt-10 rounded">
      <CreateTable />
      </div>

      <div className="pt-10">
      <List />
      </div>

    </div>
  )
}
export default Chart;