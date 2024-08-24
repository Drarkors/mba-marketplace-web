import { ProductsAvailableAmountCard } from './procucts-available-ammount-card'
import { ProductsSoldAmountCard } from './products-sold-amount-card'
import { ViewsAmountCard } from './views-ammount-card'
import { ViewsByDayChart } from './views-by-day-chart'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-xl font-bold text-gray-500">Últimos 30 dias</h1>
        <p className="text-sm text-gray-300">
          Confira as estatísticas da sua loja no último mês
        </p>
      </div>
      <div className="grid max-h-[360px] w-[1300px] grid-cols-5 space-x-4">
        <div className="col-span-1 grid-rows-3 space-y-4">
          <ProductsSoldAmountCard />
          <ProductsAvailableAmountCard />
          <ViewsAmountCard />
        </div>
        <div className="col-span-4 h-full w-full">
          <ViewsByDayChart />
        </div>
      </div>
    </div>
  )
}
