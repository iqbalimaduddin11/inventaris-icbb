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
        <button class="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#TambahAreaDivisiModal">Tambah Divisi</button>

        <div class="modal fade" id="TambahAreaDivisiModal" tabindex="-1" aria-labelledby="TambahAreaDivisiModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="TambahAreaDivisiModalLabel">Tambah Area Divisi</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form action="" method="post">
                  <div class="mb-3 row">
                      <label for="areaRuang" class="fs-6">Nama Ruang</label>
                      <div class="col-sm-10">
                        <input type="textarea" class="form-control" v-model="ruang" id="areaRuang">
                      </div>
                      <label for="divisi" class="fs-6">Divisi</label>
                      <div class="col-sm-10">
                        <select class="form-select" aria-label="Default select example" v-model="divisi" id="divisi">
                          <option selected>Pilih Divisi</option>
                          <option value="1">CMC</option>
                          <option value="2">Unit Usaha</option>
                          <option value="3">Sarpras</option>
                        </select>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
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
            <th>Area</th>
            <th>Divisi</th>
            <th>aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1.</th>
            <th>Ruang Direksi</th>
            <th>CMC</th>
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
      ruang: '',
      divisi: ''
    }
  }
}
</script>
