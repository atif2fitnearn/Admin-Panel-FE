
import LandingPageTable1 from '@/components1/LandingPageTable';
import Header from '@/components1/header';
import { Sidebar } from '@/components1/sidebar';
import { LandingPageT } from '@/components1/LandingPageT';

export function Swasthi() {
  return (
<div className="min-h-screen flex bg-neutral-900 text-white pt-4 ">
      <Header />
      <div className="w-270 h-343 mt-3 bg-neutral-900 ml-0  ">
        <Sidebar />
      </div>
        {/* Main Content */}
        <main className="flex-1 bg-customBlack p-8 mt-4 ml-4 overflow-y-auto overflow-x-auto">
          <LandingPageT />
          <LandingPageTable1 />
        </main>
      </div>
    
  );
}



