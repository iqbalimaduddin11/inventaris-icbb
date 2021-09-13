<template>
  <div class="container-fluid p-3">
    <div class="row">
      <div class="card bg-white" style="width:30%">
        <label for="golongan-barang" class="fs-6">Input Golongan Barang</label>
        <input type="textarea" class="form-control" name="golongan-barang" id="golongan-barang" data-bs-toggle="modal" data-bs-target="#Modal">

        <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Silahkan Input Golongan Barang Baru</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <input type="text" name="golongan-barang" id="golongan-barang">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary mt-1 mb-2" style="width:22%;">Input</button>
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
              <a href="/inventaris" class="btn btn-primary" role="button" data-bs-toggle="button">Detail</a>
              <a href="/inventaris" class="btn btn-danger" role="button" data-bs-toggle="button">Detail</a>
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
