import { GET, POST } from './api' 

export const ReadUsers = async () => {
	return await GET(`users`)
}

export const SearchUsers = async (params) => {
	return await POST(`users`, params )}