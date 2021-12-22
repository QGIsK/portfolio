<template>
    <div>
        <v-fab-transition>
            <NuxtLink to="/">
                <v-btn color="white" dark fixed bottom right fab>
                    <i class="fa fa-home fa-2x"></i>
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

<style lang="scss" scoped>
i.fa-home {
    color: black;
}
</style>
