<template>
    <div>
        <v-fab-transition>
            <NuxtLink to="/">
                <v-btn color="white" dark fixed bottom right fab>
                    <i class="fa fa-home fa-2x" style="color: black"></i>
                </v-btn>
            </NuxtLink>
        </v-fab-transition>
    </div>
</template>

<script>
export default {
    name: 'FloatingHomeBTN',
};
</script>
