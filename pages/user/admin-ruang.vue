<template>
    <div class="container-fluid">
        <nav aria-label="breadcrumb" class="mt-4">
            <ol class="breadcrumb">
                <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
                <li class="breadcrumb-item" aria-current="page">Manajemen Pengguna</li>
                <li class="breadcrumb-item active" aria-current="page">Admin Ruang</li>
            </ol>
        </nav>
        <h4 class="ml-3"><strong>Data Admin Ruang</strong></h4>
        <div class="ml-3 mt-4">
            <button class="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#tambahKetuaModal">Tambah Ketua</button>
            <!-- Modal -->
            <div class="modal fade" id="tambahKetuaModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="tambahKetuaModalLabel" aria-hidden="true">
            <div class="modal-lg modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="tambahKetuaModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="" method="post">
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
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" id="simpan" @click="simpan">Simpan</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        <b-table outlined no-border-collapse :fields="header" :items="items" show-empty class="mt-4">
            <template #empty>
                <h5
                 class="text-center"><strong>Data Tidak Ditemukan</strong></h5>
            </template>
        </b-table>
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
          { value: 'A', text: 'Option A (from options prop)' },
          { value: 'B', text: 'Option B (from options prop)' }
        ],
        header: ['age', 'first_name'],
        items: [
        //   { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        //   { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        //   { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        //   { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    },
    methods: {
        simpan () {
            // const btn = document.getElementById('exampleModal')
            // btn.modal = 'hide'
            // const myModal = new bootstrap.Modal(document.getElementById("tambahKetuaModal"), {})
            // document.onreadystatechange = function () {
            //     myModal.hide()
            // }
        }
    }
  }
</script>