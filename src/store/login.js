import axios from 'axios';
export default  {
    namespaced: true,
    state: () => ({ 
        token: ''
     }),
  
    mutations: { 
        rubahToken (state, data) {
            // `state` is the local module state
            localStorage.setItem('token', data)
            state.token = data;
          }
     },
    actions: { 
    
        doLogin ({  commit }, dataLogin){
           
            axios.post('http://sideku.org:8801/user/login', {
                 email: dataLogin.email,
                 password: dataLogin.password
               
              })
              .then(function (response) {
                // console.log(response);
                commit('rubahToken', response.data.token)
              })
              .catch(function (error) {
                console.log(error);
                commit('rubahToken', '')
              });
            
         
        },
        doLogout({commit}){
           
            commit('rubahToken', '')
        }
     },
    getters: { 
        cekLogin (state) {
            (localStorage.getItem('token'))?state.token = localStorage.getItem('token'): state.token=''
            return state.token;
        }
     }
  }

