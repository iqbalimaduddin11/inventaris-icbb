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
        <div class="ml-3 mt-4">
            <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary" @click="setTitleModal('Tambah Ketua Divisi')">Tambah Ketua</b-button>

            <b-modal id="modal-1" size="lg" ref="modal-admin" :title="judulModal">
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
        ],
        judulModal: ''
      }
    },
    methods: {
        simpan () {
            const date = new Date()
            console.log(this.$moment(date).format('YYYY-M-D'))
            const cek = false
            if (cek) {
                this.$refs['modal-admin'].show()
            }
        },
        setTitleModal (title) {
            this.judulModal = title
            console.log(title)
        }
    }
  }
</script>