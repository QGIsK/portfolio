<template>
  <v-app>
    <div class="container mt-5">
      <h2 class="display-2">{{ title }}</h2>

      Op het gebruik van deze website (demiann.dev) zijn onderstaande gebruiksvoorwaarden van
      toepassing. Door gebruik te maken van deze website, wordt u geacht kennis te hebben genomen
      van de gebruiksvoorwaarden en deze te hebben aanvaard.

      <h3>Gebruik van informatie</h3>
      Demian streeft ernaar op deze website altijd juiste en actuele informatie aan te bieden.
      Hoewel deze informatie met de grootst mogelijke zorgvuldigheid is samengesteld,
      staat Demian niet in voor de volledigheid, juistheid of actualiteit van de informatie. De
      juridische informatie op de website is van algemene aard en kan niet worden beschouwd als een
      vervanging van juridisch advies. Aan de informatie kunnen geen rechten worden
      ontleend. Demian aanvaardt geen aansprakelijkheid voor schade die voortvloeit uit het gebruik
      van de informatie of de website en evenmin voor het niet goed functioneren van de website. Op
      basis van het verzenden en ontvangen van informatie via de website of via e-mail kan niet
      zonder meer een relatie tussen Demian en de gebruiker van de website ontstaan.

      <h3>E-mail</h3>
      Demian garandeert niet dat e-mails die aan Demian worden verzonden (tijdig) worden ontvangen
      of verwerkt, omdat tijdige ontvangst van e-mails niet kan worden gegarandeerd. Ook de
      veiligheid van het e-mailverkeer kan niet volledig worden gegarandeerd door de hieraan
      verbonden veiligheidsrisico’s. Door zonder encryptie of wachtwoordbeveiliging per e-mail
      met Demian te corresponderen, accepteert u dit risico.

      <h3>Hyperlinks</h3>
      Deze website kan hyperlinks bevatten naar websites van derden. Demian heeft geen invloed op
      websites van derden en is niet verantwoordelijk voor de beschikbaarheid of inhoud
      daarvan. Demian aanvaardt dan ook geen aansprakelijkheid voor schade die voortvloeit uit het
      gebruik van websites van derden.

      <h3>Intellectuele eigendomsrechten</h3>
      Alle publicaties en uitingen van Demian zijn beschermd door auteursrecht en andere
      intellectuele eigendomsrechten. Behalve voor persoonlijk en niet-commercieel gebruik, mag
      niets uit deze publicaties en uitingen op welke manier dan ook verveelvoudigd, gekopieerd of
      op een andere manier openbaar worden gemaakt, zonder dat Demian daar vooraf schriftelijke
      toestemming voor heeft gegeven.

      <h3>Toeschrijving</h3>
      Deze disclaimer is gemaakt met behulp van Rocket Lawyer (https://www.rocketlawyer.com/nl/nl).
    </div>
    <FloatingHomeBTN />
    <FloatingHomeBTN />
  </v-app>
</template>

<script>
import { VApp } from 'vuetify/lib'
import FloatingHomeBTN from '../../components/FloatingHomeButton'

export default {
  name: 'Disclaimer',
  components: {
    VApp,
    FloatingHomeBTN,
  },
  data() {
    return {
      title: 'Disclaimer',
      data: '',
    }
  },
  created() {
    this.data = ReadMD
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
