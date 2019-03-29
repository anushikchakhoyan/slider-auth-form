<template>
    <div class="rounded-tl-lg rounded-bl-lg w-2/5 flex up-info items-center justify-center flex-col">
        <h1 class="text-white text-4xl" >Welcome Back!</h1>
            <p class="text-white text-base pt-5 tracking-wide leading-normal font-normal text-center">
                To keep connected with us please<br> login with your personal info.
            </p>
            <RouterLink class="nav-link" to="/signIn" >
                <button class="bg-transparent hover:bg-transparent text-white my-8 py-4 px-16 border border-white rounded-full shadow">
                    Sign In
                </button>
            </RouterLink>
        </div>
</template>

<script>
    export default {
        name: "SignUpInfo",
    }
</script>

<style scoped>
    .up-info {
        background-image: linear-gradient(255deg, #2bc09b 0%, #256664 100%);
    }
</style>
