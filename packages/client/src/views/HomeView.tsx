import { Avatar, Box, Center, Container, Flex, Heading, Spinner } from "@chakra-ui/react"
import { FC } from "react"
import { useHistory } from "react-router-dom"
import { useGetUsersWithCreatedTasksQuery } from "../generated/graphql"

export const HomeView: FC = () => {
  const [{ data, fetching }] = useGetUsersWithCreatedTasksQuery()
  const history = useHistory()

  if (fetching) {
    return <Spinner />
  }

  return (
    <Container my="4" maxW="2xl">
      <Heading>Последние задачи</Heading>
      {data?.users.map(user => (
        <Box borderY="1px solid black" key={user.id}>
          {user.creatorTasks.map(task => (
            <Flex
              onClick={() => {
                history.push("/task/view", { id: task.id })
              }}
              _hover={{ bgColor: "gray.50" }}
              my="3"
              key={task.id}
            >
              <Avatar name={user.username} />
              <Center ml="2">{task.title}</Center>
            </Flex>
          ))}
        </Box>
      ))}
    </Container>
  )
}
