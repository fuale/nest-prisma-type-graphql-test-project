import { Container, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { FC } from "react"

export const LoginView: FC = () => {
  return (
    <Container>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input />
      </FormControl>
    </Container>
  )
}
