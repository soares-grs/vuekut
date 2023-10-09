<template>
    <div class="bg-white flex justify-center items-center mt-4">
        <div class="h-[600px] md:h-[500px] items-center w-[320px] bg-white rounded-xl shadow-md">
            <div class="flex flex-col items-center gap-3 mt-6 ">
                <img class="h-7 w-7" src="../../assets/imgs/circle-orkut.png" alt="O do Orkut">
                <h1 class="text-orkut-pink font-semibold text-xl">Acesse o Orkut</h1>
            </div>
            <form>
                <div class="flex flex-col justify-center items-center gap-4 mt-12">
                    <input class="bg-base-gray text-input-text outline-none h-[34px] w-[280px] p-3 rounded-sm shadow-sm" type="email" placeholder="E-mail">
                    <input class="bg-base-gray text-input-text outline-none h-[34px] w-[280px] p-3 rounded-sm shadow-sm"  type="password" placeholder="Senha">
                    <div class="flex items-center gap-2">
                        <input type="checkbox" name="lembrarSenha" >
                        <label for="lembrarSenha" class="text-soft-gray">Lembrar minha senha</label>
                    </div> 
                    <button @click="router.push('/')" class="text-white bg-orkut-pink hover:bg-orkut-pink-hover w-[280px] h-[38px] rounded-md " type="submit">Entrar na conta</button>
                    <button class="bg-base-gray w-[280px] h-[38px] rounded-md text-orkut-pink font-medium" type="submit">Criar uma conta</button>
                    <a class="text-orkut-pink underline mt-10" href="#">Esqueci minha senha</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import router from '../../router/index.js'
</script>
