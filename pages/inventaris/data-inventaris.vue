<template>
  <div class="container-fluid mb-5">
    <nav aria-label="breadcrumb" class="mt-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Manajemen Inventaris</li>
        <li class="breadcrumb-item active" aria-current="page">Data Inventaris</li>
      </ol>
    </nav>
    <h4 class="ml-3"><strong>Data Inventaris</strong></h4>
    <div class="row">
        <div class="ml-3 mt-4">
          <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary">Tambah Inventaris</b-button>

          <b-modal id="modal-1" size='lg' ref="modal-inventaris" title="Tambah Inventaris">
            <form action="" method="post" style="margin-bottom: 90px">
              <div class="mb-3 row">
                  <label for="code" class="col-sm-2 col-form-label">Code</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="code" v-model="code">
                  </div>
              </div>
              <div class="mb-3 row">
                  <label for="example-datepicker" class="col-sm-2 col-form-label">Tanggal</label>
                <div class="col-sm-10">
                  <b-form-datepicker id="tanggal" v-model="date" class="mb-2"></b-form-datepicker>
                </div>
              </div>
              <div class="mb-3 row">
                  <label for="inputName" class="col-sm-2 col-form-label">Barang</label>
                  <div class="col-sm-10">
                      <b-form-select v-model="selectedBarang" :options="barang">
                      <!-- This slot appears above the options from 'options' prop -->
                          <template #first>
                              <b-form-select-option :value="null" disabled>-- Pilih Barang --</b-form-select-option>
                          </template>
                      </b-form-select>
                  </div>
              </div>
              <div class="mb-3 row">
                  <label for="inputHarga" class="col-sm-2 col-form-label">Harga</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputHarga" v-model="harga">
                  </div>
              </div>
              <div class="mb-3 row">
                <label for="inputDonatur" class="col-sm-2 col-form-label">Donatur</label>
                <div class="col-sm-10 row" style="margin-left: 0">
                  <b-form-select v-model="selectedDonatur" class="col-9" :options="donatur">
                    <!-- This slot appears above the options from 'options' prop -->
                        <template #first>
                            <b-form-select-option :value="null" disabled>-- Pilih Donatur --</b-form-select-option>
                        </template>
                  </b-form-select>
                  <b-button v-b-modal.modal-4 class="btn btn-sm col-3" variant="primary">
                  Tambah</b-button>

                  <b-modal id="modal-4" size='lg' ref="modal-area" title="Tambah Donatur">
                      <form action="" method="post" style="margin-bottom: 90px">
                          <div class="mb-3 row">
                            <label for="donatur" class="col-sm-2 col-form-label">Donatur</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" v-model="donatur1" id="donatur">
                            </div>
                          </div>
                      </form>
                      <template #modal-footer>
                          <b-button @click="addDonatur" variant="primary">Simpan</b-button>
                      </template>
                  </b-modal>
                </div>
              </div>
              <div class="mb-3 row">
                  <label for="inputName" class="col-sm-2 col-form-label">Divisi</label>
                  <div class="col-sm-10">
                      <b-form-select v-model="selectedDivisi" :options="divisi">
                      <!-- This slot appears above the options from 'options' prop -->
                          <template #first>
                              <b-form-select-option :value="null" disabled>-- Pilih Divisi --</b-form-select-option>
                          </template>
                      </b-form-select>
                  </div>
              </div>
              <div class="mb-3 row">
                  <label for="inputName" class="col-sm-2 col-form-label">Lokasi</label>
                  <div class="col-sm-10">
                      <b-form-select v-model="selectedLokasi" :options="lokasi">
                      <!-- This slot appears above the options from 'options' prop -->
                          <template #first>
                              <b-form-select-option :value="null" disabled>-- Pilih Lokasi --</b-form-select-option>
                          </template>
                      </b-form-select>
                  </div>
              </div>
              <div class="mb-3 row">
                  <label for="inputName" class="col-sm-2 col-form-label">Kepemilikan</label>
                  <div class="col-sm-10">
                      <b-form-select v-model="selectedKepemilikan" :options="divisi">
                      <!-- This slot appears above the options from 'options' prop -->
                          <template #first>
                              <b-form-select-option :value="null" disabled>-- Pilih Kepemilikan --</b-form-select-option>
                          </template>
                      </b-form-select>
                  </div>
              </div>
              <div class="mb-3 row">
                  <label for="inputName" class="col-sm-2 col-form-label">Kondisi</label>
                  <div class="col-sm-10">
                      <b-form-select v-model="selectedKondisi" :options="kondisi">
                          <!-- This slot appears above the options from 'options' prop -->
                          <template #first>
                              <b-form-select-option :value="null" disabled>-- Pilih Kondisi --</b-form-select-option>
                          </template>
                      </b-form-select>
                  </div>
              </div>
              <div class="mb-3 row">
                  <label for="inputDokumen" class="col-sm-2 col-form-label">Dokumen</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputDokumen" v-model="dokumen">
                  </div>
              </div>
            </form>
            <!-- eslint-disable -->
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
        <b-table outlined no-border-collapse :current-page="currentPage" :filter="filter" :per-page="perPage" :fields="header" :items="items" show-empty class="mt-2" @filtered="onFiltered">
            <template #empty>
                <h5 class="text-center"><strong>Data Tidak Ditemukan</strong></h5>
            </template>
            <template #cell(tanggal_masuk)="data">
              {{setTanggal(data.item.tanggal_masuk)}}
            </template>
            <template #cell(action)="data">
              <b-button class="btn btn-sm" variant="danger" @click="deletedData(data.item)">Delete</b-button>
              <b-button v-b-modal.modal-2 class="btn btn-sm" variant="primary" @click="detailData(data.item)">Detail</b-button>
              </template>
          </b-table>
            <b-modal id="modal-2" size="lg" ref="modal-detail" title="Detail">
                <form action="" method="">
                  <div class="mb-3 row">
                      <p class="col-3">Tanggal</p>
                      <p class="col-4">: {{setTanggal(detail.tanggal_masuk)}}</p>
                  </div>
                  <div class="mb-3 row">
                      <p class="col-3">Barang</p>
                      <p class="col-4">: {{detail.data_barang.nama}}</p>
                  </div>
                  <div class="mb-3 row">
                      <p class="col-3">Harga</p>
                      <p class="col-4">: {{detail.harga}}</p>
                  </div>
                  <div class="mb-3 row">
                      <p class="col-3">Donatur</p>
                      <p class="col-4">: {{detail.donatur.nama}}</p>
                  </div>
                  <div class="mb-3 row">
                      <p class="col-3">Divisi</p>
                      <p class="col-4">: {{detail.data_divisi.nama}}</p>
                  </div>
                  <div class="mb-3 row">
                      <p class="col-3">Kepemilikan</p>
                      <p class="col-4">: {{detail.pemilik.nama}}</p>
                  </div>
                  <div class="mb-3 row">
                      <p class="col-3">Kondisi</p>
                      <p class="col-4">: {{detail.kondisi}}</p>
                  </div>
                  <div class="mb-3 row">
                      <p class="col-3">Dokumen</p>
                      <p class="col-4">: {{detail.dokumen}}</p>
                  </div>
                  <div class="mb-5 row">
                      <p class="col-3">Pencatat</p>
                      <p class="col-4">: {{detail.app_user.nama}}</p>
                  </div>
                </form>
                <template #modal-footer>
                  <b-button v-b-modal.modal-3 class="btn btn-sm" @click="editData" variant="primary">Edit</b-button>

                  <b-modal id="modal-3" size="lg" ref="modal-admin" title="Edit">
                      <form action="" method="post" style="margin-bottom: 90px">
                          <div class="mb-3 row">
                            <label for="example-datepicker" class="col-sm-2 col-form-label">Tanggal</label>
                            <div class="col-sm-10">
                              <b-form-datepicker id="tanggal" v-model="edit.tanggal_masuk" class="mb-2"></b-form-datepicker>
                            </div>
                          </div>
                          <div class="mb-3 row">
                              <label for="inputName" class="col-sm-2 col-form-label">Barang</label>
                              <div class="col-sm-10">
                                  <b-form-select v-model="edit.barang" :options="barang">
                                  <!-- This slot appears above the options from 'options' prop -->
                                      <template #first>
                                          <b-form-select-option :value="null" disabled>-- Pilih Barang --</b-form-select-option>
                                      </template>
                                  </b-form-select>
                              </div>
                          </div>
                          <div class="mb-3 row">
                              <label for="inputHarga" class="col-sm-2 col-form-label">Harga</label>
                              <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputHarga" v-model="edit.harga">
                              </div>
                          </div>
                          <div class="mb-3 row">
                            <label for="inputDonatur" class="col-sm-2 col-form-label">Donatur</label>
                            <div class="col-sm-10 row" style="margin-left: 0">
                              <b-form-select v-model="edit.person_donatur" class="col-9" :options="donatur">
                                <!-- This slot appears above the options from 'options' prop -->
                                    <template #first>
                                        <b-form-select-option :value="null" disabled>-- Pilih Donatur --</b-form-select-option>
                                    </template>
                              </b-form-select>
                              <b-button v-b-modal.modal-5 class="btn btn-sm col-3" variant="primary">
                              Tambah</b-button>

                              <b-modal id="modal-5" size='lg' ref="modal-area" title="Tambah Donatur">
                                  <form action="" method="post" style="margin-bottom: 90px">
                                      <div class="mb-3 row">
                                        <label for="donatur" class="col-sm-2 col-form-label">Donatur</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" v-model="donatur1" id="donatur">
                                        </div>
                                      </div>
                                  </form>
                                  <template #modal-footer>
                                      <b-button @click="addDonatur" variant="primary">Simpan</b-button>
                                  </template>
                              </b-modal>
                            </div>
                          </div>
                          <div class="mb-3 row">
                              <label for="inputName" class="col-sm-2 col-form-label">Divisi</label>
                              <div class="col-sm-10">
                                  <b-form-select v-model="edit.divisi" :options="divisi">
                                  <!-- This slot appears above the options from 'options' prop -->
                                      <template #first>
                                          <b-form-select-option :value="null" disabled>-- Pilih Divisi --</b-form-select-option>
                                      </template>
                                  </b-form-select>
                              </div>
                          </div>
                          <div class="mb-3 row">
                              <label for="inputName" class="col-sm-2 col-form-label">Lokasi</label>
                              <div class="col-sm-10">
                                  <b-form-select v-model="edit.lokasi" :options="lokasi">
                                  <!-- This slot appears above the options from 'options' prop -->
                                      <template #first>
                                          <b-form-select-option :value="null" disabled>-- Pilih Lokasi --</b-form-select-option>
                                      </template>
                                  </b-form-select>
                              </div>
                          </div>
                          <div class="mb-3 row">
                              <label for="inputName" class="col-sm-2 col-form-label">Kepemilikan</label>
                              <div class="col-sm-10">
                                  <b-form-select v-model="edit.kepemilikan" :options="divisi">
                                  <!-- This slot appears above the options from 'options' prop -->
                                      <template #first>
                                          <b-form-select-option :value="null" disabled>-- Pilih Kepemilikan --</b-form-select-option>
                                      </template>
                                  </b-form-select>
                              </div>
                          </div>
                          <div class="mb-3 row">
                              <label for="inputName" class="col-sm-2 col-form-label">Kondisi</label>
                              <div class="col-sm-10">
                                  <b-form-select v-model="edit.kondisi" :options="kondisi">
                                      <!-- This slot appears above the options from 'options' prop -->
                                      <template #first>
                                          <b-form-select-option :value="null" disabled>-- Pilih Kondisi --</b-form-select-option>
                                      </template>
                                  </b-form-select>
                              </div>
                          </div>
                          <div class="mb-3 row">
                              <label for="inputDokumen" class="col-sm-2 col-form-label">Dokumen</label>
                              <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputDokumen" v-model="edit.dokumen">
                              </div>
                          </div>
                      </form>
                      <template #modal-footer>
                          <b-button @click="postEdit(edit.kode)" variant="primary">Edit</b-button>
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
        filter: null,
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        perPage: 5,
        currentPage: 1,
        totalRows: 1,
        selected: null,
        barang: [],
        donatur: [],
        divisi: [],
        lokasi: [],
        selectedBarang: '',
        selectedDonatur: '',
        selectedKepemilikan: '',
        selectedDivisi: '',
        selectedLokasi: '',
        selectedKondisi: '',
        kondisi: [
          { value: 'bagus', text: 'Bagus' },
          { value: 'cukup', text: 'Cukup' },
          { value: 'kurang Bagus', text: 'Kurang Bagus' },
          { value: 'rusak', text: 'Rusak' }
        ],
        header: [
          { key: 'tanggal_masuk', label: 'Tanggal' },
          { key: 'data_barang.nama', label: 'Barang' },
          { key: 'donatur.nama', label: 'Donatur' },
          { key: 'data_divisi.nama', label: 'Divisi' },
          { key: 'action', label: 'Action' }
        ],
        items: [],
        kode: '',
        donatur1: '',
        code: '',
        date: '',
        harga: '',
        dokumen: '',
        judulModal: '',
        detail: {
          data_barang: {
            nama: ''
          },
          donatur: {
            nama: ''
          },
          data_divisi: {
            nama: ''
          },
          pemilik: {
            nama: ''
          },
          app_user: {
            nama: ''
          },
        },
        edit: {
          data_barang: {
            nama: ''
          },
          donatur: {
            nama: ''
          },
          data_divisi: {
            nama: ''
          },
          data_divisi_ruang: {
            nama: ''
          },
          pemilik: {
            nama: ''
          },
          app_user: {
            nama: ''
          },
        }
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
      setTanggal(date){
        // console.log(this.$moment(date).format('DD-M-YYYY'))
        return this.$moment(date).format('dddd, D MMMM YYYY')
      },
      async getData() {
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/inventaris', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          console.log(response)
          const role = JSON.parse(localStorage.getItem('user')).isAdmin
          const divisi = JSON.parse(JSON.parse(localStorage.getItem('user')).user).divisi
          if (role != 1) {
            const cek = response.data.data.filter(function (item) {
              return item.kepemilikan == divisi
            })
            this.items = cek
          }else{
            this.items = response.data.data
          }
          this.totalRows = this.items.length
        }).catch(err => {
          if (typeof err.response !== "undefined") {
            if (err.response.status === 404) {
              this.$bvModal.show('modal-login')
            }
          }
        })
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/barang', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          const data = {}
          response.data.data.forEach(function callback(item, index) {
              data[index] = {value: item.kode, text: item.nama}
          });
          this.barang = data
          console.log(this.barang)
        }).catch(err => {
          if (typeof err.response !== "undefined") {
            if (err.response.status === 404) {
              this.$bvModal.show('modal-login')
            }
          }
        })
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/person', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          const data = {}
          response.data.data.forEach(function callback(item, index) {
              data[index] = {value: item.kode, text: item.nama}
          });
          this.donatur = data
          console.log(this.donatur)
        }).catch(err => {
          if (typeof err.response !== "undefined") {
            if (err.response.status === 404) {
              this.$bvModal.show('modal-login')
            }
          }
        })
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/divisi', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          const data = {}
          response.data.data.forEach(function callback(item, index) {
              data[index] = {value: item.kode, text: item.nama}
          });
          this.divisi = data
          console.log(this.divisi)
        }).catch(err => {
          if (typeof err.response !== "undefined") {
            if (err.response.status === 404) {
              this.$bvModal.show('modal-login')
            }
          }
        })
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/divisi-ruang', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          const data = {}
          response.data.data.forEach(function callback(item, index) {
              data[index] = {value: item.kode, text: item.data_divisi.nama + "-" + item.data_ruang.nama}
          });
          this.lokasi = data
          console.log(this.lokasi)
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
      async addData(){
        const user = JSON.parse(JSON.parse(localStorage.getItem('user')).user).kode
        console.log(user)
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/inventaris', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          var loop = true
          let kode = 1
          while (loop) {
            const cek = response.data.data.filter(function (item) {
              return item.kode == kode
            })
            if (cek.length == 0) {
              this.kode = kode
              loop = false
            } else {
              kode++
            }
          }
        })

        console.log(this.kode)
        const dataInventaris = {
          "kode": this.kode,
          "code": this.code,
          "barang": this.selectedBarang,
          "harga": this.harga,
          "person_donatur": this.selectedDonatur,
          "divisi": this.selectedDivisi,
          "lokasi": this.selectedLokasi,
          "kepemilikan": this.selectedKepemilikan,
          "kondisi": this.selectedKondisi,
          "dokumen": this.dokumen,
          "person_pencatat": user,
          "tanggal_masuk": this.date
        }
        const data = JSON.stringify(dataInventaris)
        console.log(data)
        await this.$axios.post("https://inventaris-yayasan.herokuapp.com/inventaris", data, {
          headers: {
            "content-type": "application/json; charset=utf-8",
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        this.getData()
        this.$bvModal.hide('modal-1')
      },
      async addDonatur(){
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/person', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          var loop = true
          let kode = 1
          while (loop) {
            const cek = response.data.data.filter(function (item) {
              return item.kode == kode
            })
            if (cek.length == 0) {
              this.kode = kode
              loop = false
            } else {
              kode++
            }
          }
        })
        console.log(this.kode)
        const dataDonatur = {
          "kode": this.kode,
          "nama": this.donatur1
        }
        const data = JSON.stringify(dataDonatur)
        console.log(data)
        await this.$axios.post("https://inventaris-yayasan.herokuapp.com/person", data, {
          headers: {
            "content-type": "application/json; charset=utf-8",
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        }).then(response => {
          console.log(response)
        })
        this.getData()
        this.$bvModal.hide('modal-4')
      },
      editData(){
        this.edit = this.detail
      },
      async postEdit(id){
        const user = JSON.parse(JSON.parse(localStorage.getItem('user')).user).kode
        const data = {
          "code": this.edit.code,
          "barang": this.edit.barang,
          "harga": this.edit.harga,
          "person_donatur": this.edit.person_donatur,
          "divisi": this.edit.divisi,
          "lokasi": this.edit.lokasi,
          "kepemilikan": this.edit.kepemilikan,
          "kondisi": this.edit.kondisi,
          "dokumen": this.edit.dokumen,
          "person_pencatat": user,
          "tanggal_masuk": this.edit.tanggal_masuk
        }
        await this.$axios.patch('https://inventaris-yayasan.herokuapp.com/inventaris/' + id, data, {
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
        await this.$axios.delete('https://inventaris-yayasan.herokuapp.com/inventaris/' + data.kode, {
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
