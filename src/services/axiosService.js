import axios from 'axios';
export default class AxiosService {
    postMethod = (url, data, isHeaderRequired = false) => {
        return axios.post(url, data, isHeaderRequired)
    }
    getMethod = (url, isHeaderRequired = false) => {
        return axios.post(url, isHeaderRequired)
    }
}

// function resetPassword(password,token) {   
//     axios.post(`/resetpswd/${token}`,{'password': password},{
//      headers: {
//         'token': token
//     }})
//     .then(function (response) {
//         console.log(response);
//         toast('Password changed successfully');
//             window.location.href = '/login'
//     })
//     .catch(function (err) {
//         console.log(err);
//         toast('Please Try Again..');
//     });
// }