<template>
    <div class="rounded-tr-lg rounded-br-lg w-2/5 in-info flex items-center justify-center flex-col">
        <h1 class="text-white text-4xl">Hello, Friend!</h1>

        <p class="text-white text-base pt-5 tracking-wide leading-normal font-normal text-center">
            Enter your personal details and <br> start journey with us.
        </p>
        <RouterLink class="nav-link" to="/signUp">
            <button class="bg-transparent hover:bg-transparent text-white my-8 py-4 px-16 border border-white rounded-full shadow">
                Sign Up
            </button>
        </RouterLink>
    </div>
</template>

<script>
    export default {
        name: "sign-in-info"
    }
</script>

<style scoped>
    .in-info {
        background-image: linear-gradient(255deg, #84dda3 0, #3aada2 100%);
    }
</style>