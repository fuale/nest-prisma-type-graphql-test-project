import { Box, Grid, GridItem } from "@chakra-ui/react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import { useGetMeQuery } from "./generated/graphql"
import { CreateTask } from "./views/CreateTask"
import { HomeView } from "./views/HomeView"
import { LoginView } from "./views/LoginView"
import { TaskView } from "./views/TaskView"

export const App = () => {
  const [{ data }] = useGetMeQuery()

  return (
    <Router>
      <Grid gridGap={2} height="100vh" templateColumns="1fr 4fr" templateRows="1fr">
        <GridItem padding={2}>
          <Box
            fontWeight="bold"
            rounded="xl"
            as="nav"
            h="full"
            display="flex"
            flexDir="column"
            py={3}
            bg="teal.500"
            textColor="white"
          >
            <Box textAlign="center" my={5}>
              {data?.me?.username || "Не авторизованы"}
            </Box>
            <Box _hover={{ bg: "teal.600" }} as={Link} py={3} px={4} to="/home">
              Все задачи
            </Box>
            <Box _hover={{ bg: "teal.600" }} as={Link} py={3} px={4} to="/login">
              Войти
            </Box>
            <Box _hover={{ bg: "teal.600" }} as={Link} py={3} px={4} to="/task/create">
              Создать задачу
            </Box>
          </Box>
        </GridItem>

        <GridItem>
          <Switch>
            <Route path="/home">
              <HomeView />
            </Route>
            <Route path="/login">
              <LoginView />
            </Route>
            <Route path="/task/create">
              <CreateTask />
            </Route>
            <Route path="/task/view">
              <TaskView />
            </Route>
          </Switch>
        </GridItem>
      </Grid>
    </Router>
  )
}
