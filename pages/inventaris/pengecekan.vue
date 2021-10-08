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
    <div class="ml-3">
      <h6 v-if="role !=1 ">Tanggal Pengecekan : {{setTanggal(divisi.batas_pengecekan_awal)}} - {{setTanggal(divisi.batas_pengecekan_akhir)}}</h6>
      <b-table v-else outlined no-border-collapse :fields="divisiHeader" :items=itemsDivisi>
        <template #cell(batas_pengecekan_awal)="data">
          {{setTanggal(data.item.batas_pengecekan_awal)}}
        </template>
        <template #cell(batas_pengecekan_akhir)="data">
          {{setTanggal(data.item.batas_pengecekan_akhir)}}
        </template>
      </b-table>
    </div>
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
        <b-table outlined no-border-collapse :filter="filter" :per-page="perPage" :fields="header" :items="items" show-empty class="mt-2" @filtered="onFiltered">
            <template #empty>
                <h5
                 class="text-center"><strong>Data Tidak Ditemukan</strong></h5>
            </template>
            <template #cell(tanggal)="data">
              <!-- data -->
              {{setTanggal(data.item.tanggal)}}
            </template>
            <template #cell(action)="data">
              <b-button class="btn btn-sm" variant="danger" @click="deletedData(data.item)">Delete</b-button>
              <b-button v-b-modal.modal-2 class="btn btn-sm" variant="primary" @click="detailData(data.item)">Detail</b-button>
            </template>
        </b-table>
          <b-modal id="modal-2" size="lg" ref="modal-detail" title="Detail">
            <form action="" method="">
              <div class="mb-3 row">
                <p class="col-3">Tanggal Pengecekan</p>
                <p class="col-4">: {{setTanggal(detail.tanggal)}}</p>
              </div>
              <div class="mb-3 row">
                <p class="col-3">Kode Inventaris</p>
                <p class="col-4">: {{detail.data_inventari.code}}</p>
              </div>
              <div class="mb-3 row">
                <p class="col-3">Barang</p>
                <p class="col-4">: {{detail.data_inventari.data_barang.nama}}</p>
              </div>
              <div class="mb-3 row">
                <p class="col-3">Kondisi</p>
                <p class="col-4">: {{detail.kondisi}}</p>
              </div>
              <div class="mb-3 row">
                <p class="col-3">Pengecek</p>
                <p class="col-4">: {{detail.data_person.nama}}</p>
              </div>
              <div class="mb-3 row">
                <p class="col-3">No Telp</p>
                <p class="col-4">: {{detail.data_person.no_telp}}</p>
              </div>
              <div class="mb-5 row">
                <p class="col-3">Email</p>
                <p class="col-4">: {{detail.data_person.alamat}}</p>
              </div>
            </form>
            <template #modal-footer>
              <b-button v-b-modal.modal-3 class="btn btn-sm" @click="editData" variant="primary">Edit</b-button>

              <b-modal id="modal-3" size="lg" ref="modal-admin" title="Edit">
                  <form action="" method="post" style="margin-bottom: 90px">
                      <div class="mb-3 row">
                        <label for="tanggal" class="col-sm-2 col-form-label">Tanggal</label>
                        <div class="col-sm-10">
                          <b-form-datepicker id="tanggal" v-model="edit.tanggal" class="mb-2"></b-form-datepicker>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="inputName" class="col-sm-2 col-form-label">Inventaris</label>
                        <div class="col-sm-10">
                            <b-form-select v-model="edit.inventaris" :options="inventaris">
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
                            <b-form-select v-model="edit.kondisi" :options="kondisi">
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
                            <b-form-select v-model="edit.person_pengecek" :options="pengecek">
                            <!-- This slot appears above the options from 'options' prop -->
                                <template #first>
                                    <b-form-select-option :value="null" disabled>-- Pilih Pengecek --</b-form-select-option>
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
        filter: null,
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        perPage: 5,
        totalRows: 1,
        role: '',
        divisi: "",
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
          { key: 'tanggal', label: 'Tanggal Pengecekan' },
          { key: 'data_inventari.data_barang.nama', label: 'Barang' },
          { key: 'kondisi', label: 'Kondisi' },
          { key: 'data_person.nama', label: 'Pengecek' },
          { key: 'action', label: 'Action' }
        ],
        divisiHeader: [
          {key: 'nama', label: "Divisi"},
          {key: 'batas_pengecekan_awal', label: "Awal Pengecekan"},
          {key: 'batas_pengecekan_akhir', label: "Akhir Pengecekan"},
        ],
        items: [],
        itemsDivisi: {},
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
        },
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
          const role = JSON.parse(localStorage.getItem('user')).isAdmin
          const divisi = JSON.parse(JSON.parse(localStorage.getItem('user')).user).divisi
          if (role != 1) {
            const cek = response.data.data.filter(function (item) {
              return item.data_inventari.kepemilikan == divisi
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
        this.role = JSON.parse(localStorage.getItem('user')).isAdmin
          await this.$axios.get('https://inventaris-yayasan.herokuapp.com/divisi', {
            headers: {
              'Authorization': 'Bearer ' + cookie.get('access_token')
            }
          })
          .then(response => {
            console.log(response)
            if (this.role == 1) {
              this.itemsDivisi = response.data.data
            } else {
              const id = JSON.parse(JSON.parse(localStorage.getItem('user')).user).divisi
              const cek = response.data.data.filter(function (item) {
                return item.kode == id
              })
              this.divisi = cek
            }
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
        const dataPengecekan = {
          "kode": kode,
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
      },
      async postEdit(id){
        const dataPengecekan = {
          "inventaris": this.edit.inventaris,
          "kondisi": this.edit.kondisi,
          "person_pengecek": this.edit.person_pengecek,
          "tanggal": this.edit.tanggal
        }
        console.log(dataPengecekan)
        await this.$axios.patch("https://inventaris-yayasan.herokuapp.com/pengecekan/" + id, dataPengecekan, {
          headers: {
            "content-type": "application/json; charset=utf-8",
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        this.getData()
        this.$bvModal.hide('modal-3')
        this.$bvModal.hide('modal-2')
      }
    }
  }
</script>
