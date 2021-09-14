<template>
  <div class="container-fluid p-3">
    <div class="row">
      <div class="card bg-white" style="width: 30%;">
        <label for="golongan-barang" class="fs-6">Input Jenis Barang</label>
        <input type="textarea" class="form-control" name="golongan-barang" id="golongan-barang" data-bs-toggle="modal" data-bs-target="#Modal-jenis">

        <div class="modal fade" id="Modal-jenis" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Input Jenis Barang</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <label for="nama">Nama Barang</label>
                <input type="textarea" class="form-control" name="nama" id="nama" data-bs-toggle="modal" data-bs-target="#Modal">
                <label for="golongan" class="fs-6">Golongan Barang</label>
                <select class="form-select" aria-label="Default select example" name="golongan" id="nama">
                  <option selected>Pilih Golongan</option>
                  <option value="1">Elektronik</option>
                  <option value="2">ATK</option>
                  <option value="3">Furniture</option>
                </select>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary mt-2 mb-2" style="width:22%;">Input</button>
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
