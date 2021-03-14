import { Button, Center, Container, Heading, Input } from "@chakra-ui/react"
import { Form, Formik, Field } from "formik"
import { FC } from "react"
import { useCreateTaskMutation } from "../generated/graphql"

export const CreateTask: FC = () => {
  const [{}, createTask] = useCreateTaskMutation()

  return (
    <Center h="full">
      <Container shadow="md" padding="8" rounded="md" my="4">
        <Heading mb="4">Создать задачу</Heading>

        <Formik initialValues={{ description: "", title: "" }} onSubmit={async values => createTask(values)}>
          {({ isSubmitting }) => (
            <Form>
              <Field name="title">
                {({ field }: any) => <Input {...field} placeholder="Задача" name="title" mb={3} />}
              </Field>
              <Field name="description">
                {({ field }: any) => <Input {...field} placeholder="Описание" name="description" mb={4} />}
              </Field>
              <Center>
                <Button type="submit" isLoading={isSubmitting}>
                  Создать
                </Button>
              </Center>
            </Form>
          )}
        </Formik>
      </Container>
    </Center>
  )
}
