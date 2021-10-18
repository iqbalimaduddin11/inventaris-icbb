<template>
  <div class="container-fluid p-3 mb-5">
    <nav aria-label="breadcrumb" class="mt-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Manajemen Lokasi</li>
        <li class="breadcrumb-item active" aria-current="page">Area Divisi</li>
      </ol>
    </nav>
    <h4 class="ml-3"><strong>Data Area Divisi</strong></h4>
    <div class="row">
      <div class="ml-3 mt-4">
        <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary">Tambah Area Divisi</b-button>

        <b-modal id="modal-1" size='lg' ref="modal-area" title="Tambah Area Divisi">
            <form action="" method="post" style="margin-bottom: 90px">
                <div class="mb-3 row">
                    <label for="inputAreaDivisi" class="col-sm-3 col-form-label">Area Divisi</label>
                    <div class="col-sm-9 ml-1 row">
                      <b-form-select v-model="selectedRuang" class="col-9" :options="ruang">
                        <!-- This slot appears above the options from 'options' prop -->
                            <template #first>
                                <b-form-select-option :value="null" disabled>-- Pilih Area --</b-form-select-option>
                            </template>
                      </b-form-select>
                      <b-button v-b-modal.modal-4 class="btn btn-sm col-3" variant="primary">
                      <fa :icon="['fas', 'plus']" /> Tambah</b-button>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputDivisi" class="col-sm-3 col-form-label">Divisi</label>
                    <div class="col-sm-9 ml-1 row">
                      <b-form-select v-model="selectedDivisi" :options="divisi">
                        <!-- This slot appears above the options from 'options' prop -->
                            <template #first>
                                <b-form-select-option :value="null" disabled>-- Pilih Divisi --</b-form-select-option>
                            </template>
                      </b-form-select>
                    </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputPenanggungJawab" class="col-sm-3 col-form-label">Penanggung Jawab</label>
                  <div class="col-sm-9">
                      <b-form-select v-model="selectedPenanggungJawab" :options="penanggungJawab">
                      <!-- This slot appears above the options from 'options' prop -->
                          <template #first>
                              <b-form-select-option :value="null" disabled>-- Pilih Divisi --</b-form-select-option>
                          </template>
                      </b-form-select>
                  </div>
                </div>
            </form>
            <template #modal-footer>
                <b-button @click="addData()" variant="primary">Simpan</b-button>
            </template>
        </b-modal>
        <b-modal id="modal-4" size='lg' ref="modal-area" title="Tambah Area Divisi">
          <form action="" method="post" style="margin-bottom: 90px">
              <div class="mb-3 row">
                <label for="inputCodeAreaDivisi" class="col-sm-2 col-form-label">Kode</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="newRuangCode" id="inputCodeAreaDivisi">
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputNewAreaDivisi" class="col-sm-2 col-form-label">Area Divisi</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="newRuang" id="inputNewAreaDivisi">
                </div>
              </div>
          </form>
          <template #modal-footer>
              <b-button @click="addRuang" variant="primary">Simpan</b-button>
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
              <b-button class="btn btn-sm" variant="danger" @click="deletedData(data.item.kode)">Delete</b-button>
              <b-button v-b-modal.modal-2 class="btn btn-sm" variant="primary" @click="modalDetailDivisi(data.item)">Detail</b-button>
            </template>
        </b-table>
          <b-modal id="modal-2" size="lg" ref="modal-detail" title="Detail">
            <div class="mb-5 row">
              <p class="col-3">Divisi</p>
              <p class="col-4">: {{ detail.data_divisi.nama }}</p>
            </div>
            <div class="mb-5 row">
              <p class="col-3">Ruang</p>
              <p class="col-4">: {{ detail.data_ruang.nama }}</p>
            </div>
            <div class="mb-5 row">
              <p class="col-12"><strong>Penanggung Jawab</strong></p>
            </div>
            <div class="mb-5 row">
              <p class="col-3">Nama</p>
              <p class="col-auto">: {{ detail.app_user.nama }}</p>
            </div>
            <div class="mb-5 row">
              <p class="col-3">Email</p>
              <p class="col-auto">: {{ detail.app_user.email }}</p>
            </div>
            <div class="mb-5 row">
              <p class="col-3">No Hp</p>
              <p class="col-auto">: {{ detail.app_user.no_hp }}</p>
            </div>
            <template #modal-footer>
              <b-button v-b-modal.modal-3 class="btn btn-sm" variant="primary" @click="editData(detail)">Edit</b-button>

              <b-modal id="modal-3" size="lg" ref="modal-admin" title="Edit">
                  <form action="" method="post" style="margin-bottom: 90px">
                    <div class="mb-3 row">
                        <label for="inputAreaDivisi" class="col-sm-3 col-form-label">Area Divisi</label>
                        <div class="col-sm-9 ml-1 row">
                          <b-form-select v-model="edit.selectedRuang" class="col-9" :options="ruang">
                            <!-- This slot appears above the options from 'options' prop -->
                                <template #first>
                                    <b-form-select-option :value="null" disabled>-- Pilih Area --</b-form-select-option>
                                </template>
                          </b-form-select>
                          <b-button v-b-modal.modal-4 class="btn btn-sm col-3" variant="primary">
                          <fa :icon="['fas', 'plus']" /> Tambah</b-button>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputDivisi" class="col-sm-3 col-form-label">Divisi</label>
                        <div class="col-sm-9 ml-1 row">
                          <b-form-select v-model="edit.selectedDivisi" :options="divisi">
                            <!-- This slot appears above the options from 'options' prop -->
                                <template #first>
                                    <b-form-select-option :value="null" disabled>-- Pilih Divisi --</b-form-select-option>
                                </template>
                          </b-form-select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="inputPenanggungJawab" class="col-sm-3 col-form-label">Penanggung Jawab</label>
                      <div class="col-sm-9">
                          <b-form-select v-model="edit.selectedPenanggungJawab" :options="penanggungJawab">
                          <!-- This slot appears above the options from 'options' prop -->
                              <template #first>
                                  <b-form-select-option :value="null" disabled>-- Pilih Divisi --</b-form-select-option>
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
        currentPage: 1,
        divisi: [],
        ruang: [],
        penanggungJawab: [],
        header:[
        { key: 'data_divisi.nama', label: 'Ruang' },
        { key: 'data_ruang.nama', label: 'Divisi' },
        { key: 'action', label: 'Action' },
        ],
        items: [],
        selectedRuang: '',
        selectedDivisi: '',
        selectedPenanggungJawab: '',
        newRuang: '',
        kodeRuang: '',
        newRuangCode: '',
        detail: {
          data_divisi: {},
          data_ruang: {},
          app_user: {}
        },
        edit: {
          kode: '',
          selectedDivisi: '',
          selectedRuang: '',
          selectedPenanggungJawab: '',
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
      getData() {
          this.$axios.get('https://inventaris-yayasan.herokuapp.com/divisi-ruang', {
            headers: {
              'Authorization': 'Bearer ' + cookie.get('access_token')
            }
          }).then(response => {
            console.log(response)
            const role = JSON.parse(localStorage.getItem('user')).isAdmin
            const divisi = JSON.parse(JSON.parse(localStorage.getItem('user')).user).divisi
            if (role != 1) {
              const cek = response.data.data.filter(function (item) {
                return item.divisi == divisi
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
          this.$axios.get('https://inventaris-yayasan.herokuapp.com/divisi',{
            headers: {
              'Authorization': 'Bearer ' + cookie.get('access_token')
              }
          }).then(response => {
            const data = {}
              response.data.data.forEach(function callback(item, index) {
                data[index] = {value: item.kode, text: item.nama}
              });
              this.divisi = data
          }).catch(err => {
            if (typeof err.response !== "undefined") {
              if (err.response.status === 404) {
                this.$bvModal.show('modal-login')
              }
            }
          })
          this.$axios.get('https://inventaris-yayasan.herokuapp.com/ruang',{
            headers: {
              'Authorization': 'Bearer ' + cookie.get('access_token')
              }
          }).then(response => {
            const data = {}
              response.data.data.forEach(function callback(item, index) {
                data[index] = {value: item.kode, text: item.nama}
              });
              this.ruang = data
          }).catch(err => {
            if (typeof err.response !== "undefined") {
              if (err.response.status === 404) {
                this.$bvModal.show('modal-login')
              }
            }
          })
          this.$axios.get('https://inventaris-yayasan.herokuapp.com/user', {
            headers: {
              'Authorization': 'Bearer ' + cookie.get('access_token')
            }
          })
          .then(response => {
          // console.log(response)
            const dataUser = response.data.data
            const admin = []
            dataUser.forEach(item => {
                if (item.role === 3) {
                    admin.push({value: item.kode, text: item.nama +" - "+ item.data_divisi.nama})
                }
            })
            this.penanggungJawab = admin
          }).catch(err => {
            if (typeof err.response !== "undefined") {
              if (err.response.status === 404) {
                this.$bvModal.show('modal-login')
              }
            }
          })
      },
      async deletedData(id){
        console.log(id)
        await this.$axios.delete("https://inventaris-yayasan.herokuapp.com/divisi-ruang/" + id, {
          headers: {
            "content-type": "application/json; charset=utf-8",
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        }).then(response => {
          console.log(response)
        })
        this.getData()
      },
      modalDetailDivisi(data){
        // console.log(data)
        this.detail = data
      },
      editData(data){
        console.log(data)
        this.edit.kode = data.kode
        this.edit.selectedDivisi = data.divisi
        this.edit.selectedRuang = data.ruang
        this.edit.selectedPenanggungJawab = data.person_penanggung_jawab
      },
      async postEdit(id){
        const dataDivisiRuang = {
          "divisi": this.edit.selectedDivisi,
          "ruang": this.edit.selectedRuang,
          "person_penanggung_jawab": this.edit.selectedPenanggungJawab
        }
        await this.$axios.patch('https://inventaris-yayasan.herokuapp.com/divisi-ruang/' + id, dataDivisiRuang, {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        }).then(response => {
          console.log(response)
        })
        this.getData()
        this.$bvModal.hide('modal-3')
        this.$bvModal.hide('modal-2')
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
        const data = {
          "kode": kode,
          "divisi": this.selectedDivisi,
          "ruang": this.selectedRuang,
          "person_penanggung_jawab": this.selectedPenanggungJawab
        }
        console.log(data)
        await this.$axios.post("https://inventaris-yayasan.herokuapp.com/divisi-ruang", data, {
          headers: {
            "content-type": "application/json; charset=utf-8",
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        }).then(response => {
          console.log(response)
        })
        this.getData()
        this.$bvModal.hide('modal-1')
      },
      async addRuang(){
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/ruang',{
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
            }
        }).then(response => {
          var loop = true
          let kode = 1
          const ruang = response.data.data
          while (loop) {
            const cek = ruang.filter(function (item) {
              return item.kode == kode
            })
            if (cek.length == 0) {
              loop = false
              this.kodeRuang = kode
            } else {
              kode++
            }
          }
        })
        console.log(this.kodeRuang)
        const dataRuang = {
          "kode": this.kodeRuang,
          "code": this.newRuangCode,
          "nama": this.newRuang
        }
        await this.$axios.post('https://inventaris-yayasan.herokuapp.com/ruang', dataRuang, {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
            }
        }).then(response => {
          console.log(response)
        })
        this.getData()
        this.$bvModal.hide('modal-4')
      }
    },
  }
</script>
