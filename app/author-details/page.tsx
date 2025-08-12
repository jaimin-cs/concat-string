"use client";
import React, { useEffect, useState } from "react";
import Founder from "./founder";
import FutureOfAi from "./futureOfAi";
import ConnectNow from "./connectNow";

const page = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedId = localStorage.getItem("selectedUserId");
    if (storedId) {
      setUserId(storedId);
    }
  }, []);
  return (
    <>
      <Founder userId={userId} />
      <FutureOfAi userId={userId} />
      <ConnectNow userId={userId} />
    </>
  );
};

export default page;
