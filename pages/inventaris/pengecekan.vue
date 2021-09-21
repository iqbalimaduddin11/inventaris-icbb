<template>
  <div class="container-fluid p-3">
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
                    <label for="kondisi" class="col-sm-2 col-form-label">Kondisi</label>
                    <div class="col-sm-10">
                    <select class="form-select" v-model="kondisi" aria-label="Default select example" id="kondisi">
                      <option selected>Pilih Ruang</option>
                      <option value="1">Baik</option>
                      <option value="2">Cukup</option>
                      <option value="2">Kurang Baik</option>
                      <option value="2">Rusak</option>
                    </select>
                    </div>
              </div>
              <div class="mb-3 row">
                <label for="InputPengecek" class="col-sm-2 col-form-label">Pengecek</label>
                <div class="col-sm-10">
                  <input type="textarea" class="form-control" v-model="pengecekan" id="InputPengecek">
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
      date: '',
      kondisi: '',
      pengecekan: ''
    }
  }
}
</script>
