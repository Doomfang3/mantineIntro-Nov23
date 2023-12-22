import { useContext, useEffect, useState } from 'react'
import SingerCard from '../components/SingerCard'
import { SimpleGrid } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { SingerContext } from '../contexts/SingerContext'

const AllSingersPage = () => {
  const { singers } = useContext(SingerContext)

  const { width } = useViewportSize()

  return (
    <SimpleGrid cols={width > 1200 ? 3 : width > 800 ? 2 : 1}>
      {singers.map(singer => (
        <SingerCard key={singer.id} name={singer.name} image={singer.image} songs={singer.songs} />
      ))}
    </SimpleGrid>
  )
}

export default AllSingersPage
