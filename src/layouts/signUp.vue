<template>
    <main class="container main-wrapper mx-auto flex justify-between">
        <SignUpInfo/>
        <SignUpForm/>
    </main>
</template>
<script>

    import SignUpForm from "@/components/sign-up/SignUpForm";
    import SignUpInfo from "@/components/sign-up/SignUpInfo";

    export default {
        name: 'signUp',
        components: {SignUpInfo, SignUpForm},
    };
</script>

<style scoped lang="scss" rel="stylesheet">
    .main-wrapper {
        min-height: calc(100vh - 20vh);
    }
</style>