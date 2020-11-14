import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";


const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <Paper>
        <Box bgcolor="background.paper" p={1}>
          <Typography m={1} variant="subtitle1" gutterBottom>{`Consumo de ${label} foi de ${payload[0].value} kW`}</Typography>
        </Box>
      </Paper>
    );
  }

  return null;
};

const createData = (time, amount) => {
  return { time, amount };
}

const data = [
  createData("JAN", 240),
  createData("FEV", 370),
  createData("MAR", 489),
  createData("ABR", 340),
  createData("MAI", 200),
  createData("JUN", 123)
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Typography
        component="h2"
        variant="h6"
        gutterBottom
        style={{ color: "#63B3ED" }}
      >
        Histórico de consumo
      </Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <Tooltip content={<CustomTooltip />} />
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Consumo (kW)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
