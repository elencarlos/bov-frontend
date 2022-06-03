import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  firstName: yup.string()
    .required(),
  age: yup.number()
    .required()
    .positive()
    .integer(),
  website: yup.string()
    .url(),
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
    <form onSubmit={handleSubmit(onSubmit)}>

      <div>
        <label>First Name</label>
        <input {...register('firstName')} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Last Name</label>
        <input {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Age</label>
        <input type="number" {...register('age', { valueAsNumber: true })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <label>Website</label>
        <input {...register('website')} />
        {errors.website && <p>{errors.website.message}</p>}
      </div>
      <input type="submit" />
    </form>
  )
}
