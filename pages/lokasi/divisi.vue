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
        <b-table-simple>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th>No</b-th>
              <b-th>Divisi</b-th>
              <b-th>aksi</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-th>1.</b-th>
              <b-th>CMC</b-th>
              <b-th>
                  <b-button variant="danger">Delete</b-button>
                  <b-button variant="primary" href="/">Detail</b-button>
              </b-th>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </div>
  </div>
</template>

<style>
.row{
  margin-left: 0;
  margin-right: 0;
}
</style>

<script>
export default {
  data () {
    return {
      ruang: '',
      divisi: ''
    }
  }
}
</script>
