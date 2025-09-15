import Link from "next/link";
import React from "react";
import { Suspense } from "react";

import { BarLoader } from "react-spinners";


const WriteLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div>
        <Link
          href="/dashboard"
          className="text-xl text-orange-600 hover:text-orange-700 cursor-pointer"
        >
          
          ← Back to Dashboard
        </Link>
      </div>

      <Suspense fallback={<BarLoader color="orange" width={"100%"} />}>{children}</Suspense>
    </div>
  );
};

export default WriteLayout;
