import axios from 'axios'

const ElementAPI = {
  getElements: () => axios.get('/api/elements'),
  createElement: element => axios.post('/api/elements', element),
  updateElement: (id, updates) => axios.put(`/api/elements/${id}`, updates),
  deleteElement: id => axios.delete(`/api/elements/${id}`)
}

export default ElementAPI
