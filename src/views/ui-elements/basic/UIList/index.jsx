// material-ui
import Grid from '@mui/material/Grid2';

// project imports
import SimpleList from './SimpleList';
import NestedList from './NestedList';
import FolderList from './FolderList';
import DisabledList from './DisabledList';
import RadioList from './RadioList';
import CustomList from './CustomList';
import SelectedListItem from './SelectedListItem';
import VirtualizedList from './VirtualizedList';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ================================|| UI LIST ||================================ //

export default function UIList() {
  return (
    <MainCard title="List" secondary={<SecondaryAction link="https://next.material-ui.com/components/lists/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <SubCard title="Basic">
            <SimpleList />
          </SubCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <SubCard title="Nested List">
            <NestedList />
          </SubCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <SubCard title="Selected List Item">
            <SelectedListItem />
          </SubCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <SubCard title="Disabled List Item">
            <DisabledList />
          </SubCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <SubCard title="Radio Button List">
            <RadioList />
          </SubCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <SubCard title="Folder List">
            <FolderList />
          </SubCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SubCard title="Custom Aligned List">
            <CustomList />
          </SubCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SubCard title="Scrollable List">
            <VirtualizedList />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
}
