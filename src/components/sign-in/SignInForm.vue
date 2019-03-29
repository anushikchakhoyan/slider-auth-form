<template>
    <div class="w-3/5 pt-32 sing-in-wrapper rounded-tl-lg rounded-bl-lg bg-white flex items-center flex-col">
        <h1 class="text-teal-dark text-5xl">Sign in to Deprella.</h1>

        <div class="social-icons py-4">
            <ul class="list-reset flex items-center justify-center py-4">
                <li class="border border-grey-light rounded-full flex items-center justify-center w-10 h-10 mr-3">
                    <a href="#">
                        <img src="../../assets/images/facebook.svg" alt="facebook" width="15">
                    </a>
                </li>
                <li class="border border-grey-light rounded-full flex items-center justify-center w-10 h-10 mr-3">
                    <a href="#">
                        <img src="../../assets/images/google-plus.svg" alt="google pluse" width="20">
                    </a>
                </li>
                <li class="border border-grey-light rounded-full flex items-center justify-center w-10 h-10 mr-3">
                    <a href="#">
                        <img src="../../assets/images/linked-in.svg" alt="linkedin" width="15">
                    </a>
                </li>
            </ul>

            <span class="text-grey-dark text-sm pt-6 block tracking-wide">or use your email account:</span>
        </div>

        <div class="flex items-center justify-center flex-col">
            <form class="w-full max-w-xs">
                <div class="md:flex md:items-center mb-6">
                    <div class="">
                        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-teal-dark" id="inline-email" type="email" placeholder="Email">
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="">
                        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-teal-dark" id="inline-username" type="password" placeholder="Password">
                    </div>
                </div>
            </form>

            <div class="border-b border-grey text-center">
                <a href="#" class="text-grey-darker text-base pt-6 pb-2 block tracking-wide no-underline hover:no-underline">Forgot your password?</a>
            </div>

            <button class="bg-teal-dark hover:bg-teal-dark text-white font-normal my-8 py-4 px-16 border border-grey-light rounded-full shadow">
                Sign In
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sign-in-form"
    }
</script>

<style scoped>
</style>