import { ReadObject, SaveObject } from './storage'

export const DEVELOPMENT_MODE = true 
export const API_ENDPOINT ='http://localhost:8000/' 

export const ServerFetch = async (url, options) => {
	const headers = { 'content-type':'application/json' }
	// console.info(url, options, headers)
	try{
		const response = await fetch(url, { ...options, headers })  
		try{
			return await response.json()
		}catch(err){
			console.log('ServerParseError', err)
			return response
		}  
	}catch(error){
		console.log('ServerFetchError', error)
		return false;
	}
}

export const GET = async (path) => {
	return await ServerFetch(
		`${API_ENDPOINT}${path}`,
		{
			method: 'GET'
		}
	)
} 

export const POST = async (path, params) => {
	return await ServerFetch(
		`${API_ENDPOINT}${path}`,
		{
			method: 'POST',
			body: JSON.stringify(params)
		}
	)
} 