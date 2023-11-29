import { getVault } from "@midday/supabase/cached-queries";
import { DataTable } from "./data-table";
import { EmptyTable } from "./empty-table";

export async function Table({ path }) {
  const { data } = await getVault({ path });

  return (
    <div className="mt-6">
      <DataTable data={data} />
      {data.length === 0 && <EmptyTable type={path} />}
    </div>
  );
}
