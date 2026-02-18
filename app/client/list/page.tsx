import { Suspense } from "react";
import ClientListClient from "./ClientListClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientListClient />
    </Suspense>
  );
}
