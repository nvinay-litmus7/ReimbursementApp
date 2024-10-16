import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MainNavigation from '@navigations/.';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigation />
    </QueryClientProvider>
  );
};

export default App;
