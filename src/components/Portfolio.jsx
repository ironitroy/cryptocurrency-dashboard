import "./styles.css";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function Portfolio() {
  return (
    <React.Fragment>
      <div className="container" style={{ width: 200, height: 100 }}>
        <h3>Portfolio</h3> <p>Total value:$1000</p>
        <div className="row">
          <div className="col-md-5 mb-3 mt-3">
            <Pie
              data={{
                labels: ["Ethereum", "Luna", "Tether"],
                datasets: [
                  {
                    label: "$",
                    data: [250, 375, 375],
                    backgroundColor: ["teal", "crimson", "olivedrab"],
                    borderColor: ["teal", "crimson", "olivedrab"],
                    borderWidth: 1,
                    hoverOffset: 20
                  }
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  title: {
                    fontSize: 20,
                    display: true
                  },
                  labels: {
                    render: 'value',
                    fontColor: 'white',
                  },
                  legend: {
                    display: true, 
                    position:'right',
                    labels: {
                      fontFamily: "myriadpro-regular",
                      boxWidth: 3,
                      boxHeight:3,
                    },
                } ,
              }
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


export default Portfolio;