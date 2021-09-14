<template>
  <div
    class="col d-flex flex-column flex-shrink-0 p-3 bg-dark"
    style="max-width: 280px; min-height: 100%; max-height: auto"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none"
    >
      <span class="fs-4">Inventaris ICBB</span>
    </a>
    <ul class="nav nav-pills flex-column mb-auto">
      <hr />
      <p style="color: white">Master Data</p>
      <li class="nav-item">
        <a href="/" class="nav-link link-light" aria-current="page">
          <fa :icon="['fas', 'tachometer-alt']" />
          Dashboard
        </a>
      </li>
      <li class="nav-item">
        <!-- eslint-disable-next-line vue/max-attributes-per-line -->
        <a
          class="nav-link link-light"
          data-bs-toggle="collapse"
          href="#collapseBarang"
          role="button"
          aria-expanded="false"
          aria-controls="collapseBarang" @click="rotation"
        >
          <fa :icon="['fas', 'toolbox']" />
          Manajemen Barang
          <fa :icon="['fas', 'sort-down']" class="float-end arrow" />
        </a>
        <div class="collapse" id="collapseBarang">
          <div class="card card-body">
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a href="" class="nav-link link-light">
                  <fa :icon="['fas', 'angle-double-right']" />
                  Golongan Barang
                </a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link link-light">
                    <fa :icon="['fas', 'angle-double-right']" />
                    Jenis Barang
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link link-light" data-bs-toggle="collapse" href="#collapseLokasi"
            role="button" aria-expanded="false" aria-controls="collapseLokasi" @click="rotation">
          <fa :icon="['fas', 'map-marker-alt']" />
          Manajemen Lokasi
          <fa :icon="['fas', 'sort-down']" class="float-end arrow" />
        </a>
        <div class="collapse" id="collapseLokasi">
          <div class="card card-body">
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a href="" class="nav-link link-light">
                    <fa :icon="['fas', 'angle-double-right']" />
                    Divisi
                </a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link link-light">
                    <fa :icon="['fas', 'angle-double-right']" />
                    Area Divisi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link link-light" data-bs-toggle="collapse" href="#collapsePengguna"
        role="button" aria-expanded="false" aria-controls="collapsePengguna" @click="rotation">
          <fa :icon="['fas', 'users']" />
          Manajemen Pengguna
          <fa :icon="['fas', 'sort-down']" class="float-end arrow" />
        </a>
        <div class="collapse" id="collapsePengguna">
          <div class="card card-body">
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a href="/user/ketua-divisi" class="nav-link link-light">
                    <fa :icon="['fas', 'angle-double-right']" />
                    Ketua Divisi
                </a>
              </li>
              <li class="nav-item">
                <a href="/user/admin-ruang" class="nav-link link-light">
                    <fa :icon="['fas', 'angle-double-right']" />
                    Admin Ruang
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <hr />
      <p style="color: white">System</p>
      <li class="nav-item">
        <a class="nav-link link-light" data-bs-toggle="collapse" href="#collapseInventaris"
        role="button" aria-expanded="false" aria-controls="collapseInventaris" @click="rotation">
          <fa :icon="['fas', 'users']" />
          Inventaris
          <fa :icon="['fas', 'sort-down']" class="float-end arrow" />
        </a>
        <div class="collapse" id="collapseInventaris">
          <div class="card card-body">
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a href="" class="nav-link link-light">
                    <fa :icon="['fas', 'angle-double-right']" />
                    Data Inventaris
                </a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link link-light">
                    <fa :icon="['fas', 'angle-double-right']" />
                    Pengecekan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    rotation (event) {
      const arrow = event.target.childNodes[2]
      if (arrow) {
          arrow.classList.toggle("rotation-arrow")
      } else {
        event.delegateTarget.childNodes[2].classList.toggle("rotation-arrow")
      }
    }
  }
}
</script>

<style>
hr {
  color: white;
  margin-bottom: 1px;
}
.nav-link:focus {
  background-color: rgb(105, 102, 102);
}
.nav-link:hover {
  background-color: rgb(105, 102, 102);
}
.card {
  background-color: rgb(105, 102, 102);
}
.card .nav-link:hover {
  background-color: rgb(143, 140, 140);
}
.rotation-arrow {
  transform: rotate(180deg); /* Standard syntax */
  margin-top: 10px;
}
</style>
