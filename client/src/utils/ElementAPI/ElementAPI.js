import axios from 'axios'

const ElementAPI = {
  getElements: () => axios.get('/api/elements', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
  }),
  createElement: element => axios.post('/api/elements', element, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
  }),
  updateElement: (id, updates) => axios.put(`/elements/${id}`, updates, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
  }),
  deleteElement: id => axios.delete(`/api/elements/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
  })
}

export default ElementAPI
