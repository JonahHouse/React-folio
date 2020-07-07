import axios from 'axios'

const ElementAPI = {
  getElements: () => axios.get('/elements', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
  }),
  createElement: element => axios.post('/elements', element, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
  }),
  updateElement: (id, updates) => axios.put(`/elements/${id}`, updates, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
  }),
  deleteElement: id => axios.delete(`/elements/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
  })
}

export default ElementAPI
