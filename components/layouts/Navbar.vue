<template>
    <ul class="nav justify-content-end bg-dark">
        <li class="nav-item">
            <a href="#" class="nav-link link-light" style="min-width: 120px" data-bs-toggle="dropdown" aria-expanded="false">
                <fa :icon="['fas', 'user']" />
                Profile
                <fa :icon="['fas', 'sort-down']" class="float-end arrow" />
            </a>
            <ul class="dropdown-menu dropdown-menu-dark bg-dark" aria-labelledby="dropdownMenuLink">
                <li><p class="dropdown-item">User Name</p></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
        </li>
    </ul>
</template>

<style>
.rotation-arrow{
    transform: rotate(180deg);
}
</style>