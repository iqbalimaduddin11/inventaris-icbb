<template>
  <div class="container-fluid mb-5">
    <nav aria-label="breadcrumb" class="mt-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Manajemen Lokasi</li>
        <li class="breadcrumb-item active" aria-current="page">Divisi</li>
      </ol>
    </nav>
    <h4 class="ml-3"><strong>Data Pengecekan</strong></h4>
    <div class="row">
      <div class="ml-3 mt-4">
        <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary">Tambah Pengecekan</b-button>

        <b-modal id="modal-1" size='lg' ref="modal-pengecekan" title="Tambah Pengecekan">
          <form action="" method="post" style="margin-bottom: 90px">
              <div class="mb-3 row">
                <label for="tanggal" class="col-sm-2 col-form-label">Tanggal</label>
                <div class="col-sm-10">
                  <b-form-datepicker id="tanggal" v-model="date" class="mb-2"></b-form-datepicker>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputName" class="col-sm-2 col-form-label">Inventaris</label>
                <div class="col-sm-10">
                    <b-form-select v-model="selectedInventaris" :options="inventaris">
                    <!-- This slot appears above the options from 'options' prop -->
                        <template #first>
                            <b-form-select-option :value="null" disabled>-- Pilih Inventaris --</b-form-select-option>
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
                <label for="InputPengecek" class="col-sm-2 col-form-label">Pengecek</label>
                <div class="col-sm-10">
                    <b-form-select v-model="selectedPengecek" :options="pengecek">
                    <!-- This slot appears above the options from 'options' prop -->
                        <template #first>
                            <b-form-select-option :value="null" disabled>-- Pilih Pengecek --</b-form-select-option>
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
            <template #cell(tanggal)="data">
              {{setTanggal(data.tanggal)}}
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
                <p class="col-4">: {{setTanggal(detail.tanggal)}}</p>
              </div>
              <div class="mb-3 row">
                <p class="col-3">Barang</p>
                <p class="col-4">: {{detail.data_inventari.data_barang.nama}}</p>
              </div>
              <div class="mb-3 row">
                <p class="col-3">Kondisi</p>
                <p class="col-4">: {{detail.kondisi}}</p>
              </div>
              <div class="mb-5 row">
                <p class="col-3">Pengecek</p>
                <p class="col-4">: {{detail.data_person.nama}}</p>
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
                          <label for="inputPengecek" class="col-sm-2 col-form-label">Pengecek</label>
                          <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPengecek" v-model="pengecek">
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
        inventaris: {},
        pengecek: [],
        selectedKondisi: '',
        selectedInventaris: '',
        selectedPengecek: '',
        kondisi: [
          { value: 'Bagus', text: 'Bagus' },
          { value: 'Cukup', text: 'Cukup' },
          { value: 'Kurang Bagus', text: 'Kurang Bagus' },
          { value: 'Rusak', text: 'Rusak' }
        ],
        header: [
          { key: 'tanggal', label: 'Tanggal' },
          { key: 'data_inventari.data_barang.nama', label: 'Barang' },
          { key: 'kondisi', label: 'Kondisi' },
          { key: 'data_person.nama', label: 'Pengecek' },
          { key: 'action', label: 'Action' }
        ],
        items: [],
        kode: '',
        date: '',
        pengecek: '',
        detail: {
          data_inventari: {
            data_barang: ''
          },
          data_person: {
            nama: ''
          }
        }
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      setTanggal(date){
        // console.log(this.$moment(date).format('DD-M-YYYY'))
        return this.$moment(date).format('dddd, D MMMM YYYY')
      },
      async getData() {
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/pengecekan', {
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
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/inventaris', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          const data = {}
          response.data.data.forEach(function callback(item, index) {
              data[index] = {value: item.kode, text: item.data_barang.nama +" - "+ item.data_divisi.nama}
          });
          this.inventaris = data
          console.log(this.inventaris)
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
          this.pengecek = data
          console.log(this.pengecek)
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
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/user', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          this.kode = response.data.data.length + 1
        })
        console.log(this.kode)
        const dataPengecekan = {
          "kode": this.kode,
          "inventaris": this.selectedInventaris,
          "kondisi": this.selectedKondisi,
          "person_pengecek": this.selectedPengecek,
          "tanggal": this.date
        }
        const data = JSON.stringify(dataPengecekan)
        console.log(data)
        await this.$axios.post("https://inventaris-yayasan.herokuapp.com/pengecekan", data, {
          headers: {
            "content-type": "application/json; charset=utf-8",
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        this.getData()
        this.$bvModal.hide('modal-1')
      },
      async deletedData(data){
        await this.$axios.delete('https://inventaris-yayasan.herokuapp.com/pengecekan/' + data.kode, {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          console.log(response)
          this.items = response.data.data
        })
        this.getData()
      }
    }
  }
</script>
