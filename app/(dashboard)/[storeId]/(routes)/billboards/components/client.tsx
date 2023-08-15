"use client";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import React from "react";

const BillboardClient = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Billboards(0)"
          description="Manage billboards of your store"
        />
        <Button>
          <PlusIcon className="mr-2 w-4 h-4" />
          Add New
        </Button>
      </div>
      <Separator />
    </>
  );
};

export default BillboardClient;
