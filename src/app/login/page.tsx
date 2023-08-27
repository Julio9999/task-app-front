"use client"
import FormValidationError from '@/components/common/FormValidationError'
import { useLoginForm } from '@/hooks/useLoginForm'
import { ErrorMessage } from '@hookform/error-message'
import { Button, Card, CardContent, CardHeader, Container, TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { Toaster } from 'react-hot-toast';

export default function Index() {

  const { handleSubmit, methods } = useLoginForm()


  return (
    <Container maxWidth={'sm'} sx={{ marginTop: '5rem' }}>
      <Toaster position="top-right" />
      <Card>
        <CardContent>
          <form className='loginForm' onSubmit={methods.handleSubmit(handleSubmit)} >
            <h1>Iniciar Sesion</h1>
            <Container sx={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column' }}>

              <Controller name='email' control={methods.control} render={({ field }) => (
                <TextField
                  {...field}
                  label="Email" />
              )} />

              <ErrorMessage
                errors={methods.formState.errors}
                name="email"
                render={({ message }) => <FormValidationError message={message} />}
              />
            </Container>

            <Container  sx={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column' }}>
              <Controller name='password' control={methods.control} render={({ field }) => (
                <TextField
                  {...field}
                  label="Contraseña"
                  type="password" />
              )} />

              <ErrorMessage
                errors={methods.formState.errors}
                name="password"
                render={({ message }) => <FormValidationError message={message} />}
              />
            </Container>


            <Button variant="contained" type='submit' color="primary">
              Iniciar Sesion
            </Button>

          </form>
        </CardContent>
      </Card>
    </Container>
  )
}
