import { UsersRound } from 'lucide-react'

import {
  Card,
  CardBadge,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/card'

export function ViewsAmountCard() {
  return (
    <Card>
      <CardBadge>
        <UsersRound className="h-10 w-10 tracking-tight text-gray-300" />
      </CardBadge>
      <CardContent>
        <CardTitle>
          {Number(1204).toLocaleString('pt-BR', {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })}
        </CardTitle>
        <CardDescription>Pessoas visitantes</CardDescription>
      </CardContent>
    </Card>
  )
}
