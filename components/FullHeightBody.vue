<template>
    <section id="full-height-body" class="vh-100 d-flex flex-wrap justify-content-center align-items-center bg-light text-white">
        <div class="card hover-effect m-2 rounded" style="width: 18rem;" @click="redirectTo('/page1')">
            <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg" class="card-img-top rounded" alt="...">
            <div class="card-img-overlay d-flex justify-content-center align-items-center">
                <h5 class="card-title font-weight-bold display-6 text-light">Actualités</h5>
            </div>
        </div>
        <div class="card hover-effect m-2 rounded" style="width: 18rem;" @click="redirectTo('/page2')">
            <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg" class="card-img-top rounded" alt="...">
            <div class="card-img-overlay d-flex justify-content-center align-items-center">
                <h5 class="card-title font-weight-bold display-6 text-light">Liste des IA</h5>
            </div>
        </div>
        <div class="card hover-effect m-2 rounded" style="width: 18rem;" @click="redirectTo('/page2')">
            <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg" class="card-img-top rounded" alt="...">
            <div class="card-img-overlay d-flex justify-content-center align-items-center">
                <h5 class="card-title font-weight-bold display-6 text-light">Références culturelles</h5>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        redirectTo(path) {
            this.$router.push(path);
        }
    }
}
</script>

<style>
.hover-effect {
    transition: transform 0.2s, box-shadow 0.2s;
}
.hover-effect:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.hover-effect:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.card-title {
    font-weight: bold;
    font-size: 1.5rem; /* Taille de police plus grande */
}
.card {
    border-radius: 0.5rem; /* Arrondir les coins des cartes */
}
.card-img-top {
    border-top-left-radius: 0.5rem; /* Arrondir les coins de l'image */
    border-top-right-radius: 0.5rem; /* Arrondir les coins de l'image */
}
</style>