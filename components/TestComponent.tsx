"use client";

import axios from "axios";
import toast from "react-hot-toast";

export default function TestComponent() {
  const testing = async (e: any) => {
    e.preventDefault();
    toast.promise(
      axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/whatever`, {
        testobj: "test",
      }),
      {
        loading: "Loading...",
        success: "Data posted to api!",
        error: <b>Could not save</b>,
      }
    );
  };

  return (
    <>
      <button onClick={(e) => testing(e)}>Testing Btn</button>
    </>
  );
}
