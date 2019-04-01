<template>
    <div class="container max-auto" id="container" v-bind:class="{rightPanelActive: isActive}">
        <!--Create Account-->
        <div class="form-container sign-up-container">
            <form action="#">
                <h1 class="text-teal-dark">Create Account</h1>
                <div class="social-container">
                    <a href="#" class="social"><img src="../assets/images/facebook.svg" alt="facebook" width="15"></a>
                    <a href="#" class="social"><img src="../assets/images/google-plus.svg" alt="google plus" width="15"></a>
                    <a href="#" class="social"><img src="../assets/images/linked-in.svg" alt="linkedin" width="15"></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" autocomplete="text" placeholder="Name"/>
                <input type="password" autocomplete="current-password" placeholder="Password"/>
                <input type="email" autocomplete="email" placeholder="Email"/>
                <button class="green-btn">Sign Up</button>
            </form>
        </div>
        <!--Sign in-->
        <div class="form-container sign-in-container">
            <form action="#">
                <h1 class="text-teal-dark">Sign in</h1>
                <div class="social-container">
                    <a href="#" class="social"><img src="../assets/images/facebook.svg" alt="facebook" width="15"></a>
                    <a href="#" class="social"><img src="../assets/images/google-plus.svg" alt="google plus" width="15"></a>
                    <a href="#" class="social"><img src="../assets/images/linked-in.svg" alt="linkedin" width="15"></a>
                </div>
                <span>or use your account</span>
                <input type="email" autocomplete="email" placeholder="Email"/>
                <input type="password" autocomplete="current-password" placeholder="Password"/>
                <a href="#">Forgot your password?</a>
                <button class="green-btn">Sign In</button>
            </form>
        </div>
        <!--overlay-->
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                        To keep connected with us please login with your personal info
                    </p>
                    <button class="ghost" id="signIn" @click="removeActive">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button class="ghost" id="signUp" @click="makeActive">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'loginReg',
        components: {},
        data: function () {
            return {
                isActive: false,
            };
        },
        methods: {
            makeActive: function () {
                this.isActive = !this.isActive;
            },
            removeActive: function () {
                this.isActive = false;
            }
        }
    };
</script>

<style scoped lang="scss" rel="stylesheet">
    .container {
        width: 900px;
        margin: 30px auto;
        max-width: 100%;
        overflow: hidden;
        min-height: 600px;
        border-radius: 5px;
        position: relative;
        background-color: $white;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

        .form-container {
            top: 0;
            height: 100%;
            position: absolute;
            transition: all 0.80s ease-in-out;
        }

        .social-container {
            margin: 20px 0;

            .social {
                width: 40px;
                height: 40px;
                margin: 0 5px;
                border-radius: 50%;
                align-items: center;
                display: inline-flex;
                justify-content: center;
                border: 1px solid $grey;
            }
        }

        .green-btn {
            color: $white;
            font-size: 12px;
            font-weight: bold;
            padding: 12px 45px;
            border-radius: 20px;
            letter-spacing: 1px;
            text-transform: uppercase;
            background-color: $dark-green;
            border: 1px solid $dark-green;
            transition: transform 80ms ease-in;

            &:active {
                transform: scale(0.95);
            }
        }

        .ghost {
            @extend .green-btn;

            border-color: $white;
            background-color: transparent;
        }

        form {
            height: 100%;
            display: flex;
            padding: 0 50px;
            text-align: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: $white;
        }

        input {
            width: 100%;
            border: none;
            margin: 8px 0;
            padding: 12px 15px;
            background-color: #eee;
        }

        .sign-in-container {
            left: 0;
            width: 50%;
            z-index: 2;
        }

        .sign-up-container {
            left: 0;
            width: 50%;
            opacity: 0;
            z-index: 1;
        }
        .overlay-container {
            top: 0;
            left: 50%;
            width: 50%;
            height: 100%;
            z-index: 100;
            overflow: hidden;
            position: absolute;
            transition: transform 0.6s ease-in-out;

            .overlay {
                width: 200%;
                left: -100%;
                height: 100%;
                color: $white;
                position: relative;
                background-size: cover;
                background-position: 0 0;
                transform: translateX(0);
                background-repeat: no-repeat;
                transition: transform 0.6s ease-in-out;
                background-image: linear-gradient(255deg, #2bc09b 0%, #256664 100%);

                &-panel {
                    top: 0;
                    width: 50%;
                    height: 100%;
                    display: flex;
                    padding: 0 40px;
                    position: absolute;
                    text-align: center;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    transform: translateX(0);
                    transition: transform 0.6s ease-in-out;
                }

                &-left {
                    transform: translateX(-20%);
                }

                &-right {
                    right: 0;
                    transform: translateX(0);
                }
            }
        }

        @keyframes show {
            0%,
            49.99% {
                opacity: 0;
                z-index: 1;
            }

            50%,
            100% {
                opacity: 1;
                z-index: 5;
            }
        }
    }

    .container.rightPanelActive {
        .sign-up-container {
            opacity: 1;
            z-index: 5;
            animation: show 0.6s;
            transform: translateX(100%);
        }

        .sign-in-container {
            transform: translateX(100%);
        }

        .overlay-container {
            transform: translateX(-100%);
        }

        .overlay {
            transform: translateX(50%);
        }

        .overlay-right {
            transform: translateX(20%);
        }

        .overlay-left {
            transform: translateX(0);
        }
    }
</style>