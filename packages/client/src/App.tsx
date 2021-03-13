import { Box, Grid, GridItem } from "@chakra-ui/react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import { CreateTask } from "./views/CreateTask"
import { HomeView } from "./views/HomeView"
import { LoginView } from "./views/LoginView"

export const App = () => {
  return (
    <Router>
      <Grid gridGap={2} height="100vh" templateColumns="1fr 4fr" templateRows="1fr">
        <GridItem>
          <Box as="nav" h="full" display="flex" flexDir="column" bg="teal.500" textColor="white">
            <Box _hover={{ bg: "teal.600" }} as={Link} p="3" to="/home">
              Home
            </Box>
            <Box _hover={{ bg: "teal.600" }} as={Link} p="3" to="/login">
              Login
            </Box>
            <Box _hover={{ bg: "teal.600" }} as={Link} p="3" to="/task/create">
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
          </Switch>
        </GridItem>
      </Grid>
    </Router>
  )
}
