import { opportunities_data } from "@/dummy_data/opportunities";
import OpportunityCard from "@/components/OpportunityCard";
import SearchBar from "@/components/SearchBar";
import CategoryPannel from "@/components/CategoryPannel";
import { Suspense } from "react";

// Simulating data fetching
async function getOpportunities() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return opportunities_data;
}

// Loading component
function OpportunitiesLoading() {
  return (
    <div className="animate-pulse grid gap-3 lg:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="bg-gray-200 rounded-xl h-[350px]"></div>
      ))}
    </div>
  );
}

async function OpportunitiesList() {
  const opportunities = await getOpportunities();
  
  return (
    <div className="grid gap-3 lg:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
      {opportunities.map((opportunity) => (
        <OpportunityCard key={opportunity.id} data={opportunity} />
      ))}
    </div>
  );
}

export default async function OpportunitiesPage() {
  return (
    <main className="flex flex-col justify-center items-center border-gray-300 w-full lg:w-screen">
      <span className="py-4 w-full px-4 lg:px-0">
        <SearchBar />
      </span>
      <span className="hidden lg:block md:block border-b-1 border-gray-300 w-full"></span>
      <div className="w-full px-4 lg:px-0">
        <CategoryPannel />
      </div>
      <span className="m-2 p-2 lg:m-4 lg:p-4 w-full max-w-7xl lg:w-[1300px] mx-auto">
        <Suspense fallback={<OpportunitiesLoading />}>
          <OpportunitiesList />
        </Suspense>
      </span>
    </main>
  );
}