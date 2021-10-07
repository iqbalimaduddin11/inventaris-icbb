<template>
  <div class="container-fluid p-3 mb-5">
    <nav aria-label="breadcrumb" class="mt-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Manajemen Lokasi</li>
        <li class="breadcrumb-item active" aria-current="page">Ruang</li>
      </ol>
    </nav>
    <h4 class="ml-3"><strong>Data Ruang</strong></h4>
    <div class="row">
      <div class="ml-3 mt-4">
        <b-button v-b-modal.modal-1 class="btn btn-sm" variant="primary">Tambah Ruang</b-button>

          <b-modal id="modal-1" size='lg' ref="modal-divisi" title="Tambah Divisi">
            <form action="" method="post" style="margin-bottom: 90px">
              <div class="mb-3 row">
                <label for="kodeRuang" class="col-sm-2 col-form-label">Kode</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="code" id="kodeRuang">
                </div>
              </div>
              <div class="mb-5 row">
                <label for="ruang" class="col-sm-2 col-form-label">Ruang</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="ruang" id="ruang">
                </div>
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
            <form action="" method="post" style="margin-bottom: 90px">
              <div class="mb-5 row">
                <p class="col-3">Code</p>
                <p class="col-4">: {{detail.code}}</p>
              </div>
              <div class="mb-5 row">
                <p class="col-3">Ruang</p>
                <p class="col-4">: {{detail.nama}}</p>
              </div>
            </form>
            <template #modal-footer>
              <b-button v-b-modal.modal-3 class="btn btn-sm" @click="editData" variant="primary">Edit</b-button>

              <b-modal id="modal-3" size="lg" ref="modal-admin" title="Edit">
                <form action="" method="post" style="margin-bottom: 90px">
                  <div class="mb-3 row">
                      <label for="inputCode" class="col-sm-3 col-form-label">Code</label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" v-model="edit.code" id="inputCode">
                      </div>
                  </div>
                  <div class="mb-3 row">
                      <label for="inputRuang" class="col-sm-3 col-form-label">Ruang</label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" v-model="edit.nama" id="inputRuang">
                      </div>
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
          { key: 'nama', label: 'Ruang' },
          { key: 'action', label: 'Action' }
        ],
        items: [],
        code: '',
        ruang: '',
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
        await this.$axios.get('https://inventaris-yayasan.herokuapp.com/ruang', {
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
        await this.$axios.delete("https://inventaris-yayasan.herokuapp.com/ruang/" + data.kode, {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        this.getData()
      },
      async addData(){
        var loop = true
        let kode = 1
        while (loop) {
          const cek = this.items.filter(function (item) {
            return item.kode == kode
          })
          if (cek.length == 0) {
            loop = false
          } else {
            kode++
          }
        }
        console.log(kode)
        const dataRuang = {
          "kode": kode,
          "code": this.code,
          "nama": this.ruang,
        }
        const data = JSON.stringify(dataRuang)
        await this.$axios.post("https://inventaris-yayasan.herokuapp.com/ruang", data, {
          headers: {
            "content-type": "application/json; charset=utf-8",
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        })
        this.getData()
        this.$bvModal.hide('modal-1')
      },
      editData(data){
        this.edit = data
      },
      async postEdit(id){
        const dataruang = {
          "code": this.edit.code,
          "nama": this.edit.nama,
        }
        console.log(dataruang)
        await this.$axios.patch("https://inventaris-yayasan.herokuapp.com/ruang/" + id, dataruang, {
          headers: {
            'Authorization': 'Bearer ' + cookie.get('access_token')
          }
        }).then(response => {
          this.getData()
          this.$bvModal.hide('modal-2')
        })
      }
    }
  }
</script>
