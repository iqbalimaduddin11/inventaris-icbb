<template>
  <div id="wrapper" class="row">
    <LayoutsSidebar />
    <div id="content-wrapper" class="col d-flex flex-column">
      <div id="content">
        <LayoutsNavbar />
        <Nuxt/>
        <LayoutsFooter />
      </div>
    </div>
  </div>
</template>

<style>
html, body{
  height: 100%;
}
#__nuxt, #__layout{
  height: 100%;
}
#content{
  height: 100%;
}
#wrapper{
  position:relative;
  min-height: 100%;
  max-height: auto !important;
  width: 100%;
  margin: 0px
}
#content-wrapper{
  margin: 0;
  padding: 0
}
</style>
