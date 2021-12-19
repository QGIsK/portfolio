<template>
    <div>
        <v-card>
            <v-snackbar v-model="show" :color="type" right="right" :timeout="timeout" top="top">
                {{ text }}
                <v-btn color text @click="toggleSnackBar">Close</v-btn>
            </v-snackbar>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Snackbar',
    components: {},
    data() {
        return {
            timeout: 3000,
        };
    },
    computed: {
        show: {
            get() {
                return this.$store.getters.snackbarActive;
            },
            set() {
                const payload = {
                    type: '',
                    text: '',
                };
                this.$store.dispatch('toggleSnackBar', payload);
            },
        },
        text: {
            get() {
                return this.$store.getters.snackbarText;
            },
        },
        type: {
            get() {
                return this.$store.getters.snackbarType;
            },
        },
    },
    methods: {
        toggleSnackBar() {
            const payload = {
                type: '',
                text: '',
            };
            this.$store.dispatch('toggleSnackBar', payload);
        },
    },
};
</script>
