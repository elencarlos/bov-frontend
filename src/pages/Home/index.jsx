import React, { useEffect, useState } from 'react'
import http from '../../services/api'

function Home(props) {
  const [checkList, setCheckList] = useState([])

  useEffect(() => {
    http.get('/checkList').then(({ data }) => setCheckList(data))
  }, [])
  console.log(checkList)
  return (
    <div>
      { checkList.map(item => (
        <div key={item._id}>
          {item.farmer.name}
          {' '}
          -
          {' '}
          {item.farmer.city}
        </div>
      ))}
    </div>
  )
}

export default Home
