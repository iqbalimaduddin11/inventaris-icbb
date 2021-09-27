<template>
  <div class="container-fluid p-3 mb-5">
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
        <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary">Tambah Divisi</b-button>

          <b-modal id="modal-1" size='lg' ref="modal-divisi" title="Tambah Divisi">
            <form action="" method="post" style="margin-bottom: 90px">
              <div class="mb-3 row">
                <label for="divisi" class="col-sm-2 col-form-label">Kode</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="code" id="divisi">
                </div>
              </div>
              <div class="mb-5 row">
                <label for="divisi" class="col-sm-2 col-form-label">Divisi</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="divisi" id="divisi">
                </div>
              </div>
              <div class="mb-3">
                <label for="cek-awal">Awal Pengecekan Inventaris</label>
                <b-form-datepicker id="cek-awal" v-model="batasAwal" class="mb-2"></b-form-datepicker>
              </div>
              <div class="mb-3">
                <label for="cek-akhir">Akhir Pengecekan Inventaris</label>
                <b-form-datepicker id="cek-akhir" v-model="batasAkhir" class="mb-2"></b-form-datepicker>
              </div>
            </form>
            <template #modal-footer>
                <b-button @click="addData" variant="primary">Simpan</b-button>
            </template>
          </b-modal>
      </div>
    </div>
    <div class="row">
      <div class="mt-4">
        <b-table outlined no-border-collapse :fields="header" :items="items" show-empty class="mt-4">
            <template #empty>
                <h5
                 class="text-center"><strong>Data Tidak Ditemukan</strong></h5>
            </template>
            <template #cell(action)="data">
              <b-button class="btn btn-sm" variant="danger" @click="deletedData(data.item)">Delete</b-button>
              <b-button v-b-modal.modal-2 class="btn btn-sm" variant="primary" @click="detailData(data.item)">Detail</b-button>
            </template>
        </b-table>
          <b-modal id="modal-2" size="lg" ref="modal-detail" title="Detail">
            <div class="mb-5 row">
              <p class="col-3">Kode</p>
              <p class="col-4">: {{detail.code}}</p>
            </div>
            <div class="mb-5 row">
              <p class="col-3">Divisi</p>
              <p class="col-4">: {{detail.nama}}</p>
            </div>
            <div class="mb-5 row">
              <p class="col-3">Awal Pengecekan Inventaris</p>
              <p class="col-4">: {{ setTanggal(detail.batas_pengecekan_awal)}}</p>
            </div>
            <div class="mb-5 row">
              <p class="col-3">Akhir Pengecekan Inventaris</p>
              <p class="col-4">: {{ setTanggal(detail.batas_pengecekan_akhir)}}</p>
            </div>
            <template #modal-footer>
              <b-button v-b-modal.modal-3 class="btn btn-sm" @click="editData" variant="primary">Edit</b-button>

              <b-modal id="modal-3" size="lg" ref="modal-admin" title="Edit">
                  <form action="" method="post" style="margin-bottom: 90px">
                    <div class="mb-3 row">
                      <label for="divisi" class="col-sm-2 col-form-label">Kode</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="edit.code" id="divisi">
                      </div>
                    </div>
                    <div class="mb-5 row">
                      <label for="divisi" class="col-sm-2 col-form-label">Divisi</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="edit.nama" id="divisi">
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="cek-awal">Awal Pengecekan Inventaris</label>
                      <b-form-datepicker id="cek-awal" v-model="edit.batas_pengecekan_awal" class="mb-2"></b-form-datepicker>
                    </div>
                    <div class="mb-3">
                      <label for="cek-akhir">Akhir Pengecekan Inventaris</label>
                      <b-form-datepicker id="cek-akhir" v-model="edit.batas_pengecekan_akhir" class="mb-2"></b-form-datepicker>
                    </div>
                  </form>
                  <template #modal-footer>
                      <b-button @click="postEdit(edit.kode)" variant="primary">Simpan</b-button>
                  </template>
              </b-modal>
            </template>
          </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
  import cookie from 'js-cookie'
  export default {
    data () {
      return {
        header:[
          { key: 'code', label: 'Kode' },
          { key: 'nama', label: 'Divisi' },
          { key: 'action', label: 'Action' }
        ],
        items: [],
        code: '',
        divisi: '',
        batasAwal: '',
        batasAkhir: '',
        detail: {},
        edit: {}
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      setTanggal(date){
        // console.log(this.$moment(date).format('DD-M-YYYY'))
        return this.$moment(date).format('dddd, D MMMM YYYY')
      },
      async getData(){
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/divisi', {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        .then(response => {
          console.log(response)
          this.items = response.data.data
        }).catch(err => {
          if (typeof err.response !== "undefined") {
            if (err.response.status === 404) {
              this.$bvModal.show('modal-login')
            }
          }
        })
      },
      detailData(data){
        this.detail = data
      },
      async deletedData(data){
        await this.$axios.delete("https://inventaris-yayasan.herokuapp.com/divisi/" + data.kode, {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        this.getData()
      },
      async addData(){
        const kode = this.items.length + 1
        console.log(kode)
        const dataDivisi = {
          "kode": kode,
          "code": this.code,
          "nama": this.divisi,
          "batas_pengecekan_awal": this.batasAwal,
          "batas_pengecekan_akhir": this.batasAkhir,
        }
        const data = JSON.stringify(dataDivisi)
        await this.$axios.post("https://inventaris-yayasan.herokuapp.com/divisi", data, {
          headers: {
            "content-type": "application/json; charset=utf-8",
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        this.getData()
        this.$bvModal.hide('modal-1')
      },
      editData(){
        this.edit = this.detail
      },
      async postEdit(id){
        const dataDivisi = {
          "code": this.edit.code,
          "nama": this.edit.nama,
          "batas_pengecekan_awal": this.edit.batas_pengecekan_awal,
          "batas_pengecekan_akhir": this.edit.batas_pengecekan_akhir,
        }
        console.log(dataDivisi)
        await this.$axios.patch("https://inventaris-yayasan.herokuapp.com/divisi/" + id, dataDivisi, {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        }).then(response => {
          this.detail = {
            "kode": id,  
            "code": dataDivisi.code,
            "nama": dataDivisi.nama,
            "batas_pengecekan_awal": dataDivisi.batas_pengecekan_awal,
            "batas_pengecekan_akhir": dataDivisi.batas_pengecekan_akhir,
          }
          this.$bvModal.hide('modal-3')
        })
      }
    }
  }
</script>
