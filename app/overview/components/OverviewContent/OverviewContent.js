import { Stack } from '@mui/material';

import OverviewContentSummary from '@/app/overview/components/OverviewContent/OverviewContentSummary';
import OverviewContentAssetBreakdown from '@/app/overview/components/OverviewContent/OverviewContentAssetBreakdown';
import OverviewContentAssetGraph from '@/app/overview/components/OverviewContent/OverviewContentAssetGraph';

export default function OverviewContent({ assets = [], categories = [], maintenancePlans = [] }) {
  return (
    <Stack spacing={2}>
      <OverviewContentSummary assets={assets} />
      <OverviewContentAssetBreakdown assets={assets} categories={categories} maintenancePlans={maintenancePlans} />
      <OverviewContentAssetGraph assets={assets} categories={categories} maintenancePlans={maintenancePlans} />
    </Stack>
  );
}
