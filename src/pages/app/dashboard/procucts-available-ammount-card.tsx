import { Store } from 'lucide-react'

import {
  Card,
  CardBadge,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/card'

export function ProductsAvailableAmountCard() {
  return (
    <Card>
      <CardBadge>
        <Store className="h-10 w-10 tracking-tight" />
      </CardBadge>
      <CardContent>
        <CardTitle>56</CardTitle>
        <CardDescription>Produtos anunciados</CardDescription>
      </CardContent>
    </Card>
  )
}
