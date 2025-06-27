"use client"
import { BeatLoader } from "react-spinners";

// loading.jsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-semibold" ><BeatLoader speedMultiplier={2} margin={3}/></p>
    </div>
  );
}
