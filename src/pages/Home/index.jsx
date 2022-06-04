import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCheckList } from '../../contexts/CheckList/CheckListState'
import { getCheckLists, setLoading } from '../../contexts/CheckList/CheckListAction'

function Home() {
  const [checkListState, checkListDispatch] = useCheckList()
  const {
    checkLists, loading, error, message,
  } = checkListState

  const getCheckListsHandler = async () => {
    await getCheckLists(checkListDispatch)
    setLoading(checkListDispatch, false)
  }

  useEffect(() => {
    getCheckListsHandler()
  }, [])
  return (
    <div>
      {loading && <p>Carregando...</p>}
      {error && <p>{message}</p>}
      { checkLists.map(item => (
        <div key={item._id}>
          {item.farmer.name}
          {' '}
          -
          {' '}
          {item.farmer.city}
          <Link to={`/form/${item._id}`}>Editar</Link>
          <Link to={`/detail/${item._id}`}>Visualizar</Link>
        </div>
      ))}
    </div>
  )
}

export default Home
