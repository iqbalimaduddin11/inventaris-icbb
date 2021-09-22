<template>
  <div class="container-fluid p-3">
    <nav aria-label="breadcrumb" class="mt-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Manajemen Lokasi</li>
        <li class="breadcrumb-item active" aria-current="page">Divisi</li>
      </ol>
    </nav>
    <h4 class="ml-3"><strong>Data Divisi</strong></h4>
    <div class="row">
      <div class="ml-3 mt-4">
        <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary">Tambah Divisi</b-button>

          <b-modal id="modal-1" size='lg' ref="modal-divisi" title="Tambah Divisi">
            <form action="" method="post" style="margin-bottom: 90px">
                <div class="mb-3 row">
                  <label for="divisi" class="col-sm-2 col-form-label">Divisi</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="divisi" id="divisi">
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
              <div class="mb-5 row">
                <p class="col-3">Divisi</p>
                <p class="col-4">: {{detail.divisi}}</p>
              </div>
            </form>
            <template #modal-footer>
              <b-button v-b-modal.modal-3 class="btn btn-sm" variant="primary">Edit</b-button>

              <b-modal id="modal-3" size="lg" ref="modal-admin" title="Edit">
                  <form action="" method="post" style="margin-bottom: 90px">
                    <div class="mb-3 row">
                        <label for="inputDivisi" class="col-sm-3 col-form-label">Divisi</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" v-model="golongan" id="inputDivisi">
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
  export default {
    data () {
      return {
        header:[
          { key: 'divisi', label: 'Divisi' },
          { key: 'action', label: 'Action' }
        ],
        items: [
          { divisi: 'CMC'},
          { divisi: 'Unit Usaha'},
          { divisi: 'SARPRAS'}
        ],
        divisi: '',
        detail: {}
      }
    },
    methods: {
      detailData(data){
        this.detail = data
      },
      deletedData(data){
        console.log(data)
      }
    }
  }
</script>
