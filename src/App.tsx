import { useState } from 'react';
import { HealthCheckDashboard } from './components/HealthCheckDashboard';
import { DetailView } from './components/DetailView';
import { SuccessState } from './components/SuccessState';

type Screen = 'health-check' | 'detail-view' | 'success-state';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('health-check');

  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === 'health-check' && (
        <HealthCheckDashboard onAlertClick={() => setCurrentScreen('detail-view')} />
      )}
      {currentScreen === 'detail-view' && (
        <DetailView 
          onResolve={() => setCurrentScreen('success-state')}
          onClose={() => setCurrentScreen('health-check')}
        />
      )}
      {currentScreen === 'success-state' && (
        <SuccessState onClose={() => setCurrentScreen('health-check')} />
      )}
    </div>
  );
}
