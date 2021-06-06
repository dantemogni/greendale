<template>
        <main class="grid-entero">
            <section class="main-container">
                <img src="@/assets/campus.svg" class="item campus descriptive_img">
                <article class="item item-campusform">
                    <header class="article-header">
                        <h2>Acceso Campus</h2>
                    </header>
                    <form action="#" method="POST" target="_blank">
                        <div class="form-group">
                            <label for="username">Usuario: </label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                </div>
                            <input type="text" class="form-control" name="username" placeholder="Ingrese su usuario aqui..." required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Contraseña:</label>
                            <input type="password" class="form-control" name="password" placeholder="Ingrese su contraseña aqui..." required>
                        </div>
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" id="autoSizingCheck">
                            <label class="form-check-label" for="autoSizingCheck">
                            Recordar Sesión
                            </label>
                          </div>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </article>
            </section>
        </main>
</template>

<script>
export default {
  name: 'Campus',
}
</script>