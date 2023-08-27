import { apiClient } from "@/helpers/validations/login/apiClient"
import { userData } from "@/interfaces/login"

export const login = (data: userData) => {
    const url = "auth/signin"
    return apiClient.post(url, data)
}