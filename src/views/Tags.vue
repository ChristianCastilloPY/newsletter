<template>
  <section>
    <!-- subscribee -->
    <br />
    <h3 class="row justify-content-center">Real news, curated by real humans</h3>
    <h4 class="text-muted row justify-content-center">
      Packed with the trends,news & links you need to be smart,
      informed,and ahead of the curve
    </h4>

    <div class="row">
      <div
        v-for="(card, index) in cardstag.newsletters"
        :key="index"
        class="col-md-3 mt-4"
        style="min-width: 23rem"
      >
        <!-- Subscribe -->
        <br />

        <div class="card" style="width: 25rem;">
          <br />
          <div class="row">
            <img
              :src="card.image"
              class="card-img rounded-circle"
              style="width:8rem; margin-left:10rem"
            />
            <h6 class="card p-1 col-2" style="margin-left:3rem;height:50%;color:orange">DAILY</h6>
          </div>
          <div class="card-body">
            <h4 class="card-title text-center">{{card.title}}</h4>
            <p class="card-text text-muted mx-2 text-center">{{card.description}}</p>
            <br />
            <div href="#" class="btn btn-light p-3" style="width:22rem;" 
            v-on:click="alertDisplay(index)">
              <font-awesome-icon icon="envelope" style="color:orange">
                </font-awesome-icon>&nbsp &nbsp &nbsp Subscribe &nbsp &nbsp &nbsp >
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- GET IN TOUCH -->
    <div class="card text-center mt-5" style="width: 25rem;">
      <br />
      <h5>
        <strong>Interested in sponsoring a newsletter?</strong>
      </h5>
      <img
        src="https://jmh.furniture/wp-content/uploads/2019/05/orange1.jpg"
        class="card-img mx-auto rounded-circle"
        style="width:8rem;"
      />
      <h5 class="text-muted">[Your logo here]</h5>
      <br />
      <a href class="btn btn-warning" style="background-color:orange">GET IN TOUCH</a>
    </div>

    <!-- ------------------------------------------------------------------------------------------------------------------ -->
    <!-- voteee  CARD-->
    <br />
    <h4 class="row justify-content-center">Up-and-coming</h4>
    <h5 class="text-muted row justify-content-center">
      If these newsletters reach their goals (or get a sponsorship),
      we'll bring on expert writers and launch them. Vote for all
      your favorites.
    </h5>

    <div class="row">
      <div
        v-for="(card, index) in cardstag.newsletters"
        :key="index"
        class="col-md-3 mt-4"
        style="min-width: 28rem"
      >
        <!-- Vote -->
        <div style="text-decoration:none;color:black">
          <br />
          <div class="card col-md-12" style="width: 30rem;">
            <div class="row no-gutters">
              <div class="w-50 mx-auto col-md-3">
                <br />
                <img :src="card.image" class="card-img rounded-circle" alt />
              </div>
              <div class="col-md-9">
                <div class="card-body">
                  <h5 class="card-title">{{card.title}}</h5>
                  <h6 class="card-text text-muted">{{card.description}}</h6>
                </div>
              </div>
              <br />

              <!--boton Vote -->
              <div class="card-body">
                <button class="btn btn-light" style="width:100%;" v-on:click="incrementar(index)">
                  <div class="d-flex justify-content-between">
                    <div>
                      <font-awesome-icon icon="envelope" style="color:orange"></font-awesome-icon>&nbsp &nbsp Vote
                    </div>
                    <div>></div>
                  </div>
                </button>
                <br />
                <br />
                <div class="progress" style="width:100%;height:7%">
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    style="width:75%;"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <h6>
                      <small>SUBSCRIBED</small>
                    </h6>
                    {{contador[index]}}
                  </div>
                  <div>
                    3000
                    <H6>
                      <small>TARGET</small>
                    </H6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<h5 class="card col-2 text-muted">
      voto total:
                    {{contador1}}
    </h5>
    <!-- PROPOSE A NEWSLETTER -->
    <div class="card text-center mt-5 mb-5" style="width: 25rem;">
      <br />
      <h5>
        <strong>Have an idea for a newsletter?</strong>
      </h5>
      <img
        src="https://jmh.furniture/wp-content/uploads/2019/05/orange1.jpg"
        class="card-img mx-auto rounded-circle"
        style="width:8rem;"
      />
      <br />
      <a href class="btn btn-warning" style="background-color:orange">Propose a newsletter</a>
    </div>
  </section>
</template>



<script>
export default {
  data() {
    return {
      cardstag: [],
      contador:[0,2,4],
      contador1:1
    };

  },
  mounted() {
    this.getCards();
  },
  methods: {

    incrementar: function(index) {
         this.contador1=this.contador1 + 1
      this.contador[index]= this.contador[index] + 1
        },

    alertDisplay(index) {
      // $swal function calls SweetAlert into the application with the specified configuration.
    swal({
      html:     ' <div class="row">'+
            '<img '+
            'src='+
            this.cardstag.newsletters[index].image +
            'class="card-img rounded-circle" style="width:8rem; margin-left:12rem;border-radius: 50%"/>'+
            '<h6 class="card p-1 col-2" style="margin-left:3rem;height:50%;color:orange">DAILY</h6>'+
         ' </div>'+

          '<div class="card-body">'+
            '<h4 class="card-title text-center">'+
            this.cardstag.newsletters[index].title +
            '</h4>'+
            '<p class="card-text text-muted mx-2 text-center">'+
            this.cardstag.newsletters[index].description+
            '</p>'+
            '<br />'+
           ' <div href="#" class="btn btn-light p-3" style="width:22rem;" ' +
           ' v-on:click="alertDisplay(index)">'+
              '<font-awesome-icon icon="envelope" style="color:orange">'+
               ' </font-awesome-icon>&nbsp &nbsp &nbsp Subscribe &nbsp &nbsp &nbsp >'+
            '</div>'+
         ' </div>'+
       ' </div>"',

  showConfirmButton: false,
    });

    },


    getCards() {
    var urlFromHome = window.location.href;
    var uid = urlFromHome.split("?");


    
        const URL_N = `https://newsletters.academlo.com/api/v1/tags/${uid[1]}?include=newsletters`;
        // const URL_N = VUE_APP_API + '/tags/${uid[1]}?include=newsletters'
      axios
        .get(URL_N)
        .then(response => {
          this.cardstag = response.data;
          console.log(this.cardstag);
        })
        .catch(error => {
          console.log(error.response);
          alert("Existe un problema al cargar la información solicitada.");
        });
    }
  }
};
</script>
