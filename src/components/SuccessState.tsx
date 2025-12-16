import { CheckCircle, X, Database, User, Globe, Calendar, ShieldCheck } from 'lucide-react';

interface SuccessStateProps {
  onClose: () => void;
}

export function SuccessState({ onClose }: SuccessStateProps) {
  return (
    <div className="min-h-screen bg-gray-900 bg-opacity-50 flex items-center justify-center p-6">
      {/* Toast/Banner Message */}
      <div className="fixed top-6 right-6 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in">
        <CheckCircle className="w-5 h-5" />
        <span>Rule updated successfully</span>
      </div>

      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full">
        {/* Header - Now with Green Status */}
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-full p-3">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">RESOLVED</span>
                  <span className="text-gray-500 text-sm">Alert #SEC-2847</span>
                </div>
                <h1 className="text-2xl text-gray-900">Critical Alert: 'UserDB' is Publicly Accessible</h1>
                <p className="text-green-600 mt-1">✓ Database access has been restricted to corporate IP range</p>
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

        {/* Evidence Section - Updated Status */}
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

            {/* Allowed IPs - Now Secure */}
            <div className="flex items-start gap-3 bg-green-50 -m-3 p-3 rounded border border-green-200">
              <Globe className="w-5 h-5 text-green-600 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-green-700">Allowed IPs</p>
                  <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded">Updated</span>
                </div>
                <p className="text-gray-500 line-through text-sm">0.0.0.0/0 (Anywhere)</p>
                <p className="text-green-900 mt-1">203.0.113.0/24 (Corporate Network)</p>
                <p className="text-green-700 text-sm mt-1">✓ Access is now restricted to your organization's network only</p>
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

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Resolved</p>
                <p className="text-gray-900">Today at 4:52 PM (Just now)</p>
              </div>
            </div>

            {/* Resolution Summary */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <p className="text-sm text-gray-600 mb-2">Resolution Summary</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Database access restricted to corporate IP range</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Security posture improved</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Compliance requirements satisfied</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-gray-200 p-6 flex items-center justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
