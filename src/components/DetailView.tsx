import { AlertTriangle, X, Database, User, Globe, Calendar, ShieldAlert } from 'lucide-react';

interface DetailViewProps {
  onResolve: () => void;
  onClose: () => void;
}

export function DetailView({ onResolve, onClose }: DetailViewProps) {
  return (
    <div className="min-h-screen bg-gray-900 bg-opacity-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full">
        {/* Header */}
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3">
                <ShieldAlert className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">CRITICAL</span>
                  <span className="text-gray-500 text-sm">Alert #SEC-2847</span>
                </div>
                <h1 className="text-2xl text-gray-900">Critical Alert: 'UserDB' is Publicly Accessible</h1>
                <p className="text-gray-600 mt-1">Your database is exposed to the internet and vulnerable to unauthorized access</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Evidence Section */}
        <div className="p-6">
          <h2 className="text-lg text-gray-900 mb-4">Evidence & Technical Details</h2>
          
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 space-y-4">
            {/* Resource Info */}
            <div className="flex items-start gap-3">
              <Database className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Resource Name</p>
                <p className="text-gray-900">UserDB</p>
              </div>
            </div>

            {/* Owner */}
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Owner</p>
                <p className="text-gray-900">dev-team-lead</p>
              </div>
            </div>

            {/* Allowed IPs - Critical Info */}
            <div className="flex items-start gap-3 bg-red-50 -m-3 p-3 rounded border border-red-200">
              <Globe className="w-5 h-5 text-red-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-red-700">Allowed IPs</p>
                <p className="text-red-900">0.0.0.0/0 (Anywhere)</p>
                <p className="text-red-700 text-sm mt-1">⚠️ This allows access from any IP address on the internet</p>
              </div>
            </div>

            {/* Detection Time */}
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Detected</p>
                <p className="text-gray-900">Today at 2:47 PM (2 hours ago)</p>
              </div>
            </div>

            {/* Risk Assessment */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <p className="text-sm text-gray-600 mb-2">Risk Assessment</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Database contains sensitive user information (PII)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Unrestricted access could lead to data breach</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Potential compliance violations (GDPR, SOC2)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recommended Actions */}
          <div className="mt-6">
            <h3 className="text-gray-900 mb-3">Recommended Action</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 mb-2">Restrict database access to corporate IP range only</p>
              <p className="text-blue-700 text-sm">This will limit access to users within your organization's network (203.0.113.0/24)</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-gray-200 p-6 flex items-center justify-between">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            Cancel
          </button>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Ignore Alert
            </button>
            <button 
              onClick={onResolve}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Restrict to Corporate IP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
