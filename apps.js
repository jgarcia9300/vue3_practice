 //creacion de un vue app
const app = Vue.createApp({
    //datos y funciones que reaccionar a los eventos que queremos
    // template: '<h2> I am the template </h2>'
    //Creando una funcion
    data() {
        return {
            showBooks: true,
            title: 'the Final Empire 2',
            author: 'brandon Sanderson',
            age:45
        } //se retorna un objeto desde la funcion
    },
    methods: {
       //Funcion que al dar click se esconde o muestra la informacion de los libros
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },

        handleEvent(e, data){
            console.log(e, e.type);

            if (data) {
                console.log(data);

            }

        // changeTitle(title){
        //     //this refiere al componente en si mismo
        //     // this.title = 'You changed the title'
        //     this.title = title

        // }
        
    }

}

});

//la creacion de app permite acceder a un metodo llamado count que le dice al dom donde montar la aplicacion

app.mount('#app'); //monta la instancia app en el dom donde halla elementos con el id app.