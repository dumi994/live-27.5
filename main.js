const app = new Vue ({
    el: "#root",
    data:{
        userNumber: "",
        pcNumber: "",
    },

    methods:{
        
    },

    mounted(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/int")
        .then(response => {
            /* console.log(response.data.response); */
            this.userNumber = response.data.response;
            console.log(this.userNumber);
        })
        axios.get("https://flynn.boolean.careers/exercises/api/random/int")
        .then(response => {
            /* console.log(response.data.response); */
            this.pcNumber = response.data.response;
            console.log(this.pcNumber);
        })
        

    }
})



/* Tramite due chiamate axios, generiamo 2 numeri casuali: uno per l'utente e uno per il pc. 
Stampiamo in pagina i due numeri e il vincitore, ossia chi ha il numero più grande.
 */