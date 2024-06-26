import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const get = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const create = async newObject => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

const update = async (object) => {
  const response = await axios.put(`${baseUrl}/${object.id}`, object)
  return response.data
}

const remove = async (id) => {
  await axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, get, create, update, remove }