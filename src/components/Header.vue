<template>
  <div id="browse">
    <div class="nav w-100 bg-light">
      <!-- INSIDE e iconos -->
      <div class="w-100 mt-4 bg-light" style="color:orange;height:50px">
        <div class="ml-5 d-flex justify-content-between">
          <div>
            <h2 class="font-weight-bold">[ INSIDE ]</h2>
          </div>
          <div class="mr-5">
            <h2>
              <font-awesome-icon icon="search" class="mr-3"></font-awesome-icon>
              <font-awesome-icon icon="user"></font-awesome-icon>
            </h2>
          </div>
        </div>
      </div>

      <br />
      <br />

      <!-- aca empiezan los botones -->
      <div class="btn-group btn-group-toggle mt-4">
        <a href="all" to="/all">
          <button type="button" 
          class="m-1 btn btn-light bg-light border-0" 
          style="color:gray">All</button>
        </a>

      </div>

<!-- aca empieza la impresion de los botones -->

      <div class="btn-group btn-group-toggle list-inline mt-4">
        <div v-for="(button, index) in buttons" :key="index" 
        style="col-md-2" class="list-inline-item">
          <!-- <a :href=" '/tags' + '?' +  button.name "> -->
          <a :href = " '/tags' + '?' + button.slug" >
            <button
              type="button"
              class="m-1 btn btn-light bg-light border-0"
              style="color:gray"
            >{{button.name}}</button>
          </a>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: []
    };
  },
  mounted() {
    this.getbuttons();
  },
  methods: {
    getbuttons() {
      const URL_N = `https://newsletters.academlo.com/api/v1/tags`;

      axios
        .get(URL_N)
        .then(response => {
          this.buttons = response.data;
          console.log(this.buttons);
        })
        .catch(error => {
          console.log(error.response);
          alert("Existe un problema al cargar la información solicitada.");
        });
    }
  }
};
</script>
