<template>
    <ul class="nav justify-content-end bg-dark">
        <li class="nav-item">
            <a href="#" class="nav-link link-light" style="min-width: 120px" data-bs-toggle="dropdown" aria-expanded="false">
                <fa :icon="['fas', 'user']" />
                Profile
                <fa :icon="['fas', 'sort-down']" class="float-end arrow" />
            </a>
            <ul class="dropdown-menu dropdown-menu-dark bg-dark" aria-labelledby="dropdownMenuLink">
                <li><p class="dropdown-item"><a href="/profile/data-profile" class="link-light text-decoration-none">{{ username }}</a></p></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-decoration-none" @click="logout">Keluar</a></li>
            </ul>
        </li>
    </ul>
</template>

<script>
import cookie from 'js-cookie'
export default {
    data(){
        return{
            
        }
    },
    props: [
        'username'
    ],
    methods: {
        logout(){
            localStorage.removeItem('user')
            cookie.remove('access_token')
            cookie.remove('user')
            this.username = ''
            this.$bvModal.show('modal-login')
            // location.reload(true)
        }
    }
}
</script>

<style>
.rotation-arrow{
    transform: rotate(180deg);
}
</style>