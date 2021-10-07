<template>
  <div class="container-fluid p-3 mb-5">
    <nav aria-label="breadcrumb" class="mt-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Manajemen Barang</li>
        <li class="breadcrumb-item active" aria-current="page">Jenis Barang</li>
      </ol>
    </nav>
    <h4 class="ml-3"><strong>Data Jenis Barang</strong></h4>
    <div class="row">
      <div class="ml-3 mt-4">
          <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary">Tambah Jenis Barang</b-button>

          <b-modal id="modal-1" size='lg' ref="modal-jenis" title="Tambah Jenis Barang">
            <form action="" method="post" style="margin-bottom: 90px">
                <div class="mb-3 row">
                    <label for="inputJenisBarang" class="col-sm-3 col-form-label">Nama Barang</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" v-model="jenis" id="inputJenisBarang">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputGolongan" class="col-sm-3 col-form-label">Golongan Barang</label>
                    <div class="col-sm-9">
                      <b-form-select v-model="selectedGolongan" :options="golongan">
                        <!-- This slot appears above the options from 'options' prop -->
                            <template #first>
                                <b-form-select-option :value="null" disabled>-- Pilih Golongan Barang --</b-form-select-option>
                            </template>
                        </b-form-select>
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
              <b-button class="btn btn-sm" variant="danger" @click="deletedData('data.item')">Delete</b-button>
              <b-button v-b-modal.modal-2 class="btn btn-sm" variant="primary" @click="detailData(data.item)">Detail</b-button>
            </template>
        </b-table>
          <b-modal id="modal-2" size="lg" ref="modal-detail" title="Detail">
            <form action="" method="">
              <div class="mb-3 row">
                <p class="col-3">Nama Barang</p>
                <p class="col-4">: {{detail.nama}}</p>
              </div>
              <div class="mb-5 row">
                <p class="col-3">Golongan Barang</p>
                <p class="col-4">: {{detail.data_barang_golongan.nama}}</p>
              </div>
            </form>
            <template #modal-footer>
              <b-button v-b-modal.modal-3 class="btn btn-sm" @click="editData" variant="primary">Edit</b-button>

              <b-modal id="modal-3" size="lg" ref="modal-admin" title="Edit">
                  <form action="" method="post" style="margin-bottom: 90px">
                    <div class="mb-3 row">
                        <label for="inputNamaBarang" class="col-sm-3 col-form-label">Nama Barang</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" v-model="edit.nama" id="inputNamaBarang">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputName" class="col-sm-3 col-form-label">Golongan Barang</label>
                        <div class="col-sm-9">
                            <b-form-select v-model="edit.golongan" :options="golongan">
                            <!-- This slot appears above the options from 'options' prop -->
                                <template #first>
                                    <b-form-select-option :value="null" disabled>-- Pilih Golongan --</b-form-select-option>
                                </template>
                            </b-form-select>
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
        golongan: [],
        selectedGolongan: '',
        header: [
          { key: 'nama', label: 'Nama Barang' },
          { key: 'data_barang_golongan.nama', label: 'Golongan Barang' },
          { key: 'action', label: 'Action' }
        ],
        items: [],
        jenis: '',
        detail: {
          data_barang_golongan: {
            nama: ''
          }
        },
        edit: {
          data_barang_golongan: {
            nama: ''
          }
        }
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      async getData() {
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/barang', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          console.log(response)
          this.items = response.data.data
        }).catch(err => {
          if (typeof err.response !== "undefined") {
            if (err.response.status === 404) {
              this.$bvModal.show('modal-login')
            }
          }
        })
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/barang-golongan', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          const data = {}
          response.data.data.forEach(function callback(item, index) {
              data[index] = {value: item.kode, text: item.nama}
          });
          this.golongan = data
          console.log(this.golongan)
        })
      },
      detailData(data){
        this.detail = data
      },
      async addData(){
        const kode = this.items.length + 1
        console.log(kode)
        const dataJenisBarang = {
          "kode": kode,
          "code": this.code,
          "nama": this.jenis,
          "golongan": this.selectedGolongan,
        }
        const data = JSON.stringify(dataJenisBarang)
        console.log(data)
        await this.$axios.post("https://inventaris-yayasan.herokuapp.com/barang", data, {
          headers: {
            "content-type": "application/json; charset=utf-8",
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        this.getData()
        this.$bvModal.hide('modal-1')
      },
      editData(){
        this.edit = this.detail
      },
      async postEdit(id){
        const data = {
          "jenis": this.edit.nama,
          "golongan": this.edit.data_barang_golongan
        }

        await this.$axios.patch('https://inventaris-yayasan.herokuapp.com/barang/' + id, data, {
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
      async deletedData(data){
        await this.$axios.delete('https://inventaris-yayasan.herokuapp.com/barang/' + data.kode, {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          console.log(response)
          this.items = response.data.data
        })
      }
    },
}
</script>
