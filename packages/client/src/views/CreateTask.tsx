import { Button, Container, FormControl, Heading, Input } from "@chakra-ui/react"
import { Form, Formik, Field } from "formik"
import { FC } from "react"

export const CreateTask: FC = () => {
  return (
    <Container my="4" maxW="2xl">
      <Heading>Создать задачу</Heading>

      <Formik
        initialValues={{ description: "", title: "" }}
        onSubmit={async values => {
          console.log(values)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="title">{({ field }: any) => <Input {...field} placeholder="Задача" name="title" />}</Field>
            <Field name="description">
              {({ field }: any) => <Input {...field} placeholder="Описание" name="description" />}
            </Field>
            <Button type="submit" isLoading={isSubmitting}>
              Создать
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
