import React, { useEffect, useState } from "react";

interface IProps {}

const Clock: React.FC<IProps> = (props) => {
  const [currentTime, setCurrentTime] = useState<any>(new Date());

  const updateTime = () => {
    setCurrentTime(new Date());
  };
  useEffect(() => {
    let timer: NodeJS.Timeout;
    timer = setInterval(() => {
      updateTime();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>当前时间:{currentTime.toLocaleTimeString()}</div>;
};

export default Clock;
