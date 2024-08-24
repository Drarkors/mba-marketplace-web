import { Receipt } from 'lucide-react'

import {
  Card,
  CardBadge,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/card'

export function ProductsSoldAmountCard() {
  return (
    <Card>
      <CardBadge>
        <Receipt className="h-12 w-10 tracking-tight" />
      </CardBadge>
      <CardContent>
        <CardTitle>24</CardTitle>
        <CardDescription>
          Produtos
          <br />
          vendidos
        </CardDescription>
      </CardContent>
    </Card>
  )
}
