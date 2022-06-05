import React, {
  useEffect, useMemo, useRef, useState,
} from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import moment from 'moment'
import {
  Container, Form, Input, Label, Select, SubmitButton,
} from './style'
import 'leaflet/dist/leaflet.css'
import { useCheckList } from '../../contexts/CheckList/CheckListState'
import {
  createCheckList,
  getCheckList,
  getCheckLists,
  setLoading,
  updateCheckList,
} from '../../contexts/CheckList/CheckListAction'
import Button from '../../components/Button'
import PageTitle from '../../components/PageTitle/PageTitle'

const schema = yup
  .object({
    type: yup.string(),
    amountOfMilkProduced: yup.number()
      .positive()
      .integer(),
    numberOfCowsHead: yup.number()
      .positive()
      .integer(),
    farmer: yup.object()
      .shape({
        name: yup.string(),
        city: yup.string(),
      }),
    from: yup.object()
      .shape({
        name: yup.string(),
      }),
    to: yup.object()
      .shape({
        name: yup.string(),
      }),
    hadSupervision: yup.number(),
    location: yup.object()
      .shape({
        latitude: yup.number(),
        longitude: yup.number(),
      }),
  })
  .required()

const center = [-16.03, -48.51]

export default function CheckListForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })
  const history = useHistory()
  const [position, setPosition] = useState(center)
  const { id } = useParams()
  const isNewCheckList = !id
  const markerRef = useRef(null)
  const [checkListState, checkListDispatch] = useCheckList()
  const {
    checkList,
    checkLists,
    loading,
    error,
    message,
  } = checkListState

  const getCheckListHandler = async CheckListId => {
    await getCheckList(checkListDispatch, CheckListId)
    setLoading(checkListDispatch, false)
  }

  const getCheckListsHandler = async () => {
    await getCheckLists(checkListDispatch)
    setLoading(checkListDispatch, false)
  }

  useEffect(() => {
    if (id) {
      getCheckListHandler(id)
    }
    getCheckListsHandler()
    setValue('location.latitude', center[0])
    setValue('location.longitude', center[1])
  }, [])

  useEffect(() => {
    if (checkList) {
      reset({
        type: checkList.type,
        amountOfMilkProduced: checkList.amount_of_milk_produced,
        numberOfCowsHead: checkList.number_of_cows_head,
        farmer: { ...checkList.farmer },
        from: { ...checkList.from },
        to: { ...checkList.to },
        hadSupervision: checkList.had_supervision ? '1' : '0',
        location: checkList.location,
      })
      if (checkList.location) {
        setPosition([checkList.location.latitude, checkList.location.longitude])
      }
    }
  }, [checkList])

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
          setValue('location.latitude', marker.getLatLng().lat)
          setValue('location.longitude', marker.getLatLng().lng)
        }
      },
    }),
    [],
  )

  const onSubmit = data => {
    console.log(data)
    let checkListId
    if (isNewCheckList) {
      checkListId = checkLists.reduce((maxId, item) => (item._id > maxId ? item._id : maxId), 1) + 1
    } else {
      checkListId = checkList.id
    }
    const hidratedData = {
      id: checkListId.toString(),
      type: data.type,
      amount_of_milk_produced: data.amountOfMilkProduced,
      number_of_cows_head: data.numberOfCowsHead,
      had_supervision: data.hadSupervision === 1,
      farmer: {
        ...data.farmer,
      },
      from: {
        ...data.from,
      },
      to: {
        ...data.to,
      },
      location: {
        ...data.location,
      },
      created_at: moment().toISOString(),
      updated_at: moment().toISOString(),
    }
    if (isNewCheckList) {
      const dataToSend = {
        checklists: [
          { ...hidratedData },
        ],
      }
      console.log(dataToSend)
      createCheckList(checkListDispatch, dataToSend)
      history.push('/')
    } else {
      console.log(hidratedData)
      updateCheckList(checkListDispatch, hidratedData, checkListId)
      history.push('/')
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {loading && <p>Carregando...</p>}
        {error && <p>{message}</p>}
        <PageTitle title="Cadastro de Check List">
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
          <div style={{
            display: 'flex', width: '50%', gap: '20px', flexDirection: 'column',
          }}
          >
            <div>
              <Label>Tipo do checklist</Label>
              <Select {...register('type')}>
                <option value="BPA">BPA</option>
                <option value="Antibiotico">Antibiótico</option>
                <option value="BPF">BPF</option>
              </Select>
              {errors.type && <p>{errors.type.message}</p>}
            </div>
            <div>
              <Label>Nome do Fazendeiro</Label>
              <Input {...register('from.name')} />
              {errors.from && errors.from.name && <p>{errors.from.name.message}</p>}
            </div>
            <div>
              <Label>Nome do Fazenda</Label>
              <Input {...register('farmer.name')} />
              {errors.farmer && errors.farmer.name && (
                <p>{errors.farmer.name.message}</p>
              )}
            </div>
            <div>
              <Label>Cidade do Fazenda</Label>
              <Input {...register('farmer.city')} />
              {errors.farmer && errors.farmer.city && (
                <p>{errors.farmer.city.message}</p>
              )}
            </div>
            <div>
              <Label>Quantidade de leite produzida no mês</Label>
              <Input {...register('amountOfMilkProduced')} />
              {errors.amountOfMilkProduced && (
                <p>{errors.amountOfMilkProduced.message}</p>
              )}
            </div>
            <div>
              <Label>Quantidade de cabeça de gado</Label>
              <Input {...register('numberOfCowsHead')} />
              {errors.numberOfCowsHead && <p>{errors.numberOfCowsHead.message}</p>}
            </div>
            <div>
              <Label htmlFor="hadSupervision">Teve supervisão no mês em curso</Label>
              <div style={{
                display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', gap: '5px',
              }}
              >
                <Label htmlFor="hadSupervision_true">Sim</Label>
                <input id="hadSupervision" type="radio" {...register('hadSupervision')} value="1" />
                <Label htmlFor="hadSupervision_false">Não</Label>
                <input id="hadSupervision_false" type="radio" {...register('hadSupervision')} value="0" />
              </div>
              {errors.hadSupervision && <p>{errors.hadSupervision.message}</p>}
            </div>
            <div>
              <Label>Supervisor</Label>
              <Input {...register('to.name')} />
              {errors.to && errors.to.name && <p>{errors.to.name.message}</p>}
            </div>
          </div>
          <div style={{ width: '50%' }}>
            <Label>
              Escolha no mapa a localização
            </Label>
            <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                draggable
                eventHandlers={eventHandlers}
                position={position}
                ref={markerRef}
              />
            </MapContainer>
            {errors.location && errors.location.latitude && <p>{errors.location.message}</p>}
          </div>
        </div>
        <SubmitButton type="submit" />
      </Form>

    </Container>
  )
}
