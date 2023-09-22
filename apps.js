 //creacion de un vue app
const app = Vue.createApp({
    //datos y funciones que reaccionar a los eventos que queremos
    // template: '<h2> I am the template </h2>'
    //Creando una funcion
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            //array de books para usar v4
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/name-wind.jpg', isFav:true},
                {title: 'the way of the kings', author: 'brandon sanderson', img: 'assets/way-kings.jfif', isFav:false},
                {title: 'the final empire', author: 'brandon sanderson', img: 'assets/final-empire.jfif', isFav:true},
            ]

            // title: 'the Final Empire 2',
            // author: 'brandon Sanderson',
            // age:45,
            // x: 0,
            // y: 0
        } //se retorna un objeto desde la funcion
    },
    methods: {
       //Funcion que al dar click se esconde o muestra la informacion de los libros
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },

        toggleFav(book){
            book.isFav = !book.isFav;
        },

        handleEvent(e, data){
            console.log(e, e.type); //Imprime en consola el evento y el tipo de evento que es.

            if (data) {
                console.log(data);

            }
        // changeTitle(title){
        //     //this refiere al componente en si mismo
        //     // this.title = 'You changed the title'
        //     this.title = title

        // }
        

    }, handleMouseMove(e) {//Con este evento se toma la posicion de x y y
        this.x = e.offsetX;
        this.y = e.offsetY;

    }

}

});

//la creacion de app permite acceder a un metodo llamado count que le dice al dom donde montar la aplicacion

app.mount('#app'); //monta la instancia app en el dom donde halla elementos con el id app.