<template>
  <div class="container-fluid">
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
                <label for="inputBarang" class="col-sm-2 col-form-label">Barang</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputBarang" v-model="barang">
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputName" class="col-sm-2 col-form-label">Kondisi</label>
                <div class="col-sm-10">
                    <b-form-select v-model="selected" :options="kondisi">
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
                  <input type="textarea" class="form-control" v-model="pengecek" id="InputPengecek">
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
                <p class="col-3">Tanggal</p>
                <p class="col-4">: {{detail.tanggal}}</p>
              </div>
              <div class="mb-3 row">
                <p class="col-3">Barang</p>
                <p class="col-4">: {{detail.inventaris}}</p>
              </div>
              <div class="mb-3 row">
                <p class="col-3">Kondisi</p>
                <p class="col-4">: {{detail.kondisi}}</p>
              </div>
              <div class="mb-5 row">
                <p class="col-3">Pengecek</p>
                <p class="col-4">: {{detail.person_pengecek}}</p>
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
                            <b-form-select v-model="selected" :options="kondisi">
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
        kondisi: [
          { value: 'A', text: 'Option A (from options prop)' },
          { value: 'B', text: 'Option B (from options prop)' }
        ],
        header: [
          { key: 'tanggal', label: 'Tanggal' },
          { key: 'inventaris', label: 'Barang' },
          { key: 'kondisi', label: 'Kondisi' },
          { key: 'person_pengecek', label: 'Pengecek' },
          { key: 'action', label: 'Action' }
        ],
        items: [],
        date: '',
        barang: '',
        pengecek: '',
        detail: {}
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
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
        await this.$axios.delete('https://inventaris-yayasan.herokuapp.com/pengecekan/' + data.kode, {
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
