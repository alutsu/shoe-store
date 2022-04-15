/* eslint-disable function-paren-newline */
import React, { createContext, useEffect, useState } from 'react';
import axios from 'main/config/axios';
import { Overview } from 'types/overview.types';

type PropsOverviewContext = {
  overview: Overview[];
  labels: string[];
};

const DEFAULT_VALUES = {
  overview: [],
  labels: [],
};

const OverviewContext = createContext<PropsOverviewContext>(DEFAULT_VALUES);

const OverviewContextProvider: React.FC<any> = ({ children }: any) => {
  const [overview, setOverview] = useState<Overview[]>(DEFAULT_VALUES.overview);
  const [labels, setLabels] = useState<string[]>(DEFAULT_VALUES.labels);

  useEffect(() => {
    async function loadOverview() {
      const response = await axios.get('/store_events/overview');
      setOverview(response.data);
      setLabels([]);
      response.data.map((item) =>
        setLabels((prev) => [...prev, item.interval]),
      );
    }
    loadOverview();

    const interval = setInterval(() => loadOverview(), 15 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <OverviewContext.Provider value={{ overview, labels }}>
      {children}
    </OverviewContext.Provider>
  );
};

export { OverviewContext };
export default OverviewContextProvider;
