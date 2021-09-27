<template>
  <div class="container-fluid p-3">
    <div v-if="loading">
      <div class="d-flex justify-content-center mb-3">
        <b-spinner label="Loading..."></b-spinner>
      </div>
    </div>
    <div v-else>
      <nav aria-label="breadcrumb" class="mt-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">Dashboard</li>
        </ol>
      </nav>
      <h4 class="ml-3"><strong>Dashboard</strong></h4>
      <div class="row">
        <b-card class="mr-2 ml-2" bg-variant="primary" style="width: 31%">
          <div class="card-body">
            <h2 class="card-title text-light">{{ ruang }}</h2>
            <b-card-text class="text-light">Data Ruang</b-card-text>
            <b-button variant="light">Detail</b-button>
          </div>
        </b-card>
        <b-card class="mr-2 ml-2" bg-variant="warning" style="width: 31%">
          <div class="card-body">
            <h2 class="card-title text-light">{{ divisi }}</h2>
            <b-card-text class="text-light">Data Divisi</b-card-text>
            <b-button variant="light">Detail</b-button>
          </div>
        </b-card>
        <b-card class="mr-2 ml-2" bg-variant="danger" style="width: 31%">
          <div class="card-body">
            <h2 class="card-title text-light">{{ karyawan }}</h2>
            <b-card-text class="text-light">Data Karyawan</b-card-text>
            <b-button variant="light">Detail</b-button>
          </div>
        </b-card>
      </div>
      <div class="row mt-3">
        <b-card class="mr-2 ml-2" bg-variant="success" style="width: 31%">
          <div class="card-body">
            <h2 class="card-title text-light">3</h2>
            <b-card-text class="text-light">Data Inventaris</b-card-text>
            <b-button variant="light">Detail</b-button>
          </div>
        </b-card>
      </div>
      <div class="row mb-3">
        <div class="col mt-3">
          <b-table outlined no-border-collapse :fields="headerDivisi" :items="itemsDivisi" show-empty class="mt-4">
              <template #empty>
                  <h5
                  class="text-center"><strong>Data Tidak Ditemukan</strong></h5>
              </template>
              <template #cell(data_ruangs)="data">
                <p>{{data.item.data_ruangs.length}}</p>
              </template>
              <template #cell(action)="data">
                  <b-button variant="danger">Delete</b-button>
                  <b-button v-b-modal.detailRuang variant="primary" @click="modalDetailDivisi(data.item.data_ruangs)">Detail</b-button>
              </template>
          </b-table>
          <b-modal id="detailRuang" hide-footer title="Detail Ruang">
            <b-table outlined no-border-collapse :fields="headerDetailRuang" :items="itemsDetailRuang" show-empty>
              <template #empty>
                  <h5
                  class="text-center"><strong>Data Tidak Ditemukan</strong></h5>
              </template>
            </b-table>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'
export default {
  data () {
    return {
      loading: false,
      karyawan: "",
      ruang: '',
      divisi: '',
      headerDivisi: [
        { key: 'nama', label: 'Divisi' },
        { key: 'data_ruangs', label: 'Jumlah Ruang' },
        { key: 'action', label: 'Action' },
      ],
      headerDetailRuang: [
        { key: 'kode', label: 'Kode' },
        { key: 'nama', label: 'Ruang' },
      ],
      itemsDivisi: [],
      itemsDetailRuang: [],
      detailDivisi: []

    }
  },
  created () {
    this.getUser()
  },
  methods: {
    async getUser () {
      this.loading = true
        await this.$axios
          .get("https://inventaris-yayasan.herokuapp.com/user", {
            headers: {
              'Authorization': 'Bearer ' + cookie.get('access_token')
            }
          })
          .then(response => {
            console.log(response.data.data)
            this.karyawan = response.data.data.length
          })
      try {
        await this.$axios
          .get("https://inventaris-yayasan.herokuapp.com/divisi-ruang", {
            headers: {
              'Authorization': 'Bearer ' + cookie.get('access_token')
            }
          })
          .then(response => {
            console.log(response.data.data)
            this.divisi = response.data.data.length
            this.itemsDivisi = response.data.data
            console.log(this.itemsDivisi)
          })
        await this.$axios
          .get("https://inventaris-yayasan.herokuapp.com/ruang", {
            headers: {
              'Authorization': 'Bearer ' + cookie.get('access_token')
            }
          })
          .then(response => {
            console.log(response.data.data)
            this.ruang = response.data.data.length
          })
      } catch (err) {
        if (typeof err.response !== "undefined") {
          const token = cookie.get('access_token')
          const user = cookie.get('user')
          if (err.response.status === 404) {
            if (typeof token !== "undefined") {
              const login = {
                email: JSON.parse(user).email,
                password: JSON.parse(user).password
              }
              console.log(login)
              const data = JSON.stringify(this.login)
              await this.$axios.post("https://inventaris-yayasan.herokuapp.com/user/login", data, {
                headers: {
                  "content-type": "application/json; charset=utf-8"
                }
              })
              .then(response => {
                // this.$bvModal.hide('modal-login')
                // console.log(response)
                this.$store.commit("user/SET_TOKEN", response.data.token);
                this.$store.commit("user/SET_USER", response.data.user[0]);
                this.$store.commit("user/SET_ISADMIN", response.data.user[0].role);
                this.username = response.data.user[0].nama
                cookie.set('access_token', response.data.token)
                cookie.set('user', response.data.user[0])
                // console.log(JSON.parse(localStorage.getItem('user')).user)
                location.reload(true)
                this.$bvModal.hide('modal-login')
              })
            }
          }
        }
      }
      this.loading = false
    },
    modalDetailDivisi(data){
      console.log(data)
      this.itemsDetailRuang = data
    }
  }
}
</script>

<style>
.row {
  margin-left: 0;
  margin-right: 0;
}
</style>
