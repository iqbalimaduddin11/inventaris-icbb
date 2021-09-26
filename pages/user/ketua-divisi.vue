<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb" class="mt-4">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Manajemen Pengguna</li>
            <li class="breadcrumb-item active" aria-current="page">Ketua Divisi</li>
        </ol>
    </nav>
    <h4 class="ml-3"><strong>Data Ketua Divisi</strong></h4>
    <div class="row">
      <div class="ml-3 mt-4">
          <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary">Tambah Ketua</b-button>

          <b-modal id="modal-1" size="lg" ref="modal-admin" title="Tambah Ketua Divisi">
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
                      <label for="inputName" class="col-sm-2 col-form-label">Jabatan</label>
                      <div class="col-sm-10">
                        <b-form-select v-model="jabatan" :options="jabatan">
                          <!-- This slot appears above the options from 'options' prop -->
                              <template #first>
                                  <b-form-select-option :value="null" disabled>-- Pilih Jabatan --</b-form-select-option>
                              </template>
                          </b-form-select>
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
                  <b-button @click="simpan" variant="primary">Simpan</b-button>
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
                <p class="col-3">NIP</p>
                <p class="col-4">: {{detail.nip}}</p>
              </div>
              <div class="mb-3 row">
                <p class="col-3">Nama</p>
                <p class="col-4">: {{detail.nama}}</p>
              </div>
              <div class="mb-3 row">
                <p class="col-3">Divisi</p>
                <p class="col-4">: {{detail.divisi}}</p>
              </div>
              <div class="mb-3 row">
                <p class="col-3">Jabatan</p>
                <p class="col-4">: {{detail.jabatan}}</p>
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
                              <b-form-select v-model="selected" :options="jabatan">
                              <!-- This slot appears above the options from 'options' prop -->
                                  <template #first>
                                      <b-form-select-option :value="null" disabled>-- Pilih Jabatan --</b-form-select-option>
                                  </template>
                              </b-form-select>
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
        kondisi: [
          { value: 'A', text: 'Option A (from options prop)' },
          { value: 'B', text: 'Option B (from options prop)' }
        ],
        divisi: [
          { value: 'A', text: 'Option A (from opselectedtions prop)'},
          { value: 'B', text: 'Option B (from options prop)' }
        ],
        header:[
          { key: 'nip', label: 'NIP' },
          { key: 'nama', label: 'Nama' },
          { key: 'divisi', label: 'Divisi' },
          { key: 'action', label: 'Action' }
        ],
        items: [],
        nip: '',
        nama: '',
        jabatan: '',
        div: '',
        nomor: '',
        alamat: '',
        email: '',
        password: '',
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
          console.log(response)
          this.items = response.data.data
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
