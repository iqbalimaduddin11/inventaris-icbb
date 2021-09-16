<template>
  <div class="container-fluid p-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Manajemen Inventaris</li>
        <li class="breadcrumb-item active" aria-current="page">Data Inventaris</li>
      </ol>
    <h4 class="ml-3"><strong>Data Inventaris</strong></h4>
    <div class="row">
      <div class="ml-3 mt-4">
      <button class="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#tambahInventarisModal">Tambah Inventaris</button>

        <div class="modal fade" id="tambahInventarisModal" tabindex="-1" aria-labelledby="tambahInventarisModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="tambahInventarisModalLabel">Tambah Data Inventaris</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form action="" method="post">
                    <div class="mb-3 row">
                            <label for="example-datepicker" class="col-sm-2 col-form-label">Tanggal</label>
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
                        <label for="inputHarga" class="col-sm-2 col-form-label">Harga</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputHarga" v-model="harga">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputDonatur" class="col-sm-2 col-form-label">Donatur</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputDonatur" v-model="donatur">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputRuang" class="col-sm-2 col-form-label">Ruang</label>
                        <div class="col-sm-10">
                        <select class="form-select" v-model="ruang" aria-label="Default select example" id="inputRuang">
                          <option selected>Pilih Ruang</option>
                          <option value="1">Ruang Direksi</option>
                          <option value="2">Ruang Produksi</option>
                        </select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputDivisi" class="col-sm-2 col-form-label">Divisi</label>
                        <div class="col-sm-10">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputKepemilikan" class="col-sm-2 col-form-label">Kepemilikan</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputKepemilikan" v-model="kepemilikan">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputKondisi" class="col-sm-2 col-form-label">Kondisi</label>
                        <div class="col-sm-10">
                        <select class="form-select" v-model="kondisi" aria-label="Default select example" id="inputKondisi">
                          <option selected>Pilih Kondisi</option>
                          <option value="1">Baik</option>
                          <option value="2">Cukup</option>
                          <option value="3">Buruk</option>
                        </select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputStatus" class="col-sm-2 col-form-label">Status</label>
                        <div class="col-sm-10">
                        <select class="form-select" v-model="status" aria-label="Default select example" id="inputStatus">
                          <option selected>Pilih Status</option>
                          <option value="1">Elektronik</option>
                          <option value="2">ATK</option>
                          <option value="3">Furniture</option>
                        </select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputDokumen" class="col-sm-2 col-form-label">Dokumen</label>
                        <div class="col-sm-10">
                          <b-form-file v-model="dokumen" id="file-default"></b-form-file>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputPencatatan" class="col-sm-2 col-form-label">Pencatat</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPencatatan" v-model="pencatat">
                        </div>
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
            <th>Tanggal Masuk</th>
            <th>Donatur</th>
            <th>Divisi</th>
            <th>Status Lokasi</th>
            <th>aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1.</th>
            <th>13-09-2021</th>
            <th>Ahmad Faizi</th>
            <th>CMC</th>
            <th>Gedung Kelas</th>
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
      barang: '',
      harga: '',
      donatur: '',
      ruang: '',
      divisi: '',
      kepemilikan: '',
      kondisi: '',
      status: '',
      dokumen: '',
      pencatat: ''
    }
  }
}
</script>
