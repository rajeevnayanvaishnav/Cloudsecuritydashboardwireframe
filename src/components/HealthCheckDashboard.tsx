import { Shield, AlertTriangle, CheckCircle, Server, Lock, Users } from 'lucide-react';

interface HealthCheckDashboardProps {
  onAlertClick: () => void;
}

export function HealthCheckDashboard({ onAlertClick }: HealthCheckDashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-xl text-gray-900">Cloud Security Dashboard</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">Overview</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Alerts</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Compliance</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Settings</a>
          </div>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Security Health Score - Prominent Display */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 mb-2">Security Health Score</p>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl text-gray-900">95</span>
                <span className="text-3xl text-gray-400">/100</span>
              </div>
              <p className="text-green-600 mt-2">Good - 1 critical issue requires attention</p>
            </div>
            <div className="w-32 h-32 rounded-full border-8 border-green-500 flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Critical Actions List - Top Left (F-pattern) */}
          <div className="col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl text-gray-900 mb-4">Critical Actions</h2>
              
              {/* Critical Alert - Top Item */}
              <div 
                onClick={onAlertClick}
                className="border-l-4 border-red-500 bg-red-50 p-4 mb-3 cursor-pointer hover:bg-red-100 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-red-900 mb-1">Critical Alert: 'UserDB' is Publicly Accessible</p>
                    <p className="text-red-700 text-sm">Database exposed to the internet - immediate action required</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-red-600">Severity: Critical</span>
                      <span className="text-xs text-red-600">Resource: UserDB</span>
                    </div>
                  </div>
                  <span className="text-xs text-red-600">2h ago</span>
                </div>
              </div>

              {/* Other Alerts */}
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 mb-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-yellow-900 mb-1">MFA not enabled for 3 admin accounts</p>
                    <p className="text-yellow-700 text-sm">Enable multi-factor authentication for enhanced security</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-yellow-600">Severity: High</span>
                      <span className="text-xs text-yellow-600">Affected: 3 users</span>
                    </div>
                  </div>
                  <span className="text-xs text-yellow-600">5h ago</span>
                </div>
              </div>

              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-yellow-900 mb-1">SSL certificate expires in 14 days</p>
                    <p className="text-yellow-700 text-sm">Renew certificate for api.example.com</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-yellow-600">Severity: Medium</span>
                      <span className="text-xs text-yellow-600">Domain: api.example.com</span>
                    </div>
                  </div>
                  <span className="text-xs text-yellow-600">1d ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side Widgets */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-gray-900 mb-4">Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 text-sm">Resources</span>
                  </div>
                  <span className="text-gray-900">142</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 text-sm">Active Alerts</span>
                  </div>
                  <span className="text-gray-900">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 text-sm">Compliance</span>
                  </div>
                  <span className="text-gray-900">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 text-sm">Users</span>
                  </div>
                  <span className="text-gray-900">47</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-gray-900">Policy updated</p>
                  <p className="text-gray-500">15 min ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-900">New user added</p>
                  <p className="text-gray-500">1h ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-900">Scan completed</p>
                  <p className="text-gray-500">3h ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
