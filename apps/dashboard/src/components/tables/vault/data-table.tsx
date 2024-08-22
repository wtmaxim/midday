"use client";

import { useVaultContext } from "@/store/vault/hook";
import { Table, TableBody } from "@midday/ui/table";
import { DataTableRow } from "./data-table-row";
import { DataTableHeader } from "./date-table-header";

export function DataTable() {
  const data = useVaultContext((s) => s.data);

  return (
    <Table>
      <DataTableHeader />
      <TableBody className="border-r-0 border-l-0">
        {data?.map((row) => (
          <DataTableRow key={row.name} data={row} />
        ))}
      </TableBody>
    </Table>
  );
}
