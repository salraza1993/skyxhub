import PageBanner from '@/src/components/PageBanner'
import Layouts from '@/src/layouts/Layouts'
import React from 'react'

function page() {
  return (
    <Layouts>
      <PageBanner pageName={"FAQs"} pageTitle={"FAQs: SKYXHUB"} />
    </Layouts>
  )
}

export default page