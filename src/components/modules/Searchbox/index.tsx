import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import { Form, Input } from './styles'

const SearchBox = () => {
  const [city, setCity] = useState('')
  const router = useRouter()

  function searchCity(event: FormEvent) {
    event.preventDefault()
    router.push(`/today/${city.toLowerCase()}`)
  }

  return (
    <Form onSubmit={searchCity}>
      <Input
        placeholder="Buscar cidade..."
        onChange={event => setCity(event.target.value)}
        value={city}
      />
    </Form>
  )
}

export { SearchBox }
