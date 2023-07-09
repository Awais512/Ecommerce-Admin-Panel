"use client";

import { Modal } from "@/components/ui/modal";

export default function Home() {
  return (
    <div className="p-4">
      <Modal isOpen onClose={() => {}} title="Test" description="Test Desc">
        Children
      </Modal>
    </div>
  );
}
