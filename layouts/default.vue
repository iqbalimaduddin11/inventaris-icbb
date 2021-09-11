<template>
  <div >
    <div class="sidebar bg-dark" id="sidebar">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <div class="navbar-title">Inventaris ICBB</div>
        </div>
      </nav>
      <a class="active" href="#home"><fa :icon="['fas', 'tachometer-alt']" /> Home</a>
      <hr>
      <a href="#news"><fa :icon="['fas', 'bars']" /> News</a>
      <a href="#contact"><fa :icon="['fas', 'bars']" /> Contact</a>
      <a href="#about"><fa :icon="['fas', 'bars']" /> About</a>
    </div>
    <div class="content p-0">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <b-button v-b-toggle.sidebar>
            <fa :icon="['fas', 'bars']" />
          </b-button>
        </div>
      </nav>
        <Nuxt />
    </div>
    <div class="footer">
      <p><strong>@copy 2021</strong></p>
    </div>
  </div>
</template>

<style>
.sidebar{
  margin: 0;
  padding: 0;
  width: 250px;
  position: fixed;
  height: 100%;
  overflow: auto;
}
.active{
  background-color: #555;
}
.navbar-title{
  color: white;
  font-size: 21px;
  height: 38px;
}
.sidebar a {
  display: block;
  color: rgb(255, 255, 255);
  padding: 16px;
  text-decoration: none;
}
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}
hr{
  background-color: rgb(126, 126, 126);
  margin: 10px 16px ;
}
div.content {
  margin-left: 250px;
  padding: 1px 16px;
  height: 100%;
}
</style>
