'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

type CurrentStateType = {
  id: string;
  groupName: string;
  amount: number;
  status: 'pending' | 'activate' | 'deactivate';
  host: string;
};

const statusBg = {
  pending: 'bg-black',
  activate: 'bg-green-500',
  deactivate: 'bg-red-500'
};

export const currentState: CurrentStateType[] = [
  {
    id: '728ed52f',
    groupName: 'A Group',
    amount: 100,
    status: 'pending',
    host: 'm@example.com'
  },
  {
    id: '489e1d42',
    groupName: 'B Group',
    amount: 125,
    status: 'activate',
    host: 'example@gmail.com'
  },
  {
    id: '728ed52f',
    groupName: 'C Group',
    amount: 100,
    status: 'pending',
    host: 'm@example.com'
  },
  {
    id: '489e1d42',
    groupName: 'D Group',
    amount: 125,
    status: 'activate',
    host: 'example@gmail.com'
  },
  {
    id: '728ed52f',
    groupName: 'E Group',
    amount: 100,
    status: 'pending',
    host: 'm@example.com'
  },
  {
    id: '489e1d42',
    groupName: 'F Group',
    amount: 125,
    status: 'activate',
    host: 'example@gmail.com'
  }
];

export const columns: ColumnDef<CurrentStateType>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'groupName',
    header: 'GroupName'
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => {
      const amount = `${row.getValue('amount')} 명`;

      return <div>{amount}</div>;
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return (
        <Badge
          variant="outline"
          className={cn(statusBg[row.getValue('status') as 'pending' | 'activate' | 'deactivate'], 'px-4 py-1.5 text-white')}
        >
          {row.getValue('status')}
        </Badge>
      );
    }
  },
  {
    accessorKey: 'host',
    header: 'Host'
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigator.clipboard.writeText(payment.id)}>
              초대링크 복사
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">그룹톡 편집</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-red-700">그룹톡 나가기</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
