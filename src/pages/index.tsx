import React, { useEffect, useState } from 'react'
import { Htag, Button, Ptag, Tag, Rating } from '@/components'
import { withLayout } from '@/layout/Layout'



function Home() {

  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <Htag tag='h1'>title</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <Ptag size='l'>Большой</Ptag>
      <Ptag>Средний</Ptag>
      <Ptag size='s'>Маленький</Ptag>

      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Green</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  )
}

export default withLayout(Home)