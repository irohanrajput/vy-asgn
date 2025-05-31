import { opportunities_data } from "@/dummy_data/opportunities";
import OpportunityDetail from "@/components/OpportunityDetail";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  return opportunities_data.map((opportunity) => ({
    id: opportunity.id,
  }));
};

interface PageProps {
  params: Promise<{ id: string }>;
}

const OpportunityPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const opportunity = opportunities_data.find((op) => op.id === id);

  if (!opportunity) return notFound();

  return <OpportunityDetail data={opportunity} />;
};

export default OpportunityPage;