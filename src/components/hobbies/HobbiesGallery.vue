<template>
  <div>
    <div 
      v-for="(hobby, index) in hobbies" 
      :key="index" 
      class="hobby-section"
      @click="toggleSection(index)"
    >
      <h2>{{ hobby.title }}</h2>
      <p class="hobby-description">{{ hobby.description }}</p>
      <transition name="fade">
        <div v-show="hobby.visible" class="hobby-content">
          <div v-for="(item, i) in hobby.items" :key="i" class="category">
            <h3>{{ item.category }}</h3>

            <!-- Afficher la carte si elle existe -->
            <div v-if="item.map" class="destination-map">
              <iframe :src="item.map" width="100%" height="480" style="border: none; border-radius: 10px;"></iframe>
            </div>

            <!-- Afficher les exemples si disponibles -->
            <div v-if="item.examples" class="examples-container">
              <HobbyCard v-for="(example, j) in item.examples" :key="j" :example="example" />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>


<script>
import HobbyCard from './HobbyCard.vue';

export default {
  components: {
    HobbyCard
  },
  data() {
  return {
    hobbies: [
      {
        title: "🎬 Films et séries",
        description: "Mon père est un cinéphile et a su me transmettre sa passion tout au long des années en me montrant ses films fétiches et en m‘emmenant régulièrement au cinéma.",
        visible: false,
        items: [
          {
            category: "Comédies",
              examples: [
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773999/le-prenom_hrfoe1.png", name: "Le Prénom" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774008/shrek_iynpcl.png", name: "Shrek" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773996/bridget-jones_sdahp1.png", name: "Bridget Jones" }
              ]
            },
            {
              category: "Romances",
              examples: [
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773999/lalaland_dowdgd.png", name: "La La Land" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774001/noublie-jamais_yedjlw.png", name: "N’oublie jamais" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773996/10-bonnes-raisons_b1fjr5.png", name: "10 bonnes raisons de te larguer" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773998/500-jours_bpypif.png", name: "500 jours ensemble" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774001/orgueil-prejuges_pihdyg.png", name: "Orgueil et préjugés" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773999/la-boum_ehstwy.png", name: "La Boum" }
              ]
            },
            {
              category: "Drames/Thrillers",
              examples: [
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773998/fight-club_s0pj0z.png", name: "Fight Club" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774008/silence-agneaux_kvq21f.png", name: "Le Silence des Agneaux" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774007/poetes-disparus_df0ok8.png", name: "Le Cercle des Poètes Disparus" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773998/benjamin-button_drtq3j.png", name: "L’Étrange Histoire de Benjamin Button" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774000/ligne-verte_puws9q.png", name: "La Ligne Verte" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774008/whiplash_u5znqn.png", name: "Whiplash" }
              ]
            },
            {
              category: "Séries",
              examples: [
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774008/the-office_c2e3hc.png", name: "The Office" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773999/greys-anatomy_xpi7ri.png", name: "Grey’s Anatomy" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774007/prison-break_iqaneb.png", name: "Prison Break" }
              ]
            },
            {
              category: "Animes",
              examples: [
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773997/attaque-titans_mrsdju.png", name: "L’Attaque des Titans" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774001/naruto_nvdu1w.png", name: "Naruto" },
                { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774013/your-lie-in-april_duakfv.png", name: "Your Lie in April" }
            ]
          }
        ]
      },
      {
        title: "📚 Lecture",
        visible: false,
        description: "Depuis très jeune j’aime me plonger dans de la lecture. Ma mère avait souvent du mal à capter mon attention lorsque j’étais plongée dans un bon livre. Très vite, j'ai eu un abonnement à la médiathèque puis j’ai commencé au fil des anniversaires et des Noëls à me faire une belle bibliothèque de plus de 100 livres. Mon style de lecture à évolué avec les années mais mon amour pour les livres n’a pas bougé !", 

        items: [
          {
            category: "BD",
            examples: [
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908698/Capture_d_%C3%A9cran_2025-03-14_002209_jeu6ex.png", name: "Astérix et Obélix" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908726/Capture_d_%C3%A9cran_2025-03-14_002245_omgpfr.png", name: "Titeuf" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908730/Capture_d_%C3%A9cran_2025-03-14_002314_o6rxij.png", name: "Seul" }
            ]
          },
          {
            category: "Revues",
            examples: [
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908731/Capture_d_%C3%A9cran_2025-03-14_002422_iipgdr.png", name: "Les petites Sorcières" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908732/Capture_d_%C3%A9cran_2025-03-14_002512_wcap3y.png", name: "Julie" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741909031/Capture_d_%C3%A9cran_2025-03-14_003640_anvhju.png", name: "Sciences et Vie" }
            ]
          },
          {
            category: "Romans",
            examples: [
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908731/Capture_d_%C3%A9cran_2025-03-14_002533_xrjrej.png", name: "Percy Jackson" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908696/Capture_d_%C3%A9cran_2025-03-14_002553_jwabgl.png", name: "Divergente" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908696/Capture_d_%C3%A9cran_2025-03-14_002619_gkbqkb.png", name: "Hunger Games" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908696/Capture_d_%C3%A9cran_2025-03-14_002639_zkxkk7.png", name: "Twillight" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908696/Capture_d_%C3%A9cran_2025-03-14_002723_jegawc.png", name: "La chronique des Bridgerton" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908697/Capture_d_%C3%A9cran_2025-03-14_002739_ti67ep.png", name: "Inheritance Game" }
            ]
          },
          {
            category: "Mes auteurs favoris",
            examples: [
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908696/Capture_d_%C3%A9cran_2025-03-14_002803_vjeo1p.png", name: "David Foenkinos" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908697/Capture_d_%C3%A9cran_2025-03-14_002825_hirjzy.png", name: "Agnès Martin-Lugand" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741909175/Capture_d_%C3%A9cran_2025-03-14_003930_v947u6.png", name: "Guillaume Musso" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908697/Capture_d_%C3%A9cran_2025-03-14_002841_ltyk5s.png", name: "John Green" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908697/Capture_d_%C3%A9cran_2025-03-14_002954_m0gdde.png", name: "Rick Riordan" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741908697/Capture_d_%C3%A9cran_2025-03-14_003012_qr1qmh.png", name: "Holly black" }
            ]
          }
        ]
      },
      {
        title: "🎵 Musique",
        description: " La musique rythme ma vie, j’ai toujours une musique qui traine dans ma tête. Je vous met au défi de me battre au BlindTest ! ",
        visible: false,
        items: [
          {
            category: "Groupes",
            examples: [
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910184/Capture_d_%C3%A9cran_2025-03-14_004712_mmtrgr.png", name: "The Strokes" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910184/Capture_d_%C3%A9cran_2025-03-14_004728_ripyyz.png", name: "Radiohead" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910184/Capture_d_%C3%A9cran_2025-03-14_004754_gbs5as.png", name: "Muse" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910184/Capture_d_%C3%A9cran_2025-03-14_004806_xs32cg.png", name: "Gorillaz" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910184/Capture_d_%C3%A9cran_2025-03-14_004818_h6fkky.png", name: "Queen" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910184/Capture_d_%C3%A9cran_2025-03-14_004837_rgzqcm.png", name: "The Cure" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910184/Capture_d_%C3%A9cran_2025-03-14_004857_kgq3ty.png", name: "The Marias" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910185/Capture_d_%C3%A9cran_2025-03-14_004925_jv33sn.png", name: "ABBA" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910185/Capture_d_%C3%A9cran_2025-03-14_004941_pzc4sr.png", name: "Led Zepplin" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910185/Capture_d_%C3%A9cran_2025-03-14_005000_xuexoq.png", name: "Mother Mother" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910185/Capture_d_%C3%A9cran_2025-03-14_005018_dmkoj4.png", name: "Scorpions" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910185/Capture_d_%C3%A9cran_2025-03-14_005033_sn6ocx.png", name: "Nirvana" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910185/Capture_d_%C3%A9cran_2025-03-14_005123_wnxq3k.png", name: "Cigarette After Sex" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910186/Capture_d_%C3%A9cran_2025-03-14_005140_ggcw9n.png", name: "FleetWood Mac" }
            ]
          },
          {
            category: "Artistes favoris",
            examples: [
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910186/Capture_d_%C3%A9cran_2025-03-14_005156_k6cphw.png", name: "Billie Eilish" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910186/Capture_d_%C3%A9cran_2025-03-14_005213_sqkvg5.png", name: "Amy Winehouse" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910186/Capture_d_%C3%A9cran_2025-03-14_005233_oh3bmv.png", name: "Lana Del Rey" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910186/Capture_d_%C3%A9cran_2025-03-14_005253_pmpiyu.png", name: "Pomme" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910186/Capture_d_%C3%A9cran_2025-03-14_005311_tuixce.png", name: "Prince" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910186/Capture_d_%C3%A9cran_2025-03-14_005333_qgdzcq.png", name: "Chappell Roan" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910186/Capture_d_%C3%A9cran_2025-03-14_005348_esqrqx.png", name: "Mac Miller" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910187/Capture_d_%C3%A9cran_2025-03-14_005407_nnjsay.png", name: "Bruno Mars" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910187/Capture_d_%C3%A9cran_2025-03-14_005425_ynj8ez.png", name: "Britney Spears" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910183/Capture_d_%C3%A9cran_2025-03-14_005448_kwovie.png", name: "Childish Gambino" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910183/Capture_d_%C3%A9cran_2025-03-14_005502_scegln.png", name: "Nelly Furtado" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910183/Capture_d_%C3%A9cran_2025-03-14_005521_yjyfyb.png", name: "Doechii" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910183/Capture_d_%C3%A9cran_2025-03-14_005540_ifgkpc.png", name: "Mitski" },
              { img: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741910183/Capture_d_%C3%A9cran_2025-03-14_005604_fmj0fc.png", name: "Rihanna" }
            ]
          }
        ]
      },
      {
        title: "✈️ Voyages",
        description: "Voyager permet de travailler mes langues, de faire de belles rencontres et en apprendre plus sur les autres cultures. J'aimerai découvrir plein de pays dans ma vie !",
        visible: false,
        items: [
          {
            category: "Destinations",
            map: "https://www.google.com/maps/d/u/0/embed?mid=12l-mf2J83O0tx23jjbwbQgw4kk5CIeg&ehbc=2E312F"
          }
        ]
      }
    ]
  };
},
  methods: {
    toggleSection(index) {
      this.hobbies[index].visible = !this.hobbies[index].visible;
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped>
.hobby-description {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
}
.hobby-section {
  width: 90%;
  margin: 15px auto;
  padding: 15px;
  background: #f5f0e1;
  color: #ba5a31;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  border-radius: 10px;
  border: 2px solid #e59f71;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.hobby-section:hover {
  background: #e59f71;
  color: white;
}
.hobby-content {
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  margin-top: 5px;
  max-height: 2000px;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
}
.category h3 {
  color: #70a9a1;
  margin-top: 10px;
}

.examples-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
