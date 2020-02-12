import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="Israel National Trail"
          className={`${this.props.article === 'israel' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Israel National Trail</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p align='justify'>
            Israel National Trail - According to National Geographic one of 
            the 20 best "epic hiking trails" in the world. It is also first
            such a path implemented on Google maps as "Google Street View". 
            The trail stretches from Kibbutz Dan, near the Israel-Lebanon 
            border, to Eilat on the Gulf of Aqaba. 400 of about 1100 km go 
            across Israeli deserts - mostly via Negev. More specific 
            information can be found on websites: https://www.israeltrail.net/
            and http://lukaszsupergan.com/
          </p>
          <p>	
            I started my hiking from Eilat on 13 February 2019 and walked 
            over 140 km for 7 days. Pebbly and mountainy character of the
            desert in combination with 17 kg backpack dictates slower pace.
            February/March is a good time to start from the southern direction.
            Average daily temperature is 20°C then. Nights on the desert are
            cool and temperature falls to few degrees. Wintry months - until
            February - bring rain over Negev. Even canyons change over rushing
            streams. On many occasions I saw last of substantial rainy seasons
            this year.
          </p>
          <p>	
            Eilat Mountains section of the trail is supposedly the most
            difficult. First day is often climbing colourful rocks. On occasion
            ladders and handles are installed. I was passed by huge Israeli
            scholastic youth groups. They learn about their country and sense 
            of direction in this way. Most of INT hikers are Israelis, and most
            were walking in opposite direction. I reached Timna Park after few
            days. The area was famous of copper deposits as far back as antiquity.
            The Park is of geological-archaeological nature. It covers a big
            honeycombed areas. The copper-smelting mines are remnants of the
            2nd millennium BC and subsequent tribes. It is believed that King
            Solomon's wealth originated here.
          </p>
          <p>	
            Kibbutzim and small settlements often lie close to the trail. They
            are an oportunity for a meal, supplying stocks of water and food.
            You can lay over there. Sometimes trail angels live in such places.
            They are people who offer accommodation for free. I was carrying with
            me a two-three day stock of water and food. Another option is water
            deposit. In such case the stock is waiting for us in some agreed place.
            The delivering person is for example a taxi driver from the nearest
            settlement.
          </p>
          <p>	
            Camp sites are designated and marked. Usually they do not differ
            from surrounding environment besides leftovers from previous people.
            Camping is popular among Israeli people. They arrive before night,
            setting up their equipment, light fires. It is accompanied by music.
            Negev desert is a home for many animal species. Among them are: Nubian
            ibex, hyrax, fox, wolf, onager, hedgehog, viper, dorcas gazelle, snake,
            scorpion, camel. Some are active at night. Thus it is important to 
            camp only in designated places and not anywhere. During my hiking I met
            only Nubian ibex apart from some birds and insects. I was sleeping in
            a tent. Sometimes Israelis sleep only in sleeping bags.
          </p>
          <p>	
            The desert part I was walking through was marked very well. The INT
            symbol is tricolour vertical strips. From left to right - orange,
            blue, white - this sequence indicates hiking to the North, to the
            snow-capped top of the Mount Hermon. The opposite sequence - white,
            blue, orange - indicates hiking to the desert. Sometimes INT bears
            the same path for other trails. So it is normal to see different
            colours.
          </p>
          <p>	
            The Negev Desert landscapes impressed me a lot. Diversity of rock
            formation and their colours astonished me every day. It is also a
            place, in a certain sense, lively. Israelis are open-minded,
            hospitable and of mixed nationalities. They are curious about
            foreigners. Sometimes, during conversation, it turned out that they
            were connected with Poland. Their roots are of Polish origin. I think
            that like every journey, this journey has engraved a deep mark in me
            by opening myself to other people.
          </p>
          {close}
        </article>

        <article
          id="Izraelski Szlak Narodowy"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Izraelski Szlak Narodowy</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Izraelski Szlak Narodowy - Narodowy szlak pieszy Izraela,
            przez National Geographic uznany za jeden z 20-stu najbardziej
            imponujących szlaków pieszych na świecie. Jest jednocześnie
            pierwszą tego typu ścieżką udostępnioną na mapach Google w opcji
            "Google Street View". Trasa łączy Ejlat na południu kraju z
            kibucem Dan na północy. 400, z około 1100 km., prowadzi przez
            pustynie Izraela - w większości przez Negew. Szczegółowe
            informacje o szlaku są na stronach https://www.israeltrail.net/
            oraz na http://lukaszsupergan.com/
          </p>
          <p>
            Swoją wędrówkę zacząłem w Ejlacie 13 lutego 2019 r., i idąc 7
            dni przeszedłem ponad 140 km. Kamienisty i górzysty teren pustyni,
            w połączeniu z 17-sto kilogramowym plecakiem, narzucają wolniejsze
            tempo marszu. Luty/Marzec to dobry czas na start z kierunku
            południowego. Średnie dzienne temperatury to wówczas ok. 20°C.
            Noce są chłodne, a temperatura spada do kilku stopni. Miesiące
            zimowe - do lutego - przynoszą nad Negew deszcze. Kaniony
            zamieniają się nawet w rwące strumienie. Niejednokrotnie widziałem             pozostałości po obfitej w tym roku porze deszczowej.
          </p>
          <p>
           Góry w rejonie Ejlatu to ponoć najtrudniejszy technicznie etap
           całego szlaku. Pierwszy dzień to często wspinaczka kolorowymi
           skałami. Miejscami zainstalowane są drabinki i uchwyty. Mijałem
           tu duże grupy młodzieży szkolnej. W ten sposób poznają swój kraj,
           jego historię i uczą się wędrówek i orientacji w terenie. Większość
           pokonujących INT to Izraelczycy. I znakomita większość szła w
           przeciwnym kierunku. Po kilku dniach doszedłem do Parku Timna.
           To obszar znany już w starożytności z pokładów miedzi. Park ma
           charakter geologiczno-archeologiczny. Zajmuje duży obszar
           poprzecinany ścieżkami pieszymi. Są tu pozostałości Egipskich
           kopalń z II-go tysiąclecia przed Chrystusem, i plemion późniejszych.            Przypuszcza się, że bogactwa króla Salomona pochodziły stąd.
          </p>
          <p>
            Kibuce i małe osiedla ludzkie leżą często w pobliżu szlaku.
            Są okazją do zjedzenia posiłku, uzupełnienia zapasów wody i
            jedzenia. Można tam też zatrzymać się na nocleg. Bywa, że
            mieszkają tam tzw. aniołowie szlaku. Jest wówczas możliwość
            nocowania i umycia się u takich gospodarzy za darmo.Zapas wody
            i jedzenia na 2-3 dni niosłem ze sobą. Innym rozwiązaniem są 
            depozyty wody. Wtedy zapas czeka na nas w ustalonym miejscu. 
            Osobą dostarczającą jest np. taksówkarz z pobliskiej miejscowości.
          </p>
          <p>
            Miejsca obozowisk są wyznaczone i oznakowane. Zazwyczaj nie
            różnią się od otaczającej przestrzeni oprócz pozostałości po
            ludziach wcześniej nocujących. Biwakowanie jest popularne wśród
            Izraelczyków. Przyjeżdżają pod wieczór , rozstawiają sprzęty,
            rozpalają ogniska. Towarzyszy temu muzyka. Pustynia Negew to dom
            dla wielu gatunków zwierząt. Są wśród nich m.in.: koziorożec
            nubijski, góralek, lis, wilk, onegar, jeż, żmija, gazela dorkas,
            wąż, skorpion, wielbłąd. Część jest aktywna nocą. Dlatego ważne,
            żeby ludzie nocowali w pewnych tylko miejscach, a nie gdziekolwiek.
            W czasie mojego marszu spotkałem tylko koziorożce nubijskie,
            pomijając ptaki i owady. Nocowałem w namiocie. Zdarza się, że
            Izraelczycy nocują tylko w śpiworach. 
          </p>
          <p>
            Odcinek pustynny, którym szedłem był dobrze oznakowany. Symbol
            Izraelskiego Szlaku Narodowego to trzy pionowe pasy. W kolorach
            - od lewej - pomarańczowy, niebieski, biały. Ten układ wskazuje
            wędrówkę na północ, w kierunku ośnieżonego szczytu góry Hermon.
            Układ odwrotny - biały, niebieski, pomarańczowy - oznacza wędrówkę
            w kierunku pustyni. Czasami INT stanowi tę samą ścieżkę dla innych
            szlaków. Normalnym jest pojawienie się nagle innych kolorów.
          </p>
          <p>
            Krajobrazy Negewu zrobiły na mnie duże wrażenie. Różnorodność
            formacji skalnych i ich kolorów zaskakiwała każdego dnia. To także
            miejsce na swój sposób tętniące życiem. Izraelczycy są narodem 
            otwartym, gościnnym, i zróżnicowanym etnicznie. Są ciekawi ludzi,             obcokrajowców. Często, podczas rozmowy, okazywało się, że są
            związani z Polską. Mają tam swoje korzenie. Myślę, że jak każda
            wędrówka tak i ta okazała się podróżą w głąb siebie. Otwarciem na
            drugiego człowieka.
          </p>
          {close}
        </article>

        <article
          id="?"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">?</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>        
          </p>
          {close}
        </article>

        <article
          id="?"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">?</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>            
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
