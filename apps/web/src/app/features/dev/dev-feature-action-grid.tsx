import { UiCard, UiContainer, UiDashboardGrid } from '@pubkey-ui/core'
import {
  IconBuildingBank,
  IconCashBanknote,
  IconCoin,
  IconCreditCard,
  IconReceipt,
  IconReceiptRefund,
  IconReceiptTax,
  IconRepeat,
  IconReport,
} from '@tabler/icons-react'

export function DevFeatureActionGrid() {
  return (
    <UiContainer>
      <UiCard title="ActionGrid">
        <UiDashboardGrid
          links={[
            { to: '', label: 'Credit cards', icon: IconCreditCard },
            { to: '', label: 'Banks nearby', icon: IconBuildingBank },
            { to: '', label: 'Transfers', icon: IconRepeat },
            { to: '', label: 'Refunds', icon: IconReceiptRefund },
            { to: '', label: 'Receipts', icon: IconReceipt },
            { to: '', label: 'Taxes', icon: IconReceiptTax },
            { to: '', label: 'Reports', icon: IconReport },
            { to: '', label: 'Payments', icon: IconCoin },
            { to: '', label: 'Cashback', icon: IconCashBanknote },
          ]}
        />
      </UiCard>
    </UiContainer>
  )
}
