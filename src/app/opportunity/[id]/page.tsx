import { opportunities_data } from "@/dummy_data/opportunities";
import OpportunityDetail from "@/components/OpportunityDetail";
import { notFound } from "next/navigation";

export const getParams = async () => {
  return opportunities_data.map((opportunity) => ({
    id: opportunity.id,
  }));
};

const OpportunityPage = ({ params }: { params: { id: string } }) => {
  const opportunity = opportunities_data.find((op) => op.id === params.id);

  if (!opportunity) return notFound();

  return <OpportunityDetail data={opportunity} />;
};

export default OpportunityPage;
