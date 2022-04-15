import React from 'react';

import OverviewContextProvider from 'presentation/context/store/getOverview';
import OverviewDashboard from 'presentation/components/OverviewDashboard';

const Dashboard: React.FC = () => {
  return (
    <OverviewContextProvider>
      <OverviewDashboard />
    </OverviewContextProvider>
  );
};

export default Dashboard;
