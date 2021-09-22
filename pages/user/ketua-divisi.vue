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
                        <b-form-select v-model="jabatan1" :options="jabatan">
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
                          <b-form-select v-model="div" :options="divisi">
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
                <b-button variant="danger">Delete</b-button>
                <b-button variant="primary" @click="detailData(data.item)">Detail</b-button> 
                <p>{{detail}}</p>
            </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: null,
        jabatan: [
          { value: 'A', text: 'Option A (from options prop)' },
          { value: 'B', text: 'Option B (from options prop)' }
        ],
        divisi: [
          { value: 'A', text: 'Option A (from opselectedtions prop)' },
          { value: 'B', text: 'Option B (from options prop)' }
        ],
        header: [
          { key: 'nik', label: 'NIK' },
          { key: 'nama', label: 'Nama' },
          { key: 'divisi', label: 'Divisi' },
          { key: 'action', label: 'Action' },
        ],
        items: [
          { nik: '14045', nama: 'M. Syakir Fadlan', divisi: 'CMC'},
          { nik: '14045', nama: 'Ahmad Ilahana', divisi: 'CMC'},
          { nik: '14045', nama: 'Arif Ilahana', divisi: 'CMC'}
        ],
        nip: '',
        nama: '',
        jabatan1: '',
        div: '',
        nomor: '',
        alamat: '',
        email: '',
        password: '',
        judulModal: '',
        detail: {}
      }
    },
    methods: {
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
            this.detail=data
        }
    }
  }
</script>
