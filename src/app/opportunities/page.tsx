import { opportunities_data } from "@/dummy_data/opportunities";
import OpportunityCard from "@/components/OpportunityCard";
import SearchBar from "@/components/SearchBar";
import CategoryPannel from "@/components/CategoryPannel";

const OpportunitiesPage = () => {
  return (
    <main className="flex flex-col justify-center items-center border-gray-300 w-full lg:w-screen">
      <span className="py-4 w-full px-4 lg:px-0">
        <SearchBar />
      </span>
      <span className="hidden lg:block md:block border-b-1 border-gray-300 w-full"></span>
      <div className="w-full px-4 lg:px-0">
        <CategoryPannel />
      </div>
      <span className="m-2 p-2 lg:m-4 lg:p-4 grid gap-3 lg:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-7xl lg:w-[1300px] mx-auto">
        {opportunities_data.map((opportunity) => (
          <OpportunityCard key={opportunity.id} data={opportunity} />
        ))}
      </span>
    </main>
  );
};

export default OpportunitiesPage;