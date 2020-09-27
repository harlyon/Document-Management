import React from "react";
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Public dataset',
      backgroundColor: '#2f55d4',
      borderColor: '#333',
      borderWidth: 1,
      hoverBackgroundColor: '#2f55d4',
      hoverBorderColor: '#333',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'Private dataset',
      backgroundColor: '#000',
      borderColor: '#333',
      borderWidth: 1,
      hoverBackgroundColor: '#000',
      hoverBorderColor: '#333',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const Chart = () => {
  return (
  <div className="col-md-12 mt-4 pt-2">
  <a href="javascript:void(0)">
    <div className="card rounded shadow bg-light border-0">
      <div className="card-body">
        <div className="mt-4">
          <Bar
            data={data}
            width={50}
            height={350}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    </div>
  </a>
</div>
  );
}

export default Chart;