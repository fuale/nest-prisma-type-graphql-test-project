import { Button, Center, Container, Heading, Input } from "@chakra-ui/react"
import { Field, Form, Formik } from "formik"
import { FC } from "react"
import { useLoginMutation } from "../generated/graphql"

export const LoginView: FC = () => {
  const [{}, login] = useLoginMutation()

  return (
    <Center h="full">
      <Container shadow="md" padding="8" rounded="md" my="4">
        <Heading mb="4">Войти</Heading>

        <Formik initialValues={{ usernameOrEmail: "", password: "" }} onSubmit={async values => login(values)}>
          {({ isSubmitting }) => (
            <Form>
              <Field name="usernameOrEmail">
                {({ field }: any) => (
                  <Input {...field} placeholder="Имя пользователя или почта" name="usernameOrEmail" mb="3" />
                )}
              </Field>
              <Field name="password">
                {({ field }: any) => <Input mb="4" type="password" {...field} placeholder="Пароль" name="password" />}
              </Field>
              <Center>
                <Button type="submit" isLoading={isSubmitting}>
                  Войти
                </Button>
              </Center>
            </Form>
          )}
        </Formik>
      </Container>
    </Center>
  )
}
