import { Container, Flex } from '@mantine/core'
import { MarketingUiFaq } from '../ui/faq/marketing-ui-faq'
import { MarketingUiFooter } from '../ui/footer/marketing-ui-footer'
import { MarketingUiHeader } from '../ui/header/marketing-ui-header'
import { MarketingUiHero } from '../ui/hero/marketing-ui-hero'
import { MarketingUiNewsletter } from '../ui/newsletter/marketing-ui-newsletter'

export function MarketingIndexFeature() {
  return (
    <Flex direction="column" justify="center" align="stretch">
      <MarketingUiHeader />
      <MarketingUiHero />
      <Container>
        <MarketingUiFaq />
        <MarketingUiNewsletter />
      </Container>
      <MarketingUiFooter />
    </Flex>
  )
}
