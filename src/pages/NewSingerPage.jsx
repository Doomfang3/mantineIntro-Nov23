import { Button, TextInput, Title } from '@mantine/core'
import { useContext, useState } from 'react'
import { SingerContext } from '../contexts/SingerContext'
import { useNavigate } from 'react-router-dom'

const NewSingerPage = () => {
  const { createNewSinger } = useContext(SingerContext)

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const payload = { name, description, image }
    const newSinger = await createNewSinger(payload)
    console.log(newSinger)
    navigate('/')
  }

  return (
    <>
      <Title>New Singer</Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          label='Name'
          withAsterisk
          description='Name of the singer'
          required
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <TextInput
          label='description'
          withAsterisk
          description='Description of the singer'
          required
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <TextInput
          label='Picture'
          withAsterisk
          description='Picture of the singer'
          required
          value={image}
          onChange={event => setImage(event.target.value)}
        />
        <Button type='submit'>Create</Button>
      </form>
    </>
  )
}

export default NewSingerPage
