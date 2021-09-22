<template>
  <div class="container-fluid p-3">
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
        <b-table-simple>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th>No</b-th>
              <b-th>Divisi</b-th>
              <b-th>Penanggung Jawab</b-th>
              <b-th>aksi</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-th>1.</b-th>
              <b-th>CMC</b-th>
              <b-th>M Fadlan Syakir</b-th>
              <b-th>
                <a href="/inventaris" class="btn btn-primary" role="button" data-bs-toggle="button">Detail</a>
              </b-th>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'
export default {
  data () {
    return {
      karyawan: "",
      ruang: '',
      divisi: ''
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    async getUser () {
      console.log('getuser')
      await this.$axios
        .get("https://inventaris-yayasan.herokuapp.com/user")
        .then(response => {
          console.log(response.data.data)
          this.karyawan = response.data.data.length
        })
      await this.$axios
        .get("https://inventaris-yayasan.herokuapp.com/divisi", {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          console.log(response.data.data)
          this.divisi = response.data.data.length
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
