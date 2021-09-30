<template>
  <div class="container-fluid mb-5">
    <nav aria-label="breadcrumb" class="mt-4">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Manajemen Pengguna</li>
            <li class="breadcrumb-item active" aria-current="page">Admin Ruang</li>
        </ol>
    </nav>
    <h4 class="ml-3"><strong>Data Admin Ruang</strong></h4>
    <div class="row">
      <div class="ml-3 mt-4">
          <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary">Tambah Admin Ruang</b-button>

          <b-modal id="modal-1" size="lg" ref="modal-admin" title="Tambah Admin Ruang">
              <form action="" method="post" style="margin-bottom: 90px">
                  <div class="mb-3 row">
                      <label for="inputNip" class="col-sm-2 col-form-label">NIP</label>
                      <div class="col-sm-10">
                      <input type="text" class="form-control" v-model="nip" id="inputNip">
                      </div>
                  </div>
                  <div class="mb-3 row">
                      <label for="inputName" class="col-sm-2 col-form-label">Nama</label>
                      <div class="col-sm-10">
                      <input type="text" class="form-control" v-model="nama" id="inputName">
                      </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="inputJabatan" class="col-sm-2 col-form-label">Jabatan</label>
                    <div class="col-sm-10 row" style="margin-left: 0">
                        <b-form-select v-model="selectedJabatan" class="col-9" :options="jabatan">
                          <!-- This slot appears above the options from 'options' prop -->
                              <template #first>
                                  <b-form-select-option :value="null" disabled>-- Pilih Jabatan --</b-form-select-option>
                              </template>
                        </b-form-select>
                        <b-button v-b-modal.modal-4 class="btn btn-sm col-3" variant="primary">
                        <fa :icon="['fas', 'plus']" /> Tambah</b-button>

                        <b-modal id="modal-4" size='lg' ref="modal-area" title="Tambah Jabatan">
                            <form action="" method="post" style="margin-bottom: 90px">
                                <div class="mb-3 row">
                                <label for="inputAreaDivisi" class="col-sm-2 col-form-label">Jabatan</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" v-model="jabatan1" id="inputAreaDivisi">
                                </div>
                                </div>
                            </form>
                            <template #modal-footer>
                                <b-button @click="simpan" variant="primary">Simpan</b-button>
                            </template>
                        </b-modal>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="inputDivisi" class="col-sm-2 col-form-label">Divisi</label>
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
                      <label for="inputHp" class="col-sm-2 col-form-label">Nomor Hp</label>
                      <div class="col-sm-10">
                          <input type="text" class="form-control" v-model="nomor" id="inputHp">
                      </div>
                  </div>
                  <div class="mb-3 row">
                      <label for="inputAlamat" class="col-sm-2 col-form-label">Alamat</label>
                      <div class="col-sm-10">
                          <textarea class="form-control" id="inputAlamat" v-model="alamat" rows="3"></textarea>
                      </div>
                  </div>
                  <div class="mb-3 row">
                      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                      <div class="col-sm-10">
                      <input type="email" class="form-control" v-model="email" id="staticEmail">
                      </div>
                  </div>
                  <div class="mb-3 row">
                      <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                      <div class="col-sm-10">
                      <input type="password" class="form-control" v-model="password" id="inputPassword">
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
                <h5 class="text-center"><strong>Data Tidak Ditemukan</strong></h5>
            </template>
            <template #cell(action)="data">
              <b-button class="btn btn-sm" variant="danger" @click="deletedData(data.item)">Delete</b-button>
              <b-button v-b-modal.modal-2 class="btn btn-sm" variant="primary" @click="detailData(data.item)">Detail</b-button>
            </template>
        </b-table>
          <b-modal id="modal-2" size="lg" ref="modal-detail" title="Detail Admin Ruang">
            <form action="" method="post">
              <div class="mb-3 row">
                  <p class="col-3">NIP</p>
                  <p class="col-4">: {{detail.nip}}</p>
              </div>
              <div class="mb-3 row">
                  <p class="col-3">Nama</p>
                  <p class="col-4">: {{detail.nama}}</p>
              </div>
              <div class="mb-3 row">
                  <p class="col-3">Jabatan</p>
                  <p class="col-4">: {{detail.jabatan}}</p>
              </div>
              <div class="mb-3 row">
                  <p class="col-3">Divisi</p>
                  <p class="col-4">: {{detail.divisi}}</p>
              </div>
              <div class="mb-3 row">
                  <p class="col-3">Nomor Hp</p>
                  <p class="col-4">: {{detail.no_hp}}</p>
              </div>
              <div class="mb-3 row">
                  <p class="col-3">Alamat</p>
                  <p class="col-4">: {{detail.alamat}}</p>
              </div>
              <div class="mb-5 row">
                  <p class="col-3">Email</p>
                  <p class="col-4">: {{detail.email}}</p>
              </div>
            </form>
            <template #modal-footer>
              <b-button v-b-modal.modal-3 class="btn btn-sm" variant="primary">Edit</b-button>

              <b-modal id="modal-3" size="lg" ref="modal-admin" title="Edit Admin Ruang">
                  <form action="" method="post" style="margin-bottom: 90px">
                      <div class="mb-3 row">
                          <label for="inputNip" class="col-sm-2 col-form-label">NIP</label>
                          <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputNip">
                          </div>
                      </div>
                      <div class="mb-3 row">
                          <label for="inputName" class="col-sm-2 col-form-label">Nama</label>
                          <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputName">
                          </div>
                      </div>
                      <div class="mb-3 row">
                          <label for="inputName" class="col-sm-2 col-form-label">Jabatan</label>
                          <div class="col-sm-10">
                              <b-form-select v-model="selectedJabatan" :options="jabatan">
                              <!-- This slot appears above the options from 'options' prop -->
                                  <template #first>
                                      <b-form-select-option :value="null" disabled>-- Pilih Jabatan --</b-form-select-option>
                                  </template>
                              </b-form-select>
                          </div>
                      </div>
                      <div class="mb-3 row">
                          <label for="inputName" class="col-sm-2 col-form-label">Ruang</label>
                          <div class="col-sm-10">
                              <b-form-select v-model="selectedRuang" :options="ruang">
                              <!-- This slot appears above the options from 'options' prop -->
                                  <template #first>
                                      <b-form-select-option :value="null" disabled>-- Pilih Ruang --</b-form-select-option>
                                  </template>
                              </b-form-select>
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
                          <label for="inputHp" class="col-sm-2 col-form-label">Nomor Hp</label>
                          <div class="col-sm-10">
                              <input type="text" class="form-control" id="inputHp">
                          </div>
                      </div>
                      <div class="mb-3 row">
                          <label for="inputAlamat" class="col-sm-2 col-form-label">Alamat</label>
                          <div class="col-sm-10">
                              <textarea class="form-control" id="inputAlamat" rows="3"></textarea>
                          </div>
                      </div>
                      <div class="mb-3 row">
                          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                          <div class="col-sm-10">
                          <input type="email" class="form-control" id="staticEmail">
                          </div>
                      </div>
                      <div class="mb-3 row">
                          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                          <div class="col-sm-10">
                          <input type="password" class="form-control" id="inputPassword">
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
        jabatan1: [],
        divisi: [],
        selectedJabatan: '',
        selectedDivisi: '',
        header: [
          { key: 'nip', label: 'NIP' },
          { key: 'nama', label: 'Nama' },
          { key: 'divisi', label: 'Divisi' },
          { key: 'action', label: 'Action' },
        ],
        items: [],
        kode: '',
        nip: '',
        jabatan: '',
        nama: '',
        nomor: '',
        alamat: '',
        email: '',
        password: '',
        role: '3',
        detail: {}

      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      async getData() {
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/user', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
        // console.log(response)
          const dataUser = response.data.data
          const admin = []
          dataUser.forEach(item => {
            console.log(item.role)
              if (item.role === 3) {
                  admin.push(item)
              }
          })
        //   console.log(dataUser)
          this.items = admin
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
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/jabatan', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          const data = {}
          response.data.data.forEach(function callback(item, index) {
              data[index] = {value: item.kode, text: item.nama}
          });
          this.jabatan = data
          console.log(this.jabatan)
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
        const cek = false
        if (cek) {
            this.$refs['modal-admin'].hide()
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
        const dataAdmin = {
          "kode": this.kode,
          "nip": this.nip,
          "nama": this.nama,
          "jabatan": this.selectedJabatan,
          "divisi": this.selectedDivisi,
          "no_hp": this.nomor,
          "email": this.email,
          "password": this.password,
          "alamat": this.alamat,
          "code": this.code,
          "role": this.role
        }
        const data = JSON.stringify(dataAdmin)
        console.log(data)
        await this.$axios.post("https://inventaris-yayasan.herokuapp.com/user", data, {
          headers: {
            "content-type": "application/json; charset=utf-8",
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        this.getData()
        this.$bvModal.hide('modal-1')
      },
      async deletedData(data){
        await this.$axios.delete('https://inventaris-yayasan.herokuapp.com/user/' + data.kode, {
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
