import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import { ThemeDirection, ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';

// chart data
import chartData from '../chart-data/revenue-bar-chart';

// assets
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const status = [
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];

export default function RevenueBarChart({ isLoading }) {
  const [value, setValue] = React.useState('month');
  const theme = useTheme();
  const { mode, themeDirection } = useConfig();

  const { primary } = theme.palette.text;
  const darkLight = theme.palette.dark.light;
  const grey100 = theme.palette.grey[theme.palette.mode === ThemeMode.DARK ? 900 : 100];
  const divider = theme.palette.divider;
  const grey500 = theme.palette.grey[500];

  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.primary.main;
  const secondaryLight = theme.palette.primary.light;

  React.useEffect(() => {
    const newChartData = {
      ...chartData.options,
      colors: [secondaryMain, secondaryLight],
      xaxis: {
        labels: {
          style: { colors: primary }
        }
      },
      yaxis: {
        labels: {
          style: { colors: primary }
        }
      },
      grid: {
        borderColor: divider
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        theme: mode
      },
      legend: {
        labels: {
          colors: grey500
        }
      }
    };

    // do not load chart when loading
    if (!isLoading) {
      ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
    }
  }, [mode, primaryDark, secondaryMain, secondaryLight, primary, darkLight, divider, isLoading, grey500, grey100]);

  if (isLoading) <SkeletonTotalGrowthBarChart />;

  return (
    <MainCard>
      <Grid container spacing={{ xs: 2.5, sm: 1.5 }}>
        <Grid size={12}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 1 }}
            sx={{ alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between' }}
          >
            <Stack spacing={0.5}>
              <Typography sx={{ color: 'grey.600', fontSize: '1rem' }}>Total Revenue Trends</Typography>
              <Typography variant="h1">$999.00</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <TextField
                id="standard-select-currency"
                select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                sx={{
                  '& .MuiSelect-outlined': {
                    borderRadius: theme.shape.borderRadius / 2
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: theme.shape.borderRadius / 2
                  },
                  '& .MuiOutlinedInput-input': {
                    py: 1,
                    px: 1.5,
                    color: mode === ThemeMode.DARK ? 'grey.600' : 'grey.900'
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderRadius: theme.shape.borderRadius / 2,
                    borderColor: 'divider'
                  }
                }}
              >
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: theme.shape.borderRadius / 2,
                  py: 0.5,
                  px: 1.25,
                  ml: 1,
                  borderColor: 'divider',
                  color: theme.palette.mode === ThemeMode.DARK ? 'grey.600' : 'grey.900'
                }}
                endIcon={<OpenInNewIcon color="disabled" sx={{ fontSize: 18 }} />}
              >
                Export
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          sx={{
            ...theme.applyStyles('light', {
              '& .apexcharts-series:nth-child(2) path:hover': {
                filter: `brightness(0.95)` /* Darken the bar */,
                transition: 'all 0.3s ease' /* Smooth transition */
              }
            }),
            '& .apexcharts-menu': {
              bgcolor: mode === ThemeMode.DARK ? 'background.default' : 'background.paper',
              ...(mode === ThemeMode.DARK && {
                borderColor: alpha(theme.palette.grey[200], 0.2)
              })
            },
            '.apexcharts-theme-light .apexcharts-menu-item:hover': {
              bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.200'
            },
            '& .apexcharts-legend-text': { marginLeft: themeDirection === ThemeDirection.RTL ? '8px' : 'initial' },
            '& .apexcharts-theme-light .apexcharts-menu-icon:hover svg, .apexcharts-theme-light .apexcharts-reset-icon:hover svg, .apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg, .apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg, .apexcharts-theme-light .apexcharts-zoomin-icon:hover svg, .apexcharts-theme-light .apexcharts-zoomout-icon:hover svg':
              {
                fill: theme.palette.mode === ThemeMode.DARK ? alpha(theme.palette.primary.light, 0.3) : theme.palette.grey[400]
              }
          }}
          size={12}
        >
          <Chart {...chartData} />
        </Grid>
      </Grid>
    </MainCard>
  );
}

RevenueBarChart.propTypes = { isLoading: PropTypes.bool };
