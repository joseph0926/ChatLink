import { columns, currentState } from '@/contents/home-table-contents';
import DataTable from '../ui/data-table';

export default function CurrentState() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={currentState} />
    </div>
  );
}
