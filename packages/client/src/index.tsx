import React from "react"
import ReactDOM from "react-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { createClient, Provider } from "urql"
import { App } from "./App"
import "./index.css"

const queryClient = new QueryClient()
const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
    mode: "cors"
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
