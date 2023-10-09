<template>
    <HeaderLogin />
    <div class="h-[90vh] sm:h-[80vh] bg-[#D9E6F7]">
        <div class="flex flex-col justify-center h-[80vh]">
            <div class="md:flex md:gap-4 md:justify-center md:items-center">
                <LoginBackGround class="hidden md:block" />
                <LoginFormVue class="sm:h-full"/>
            </div>
        </div>
    </div>
    <FooterLogin />
</template>

<script setup>
import HeaderLogin from '../components/Login/HeaderLogin.vue';
import LoginFormVue from '../components/Login/LoginForm.vue';
import FooterLogin from '../components/Login/FooterLogin.vue';
import LoginBackGround from '../components/Login/LoginBackGround.vue';
</script>
