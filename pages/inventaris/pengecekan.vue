<template>
  <div class="container-fluid p-3">
       <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Manajemen Inventaris</li>
        <li class="breadcrumb-item active" aria-current="page">Pengecekan</li>
      </ol>
    <h4 class="ml-3"><strong>Data Pengecekan</strong></h4>
    <div class="row">
      <div class="ml-3 mt-4">
        <button class="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#inputPengecekan">Tambah Pengecekan</button>

        <div class="modal fade" id="inputPengecekan" tabindex="-1" aria-labelledby="inputPengecekanLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="inputPengecekanLabel">Input Pengecekan</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form action="" method="post">
                  <div class="mb-3 row">
                    <label for="inputPengecekan" class="col-form-label">Tanggal Pengecekan</label>
                    <input type="textarea" v-model="pengecekan" class="form-control" id="inputPengecekan">
                  </div>
                  <div class="mb-3 row">
                    <label for="inputKondisiBarang" class="col-form-label">Kondisi Barang</label>
                    <input type="textarea" class="form-control" v-model="barang" id="inputKondisiBarang">
                  </div>
                  <div class="mb-3 row">
                    <label for="InputPengecek" class="col-form-label">Nama Pengecek</label>
                    <input type="textarea" class="form-control" v-model="pengecekan" id="InputPengecek">
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <table class="table">
        <thead class="table table-dark table-bordered border-white">
          <tr>
            <th>Kode Inventaris</th>
            <th>Tanggal Pengecekan</th>
            <th>Kondisi Barang</th>
            <th>Pengecek</th>
            <th>aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1.</th>
            <th>13-09-2021</th>
            <th>Baik</th>
            <th>Raihan Khusna</th>
            <th>
              <a href="/" class="btn btn-danger" role="button" data-bs-toggle="button">Delete</a>
              <a href="/" class="btn btn-primary" role="button" data-bs-toggle="button">Edit</a>
            </th>
          </tr>
        </tbody>
      </table>
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
      pengecekan: '',
      barang: '',
      pengecek: ''
    }
  }
}
</script>
