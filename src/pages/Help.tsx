import React from 'react';
import { HelpCircle, Book, MessageCircle, Video } from 'lucide-react';

export function Help() {
  return (
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-6">
        <HelpCircle className="h-6 w-6 text-emerald-500" />
        <h1 className="text-2xl font-bold">Help & Resources</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <Book className="h-8 w-8 text-emerald-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Documentation</h2>
          <p className="text-gray-400 mb-4">Comprehensive guides and references for all features</p>
          <button className="text-emerald-500 hover:text-emerald-400">
            Browse Docs →
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <Video className="h-8 w-8 text-emerald-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Video Tutorials</h2>
          <p className="text-gray-400 mb-4">Step-by-step video guides for common tasks</p>
          <button className="text-emerald-500 hover:text-emerald-400">
            Watch Tutorials →
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <MessageCircle className="h-8 w-8 text-emerald-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Community Support</h2>
          <p className="text-gray-400 mb-4">Get help from our community of users</p>
          <button className="text-emerald-500 hover:text-emerald-400">
            Join Community →
          </button>
        </div>
      </div>
    </div>
  );
}