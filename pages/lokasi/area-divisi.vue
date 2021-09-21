<template>
  <div class="container-fluid p-3">
    <nav aria-label="breadcrumb" class="mt-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Manajemen Lokasi</li>
        <li class="breadcrumb-item active" aria-current="page">Area Divisi</li>
      </ol>
    </nav>
    <h4 class="ml-3"><strong>Data Area Divisi</strong></h4>
      <div class="row">
        <div class="ml-3 mt-4">
          <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary">Tambah Area Divisi</b-button>

          <b-modal id="modal-1" size='lg' ref="modal-area" title="Tambah Area Divisi">
              <form action="" method="post" style="margin-bottom: 90px">
                  <div class="mb-3 row">
                      <label for="inputAreaDivisi" class="col-sm-2 col-form-label">Area Divisi</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="jenis" id="inputAreaDivisi">
                      </div>
                  </div>
                  <div class="mb-3 row">
                      <label for="inputDivisi" class="col-sm-2 col-form-label">Divisi</label>
                      <div class="col-sm-10">
                        <b-form-select v-model="divisi" :options="divisi">
                          <!-- This slot appears above the options from 'options' prop -->
                              <template #first>
                                  <b-form-select-option :value="null" disabled>-- Pilih Divisi --</b-form-select-option>
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
          <b-table-simple>
            <b-thead head-variant="dark">
              <b-tr>
                <b-th>No</b-th>
                <b-th>Area</b-th>
                <b-th>Divisi</b-th>
                <b-th>aksi</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-th>1.</b-th>
                <b-th>Ruang Direksi</b-th>
                <b-th>CMC</b-th>
                <b-th>
                  <a href="/" class="btn btn-danger" role="button" data-bs-toggle="button">Delete</a>
                  <a href="/" class="btn btn-primary" role="button" data-bs-toggle="button">Edit</a>
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
,
        divisi: ''
<script>
  export default {
    data () {
      return {
        selected: null,
        divisi: [
          { value: 'A', text: 'Option A (from options prop)' },
          { value: 'B', text: 'Option B (from options prop)' }
        ],
        ruang: ''
      }
    }
  }
</script>
