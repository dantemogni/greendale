<template>
    <header class="grid-entero">
      <div class="main-header-container" id="back">
        <span class="animation"></span>
        <div id="white-circle"></div>          
        <div class="item-titulo">
          <a href="javascript:void(0)" alt="Página Principal">Welcome to<br><h1>Greendale Community College</h1></a>
          <h2><i>"You're already accepted!"</i></h2>
        </div>
        <div class="item-logo-header"></div>
        <div class="item-arrow">
          <i class="fa fa-angle-down"></i>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'HeroContent',
}
</script>

<style>
#back{
    background-image:url('../assets/hero-content-5.jpg');  
    background-position: bottom;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    z-index: 0;
}
.main-header-container{
    text-decoration: none;
    display: grid;
    height: 100vh;
    font-size: 1.5rem;
    flex-wrap: wrap;
    align-items: center;
    grid-template-columns: repeat(8,1fr);
    grid-template-rows: repeat(8,1fr);
    justify-items: center;
}
#white-circle{
    background-image: url('../assets/white-glob.svg');
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: -1;
    animation: inicio-glob 1s;
    
}
.main-header-container a {
    text-decoration: none;
    color: black;
}
.item-titulo{
    grid-column: 1 / 5;
    grid-row: 4;
    width: calc(100% - 30%);
    animation: inicio-glob 2s;
}
.item-logo-header{
    background: url("../assets/logo.png") no-repeat center;
    min-width: 165px;
    min-height: 165px;
    max-width: 165px;
    max-height: 165px;
    border-radius: 50%;
    background-size: 155px 155px;
    box-shadow: 0px 4px 5px -3px rgba(0, 0, 0, 0.2);
    border: 2px solid #e0e0e0;
    background-color: white;
    grid-column: 7;
    grid-row: 4;
    animation: inicio-logo 1.5s;
}
.item-arrow{
    width: 100px;
    height: 100px;
    grid-column: 7;
    grid-row: 8;
    text-align: center;
    font-size: 30px;
    color: white;
    animation: upAndDown 2s infinite;
  }
    
  @keyframes upAndDown {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    50%{
        opacity: 1;
        transform: translateY(-10px);
    }
    100% {
        opacity: 0;
        transform: translateY(10px);
    }
  }
</style>
