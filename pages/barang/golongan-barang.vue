<template>
  <div class="container-fluid p-3">
  <nav aria-label="breadcrumb" class="mt-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Manajemen Barang</li>
        <li class="breadcrumb-item active" aria-current="page">Golongan Barang</li>
      </ol>
    </nav>
    <h4 class="ml-3"><strong>Data Golongan Barang</strong></h4>
    <div class="row">
      <div class="ml-3 mt-2">
        <button class="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#tambahGolonganBarangModal">Tambah Golongan Barang</button>

          <div class="modal fade" id="tambahGolonganBarangModal" tabindex="-1" aria-labelledby="tambahGolonganBarangModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="tambahGolonganBarangModalLabel">Tambah Golongan Barang</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                  <div class="modal-body">
                      <form action="" method="post">
                          <div class="mb-3 row">
                              <label for="inputGolonganBarang" class="col-form-label">Golongan Barang</label>
                              <div class="col-sm-10">
                              <input type="text" class="form-control" v-model="golongan" id="inputGolonganBarang">
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
            <th>Golongan</th>
            <th>aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1.</th>
            <th>Elektronik</th>
            <th>
              <a href="/inventaris" class="btn btn-danger" role="button" data-bs-toggle="button">Delete</a>
              <a href="/inventaris" class="btn btn-primary" role="button" data-bs-toggle="button">Edit</a>
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
      golongan: ''
    }
  }
}
</script>
