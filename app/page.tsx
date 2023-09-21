import AppList from '@/components/AppList'
import MostPopularAppList from '@/components/MostPopularAppList'

export default function Home() {
  return (
    <main>
      <h1 className="px-10 py-10 text-6xl border-b border-slate-200">Marketplace</h1>
      <div className="px-10">
        <div className="my-10">
          <h2 className="text-2xl mb-5">My Apps</h2>
          <AppList />
        </div>
        <hr className="border-b border-slate-200 mb-10"/>
        <div className="grid grid-cols-2 gap-16">
          <div className="bg-slate-100 p-6 rounded flex">
            Management
            <i className="fa-solid fa-arrow-right text-slate-500 ml-auto"></i>
          </div>
          <div className="bg-slate-100 p-6 rounded flex">
            Utility
            <i className="fa-solid fa-arrow-right text-slate-500 ml-auto"></i>
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-2xl mb-5">Most Popular</h2>
          <MostPopularAppList />
        </div>
      </div>
    </main>
  )
}
