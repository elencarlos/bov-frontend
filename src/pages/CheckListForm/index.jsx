import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Container,
  Form,
  Input,
  Label,
  PrimaryTitle,
  UnderlineTitle,
  SubmitButton,
} from './style'

const schema = yup
  .object({
    type: yup.string(),
    amountOfMilkProduced: yup.number().positive().integer(),
    numberOfCowsHead: yup.number().positive().integer(),
    farmer: yup.object().shape({
      name: yup.string(),
      city: yup.string(),
    }),
    from: yup.object().shape({
      name: yup.string(),
    }),
    to: yup.object().shape({
      name: yup.string(),
    }),
    hadSupervision: yup.number(),
    latitude: yup.number(),
    longitude: yup.number(),
  })
  .required()

export default function CheckListForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = data => console.log(data)

  const dataForm = {
    _id: 1,
    type: 'BPA',
    amount_of_milk_produced: '300',
    farmer: {
      name: 'Fazenda São Rock',
      city: 'São Rock',
    },
    from: {
      name: 'Luciano Camargo',
    },
    to: {
      name: 'Fernando Siqueira',
    },
    number_of_cows_head: '17',
    had_supervision: true,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: '2022-02-01T10:10:21.748Z',
    updated_at: '2022-02-01T10:10:21.748Z',
    __v: 0,
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <PrimaryTitle>
          Cadastro de CheckList
          <UnderlineTitle />
        </PrimaryTitle>
        <div style={{ display: 'flex', justifyContent: 'stretch', gap: '20px' }}>
          <div style={{ width: '50%' }}>
            <div>
              <Label>Tipo do checklist</Label>
              <Input {...register('type')} />
              {errors.type && <p>{errors.type.message}</p>}
            </div>
            <div>
              <Label>Nome do Fazendeiro</Label>
              <Input {...register('from')} />
              {errors.from && <p>{errors.from.message}</p>}
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
              <Input {...register('to')} />
              {errors.to && <p>{errors.to.message}</p>}
            </div>
          </div>
          <div style={{ width: '50%' }}>
            Escolha no mapa a localização

          </div>
        </div>
        <SubmitButton type="submit" />
      </Form>
    </Container>
  )
}
