import React from 'react';
import { ShoppingCart, Package, Wallet } from 'lucide-react';
import { WalletConnection } from './WalletConnection';
import Web3 from 'web3';

interface MarketPlaceProps {
  onNavigate: (page: 'buy' | 'sell') => void;
  web3?: Web3 | null;
  account?: string | null;
  onWalletConnected?: (account: string, web3: Web3) => void;
  onDisconnect?: () => void;
}

const MarketPlace: React.FC<MarketPlaceProps> = ({ onNavigate, web3, account, onWalletConnected, onDisconnect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Wallet Connection Status */}
        <div className="mb-8">
          <WalletConnection 
            onWalletConnected={onWalletConnected || (() => {})}
            account={account}
            onDisconnect={onDisconnect}
          />
        </div>
        
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            🌾 Farmer Marketplace
          </h1>
          <p className="text-xl text-green-100 mb-2">
            Direct connection between farmers and buyers
          </p>
          <p className="text-green-100">
            Fresh produce, fair prices, sustainable farming
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div 
            onClick={() => onNavigate('buy')}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-4 border-transparent hover:border-green-300"
          >
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">BUY</h2>
            <p className="text-gray-600 mb-4">
              Browse fresh produce directly from farmers
            </p>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <ShoppingCart size={20} />
              <span className="font-semibold">Start Shopping</span>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('sell')}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-4 border-transparent hover:border-green-300"
          >
            <div className="text-6xl mb-4">🌱</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">SELL</h2>
            <p className="text-gray-600 mb-4">
              List your farm products and reach more customers
            </p>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Package size={20} />
              <span className="font-semibold">List Products</span>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white/10 rounded-xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Why Choose Our Marketplace?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-green-100">
            <div>
              <div className="text-2xl mb-2">🚚</div>
              <p>Direct from Farm</p>
            </div>
            <div>
              <div className="text-2xl mb-2">💰</div>
              <p>Fair Pricing</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🌿</div>
              <p>Fresh & Organic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;