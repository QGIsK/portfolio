<template>
  <div>
    <Html>
      <Head>
        <Title>Demiann Portfolio</Title>
        <Meta name="description" :content="`portfolio website`" />
        <Script
          async
          defer
          data-domain="demiann.dev"
          src="https://analytics.demiann.dev/js/plausible.js"
        />

        <Link
          href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700&display=swap"
          rel="stylesheet"
        />

        <Link
          href="https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css"
          rel="stylesheet"
        />

        <Meta charset="utf-8" />
        <Meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <Meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <Meta name="description" content="Freelance Full-stack Web Developer" />
        <Meta
          name="keywords"
          content="Web, Developer, Web Developer, Portfolio, Hire me, Looking for a web developer?,  Demian, Demiann.xyz, "
        />
      </Head>
    </Html>
    <NuxtPage />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
