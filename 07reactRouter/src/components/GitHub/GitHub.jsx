import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchaudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className=' bg-gray-600 text-white text-center py-4 text-3xl'>
      GitHub followers : {data.followers}
      <img src={data.avatar_url} alt='' />
    </div>
  );
}

export default GitHub;

export const gitHubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/hiteshchaudhary");
  return res.json();
};
