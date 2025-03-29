import { useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid2';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';

const titleSX = {
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  '& > svg': {
    mr: 1
  }
};

// ==============================|| PROFILE 1 - SETTINGS ||============================== //

export default function Settings() {
  const [state1, setState1] = useState({
    checkedA: true,
    checkedB: false
  });
  const [state2, setState2] = useState({
    checkedA: true,
    checkedB: false,
    checkedC: true
  });
  const [state3, setState3] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: false
  });
  const handleSwitchChange1 = (event) => {
    setState1({ ...state1, [event.target.name]: event.target.checked });
  };
  const handleSwitchChange2 = (event) => {
    setState2({ ...state2, [event.target.name]: event.target.checked });
  };
  const handleSwitchChange3 = (event) => {
    setState3({ ...state3, [event.target.name]: event.target.checked });
  };

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: false,
    checkedD: false,
    checkedE: false
  });
  const handleChangeState = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <SubCard title="Email Settings">
      <Grid container direction="column" spacing={3}>
        <Grid size={12}>
          <Grid container direction="column" spacing={0}>
            <Grid>
              <Typography variant="subtitle1">Setup Email Notification</Typography>
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Switch checked={state1.checkedA} onChange={handleSwitchChange1} name="checkedA" color="primary" />}
                label="Email Notification"
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Switch checked={state1.checkedB} onChange={handleSwitchChange1} name="checkedB" color="primary" />}
                label="Send Copy To Personal Email"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12}>
          <Typography variant="h5" component="span" sx={{ ...titleSX, textTransform: 'uppercase' }}>
            Activity Related Emails
          </Typography>
        </Grid>
        <Grid size={12}>
          <Grid container direction="column" spacing={0}>
            <Grid>
              <Typography variant="subtitle1">When to email?</Typography>
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Switch checked={state2.checkedA} onChange={handleSwitchChange2} name="checkedA" color="primary" />}
                label="have new notifications"
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Switch checked={state2.checkedB} onChange={handleSwitchChange2} name="checkedB" color="primary" />}
                label="you're sent a direct message"
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Switch checked={state2.checkedC} onChange={handleSwitchChange2} name="checkedC" color="primary" />}
                label="Someone adds you as a connection"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Grid container direction="column" spacing={0}>
            <Grid>
              <Typography variant="subtitle1">When to escalate emails?</Typography>
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Switch checked={state3.checkedA} onChange={handleSwitchChange3} name="checkedA" color="primary" />}
                label="Upon new order"
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Switch checked={state3.checkedB} onChange={handleSwitchChange3} name="checkedB" color="primary" />}
                label="New membership approval"
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Switch checked={state3.checkedC} onChange={handleSwitchChange3} name="checkedC" color="primary" />}
                label="Member registration"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12}>
          <Typography variant="h5" component="span" sx={{ ...titleSX, textTransform: 'uppercase' }}>
            Updates From System Notification
          </Typography>
        </Grid>
        <Grid size={12}>
          <Grid container direction="column" spacing={0}>
            <Grid>
              <Typography variant="subtitle1">Email you with?</Typography>
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Checkbox checked={state.checkedA} onChange={handleChangeState} name="checkedA" color="primary" />}
                label="News about PCT-themes products and feature updates"
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Checkbox checked={state.checkedB} onChange={handleChangeState} name="checkedB" color="primary" />}
                label="Tips on getting more out of PCT-themes"
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Checkbox checked={state.checkedC} onChange={handleChangeState} name="checkedC" color="primary" />}
                label="Things you missed since you last logged into PCT-themes"
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Checkbox checked={state.checkedD} onChange={handleChangeState} name="checkedD" color="primary" />}
                label="News about products and other services"
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Checkbox checked={state.checkedE} onChange={handleChangeState} name="checkedE" color="primary" />}
                label="Tips and Document business products"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2 }} />
      <CardActions sx={{ p: 0, pt: 3 }}>
        <Grid spacing={2} container sx={{ justifyContent: 'flex-end', width: 1 }}>
          <Grid>
            <Button sx={{ color: 'error.main' }}>Clear</Button>
          </Grid>
          <Grid>
            <AnimateButton>
              <Button variant="contained">Update</Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </CardActions>
    </SubCard>
  );
}
