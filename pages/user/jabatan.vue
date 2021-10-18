<template>
  <div class="container-fluid p-3 mb-5">
    <nav aria-label="breadcrumb" class="mt-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Manajemen Pengguna</li>
        <li class="breadcrumb-item active" aria-current="page">Jabatan</li>
      </ol>
    </nav>
    <h4 class="ml-3"><strong>Data Jabatan</strong></h4>
    <div class="row">
      <div class="ml-3 mt-4">
        <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary">Tambah Jabatan</b-button>

          <b-modal id="modal-1" size='lg' ref="modal-divisi" title="Tambah Divisi">
            <form action="" method="post" style="margin-bottom: 90px">
              <div class="mb-3 row">
                <label for="jabatan" class="col-sm-2 col-form-label">Jabatan</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="jabatan" id="jabatan">
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
        <div class="d-flex justify-content-between">
          <div class="w-50 d-flex">
            <label for="per-page-select" class="mr-2 col-form-label">Per Page</label>
            <b-form-select class="col-sm-2" id="per-page-select" v-model="perPage" :options="pageOptions"></b-form-select>
            <b-input-group class="col-5">
              <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Type to Search"
              ></b-form-input>

              <b-input-group-append>
                <b-button size="sm" :disabled="!filter" @click="filter = ''">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
          <div>
            <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" class="my-0"></b-pagination>
          </div>
        </div>
        <b-table outlined no-border-collapse :current-page="currentPage" :filter="filter" :per-page="perPage" @filtered="onFiltered" :fields="header" :items="items" show-empty class="mt-2">
            <template #empty>
                <h5
                 class="text-center"><strong>Data Tidak Ditemukan</strong></h5>
            </template>
            <template #cell(action)="data">
              <b-button class="btn btn-sm" variant="danger" @click="deletedData(data.item)">Delete</b-button>
              <b-button v-b-modal.modal-3 class="btn btn-sm" @click="editData(data.item)" variant="primary">Edit</b-button>
            </template>
        </b-table>
          <b-modal id="modal-3" size="lg" ref="modal-admin" title="Edit">
              <form action="" method="post" style="margin-bottom: 90px">
                <div class="mb-5 row">
                  <label for="jabatanEdit" class="col-sm-2 col-form-label">Jabatan</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="edit.nama" id="jabatanEdit">
                  </div>
                </div>
              </form>
              <template #modal-footer>
                  <b-button @click="postEdit(edit.kode)" variant="primary">Simpan</b-button>
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
        filter: null,
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        perPage: 5,
        currentPage: 1,
        totalRows: 1,
        header:[
          { key: 'nama', label: 'Jabatan' },
          { key: 'action', label: 'Action' }
        ],
        jabatan: '',
        items: [],
        detail: {},
        edit: {}
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      async getData(){
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/jabatan', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          console.log(response)
          this.items = response.data.data
          this.totalRows = this.items.length
        }).catch(err => {
          if (typeof err.response !== "undefined") {
            if (err.response.status === 404) {
              this.$bvModal.show('modal-login')
            }
          }
        })
      },
      async deletedData(data){
        await this.$axios.delete("https://inventaris-yayasan.herokuapp.com/jabatan/" + data.kode, {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        this.getData()
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
        console.log(kode)
        const dataJabatan = {
          "kode": kode,
          "nama": this.jabatan,
        }
        const data = JSON.stringify(dataJabatan)
        await this.$axios.post("https://inventaris-yayasan.herokuapp.com/jabatan", data, {
          headers: {
            "content-type": "application/json; charset=utf-8",
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        this.getData()
        this.$bvModal.hide('modal-1')
      },
      editData(data){
        this.edit = data
      },
      async postEdit(id){
        const dataJabatan = {
          "nama": this.edit.nama,
        }
        console.log(dataJabatan)
        await this.$axios.patch("https://inventaris-yayasan.herokuapp.com/jabatan/" + id, dataJabatan, {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        }).then(response => {
          this.detail = response.data.data[0]
          this.$bvModal.hide('modal-3')
        })
      }
    }
  }
</script>
