<template>
    <div class="flex justify-center items-center mt-4">
        <div class="h-[500px] center w-[320px] bg-white rounded-xl shadow-md">
            <div class="flex flex-col items-center gap-3 mt-6 ">
                <img class="h-7 w-7" src="../assets/imgs/circle-orkut.png" alt="O do Orkut">
                <h1 class="text-[#ED2590] font-semibold text-xl">Acesse o Orkut</h1>
            </div>
            <form>
                <div class="flex flex-col justify-center items-center gap-4 mt-12">
                    <input class="bg-[#EFF3F8] outline-none h-[34px] w-[280px] p-3 rounded-sm shadow-sm" type="email" placeholder="E-mail">
                    <input class="bg-[#EFF3F8] outline-none h-[34px] w-[280px] p-3 rounded-sm shadow-sm"  type="password" placeholder="Senha">
                    <div class="flex items-center gap-2">
                        <input type="checkbox" name="lembrarSenha" >
                        <label for="lembrarSenha" class="text-[#868686]">Lembrar minha senha</label>
                    </div> 
                    <button @click="router.push('/')" class="bg-[#ED2590] w-[280px] h-[38px] rounded-md text-white" type="submit">Entrar na conta</button>
                    <button class="bg-[#EFF3F8] w-[280px] h-[38px] rounded-md text-[#ED2590] font-medium" type="submit">Criar uma conta</button>
                    <a class="text-[#ED2590] underline mt-10" href="#">Esqueci minha senha</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import router from '../router/index.js'
</script>
