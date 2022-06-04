import React, {
  useEffect, useMemo, useRef, useState,
} from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import {
  Container, Form, Input, Label, PrimaryTitle, SubmitButton, UnderlineTitle,
} from './style'
import 'leaflet/dist/leaflet.css'
import { useCheckList } from '../../contexts/CheckList/CheckListState'
import { getCheckList, setLoading } from '../../contexts/CheckList/CheckListAction'

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
        latitude: yup.number()
          .required(),
        longitude: yup.number()
          .required(),
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
  const onSubmit = data => console.log(data)
  const [position, setPosition] = useState(center)
  const { id } = useParams()
  const isNewCheckList = !id
  const markerRef = useRef(null)
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
      reset({
        type: checkList.type,
        amountOfMilkProduced: checkList.amount_of_milk_produced,
        numberOfCowsHead: checkList.number_of_cows_head,
        farmer: { ...checkList.farmer },
        from: { ...checkList.from },
        to: { ...checkList.to },
        hadSupervision: checkList.had_supervision,
        location: checkList.location,
      })
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

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {loading && <p>Carregando...</p>}
        {error && <p>{message}</p>}
        <PrimaryTitle>
          Cadastro de CheckList
          <UnderlineTitle />
        </PrimaryTitle>
        <div style={{
          display: 'flex',
          justifyContent: 'stretch',
          gap: '20px',
        }}
        >
          <div style={{ width: '50%' }}>
            <div>
              <Label>Tipo do checklist</Label>
              <Input {...register('type')} />
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
              <Label>Teve supervisão no mês em curso</Label>
              <Input {...register('hadSupervision')} />
              {errors.hadSupervision && <p>{errors.hadSupervision.message}</p>}
            </div>
            <div>
              <Label>Supervisor</Label>
              <Input {...register('to.name')} />
              {errors.to && errors.to.name && <p>{errors.to.name.message}</p>}
            </div>
          </div>
          <div style={{ width: '50%' }}>
            Escolha no mapa a localização
            {position && position.lat
              ? (
                <p>
                  latitude:
                  {' '}
                  {position.lat.toFixed(4)}
                  , longitude:
                  {' '}
                  {position.lng.toFixed(4)}
                  {' '}
                </p>
              ) : ''}
            <MapContainer center={center} zoom={5} scrollWheelZoom={false}>
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
