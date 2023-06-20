<template>
    <div class="bg-[#D9E6F7]">
        <HeaderLogin />
        <div class="flex flex-col justify-center h-[80vh]">
            <div class="md:flex md:gap-4 md:justify-center md:items-center">
                <LoginBackGround class="hidden md:block" />
                <LoginFormVue />
            </div>
            <FooterLogin />
        </div>
    </div>
</template>

<script setup>
import HeaderLogin from '../components/HeaderLogin.vue';
import LoginFormVue from '../components/LoginForm.vue';
import FooterLogin from '../components/FooterLogin.vue';
import LoginBackGround from '../components/LoginBackGround.vue';
</script>
