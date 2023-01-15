import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
  Pie,
  ComposedChart,
} from "recharts";
import "../../../Css/Charts.css";
const pdata = [
  { numWin: 5, numOfArtist: 5, name: "KPD", TOP: "garba", date: "03/08/2023" },
  {
    numWin: 3,
    numOfArtist: 2,
    name: "Amin",
    TOP: "kathak",
    date: "08/02/2023",
  },
  { numWin: 7, numOfArtist: 1, name: "Ajit", TOP: "salsa", date: "24/01/2023" },
  {
    numWin: 2,
    numOfArtist: 9,
    name: "Viren",
    TOP: "bhangda",
    date: "15/08/2023",
  },
  {
    numWin: 0,
    numOfArtist: 7,
    name: "Saurav",
    TOP: "kathak",
    date: "19/6/2023",
  },
];
const yearGen = [
  { yr: 2018, male: 125, female: 69, max: "Male" },
  { yr: 2019, male: 225, female: 278, max: "Female" },
  { yr: 2020, male: 325, female: 165, max: "Male" },
  { yr: 2021, male: 125, female: 361, max: "Female" },
];
const comdata = [
  { siteUser: 380, month: "Jan", numOfEvent: 80, artist: 230 },
  { siteUser: 202, month: "Feb", numOfEvent: 20, artist: 30 },
  { siteUser: 584, month: "Mar", numOfEvent: 50, artist: 140 },
  { siteUser: 375, month: "Apr", numOfEvent: 110, artist: 427 },
  { siteUser: 444, month: "May", numOfEvent: 30, artist: 154 },
  { siteUser: 380, month: "Jun", numOfEvent: 0, artist: 0 },
  { siteUser: 680, month: "July", numOfEvent: 190, artist: 750 },
  { siteUser: 550, month: "Aug", numOfEvent: 20, artist: 42 },
  { siteUser: 492, month: "Sept", numOfEvent: 50, artist: 130 },
  { siteUser: 602, month: "Oct", numOfEvent: 10, artist: 23 },
  { siteUser: 829, month: "Nov", numOfEvent: 80, artist: 230 },
  { siteUser: 770, month: "Dec", numOfEvent: 50, artist: 170 },
];
const danceForm = [
  {
    yr: 2016,
    katthak: 44,
    Bharatnatyam: 2,
    Kuchipudi: 13,
    Odisi: 78,
    garba: 59,
  },
  {
    yr: 2017,
    katthak: 8,
    Kuchipudi: 2,
    Kuchipudi: 24,
    Odisi: 27,
    garba: 71,
  },
  {
    yr: 2018,
    katthak: 88,
    Bharatnatyam: 22,
    Kuchipudi: 75,
    Odisi: 27,
    garba: 67,
  },
  {
    yr: 2019,
    katthak: 14,
    Bharatnatyam: 82,
    Kuchipudi: 28,
    Odisi: 7,
    garba: 37,
  },
  {
    yr: 2020,
    katthak: 44,
    Bharatnatyam: 2,
    Kuchipudi: 53,
    Odisi: 78,
    garba: 59,
  },
  {
    yr: 2021,
    katthak: 8,
    Kuchipudi: 2,
    Bharatnatyam: 24,
    Odisi: 27,
    garba: 71,
  },
];
const Charts = () => {
  return (
    <>
      <header className="event-sec">
        <center>
          <div className="e-title">
            Current
            <span id="golden"> List Of </span>
            Events
          </div>
        </center>
      </header>
      <section id="charts">
        <div id="ch1">
          <h1>Line Chart</h1>
          <p>Chart Of Individual Artist</p>
          <ResponsiveContainer width="100%" aspect={1.5}>
            <LineChart
              data={pdata}
              margin={{ left: -35, right: 7, top: 13, bottom: 5 }}
            >
              <YAxis stroke="#bfbfbf" />
              <CartesianGrid strokeDasharray="5 3" stroke="#757575" />
              <Tooltip />
              <Legend />
              <XAxis
                dataKey="name"
                stroke="#bfbfbf"
                interval="preserveStartEnd"
              />
              <Line
                /*type="monotone"*/
                dataKey="numOfArtist"
                strokeWidth={2}
                stroke="#ffc107"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div id="ch2">
          <h1>Area Chart</h1>
          <p>Chart Of Artist Wining Competition</p>
          <ResponsiveContainer width="100%" aspect={1.5}>
            <AreaChart
              data={pdata}
              margin={{ left: -35, right: 7, top: 13, bottom: 5 }}
            >
              <YAxis stroke="#bfbfbf" />
              {/* <CartesianGrid /> */}
              <Tooltip />
              <Legend />
              <XAxis
                dataKey="name"
                stroke="#bfbfbf"
                interval="preserveStartEnd"
              />
              <Area
                /*type="monotone"*/
                dataKey="numOfArtist"
                strokeWidth={2}
                type="monotone"
                stroke="#f54c40"
                fill="#f54c40"
              />
              <Area
                /*type="monotone"*/
                dataKey="numWin"
                strokeWidth={2}
                type="monotone"
                stroke="#285cf7"
                fill="#285cf7"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div id="ch3">
          <h1>Multi Area Chart</h1>
          <p>Chart by number participants in each art form per year </p>
          <ResponsiveContainer width="100%" aspect={2.2}>
            <AreaChart
              data={danceForm}
              stackOffset="expand"
              margin={{
                top: 15,
                right: 12.5,
                left: 12,
                bottom: 10,
              }}
            >
              <CartesianGrid />
              <XAxis
                dataKey="yr"
                interval="preserveStartEnd"
                stroke="#bfbfbf"
              />

              <Tooltip />
              <Legend />

              <Area
                type="monotone"
                dataKey="katthak"
                stackId="1"
                stroke="#285cf7"
                fill="#285cf7"
              />
              <Area
                type="monotone"
                dataKey="garba"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="Odisi"
                stackId="1"
                stroke="#f54c40"
                fill="#f54c40"
              />
              <Area
                type="monotone"
                dataKey="Kuchipudi"
                stackId="1"
                stroke="#9e3dff"
                fill="#9e3dff"
              />
              <Area
                type="monotone"
                dataKey="Kuchipudi"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div id="ch4">
          <h1>Bar Chart</h1>
          <p>Chart by Artist Gender ratio per year</p>
          <ResponsiveContainer width="100%" aspect={1.5}>
            <BarChart
              data={yearGen}
              margin={{ left: 5, right: 7, top: 13, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="yr" stroke="#bfbfbf" />
              {/* <YAxis dataKey="max" /> */}
              <Tooltip />
              <Legend />
              <Bar dataKey="male" stackId="a" fill="#8884d8" />
              <Bar dataKey="female" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div id="ch5">
          <h1>Composed Chart</h1>
          <p>Chart of site viewers , Event Count , Registrations</p>
          <ResponsiveContainer width="100%" aspect={1.5}>
            <ComposedChart
              data={comdata}
              margin={{ left: -15, right: 10, top: 15, bottom: 5 }}
            >
              {/* <CartesianGrid stroke="#f5f5f5" /> */}
              <XAxis dataKey="month" scale="band" stroke="#bfbfbf" />
              <YAxis stroke="#bfbfbf" />
              {/* <Tooltip /> */}
              <Legend />
              <Area
                type="monotone"
                dataKey="artist"
                fill="#285cf7"
                stroke="#285cf7"
                strokeWidth={3}
              />
              <Bar dataKey="numOfEvent" barSize={20} fill="#ff2d55" />
              <Line
                type="monotone"
                dataKey="siteUser"
                stroke="#4cd964"
                strokeWidth={3}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </section>{" "}
    </>
  );
};

export default Charts;
