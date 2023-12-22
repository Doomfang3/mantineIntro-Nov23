import { Badge, Button, Card, Group, Image, Stack, Text, Tooltip } from '@mantine/core'

const SingerCard = ({ name, image, songs }) => {
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Card.Section>
        <Image src={image} height={160} alt='Norway' />
      </Card.Section>

      <Group justify='space-between' mt='md' mb='xs'>
        <Text fw={500}>{name}</Text>
        <Tooltip label='Number of songs' position='left' offset={4}>
          <Badge color='pink'>{songs.length}</Badge>
        </Tooltip>
      </Group>

      <Stack bg='var(--mantine-color-body)'>
        {songs.map(song => (
          <Text size='sm' c='dimmed' key={song.id}>
            {song.title}
          </Text>
        ))}
      </Stack>

      <Button fullWidth mt='md' radius='md'>
        See the details
      </Button>
    </Card>
  )
}

export default SingerCard
