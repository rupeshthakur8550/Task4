import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Paper, useTheme, useMediaQuery, Box } from '@mui/material';

const chartSetting = {
  width: 500,
  height: 400,
};

const dataset = [
  { x: 'Evertt', y: 21 },
  { x: 'Seattle', y: 28 },
  { x: 'Lynnwood', y: 41 },
  { x: 'Bothel', y: 73 },
  { x: 'Mukilteo', y: 99 },
  { x: 'Edmonds', y: 144 },
  { x: 'abc', y: 319 },
  { x: 'drf', y: 249 },
  { x: 'hij', y: 131 },
  { x: 'xyz', y: 55 },
  { x: 'cda', y: 48 },
  { x: 'mjd', y: 25 },
];

const valueFormatter = (value) => `${value}mm`;

export default function Bar1() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper style={{ width: '95%', height: '500px', overflowY: 'auto' }}>
      <Box sx={{ overflowX: isSmallScreen ? 'auto' : 'hidden' }}>
        <BarChart
          dataset={dataset}
          yAxis={[{ scaleType: 'band', dataKey: 'x' }]}
          series={[{ dataKey: 'y', valueFormatter }]}
          layout="horizontal"
          {...chartSetting}
          options={{
            xScale: { type: 'band', padding: 0.5, round: true },
            yScale: { type: 'linear', min: 0, max: 'auto', reverse: false },
          }}
        />
      </Box>
    </Paper>
  );
}
