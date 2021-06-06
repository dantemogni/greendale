<template>
<main class="grid-entero">
            <section class="main-container">
                <img src="@/assets/mail.svg" class="item mail descriptive_img">
                <article class="item item-mailform">
                    <header class="article-header">
                        <h2>Contacto</h2>
                    </header>
                    <form action="#" method="POST" target="_blank">
                        <div class="form-group"> 
                            <div class="form-row">
                                <div class="col">
                                    <label for="firstname">Nombre: </label>
                                     <input type="text" class="form-control" name="firstname" placeholder="Ingrese su nombre..." required>
                                </div>
                                <div class="col">
                                     <label for="lastname">Apellido:</label>
                                     <input type="text" class="form-control" name="lastname" placeholder="Ingrese su apellido..." required>
                                  </div>
                                </div>
                            </div>
                        <div class="form-group"> 
                            <div class="form-row">
                                <div class="col">
                                    <label for="mail">Mail:</label>
                                    <input type="email"  class="form-control" name="mail" placeholder="Ingrese su mail..." required>
                                </div>
                                <div class="col">
                                    <label for="telefono">Telefono: </label>
                                    <input type="tel"  class="form-control" name="telefono" placeholder="Ingrese su telefono..." required>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="subject">Asunto:</label>
                            <input type="text"  class="form-control" name="subject" placeholder="Ingrese el asunto..." required>
                        </div>
                        <div class="form-group">
                            <label for="message">Mensaje: </label>
                            <textarea name="message"  rows="4" class="form-control"  placeholder="Ingrese su mensaje..." required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </article>
            </section>
        </main>
</template>

<script>
export default {
  name: 'Contact',
}
</script>