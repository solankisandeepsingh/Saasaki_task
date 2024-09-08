/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import { Puff } from "react-loader-spinner";

type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order"
  },
  {
    accessorKey: "method",
    header: "Method"
  }
];

const data: Payment[] = [
  {
    name: "Sachin Tendulkar",
    email: "sachin@gmail.com",
    lastOrder: "2023-01-01",
    method: "Credit Card"
  },
  {
    name: "Akshay Smith",
    email: "aksahy@gmail.com",
    lastOrder: "2023-02-15",
    method: "PayPal"
  },
  {
    name: "Golu Kuril",
    email: "golu@gmail.com",
    lastOrder: "2023-03-20",
    method: "Stripe"
  },
  {
    name: "Ranu Mandal",
    email: "ranu@gmail.com",
    lastOrder: "2023-04-10",
    method: "Venmo"
  },
  {
    name: "Michael Bevan",
    email: "michael@example.com",
    lastOrder: "2023-05-05",
    method: "Cash"
  },
  {
    name: "Kane Wilamson",
    email: "kane@example.com",
    lastOrder: "2023-06-18",
    method: "Bank Transfer"
  },
  {
    name: "Liam Garcia",
    email: "liam@example.com",
    lastOrder: "2023-07-22",
    method: "Payoneer"
  },
  {
    name: "Joe Root",
    email: "root@gmail.com",
    lastOrder: "2023-08-30",
    method: "Apple Pay"
  },
  {
    name: "Naina Sisodiya",
    email: "naina@gmail.com",
    lastOrder: "2023-09-12",
    method: "Google Pay"
  },
  {
    name: "Rinku Singh",
    email: "singhh@example.com",
    lastOrder: "2023-10-25",
    method: "Cryptocurrency"
  },
  {
    name: "Bholaram Tiwari",
    email: "bhola@example.com",
    lastOrder: "2023-11-05",
    method: "Alipay"
  },
  {
    name: "Pravin Patel",
    email: "patel@example.com",
    lastOrder: "2023-12-08",
    method: "WeChat Pay"
  },
  {
    name: "Chunnilal",
    email: "chunni@example.com",
    lastOrder: "2024-01-18",
    method: "Square Cash"
  },
 
];

export default function UsersPage({}: Props) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
 

    <div className="flex flex-col gap-5 w-full">
    {loading ? (
      <div className="flex justify-center items-center h-64">
        <Puff color="#00BFFF"  /> 
      </div>
    ) : (
      <>
       <PageTitle title="Users" />
         <DataTable columns={columns} data={data} />
        <PageTitle title="Orders" />
      </>
    )}
  </div>
  );
}
