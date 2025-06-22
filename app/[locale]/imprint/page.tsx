import { IconInfoCircleFilled } from "@tabler/icons-react";
import React from "react";

function Imprint() {
  return (
    <div className="section flex flex-col mt-8">
      <span className="section-title">
        <span className="name">Contact</span>
        <span className="icon icon-filled">
          <IconInfoCircleFilled />
        </span>
      </span>

      <div className="flex items-center flex-col gap-0.5">
        <h3>We value transparency and legal compliance.</h3>
      </div>

      <div className="flex flex-col gap-8 p-4 w-full bg-[#E6E6E6] border-[1px] border-[var(--border)] rounded-[var(--radius)]">
        <div className="flex flex-col gap-2">
          <span className="font-semibold font-p-1">Management</span>
          <span className="flex gap-2">
            <span className="font-semibold">Director: </span>
            <span className="font-medium opacity-70">Gian Iglowstein</span>
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold font-p-1">Contact information</span>
          <span className="flex gap-2">
            <span className="font-semibold">Email: </span>
            <span className="font-medium opacity-70 underline">
              contact@netflash.ch
            </span>
          </span>
          <span className="flex gap-2">
            <span className="font-semibold">Phone: </span>
            <span className="font-medium opacity-70 ">+41 77 509 04 27</span>
          </span>
          <span className="flex gap-2">
            <span className="font-semibold">Address: </span>
            <span className="font-medium opacity-70 ">
              Location, location 2
            </span>
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold font-p-1">Company</span>
          <span className="flex gap-2">
            <span className="font-semibold">Registration number: </span>
            <span className="font-medium opacity-70">CH-123456</span>
          </span>

          <span className="flex gap-2">
            <span className="font-semibold">VAT number: </span>
            <span className="font-medium opacity-70">789101112</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Imprint;
