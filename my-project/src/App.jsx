import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DashBoardLayout from './components/DashboardLayout.jsx/DashBoardLayout';

// Lazy loading for page components
const Clients = React.lazy(() => import('./pages/Clients/Clients'));
const Projects = React.lazy(() => import('./pages/Projects/Projects'));
const ResourceAllocation = React.lazy(() => import('./pages/Resource Allocation/ResourceAllocation'));
const Task = React.lazy(() => import('./pages/Task/Task'));
const Employee = React.lazy(() => import('./pages/Employee/Employee'));
const Reports = React.lazy(() => import('./pages/Reports/Reports'));
const Tickets = React.lazy(() => import('./pages/Tickets/Tickets'));
const TimeSheet = React.lazy(() => import('./pages/TimeSheet/TimeSheet'));
const FinanceModule = React.lazy(() => import('./pages/Finance Module/FinanceModule'));
const ClaimAsset = React.lazy(() => import('./pages/ClaimAsset/ClaimAsset'));

function App() {
  return (
    <Router>
        <DashBoardLayout >
      <Suspense fallback={<div>Loading...</div>}>
    
        <Routes>
          
          
            {/* Child routes for the dashboard */}
            <Route path="resource-allocation" element={<ResourceAllocation />} />
            <Route path="clients" element={<Clients />} />
            <Route path="projects" element={<Projects />} />
            <Route path="task" element={<Task />} />
            <Route path="employee" element={<Employee />} />
            <Route path="reports" element={<Reports />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="time-sheet" element={<TimeSheet />} />
            <Route path="finance-module" element={<FinanceModule />} />
            <Route path="claim-asset" element={<ClaimAsset />} />
          
        </Routes>
        
      </Suspense>
      </DashBoardLayout>
    </Router>
  );
}

export default App;
