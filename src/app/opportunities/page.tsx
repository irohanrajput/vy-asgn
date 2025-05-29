import { opportunities_data } from "@/dummy_data/oppurtunities";
import OpportunityCard from "@/components/OpportunityCard";

const OpportunitiesPage = () => {
  return (
    <main className="p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {opportunities_data.map((opportunity) => (
        <OpportunityCard key={opportunity.id} data={opportunity} />
      ))}
    </main>
  );
};

export default OpportunitiesPage;
