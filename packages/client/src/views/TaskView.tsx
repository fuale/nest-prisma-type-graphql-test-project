import { Box, Container, Heading, Spinner, Text } from "@chakra-ui/react"
import { FC } from "react"
import { useLocation } from "react-router-dom"
import { useTaskQuery } from "../generated/graphql"

export const TaskView: FC = () => {
  const location = useLocation<{ id: number }>()
  const [{ data, fetching }] = useTaskQuery({ variables: { id: location.state.id } })

  if (fetching) {
    return <Spinner />
  }

  return (
    <Container p={2}>
      <Box mb={5}>
        <Heading>{data?.task?.title}</Heading>
        <Text>{data?.task?.description}</Text>
        <Box mt={5}>
          <Heading size="md">Подзадачи:</Heading>
          {data?.task?.subTasks.map(task => (
            <Box key={task.id}>
              <Text>{task.title}</Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box mt={5}>
        <Heading size="md">Комментарии:</Heading>
        <Box>
          {data?.task?.comments.map(comment => (
            <Box key={comment.id}>{comment.content}</Box>
          ))}
        </Box>
      </Box>
    </Container>
  )
}
