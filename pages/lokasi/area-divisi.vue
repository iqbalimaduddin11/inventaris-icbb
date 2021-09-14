<template>
  <div class="container-fluid p-3">
    <div class="row">
      <div class="card bg-white" style="width:30%">
        <label for="divisi" class="fs-6">Input Area Divisi</label>
        <input type="textarea" class="form-control" name="divisi" id="divisi" data-bs-toggle="modal" data-bs-target="#Modal">

        <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Silahkan Input Lokasi Divisi Baru</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <label for="divisi" class="fs-6">Nama Divisi</label>
                <input type="textarea" class="form-control" name="divisi" id="divisi">
                <label for="divisi" class="fs-6">Divisi</label>
                <select class="form-select" aria-label="Default select example" name="divisi" id="nama">
                  <option selected>Pilih Divisi</option>
                  <option value="1">CMC</option>
                  <option value="2">Unit Usaha</option>
                  <option value="3">Sarpras</option>
                </select>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
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
