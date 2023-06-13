import axios from "axios"

const BASE_URL = "http://localhost:4000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODcwMTFmOTMzOWQ5MGI0OGNkNjljNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjYyODc4MCwiZXhwIjoxNjg2ODg3OTgwfQ.XUprdvR-_kjVMc8oMEQ810Q92mthvejwOGbrMWZywEY"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headerL: {token: `Bearer ${TOKEN}`},
})