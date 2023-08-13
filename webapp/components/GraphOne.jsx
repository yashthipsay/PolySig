import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart() {
  const [info, setInfo] = useState([]);

  fetch(
    "https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/?quote-currency=USD&format=JSON&page-size=10&page-number=&key=ckey_c9ceec82b70743a0b334b50ec49"
  )
    .then((data) => data.json())
    .then((res) => {
      // console.log(res.data.items);
      const getInfo = res.data.items.map((item) => {
        return { name: item.contract_name, swap: item.swap_count_24h };
      });

      setInfo(getInfo);
    });

  const data = {
    labels: info.map((l) => l.name).slice(0, 5), //labels must be a text value
    datasets: [
      {
        label: "# of Votes",
        data: info.map((l) => l.swap).slice(0, 5),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(50, 211, 158, 1)",
          "#002335",
          "rgba(255, 159, 10, 1)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(50, 211, 158, 1)",
          "#002335",
          "rgba(255, 159, 10, 1)"
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}