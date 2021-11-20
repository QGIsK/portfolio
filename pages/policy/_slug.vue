<template>
  <div class="container mt-5">
    <h1 class="display-1">{{ page.title }}</h1>

    <nuxt-content :document="page" />

    <h4>
      Created: {{ new Date(page.createdAt).toLocaleString() }}
      <br />
      Updated: {{ new Date(page.updatedAt).toLocaleString() }}
    </h4>
    <FloatingHomeButton />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return {
      page,
    }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.page.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.page.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.page.description,
        },
      ],
    }
  },
}
</script>

<style>
h2 {
  margin-top: 1rem;
  margin-bottom: 2.5rem;
}

h3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

h4 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
</style>
