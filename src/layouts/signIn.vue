<template>
    <main class="container main-wrapper mx-auto flex justify-between">
        <SignInForm />
        <SignInInfo />
    </main>
</template>

<script>
import SignInForm from '@/components/sign-in/SignInForm';
import SignInInfo from "@/components/sign-in/SignInInfo";

export default {
    name: 'SignIn',
    components: {SignInInfo, SignInForm },
};
</script>

<style scoped lang="scss" rel="stylesheet">
    .main-wrapper {
        min-height: calc(100vh - 20vh);
    }
</style>