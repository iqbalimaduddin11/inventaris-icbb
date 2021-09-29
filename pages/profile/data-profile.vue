<template>
    <div class="container-fluid" style="margin-bottom: 70px">
        <nav aria-label="breadcrumb" class="mt-4">
            <ol class="breadcrumb">
                <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Profile</li>
            </ol>
        </nav>
        <div class="d-flex justify-content-between border-bottom border-dark pb-3 mt-4" style="height: auto">
            <h4 style="margin: 0px"><strong>Profile</strong></h4>
            <button v-b-modal.modal-3 class="btn btn-info btn-sm" @click="editData(user, divisi, jabatan)">Edit Profile</button>
            <b-modal id="modal-3" size="lg" ref="modal-admin" title="Edit Admin Ruang">
                <form action="" method="post" style="margin-bottom: 90px">
                    <div class="mb-3 row">
                        <label for="inputNip" class="col-sm-2 col-form-label">NIP</label>
                        <div class="col-sm-10">
                        <input type="text" v-model="edit.nip" class="form-control" id="inputNip">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputName" class="col-sm-2 col-form-label">Nama</label>
                        <div class="col-sm-10">
                        <input type="text" v-model="edit.nama" class="form-control" id="inputName">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputName" class="col-sm-2 col-form-label">Jabatan</label>
                        <div class="col-sm-10">
                            <b-form-select v-model="edit.jabatan" :options="optionJabatan">
                            <!-- This slot appears above the options from 'options' prop -->
                                <template #first>
                                    <b-form-select-option :value="null" disabled>-- Pilih Jabatan --</b-form-select-option>
                                </template>
                            </b-form-select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputName" class="col-sm-2 col-form-label">Divisi</label>
                        <div class="col-sm-10">
                            <b-form-select v-model="edit.divisi" :options="optionDivisi">
                            <!-- This slot appears above the options from 'options' prop -->
                                <template #first>
                                    <b-form-select-option :value="null" disabled>-- Pilih Divisi --</b-form-select-option>
                                </template>
                            </b-form-select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputHp" class="col-sm-2 col-form-label">Nomor Hp</label>
                        <div class="col-sm-10">
                            <input type="text" v-model="edit.no_hp" class="form-control" id="inputHp">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputAlamat" class="col-sm-2 col-form-label">Alamat</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" v-model="edit.alamat" id="inputAlamat" rows="3"></textarea>
                        </div>
                    </div>
                </form>
                <template #modal-footer>
                    <b-button @click="editProfile(edit.kode, edit)" variant="primary">Simpan</b-button>
                </template>
            </b-modal>
        </div>
        <div class="container mt-4 pl-4">
            <div class="row">
                <p class="col-3">NIP</p>
                <p class="col-4">: {{user.nip}}</p>
            </div>
            <div class="row">
                <p class="col-3">Nama</p>
                <p class="col-4">: {{user.nama}}</p>
            </div>
            <div class="row">
                <p class="col-3">Divisi</p>
                <p class="col-4">: {{divisi.nama}}</p>
            </div>
            <div class="row">
                <p class="col-3">Jabatan</p>
                <p class="col-4">: {{jabatan.nama}}</p>
            </div>
            <div class="row">
                <p class="col-3">Nomor Hp</p>
                <p class="col-4">: {{user.no_hp}}</p>
            </div>
            <div class="row">
                <p class="col-3">Alamat</p>
                <p class="col-4">: {{user.alamat}}</p>
            </div>
        </div>
        <div class="d-flex justify-content-between border-bottom border-top border-dark pt-3 pb-3 mt-4" style="height: auto">
            <h4 style="margin: 0px"><strong>Akun</strong></h4>
            <button class="btn btn-info btn-sm" data-bs-toggle="dropdown" aria-expanded="false">Edit Akun</button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><p class="dropdown-item"><a href="" class="link-dark text-decoration-none">Ganti Email</a></p></li>
                <li><p class="dropdown-item"><a href="" class="link-dark text-decoration-none">Ganti Password</a></p></li>
            </ul>
        </div>
        <div class="container mt-4 pl-4">
            <div class="row">
                <p class="col-3">Email</p>
                <p class="col-4">: {{user.email}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import cookie from 'js-cookie'
export default {
    data(){
        return {
            user: {},
            divisi: {},
            jabatan: {},
            edit: {
                kode: '',
                nip: '',
                nama: '',
                jabatan: '',
                divisi: '',
                no_hp: '',
                alamat: ''
            },
            optionJabatan: {},
            optionDivisi: {}

        }
    },
    mounted () {
        this.getUser()
    },
    methods: {
        getUser (){
            const profile = JSON.parse(localStorage.getItem('user')).user
                // console.log(profile)
            if (typeof profile == "string") {
                this.user = JSON.parse(profile)
            } else {
                // console.log('object')
                this.user = profile
            }
            this.jabatan = this.user.app_jabatan
            this.divisi = this.user.data_divisi
            try {    
                this.$axios.get('https://inventaris-yayasan.herokuapp.com/divisi',{
                    headers: {
                        'Authorization': 'Bearer ' + cookie.get('access_token')
                    }
                }).then(response => {
                    const data = {}
                    response.data.data.forEach(function callback(item, index) {
                        data[index] = {value: item.kode, text: item.nama}
                    });
                    this.optionDivisi = data
                })
                this.$axios.get('https://inventaris-yayasan.herokuapp.com/jabatan',{
                    headers: {
                        'Authorization': 'Bearer ' + cookie.get('access_token')
                    }
                }).then(response => {
                    const data = {}
                    response.data.data.forEach(function callback(item, index) {
                        data[index] = {value: item.kode, text: item.nama}
                    });
                    this.optionJabatan = data
                })
            } catch (err) {
                if (typeof err.response !== "undefined") {
                    if (err.response.status === 404) {
                    this.$bvModal.show('modal-login')
                    }
                }
            }
        },
        editData(user, divisi, jabatan){
            this.edit.kode = user.kode
            this.edit.nip = user.nip
            this.edit.nama = user.nama
            this.edit.no_hp = user.no_hp
            this.edit.jabatan = jabatan.kode
            this.edit.divisi = divisi.kode
            this.edit.alamat = user.alamat
        },
        async editProfile(id, profile){
            const dataProfile = {
                "nip": profile.nip,
                "nama": profile.nama,
                "jabatan": profile.jabatan,
                "divisi": profile.divisi,
                "no_hp": profile.no_hp,
                "alamat": profile.alamat,
            }
            await this.$axios.patch("https://inventaris-yayasan.herokuapp.com/user/"+id, dataProfile, {
            headers: {
                'Authorization': 'Bearer ' + cookie.get('access_token')
            }
            }).then(response => {
                console.log(response)
                this.$store.commit("user/SET_USER", response.data.data[0]);
                cookie.set('user', response.data.data[0])
                this.user = response.data.data[0]
                this.jabatan = this.user.app_jabatan
                this.divisi = this.user.data_divisi
                this.$bvModal.show('modal-3')
            })
        }
    }
}
</script>