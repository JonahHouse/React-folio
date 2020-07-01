import axios from 'axios'

const ElementAPI = {
  getElements: () => axios.get('http://localhost:3001/api/elements', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
  }),
  createElement: element => axios.post('http://localhost:3001/api/elements', element, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
  }),
  updateElement: (id, updates) => axios.put(`http://localhost:3001/api/elements/${id}`, updates, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
  }),
  deleteElement: id => axios.delete(`http://localhost:3001/api/elements/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
  })
}

export default ElementAPI
