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
        <button class="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#tambahJenisBarangModal">Tambah Jenis Barang</button>

        <div class="modal fade" id="tambahJenisBarangModal" tabindex="-1" aria-labelledby="tambahJenisBarangModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="tambahJenisBarangModalLabel">Input Jenis Barang</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form action="" method="post">
                  <div class="mb-3 row">
                    <div class="col-sm-10">
                      <label for="inputBarang" class="col-form-label">Barang</label>
                      <input type="textarea" class="form-control" v-model="barang" id="inputBarang">
                    </div>
                    <div class="col-sm-10">
                      <label for="inputGolongan" class="col-form-label">Golongan</label>
                      <select class="form-select" aria-label="Default select example"  v-model="golongan" id="inputGolongan">
                        <option selected>Pilih Golongan</option>
                        <option value="1">Elektronik</option>
                        <option value="2">ATK</option>
                        <option value="3">Furniture</option>
                      </select>
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
            <th>No</th>
            <th>Nama Barang</th>
            <th>Golongangan</th>
            <th>aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1.</th>
            <th>TV</th>
            <th>Elektronik</th>
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
      barang: '',
      golongan: ''
    }
  }
}
</script>
