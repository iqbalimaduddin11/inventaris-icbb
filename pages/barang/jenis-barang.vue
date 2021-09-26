<template>
  <div class="container-fluid p-3 mb-5">
    <nav aria-label="breadcrumb" class="mt-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Manajemen Barang</li>
        <li class="breadcrumb-item active" aria-current="page">Jenis Barang</li>
      </ol>
    </nav>
    <h4 class="ml-3"><strong>Data Jenis Barang</strong></h4>
    <div class="row">
      <div class="ml-3 mt-4">
          <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary">Tambah Jenis Barang</b-button>

          <b-modal id="modal-1" size='lg' ref="modal-jenis" title="Tambah Jenis Barang">
            <form action="" method="post" style="margin-bottom: 90px">
                <div class="mb-3 row">
                    <label for="inputJenisBarang" class="col-sm-3 col-form-label">Nama Barang</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" v-model="jenis" id="inputJenisBarang">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputGolongan" class="col-sm-3 col-form-label">Golongan Barang</label>
                    <div class="col-sm-9">
                      <b-form-select v-model="golongan" :options="golongan">
                        <!-- This slot appears above the options from 'options' prop -->
                            <template #first>
                                <b-form-select-option :value="null" disabled>-- Pilih Golongan Barang --</b-form-select-option>
                            </template>
                        </b-form-select>
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
              <b-button class="btn btn-sm" variant="danger" @click="deletedData('tombol delete')">Delete</b-button>
              <b-button v-b-modal.modal-2 class="btn btn-sm" variant="primary" @click="detailData(data.item)">Detail</b-button>
            </template>
        </b-table>
          <b-modal id="modal-2" size="lg" ref="modal-detail" title="Detail">
            <form action="" method="">
              <div class="mb-3 row">
                <p class="col-3">Nama Barang</p>
                <p class="col-4">: {{detail.nama}}</p>
              </div>
              <div class="mb-5 row">
                <p class="col-3">Golongan Barang</p>
                <p class="col-4">: {{detail.golongan}}</p>
              </div>
            </form>
            <template #modal-footer>
              <b-button v-b-modal.modal-3 class="btn btn-sm" variant="primary">Edit</b-button>

              <b-modal id="modal-3" size="lg" ref="modal-admin" title="Edit">
                  <form action="" method="post" style="margin-bottom: 90px">
                    <div class="mb-3 row">
                        <label for="inputNamaBarang" class="col-sm-3 col-form-label">Nama Barang</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" v-model="jenis" id="inputNamaBarang">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputName" class="col-sm-3 col-form-label">Golongan Barang</label>
                        <div class="col-sm-9">
                            <b-form-select v-model="selected" :options="golongan">
                            <!-- This slot appears above the options from 'options' prop -->
                                <template #first>
                                    <b-form-select-option :value="null" disabled>-- Pilih Golongan Barang --</b-form-select-option>
                                </template>
                            </b-form-select>
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
        golongan: [
          { value: 'A', text: 'Option A (from options prop)' },
          { value: 'B', text: 'Option B (from options prop)' }
        ],
        header: [
          { key: 'nama', label: 'Nama Barang' },
          { key: 'data_barang_golongan.nama', label: 'Golongan Barang' },
          { key: 'action', label: 'Action' }
        ],
        items: [],
        jenis: '',
        detail: {}
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      async getData() {
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/barang', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          console.log(response)
          this.items = response.data.data
        })
      },
      detailData(data){
        this.detail = data
      },
      deletedData(data){
        console.log(data)
      }
    },
}
</script>
