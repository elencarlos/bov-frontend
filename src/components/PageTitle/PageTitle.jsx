import React from 'react'
import { PrimaryTitle, UnderlineTitle } from './style'

function PageTitle({ title, size, children }) {
  return (
    <PrimaryTitle>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div>{title}</div>
        <div>{children}</div>
      </div>
      <UnderlineTitle size={size} />
    </PrimaryTitle>

  )
}

export default PageTitle
