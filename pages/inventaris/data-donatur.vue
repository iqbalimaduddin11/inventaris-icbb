<template>
  <div class="container-fluid mb-5">
    <nav aria-label="breadcrumb" class="mt-4">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Manajemen Inventaris</li>
            <li class="breadcrumb-item active" aria-current="page">Data Donatur</li>
        </ol>
    </nav>
    <h4 class="ml-3"><strong>Data Donatur</strong></h4>
    <div class="row">
      <div class="ml-3 mt-4">
          <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary">Tambah Donatur</b-button>

          <b-modal id="modal-1" size="lg" ref="modal-admin" title="Tambah Donatur">
              <form action="" method="post" style="margin-bottom: 90px">
                  <div class="mb-3 row">
                      <label for="inputName" class="col-sm-2 col-form-label">Nama</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="nama" id="inputName">
                      </div>
                  </div>
                  <div class="mb-3 row">
                      <label for="inputHp" class="col-sm-2 col-form-label">Nomor Hp</label>
                      <div class="col-sm-10">
                          <input type="text" class="form-control" v-model="nomer" id="inputHp">
                      </div>
                  </div>
                  <div class="mb-3 row">
                      <label for="inputAlamat" class="col-sm-2 col-form-label">Alamat</label>
                      <div class="col-sm-10">
                          <textarea class="form-control" v-model="alamat" id="inputAlamat" rows="3"></textarea>
                      </div>
                  </div>
              </form>
              <template #modal-footer>
                  <b-button @click="addData" variant="primary">Simpan</b-button>
              </template>
          </b-modal>
      </div>
    </div>
    <div class="row">
      <div class="mt-4">
        <b-table outlined no-border-collapse :fields="header" :items="items" show-empty class="mt-4">
            <template #empty>
                <h5
                 class="text-center"><strong>Data Tidak Ditemukan</strong></h5>
            </template>
            <template #cell(action)="data">
              <b-button class="btn btn-sm" variant="danger" @click="deletedData(data.item)">Delete</b-button>
              <b-button v-b-modal.modal-2 class="btn btn-sm" variant="primary" @click="detailData(data.item)">Detail</b-button>
            </template>
        </b-table>
          <b-modal id="modal-2" size="lg" ref="modal-detail" title="Detail">
            <form action="" method="">
              <div class="mb-3 row">
                <p class="col-3">Nama</p>
                <p class="col-4">: {{detail.nama}}</p>
              </div>
              <div class="mb-3 row">
                <p class="col-3">Nomor Hp</p>
                <p class="col-4">: {{detail.no_telp}}</p>
              </div>
              <div class="mb-3 row">
                  <p class="col-3">Alamat</p>
                  <p class="col-4">: {{detail.alamat}}</p>
              </div>
            </form>
            <template #modal-footer>
              <b-button v-b-modal.modal-3 class="btn btn-sm" @click="editData" variant="primary">Edit</b-button>

              <b-modal id="modal-3" size="lg" ref="modal-admin" title="Edit Admin Ruang">
                  <form action="" method="post" style="margin-bottom: 90px">
                      <div class="mb-3 row">
                          <label for="inputName" class="col-sm-2 col-form-label">Nama</label>
                          <div class="col-sm-10">
                          <input type="text" class="form-control" v-model="edit.nama" id="inputName">
                          </div>
                      </div>
                      <div class="mb-3 row">
                          <label for="inputHp" class="col-sm-2 col-form-label">Nomor Hp</label>
                          <div class="col-sm-10">
                              <input type="text" v-model="edit.no_telp" class="form-control" id="inputHp">
                          </div>
                      </div>
                      <div class="mb-3 row">
                          <label for="inputAlamat" class="col-sm-2 col-form-label">Alamat</label>
                          <div class="col-sm-10">
                              <textarea class="form-control" v-model="edit.alamat" id="inputAlamat" rows="3"></textarea>
                          </div>
                      </div>
                  </form>
                  <template #modal-footer>
                      <b-button @click="postEdit(edit.kode)" variant="primary">Simpan</b-button>
                  </template>
              </b-modal>
            </template>
          </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
  import cookie from 'js-cookie'
  export default {
    data () {
      return {
        header:[
          { key: 'nama', label: 'Nama' },
          { key: 'no_telp', label: 'No Hp' },
          { key: 'action', label: 'Action' }
        ],
        items: [],
        nama: '',
        nomer: '',
        alamat: '',
        email: '',
        detail: {},
        edit: {}
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      async getData() {
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/person', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          this.items = response.data.data
        }).catch(err => {
          if (typeof err.response !== "undefined") {
            if (err.response.status === 404) {
              this.$bvModal.show('modal-login')
            }
          }
        })
      },
      detailData(data){
        this.detail = data
      },
      editData(){
        this.edit = this.detail
      },
      async postEdit(id){
        const data = {
          "nama": this.edit.nama,
          "no_telp": this.edit.no_telp,
          "alamat": this.edit.alamat
        }
        await this.$axios.patch('https://inventaris-yayasan.herokuapp.com/person/' + id, data, {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          console.log(response)
        })
        this.getData()
        this.$bvModal.hide('modal-3')
      },
      async addData(){
        var loop = true
        let kode = 1
        while (loop) {
          const cek = this.items.filter(function (item) {
            return item.kode == kode
          })
          if (cek.length == 0) {
            loop = false
          } else {
            kode++
          }
        }
        const dataPerson = {
          "kode": kode,
          "nama": this.nama,
          "no_telp": this.nomer,
          "alamat": this.alamat,
        }
        const data = JSON.stringify(dataPerson)
        console.log(data)
        await this.$axios.post("https://inventaris-yayasan.herokuapp.com/person", data, {
          headers: {
            "content-type": "application/json; charset=utf-8",
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        this.getData()
        this.$bvModal.hide('modal-1')
      },
      async deletedData(data){
        await this.$axios.delete('https://inventaris-yayasan.herokuapp.com/person/' + data.kode, {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          console.log(response)
        })
        this.getData()
      }
    }
  }
</script>
