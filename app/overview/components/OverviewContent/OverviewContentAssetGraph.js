import { Card, CardContent, Stack } from '@mui/material';

import PieChart from '@/utils/common/PieChart';
import RowHeader from '@/utils/common/RowHeader';
import { capitalizeFirstLetter } from '@/utils/utils';
import { OVERVIEW_GRAPH_LABELS } from '@/app/overview/constants';

export default function OverviewContentAssetGraph({ assets = [], categories = [], maintenancePlans = [] }) {
  const formattedData = [categories, maintenancePlans, assets].map((v, index) => ({
    label: capitalizeFirstLetter(OVERVIEW_GRAPH_LABELS[index].label),
    count: v?.length || 0,
    backgroundColor: OVERVIEW_GRAPH_LABELS[index].color,
    borderColor: OVERVIEW_GRAPH_LABELS[index].color,
  }));

  return (
    <Stack data-tour="overview-4">
      <RowHeader title="Graph" caption="View details for asset summary" />
      <Card>
        <CardContent>
          <Stack>
            <Stack direction="row" spacing={2} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
              <PieChart height="15rem" legendLabel="assets summary" data={formattedData} />
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
