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
            <button class="btn btn-info btn-sm">Edit Profile</button>
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
                <p class="col-4">: {{user.divisi}}</p>
            </div>
            <div class="row">
                <p class="col-3">Jabatan</p>
                <p class="col-4">: {{user.jabatan}}</p>
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
            <div class="row">
                <p class="col-3">Password</p>
                <p class="col-4">: {{user.nip}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user: {}
        }
    },
    mounted () {
        this.getUser()
    },
    methods: {
        getUser (){
            this.user = JSON.parse(JSON.parse(localStorage.getItem('user')).user)
            console.log(this.user)
        }
    }
}
</script>