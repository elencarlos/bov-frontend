import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import 'moment/locale/pt-br'
import { useCheckList } from '../../contexts/CheckList/CheckListState'
import {
  clearCheckList,
  deleteCheckList,
  getCheckLists,
  setLoading,
} from '../../contexts/CheckList/CheckListAction'
import PageTitle from '../../components/PageTitle/PageTitle'
import {
  Actions,
  Card,
  CheckListCreated,
  CheckListData,
  Container,
  FarmerCity,
  FarmerName,
  FromName,
} from './style'
import Button from '../../components/Button'
import DeleteAlertDialog from '../../components/AlertDialog'

moment().locale('pt-br')

function Home() {
  const [checkListState, checkListDispatch] = useCheckList()
  const {
    checkLists, loading, error, message,
  } = checkListState
  const history = useHistory()
  const getCheckListsHandler = async () => {
    clearCheckList(checkListDispatch)
    await getCheckLists(checkListDispatch)
    setLoading(checkListDispatch, false)
  }

  useEffect(() => {
    getCheckListsHandler()
  }, [])

  const handleDelete = id => {
    deleteCheckList(checkListDispatch, id)
    setLoading(checkListDispatch, false)
    console.log('delete')
  }

  console.log(checkLists)
  return (
    <Container>
      <PageTitle title="Check Lists">
        <Link to="/form">
          <Button type="button">Novo Check List</Button>
        </Link>
      </PageTitle>
      {loading && <p>Carregando...</p>}
      {error && <p>{message}</p>}
      {checkLists && checkLists.map(item => (
        <Card key={item._id}>
          <CheckListData>
            <FarmerName>{item.farmer.name}</FarmerName>
            <FarmerCity>{item.farmer.city}</FarmerCity>
            <FromName>{item.from.name}</FromName>
            <CheckListCreated>
              Data de cadastro:
              {' '}
              {moment(item.created_at).format('DD/MM/YYYY')}
            </CheckListCreated>
          </CheckListData>
          <Actions>
            <Link to={`/form/${item._id}`}>
              <FontAwesomeIcon icon={faEdit} size="lg" />
            </Link>
            <DeleteAlertDialog handleDelete={() => handleDelete(item._id)} />
            <Link to={`/detail/${item._id}`}>
              <FontAwesomeIcon icon={faEye} size="lg" />
            </Link>
          </Actions>
        </Card>
      ))}
    </Container>
  )
}

export default Home
