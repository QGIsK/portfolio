<template>
    <div>
        <div class="mb-4 content" :class="{'mb-12': project.readingTime < 2}">
            <Navbar class="mb-12" />

            <v-container>
                <NuxtContent :document="project" />
            </v-container>
        </div>
        <div :class="{'bg-dark': project.readingTime > 2}">
            <Footer />
        </div>
    </div>
</template>

<script>
export default {
    layout: 'content',
    async asyncData({$content, params, error}) {
        const slug = params.slug || 'index';
        const project = await $content('projects', slug)
            .fetch()
            .catch(_err => {
                error({statusCode: 404, message: 'Page not found'});
            });

        console.log(project.readingTime > 2);
        return {
            project,
        };
    },
    head() {
        return {
            title: this.project.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.project.description,
                },
                // Open Graph
                {hid: 'og:title', property: 'og:title', content: this.project.title},
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.project.description,
                },
                // Twitter Card
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: this.project.title,
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: this.project.description,
                },
            ],
        };
    },
};
</script>

<style lang="scss">
h1,
h2,
h3,
h4,
h5 {
    margin-top: 1rem;
    margin-bottom: 0.75rem;
}

.hidden {
    overflow: hidden;
}

.content {
    position: relative;
    &::before {
        position: absolute;
        content: '';
        height: 30vh;
        width: 100%;

        background-color: #1b1a1a;
    }
}

@media (min-width: 542px) {
    .content {
        position: relative;
        &::before {
            position: absolute;
            content: '';
            height: 40vh;
            width: 100%;

            background-color: #1b1a1a;
        }
    }
}

@media (min-width: 772px) {
    .content {
        position: relative;
        &::before {
            position: absolute;
            content: '';
            height: 50vh;
            width: 100%;

            background-color: #1b1a1a;
        }
    }
}

@media (min-width: 835px) {
    .content {
        position: relative;
        &::before {
            position: absolute;
            content: '';
            height: 67.5vh;
            width: 100%;

            background-color: #1b1a1a;
        }
    }
}

@media (min-width: 998px) {
    .content {
        position: relative;
        &::before {
            position: absolute;
            content: '';
            height: 75vh;
            width: 100%;

            background-color: #1b1a1a;
        }
    }
}
</style>
