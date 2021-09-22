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
<<<<<<< HEAD
          <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary" @click="setTitleModal('Tambah Ketua Divisi')">Tambah Ketua</b-button>

          <b-modal id="modal-1" size="lg" ref="modal-admin" :title="judulModal">
=======
          <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary">Tambah Ketua</b-button>

          <b-modal id="modal-1" size="lg" ref="modal-admin" title="Tambah Ketua Divisi">
>>>>>>> 3b5f6ca15d9700b0160c70e983a89e89fb8ffee0
              <form action="" method="post" style="margin-bottom: 90px">
                  <div class="mb-3 row">
                      <label for="inputNip" class="col-sm-2 col-form-label">NIP</label>
                      <div class="col-sm-10">
<<<<<<< HEAD
                        <input type="text" class="form-control" v-model="nip" id="inputNip">
=======
                      <input type="text" class="form-control" v-model="nip" id="inputNip">
>>>>>>> 3b5f6ca15d9700b0160c70e983a89e89fb8ffee0
                      </div>
                  </div>
                  <div class="mb-3 row">
                      <label for="inputName" class="col-sm-2 col-form-label">Nama</label>
                      <div class="col-sm-10">
<<<<<<< HEAD
                        <input type="text" class="form-control" v-model="nama" id="inputName">
=======
                      <input type="text" class="form-control" v-model="nama" id="inputName">
>>>>>>> 3b5f6ca15d9700b0160c70e983a89e89fb8ffee0
                      </div>
                  </div>
                  <div class="mb-3 row">
                      <label for="inputName" class="col-sm-2 col-form-label">Jabatan</label>
                      <div class="col-sm-10">
<<<<<<< HEAD
                          <b-form-select v-model="selected" :options="jabatan">
                            <!-- This slot appears above the options from 'options' prop -->
=======
                        <b-form-select v-model="jabatan1" :options="jabatan">
                          <!-- This slot appears above the options from 'options' prop -->
>>>>>>> 3b5f6ca15d9700b0160c70e983a89e89fb8ffee0
                              <template #first>
                                  <b-form-select-option :value="null" disabled>-- Pilih Jabatan --</b-form-select-option>
                              </template>
                          </b-form-select>
                      </div>
                  </div>
                  <div class="mb-3 row">
                      <label for="inputName" class="col-sm-2 col-form-label">Divisi</label>
                      <div class="col-sm-10">
<<<<<<< HEAD
                          <b-form-select v-model="selected" :options="divisi">
                            <!-- This slot appears above the options from 'options' prop -->
=======
                          <b-form-select v-model="div" :options="divisi">
                          <!-- This slot appears above the options from 'options' prop -->
>>>>>>> 3b5f6ca15d9700b0160c70e983a89e89fb8ffee0
                              <template #first>
                                  <b-form-select-option :value="null" disabled>-- Pilih Divisi --</b-form-select-option>
                              </template>
                          </b-form-select>
                      </div>
                  </div>
                  <div class="mb-3 row">
                      <label for="inputHp" class="col-sm-2 col-form-label">Nomor Hp</label>
                      <div class="col-sm-10">
<<<<<<< HEAD
                          <input type="text" class="form-control" v-model="nomer" id="inputHp">
=======
                          <input type="text" class="form-control" v-model="nomor" id="inputHp">
>>>>>>> 3b5f6ca15d9700b0160c70e983a89e89fb8ffee0
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
<<<<<<< HEAD
                        <input type="email" class="form-control" v-model="email" id="staticEmail">
=======
                      <input type="email" class="form-control" v-model="email" id="staticEmail">
>>>>>>> 3b5f6ca15d9700b0160c70e983a89e89fb8ffee0
                      </div>
                  </div>
                  <div class="mb-3 row">
                      <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                      <div class="col-sm-10">
<<<<<<< HEAD
                        <input type="password" class="form-control" v-model="password" id="inputPassword">
=======
                      <input type="password" class="form-control" v-model="password" id="inputPassword">
>>>>>>> 3b5f6ca15d9700b0160c70e983a89e89fb8ffee0
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
<<<<<<< HEAD
        <b-table-simple>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th>No</b-th>
              <b-th>Nama</b-th>
              <b-th>Divisi</b-th>
              <b-th>aksi</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-th>1.</b-th>
              <b-th>M. Syakir Fadlan</b-th>
              <b-th>CMC</b-th>
              <b-th>
                  <b-button class="btn btn-sm" variant="danger" @click="deletedData('tombol delete')">Delete</b-button>
                  <b-button v-b-modal.modal-2 class="btn btn-sm" variant="primary" @click="setTitleModal('Detail Ketua Divisi')">Detail</b-button>

                  <b-modal id="modal-2" size="lg" ref="modal-detail" :title="judulModal">
                    <form action="" method="post">
                      <div class="mb-3 row">
                          <p class="col-3">NIP</p>
                          <p class="col-4">: 123412321</p>
                      </div>
                      <div class="mb-3 row">
                          <p class="col-3">Nama</p>
                          <p class="col-4">: Muhammad Syakir Fadlan</p>
                      </div>
                      <div class="mb-3 row">
                          <p class="col-3">Jabatan</p>
                          <p class="col-4">: Ketua</p>
                      </div>
                      <div class="mb-3 row">
                          <p class="col-3">Divisi</p>
                          <p class="col-4">: CMC</p>
                      </div>
                      <div class="mb-3 row">
                          <p class="col-3">Nomor Hp</p>
                          <p class="col-4">: 09123789231</p>
                      </div>
                      <div class="mb-3 row">
                          <p class="col-3">Alamat</p>
                          <p class="col-4">: Jakarta</p>
                      </div>
                      <div class="mb-5 row">
                          <p class="col-3">Email</p>
                          <p class="col-4">: Fadlan123@gmail.com</p>
                      </div>
                    </form>
                    <template #modal-footer>
                      <b-button v-b-modal.modal-3 class="btn btn-sm" variant="primary" @click="setTitleModal('Edit Ketua Divisi')">Edit</b-button>

                      <b-modal id="modal-3" size="lg" ref="modal-admin" :title="judulModal">
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
              </b-th>
            </b-tr>
          </b-tbody>
        </b-table-simple>
=======
        <b-table outlined no-border-collapse :fields="header" :items="items" show-empty class="mt-4">
            <template #empty>
                <h5
                 class="text-center"><strong>Data Tidak Ditemukan</strong></h5>
            </template>
            <template #cell(Aksi)>
                <b-button variant="danger">Delete</b-button>
                <b-button variant="primary" href="/">Detail</b-button>
            </template>
        </b-table>
>>>>>>> 3b5f6ca15d9700b0160c70e983a89e89fb8ffee0
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: null,
        kondisi: [
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
          { key: 'action', label: 'Action' },
        ],
        items: [
          { nik: '14045', nama: 'M. Syakir Fadlan', divisi: 'CMC'}
        ],
        nip: '',
        nama: '',
        jabatan1: '',
        div: '',
        nomor: '',
        alamat: '',
        email: '',
        password: '',
        judulModal: ''
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
<<<<<<< HEAD
        },
        setTitleModal (title) {
            this.judulModal = title
            console.log(title)
        },
        setTitleModal (title) {
            this.judulModal = title
            console.log(title)
        },
        setTitleModal (title) {
            this.judulModal = title
            console.log(title)
        },
        deletedData(data){
          console.log(data)
=======
>>>>>>> 3b5f6ca15d9700b0160c70e983a89e89fb8ffee0
        }
    }
  }
</script>
