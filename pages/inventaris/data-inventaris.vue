<template>
  <div class="container-fluid">
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
                  <label for="example-datepicker" class="col-sm-2 col-form-label">Tanggal</label>
                <div class="col-sm-10">
                  <b-form-datepicker id="tanggal" v-model="date" class="mb-2"></b-form-datepicker>
                </div>
              </div>
              <div class="mb-3 row">
                  <label for="inputBarang" class="col-sm-2 col-form-label">Barang</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputBarang" v-model="barang">
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
                  <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputDonatur" v-model="donatur">
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
                  <label for="inputKepemilikan" class="col-sm-2 col-form-label">Kepemilikan</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputKepemilikan" v-model="kepemilikan">
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
                  <label for="inputName" class="col-sm-2 col-form-label">Status</label>
                  <div class="col-sm-10">
                    <b-form-select v-model="selectedStatus" :options="status">
                        <!-- This slot appears above the options from 'options' prop -->
                        <template #first>
                          <b-form-select-option :value="null" disabled>-- Pilih Status --</b-form-select-option>
                        </template>
                    </b-form-select>
                  </div>
              </div>
              <div class="mb-3 row">
                  <label for="inputDokumen" class="col-sm-2 col-form-label">Dokumen</label>
                  <div class="col-sm-10">
                    <b-form-file v-model="dokumen" id="inputDokumen"></b-form-file>
                  </div>
              </div>
              <div class="mb-3 row">
                  <label for="inputPencatatan" class="col-sm-2 col-form-label">Pencatat</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPencatatan" v-model="pencatat">
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
        <b-table outlined no-border-collapse :fields="header" :items="items" show-empty class="mt-4">
            <template #empty>
                <h5 class="text-center"><strong>Data Tidak Ditemukan</strong></h5>
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
                      <p class="col-4">: {{detail.tanggal_masuk}}</p>
                  </div>
                  <div class="mb-3 row">
                      <p class="col-3">Barang</p>
                      <p class="col-4">: {{detail.barang}}</p>
                  </div>
                  <div class="mb-3 row">
                      <p class="col-3">Harga</p>
                      <p class="col-4">: {{detail.harga}}</p>
                  </div>
                  <div class="mb-3 row">
                      <p class="col-3">Donatur</p>
                      <p class="col-4">: {{detail.person_donatur}}</p>
                  </div>
                  <div class="mb-3 row">
                      <p class="col-3">Divisi</p>
                      <p class="col-4">: {{detail.divisi}}</p>
                  </div>
                  <div class="mb-3 row">
                      <p class="col-3">Kepemilikan</p>
                      <p class="col-4">: {{detail.kepemilikan}}</p>
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
                      <p class="col-4">: {{detail.person_pencatat}}</p>
                  </div>
                </form>
                <template #modal-footer>
                  <b-button v-b-modal.modal-3 class="btn btn-sm" variant="primary">Edit</b-button>

                  <b-modal id="modal-3" size="lg" ref="modal-admin" title="Edit">
                      <form action="" method="post" style="margin-bottom: 90px">
                          <div class="mb-3 row">
                            <label for="example-datepicker" class="col-sm-2 col-form-label">Tanggal</label>
                            <div class="col-sm-10">
                              <b-form-datepicker id="tanggal" v-model="date" class="mb-2"></b-form-datepicker>
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label for="inputName" class="col-sm-2 col-form-label">Barang</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="inputName">
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label for="inputName" class="col-sm-2 col-form-label">Harga</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="inputName">
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label for="inputName" class="col-sm-2 col-form-label">Donatur</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="inputName">
                            </div>
                          </div>
                          <div class="mb-3 row">
                              <label for="inputName" class="col-sm-2 col-form-label">Divisi</label>
                              <div class="col-sm-10">
                                  <b-form-select v-model="selected" :options="divisi">
                                  <!-- This slot appears above the options from 'options' prop -->
                                      <template #first>
                                          <b-form-select-option :value="null" disabled>-- Pilih Divisi --</b-form-select-option>
                                      </template>
                                  </b-form-select>
                              </div>
                          </div>
                          <div class="mb-3 row">
                              <label for="inputKepemilikan" class="col-sm-2 col-form-label">Kepemilikan</label>
                              <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputKepemilikan">
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
                            <label for="inputName" class="col-sm-2 col-form-label">Status</label>
                            <div class="col-sm-10">
                                <b-form-select v-model="selected" :options="status">
                                  <!-- This slot appears above the options from 'options' prop -->
                                    <template #first>
                                        <b-form-select-option :value="null" disabled>-- Pilih Status --</b-form-select-option>
                                    </template>
                                </b-form-select>
                            </div>
                          </div>
                          <div class="mb-3 row">
                              <label for="inputDokumen" class="col-sm-2 col-form-label">Dokumen</label>
                              <div class="col-sm-10">
                                <b-form-file v-model="dokumen" id="inputDokumen"></b-form-file>
                              </div>
                          </div>
                          <div class="mb-3 row">
                              <label for="inputPencatat" class="col-sm-2 col-form-label">Pencatat</label>
                              <div class="col-sm-10">
                              <input type="password" class="form-control" id="inputPencatat">
                              </div>
                          </div>
                      </form>
                      <template #modal-footer>
                          <b-button @click="simpan" variant="primary">Simpan</b-button>
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
      selected: null,
        divisi: [],
        selectedDivisi: '',
        selectedKondisi: '',
        kondisi: [
          { value: 'A', text: 'Bagus' },
          { value: 'B', text: 'Kurang Bagus' },
          { value: 'C', text: 'Rusak' }
        ],
        header: [
          { key: 'tanggal_masuk', label: 'Tanggal' },
          { key: 'barang', label: 'Barang' },
          { key: 'person_donatur', label: 'Donatur' },
          { key: 'divisi', label: 'Divisi' },
          { key: 'action', label: 'Action' }
        ],
        items: [],
        kode: '',
        date: '',
        kepemilikan: '',
        barang: '',
        harga: '',
        donatur: '',
        dokumen: '',
        pencatat: '',
        judulModal: '',
        detail: {}
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      async getData() {
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/inventaris', {
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
      },
      simpan () {
        const date = new Date()
        console.log(this.$moment(date).format('YYYY-M-D'))
        console.log(this.nama)
        const cek = false
        if (cek) {
            this.$refs['modal-admin'].show()
        }
      },
      detailData(data){
        this.detail = data
      },
      async addData(){
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/user', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          this.kode = response.data.data.length + 1
        })
        console.log(this.kode)
        const dataInventaris = {
          "kode": this.kode,
          "code": this.code,
          "barang": this.barang,
          "harga": this.harga,
          "person_donatur": this.donatur,
          "divisi": this.selectedDivisi,
          "lokasi": this.lokasi,
          "kepemilikan": this.kepemilikan,
          "kondisi": this.selectedKondisi,
          "dokumen": this.dokumen,
          "person_pencatat": this.pencatat,
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
      async deletedData(data){
        await this.$axios.delete('https://inventaris-yayasan.herokuapp.com/inventaris/' + data.kode, {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          console.log(response)
          this.items = response.data.data
        })
      }
    }
  }
</script>
