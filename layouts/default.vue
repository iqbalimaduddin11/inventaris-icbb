<template>
  <div id="wrapper" class="row">
    <LayoutsSidebar />
    <div id="content-wrapper" class="col d-flex flex-column">
      <div id="content">
        <LayoutsNavbar :username="username" />
        <Nuxt/>
        <LayoutsFooter />
      </div>
    </div>
    <div>
      <b-modal id="modal-login" centered title="BootstrapVue" no-fade hide-footer no-close-on-backdrop>
        <template #modal-header>
          <h5>Login User</h5>
        </template>
        <div class="alert alert-danger" v-if="errors">
          {{ errors }}
        </div>
        <form method="post" @submit.prevent="userLogin">
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="login.email" class="form-control" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="login.password" class="form-control"  placeholder="Password">
          </div> 
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'
export default {
  data() {
    return {
      login: {
        email: 'rahmad@gmail.com',
        password: 'rahmad'
      },
      errors: '',
      username: ''
    }
  },
  mounted() {
    // const token = this.$cookies.get('token', { signed: true })
    const token = cookie.get('access_token')
    console.log(token)
    if (typeof token === 'undefined') {
      console.log('tidak ada token')
      this.$bvModal.show('modal-login')
    }else{
      console.log('ada token')
      this.$bvModal.hide('modal-login')
      const user = cookie.get('user')
      this.username = JSON.parse(user).nama
      this.$store.commit("user/SET_TOKEN", token);
      this.$store.commit("user/SET_USER", user);
      this.$store.commit("user/SET_ISADMIN", JSON.parse(user).role);
    }
  },
  methods: {
    async userLogin() {
      // this.$axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
        // this.$bvModal.hide('modal-login')
        this.$store.commit("user/SET_TOKEN", response.data.token);
        this.$store.commit("user/SET_USER", response.data.user);
        this.$store.commit("user/SET_ISADMIN", response.data.user.role);
        this.username = response.data.user.nama
        cookie.set('access_token', response.data.token)
        cookie.set('user', response.data.user)
        // console.log(JSON.parse(localStorage.getItem('user')).token)
        this.$bvModal.hide('modal-login')
      } catch (err) {
        if (typeof err.response !== "undefined") {
          console.log(err.response.status)
          if (err.response.status === 401) {
            this.errors = "Email dan password kosong"
          }else{
            this.errors = err.response.data.message
          }
        }
      }
      // this.$router.push('/');
    }
  }
}
</script>

<style>
html, body{
  height: 100%;
}
#__nuxt, #__layout{
  height: 100%;
}
#content{
  height: 100%;
}
#wrapper{
  position:relative;
  min-height: 100%;
  max-height: auto !important;
  width: 100%;
  margin: 0px
}
#content-wrapper{
  margin: 0;
  padding: 0
}
</style>
