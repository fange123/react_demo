import React, { useEffect, useState } from "react";

const Hoc = (Components: any) => {
  localStorage.setItem("user", "123");

  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    setUsername(localStorage.getItem("user") as string);
  }, []);
  return (
    <>
      <Components username={username} />
    </>
  );
};

export default Hoc;
