import ky from "ky"
import { useQuery } from "react-query"

const client = ky.extend({
  prefixUrl: "http://localhost:4000",
  mode: "cors"
})

interface User {
  id: number
  name: string
  email: string
}

interface Task {
  id: number
  title: string
  creatorId: number
  creator: User
}

export const useUsers = () => useQuery("users", () => client.get("users").json<User[]>())
export const useTasks = () => useQuery("tasks", () => client.get("tasks").json<Task[]>())
