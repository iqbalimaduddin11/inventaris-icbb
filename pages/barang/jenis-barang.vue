<template>
  <div class="container-fluid p-3">
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
                    <label for="inputJenisBarang" class="col-sm-2 col-form-label">Barang</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" v-model="jenis" id="inputJenisBarang">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputGolongan" class="col-sm-2 col-form-label">Golongan</label>
                    <div class="col-sm-10">
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
        <b-table-simple>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th>No</b-th>
              <b-th>Nama Barang</b-th>
              <b-th>Golongangan</b-th>
              <b-th>aksi</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-th>1.</b-th>
              <b-th>TV</b-th>
              <b-th>Elektronik</b-th>
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
        selected: null,
        golongan: [
          { value: 'A', text: 'Option A (from options prop)' },
          { value: 'B', text: 'Option B (from options prop)' }
        ],
        barang: ''
      }
    }
}
</script>
