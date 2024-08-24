import { format, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar, UsersRound } from 'lucide-react'
import {
  CartesianGrid,
  Dot,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { Card } from '@/components/card'

const chartData = Array.from({ length: 30 }).map((_, i) => {
  const date = subDays(new Date(), 30 - i)
  return {
    date,
    day: date.getDate(),
    ammount: Math.floor(Math.random() * 30),
  }
})

const CustomizedDot = (props: any) => {
  const { cx, cy, stroke, payload } = props
  return payload.visible ? (
    <Dot
      cx={cx}
      cy={cy}
      stroke={stroke}
      strokeWidth={2}
      r={16}
      fill="#009CF0"
    />
  ) : null
}

export function ViewsByDayChart() {
  const today = new Date()

  const todaySubtitle = format(today, "dd 'de' MMMM", {
    locale: ptBR,
  }).toLocaleUpperCase()
  const previousMonth = format(subDays(today, 30), "dd 'de' MMMM", {
    locale: ptBR,
  }).toLocaleUpperCase()

  return (
    <Card className="flex h-full w-full flex-col items-center justify-center gap-7 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="font-dm-sans text-lg text-gray-500">Visitantes</h1>
        <div className="text-2xs flex items-center justify-center gap-2 font-medium text-gray-300">
          <Calendar className="h-4 w-4 leading-tight text-blue-dark" />
          {todaySubtitle} - {previousMonth}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart
          data={chartData}
          style={{ fontSize: 12 }}
          margin={{ top: 8, right: 8, bottom: 8, left: 8 }}
        >
          <XAxis
            stroke="#949494"
            dataKey="day"
            axisLine={false}
            tickLine={false}
            dy={18}
          />

          <YAxis
            stroke="#949494"
            axisLine={false}
            tickLine={false}
            tickFormatter={(value: number) => value.toLocaleString('pt-BR')}
            width={24}
          />

          <Tooltip
            content={({ active, label, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="flex flex-col gap-4 bg-white p-4 shadow-lg shadow-shape">
                    <p className="text-2xs font-medium text-gray-400">
                      {payload[0].payload.date &&
                        format(
                          new Date(payload[0].payload.date),
                          "dd 'de' MMMM",
                          {
                            locale: ptBR,
                          },
                        )}
                    </p>
                    <div className="flex flex-1 items-center">
                      <UsersRound className="mr-2 h-3 w-3 text-gray-300" />
                      <span className="text-xs text-gray-300">
                        {label} visitantes
                      </span>
                    </div>
                  </div>
                )
              }

              return null
            }}
          />
          <CartesianGrid vertical={false} strokeDasharray={'16'} />

          <Line
            type="monotone"
            strokeWidth={2}
            dataKey="ammount"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#009CF0"
            dot={<CustomizedDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
