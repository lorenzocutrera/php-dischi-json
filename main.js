
const { createApp } = Vue
createApp({
    data() {
        return {
            base_url: 'http://localhost:8888/PHP/php-dischi-json/server.php',

            dischi: null,

        }
    },
    mounted() {

        console.log(this, this.base_url);
        /* axios.get returs a promis (una promessa... ti rispondo prima o poi) */
        axios
            .get(this.base_url)
            .then(response => {
                /* The request response is available in the then method */
                // console.log(response); // the whole response object
                // console.log(response.data); // the whole data response
                // console.log(response.data.response);

                this.dischi = response.data;
                console.log(this.dischi);
            })
            .catch(error => {
                /* Handle a request error */
                console.log('Error:');
                console.error(error);
                this.error = error.message
            })


    }

    
}).mount('#app')