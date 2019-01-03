import axios from  'axios'

export const fetchData = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/users');
        const data = await response.data;
        return data;
    } catch (e) {
        console.log(e)
    }
}

export const createNewUser = (user) => {
    try{
        const response = axios.post('http://127.0.0.1:8000/register', user);
        const data = response.data;
        return data
    } catch (e) {
        console.log(e)
    }
}
export const deleteUser = (id) => {
    try {
        const response = axios.delete('http://127.0.0.1:8000/users/' + id );
        const data = response.data;
        return data;
    } catch (e) {
        console.log(e);
    }
}