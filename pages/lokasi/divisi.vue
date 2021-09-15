<template>
  <div class="container-fluid p-3">
    <nav aria-label="breadcrumb" class="mt-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Manajemen Lokasi</li>
        <li class="breadcrumb-item active" aria-current="page">Divisi</li>
      </ol>
    </nav>
    <h4 class="ml-3"><strong>Data Divisi</strong></h4>
    <div class="row">
      <div class="ml-3 mt-4">
        <button class="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#tambahDivisiModal">Tambah Divisi</button>

        <div class="modal fade" id="tambahDivisiModal" tabindex="-1" aria-labelledby="tambahDivisiModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="tambahDivisiModalLabel">Silahkan Input Lokasi Divisi Baru</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <form action="" method="post">
                <div class="mb-3 row">
                  <div class="col-sm-12">
                    <label for="divisi" class="col-form-label">Divisi</label>
                    <input type="text" class="form-control" name="divisi" id="divisi">
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
            <th>Divisi</th>
            <th>aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1.</th>
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
