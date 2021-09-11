<template>
  <div class="container-fluid p-3">
    <div class="row">
      <div class="card mr-2 ml-2 bg-danger text-light" style="width:31%;">
        <div class="card-body">
          <h5 class="card-title">3</h5>
          <p class="card-text">Data Ruang</p>
        <a href="/ruang" class="btn btn-info btn-light" role="button" data-bs-toggle="button">Detail</a>
        </div>
      </div>
      <div class="card mr-2 ml-2 bg-success text-light" style="width:31%">
        <div class="card-body">
          <h5 class="card-title">3</h5>
          <p class="card-text">Data Divisi</p>
        <a href="/divisi" class="btn btn-info btn-light" role="button" data-bs-toggle="button">Detail</a>
        </div>
      </div>
      <div class="card mr-2 ml-2 bg-warning text-light" style="width:31%">
        <div class="card-body">
          <h5 class="card-title">3</h5>
          <p class="card-text">Karyawan</p>
        <a href="/karyawan" class="btn btn-info btn-light" role="button" data-bs-toggle="button">Detail</a>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="card mr-2 ml-2 bg-secondary text-light" style="width:31%">
        <div class="card-body">
          <h5 class="card-title">3</h5>
          <p class="card-text">Data Inventaris</p>
          <a href="/inventaris" class="btn btn-info btn-light" role="button" data-bs-toggle="button">Detail</a>
        </div>
      </div>
      <div class="card mr-2 ml-2 bg-primary text-light" style="width:31%">
        <div class="card-body">
            <h5 class="card-title">3</h5>
            <p class="card-text">Data Peminjaman</p>
          <a href="/peminjaman" class="btn btn-info btn-light" role="button" data-bs-toggle="button">Detail</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col mt-3">
        <table class="table">
          <thead class="table table-dark table-bordered border-white">
            <tr>
              <th>No</th>
              <th>Divisi</th>
              <th>Penanggung Jawab</th>
              <th>aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1.</th>
              <th>CMC</th>
              <th>M Fadlan Syakir</th>
              <th>
                <a href="/inventaris" class="btn btn-primary" role="button" data-bs-toggle="button">Detail</a>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
.row{
  margin-left: 0;
  margin-right: 0;
}
</style>
