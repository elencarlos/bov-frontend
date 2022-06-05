import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import { Container, Content, Item, ItemData, ItemLabel } from './style'
import 'leaflet/dist/leaflet.css'
import { useCheckList } from '../../contexts/CheckList/CheckListState'
import { getCheckList, setLoading } from '../../contexts/CheckList/CheckListAction'
import Button from '../../components/Button'
import PageTitle from '../../components/PageTitle/PageTitle'

const center = [-16.03, -48.51]

export default function Detail() {
  const [position, setPosition] = useState(center)
  const { id } = useParams()
  const [checkListState, checkListDispatch] = useCheckList()
  const {
    checkList,
    loading,
    error,
    message,
  } = checkListState

  const getCheckListHandler = async CheckListId => {
    await getCheckList(checkListDispatch, CheckListId)
    setLoading(checkListDispatch, false)
  }

  useEffect(() => {
    if (id) {
      getCheckListHandler(id)
    }
  }, [])

  useEffect(() => {
    if (checkList) {
      if (checkList.location) {
        setPosition([checkList.location.latitude, checkList.location.longitude])
      }
    }
  }, [checkList])

  function LocationMarker() {
    const map = useMapEvents({
      load() {
        setPosition(position)
        map.flyTo(position, map.getZoom())
      },
    })

    return position === null ? null : (
      <Marker position={position}>
      </Marker>
    )
  }

  console.log(checkList)
  return (
    <Container>
      <Content>
        <PageTitle title="Detalhes do Check List">
          <Link to="/">
            <Button type="button">Voltar</Button>
          </Link>
        </PageTitle>
        <div style={{
          display: 'flex',
          justifyContent: 'stretch',
          gap: '20px',
        }}
        >
          {loading && <p>Carregando...</p>}
          {error && <p>{message}</p>}

          <div style={{
            display: 'flex',
            width: '50%',
            gap: '20px',
            flexDirection: 'column',
          }}
          >
            <div>
              <Item>
                <ItemLabel>Tipo do checklist</ItemLabel>
                <ItemData>
                  {checkList.type}
                </ItemData>
              </Item>
              <Item>
                <ItemLabel>Nome do Fazendeiro</ItemLabel>
                <ItemData>{checkList.from?.name}</ItemData>
              </Item>
              <Item>
                <ItemLabel>Nome do Fazenda</ItemLabel>
                <ItemData>  {checkList.farmer?.name}</ItemData>
              </Item>
              <Item>
                <ItemLabel>Cidade do Fazenda</ItemLabel>
                <ItemData>{checkList.farmer?.city}</ItemData>
              </Item>
              <Item>
                <ItemLabel>Quantidade de leite produzida no mês</ItemLabel>
                <ItemData>{checkList.amount_of_milk_produced}</ItemData>
              </Item>
              <Item>
                <ItemLabel>Quantidade de cabeça de gado</ItemLabel>
                <ItemData>{checkList.number_of_cows_head}</ItemData>
              </Item>
              <Item>
                <ItemLabel htmlFor='hadSupervision'>Teve supervisão no mês em curso</ItemLabel>
                <ItemData>{checkList.hadSupervision?"Sim":"Não"}</ItemData>
              </Item>
              <Item>
                <ItemLabel>Supervisor</ItemLabel>
                <ItemData>
                  {checkList.to?.name}
                </ItemData>
              </Item>
            </div>
          </div>
          <div style={{ width: '50%' }}>
            <ItemLabel>Localização no mapa</ItemLabel>
            <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <LocationMarker />
              <UpdateMapCentre mapCentre={position} />
            </MapContainer>
          </div>
        </div>
      </Content>
    </Container>
  )
}

function UpdateMapCentre(props) {
  const map = useMap();
  map.panTo(props.mapCentre);
  return null;
}
