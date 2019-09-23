<template>
  <div id="app">

    <Header></Header>
    <router-view/>
    <Footer></Footer>

  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default{
    name:'app',
    components:{
      Header,
      Footer,
    }
  }
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/***************************************** Generic styles */
body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
}
section{
    width: 84%;
    margin: auto;
}

.feautured, .categories{
    position: relative;
    padding: 1rem;
}
#section-product{
    width: 100%;
}

footer{
    width: 100%;
    display: inline-grid;
}

/***************************************** Cristian's code */​
.max_width_100{
    max-width: 75%;
}
.width_100{
    max-width: 100%;
}
.max_width_75{
    max-width: 75%;
}
.min_height_600{
    min-height: 600px;
}
.min_height_450{
    min-height:450px;
}
.min_height_350{
    min-height:350px;
}
.height_350{
    height:350px;
}
.width_90{
    width: 90%;
}
.min_height_400{
    min-height: 400px;
}

.contenedor_card {
    overflow-y: scroll;
}
.contenedor_card::-webkit-scrollbar {
    width: 8px;     /* Tamaño del scroll en vertical */
    height: 8px;    /* Tamaño del scroll en horizontal */
    /* display: none;  Ocultar scroll */
}
.contenedor_card::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
}
/* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
.contenedor_card::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}
/* Cambiamos el fondo cuando esté en active */
.contenedor_card::-webkit-scrollbar-thumb:active {
    background-color: #999999;
}


</style>
