import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../Pages/home";
import Hiking from "../../Pages/hiking";
import Active from "../../Pages/active";
import Tours from "../../Pages/tours";
import Contacts from "../../Pages/contacts";
import Blog from "../../Pages/blog";
import Employee from "../../Pages/employee";
import Recomendations from "../../Pages/recomendations";

// СТРАНИЦЫ ПОХОДОВ
import HutsulMarmarosi from "../../Pages/hiking/karpati/hutsul-marmarosi";
import BorzhavaSynevir from "../../Pages/hiking/karpati/borzhava-synevir";
import GoldenAutumn from "../../Pages/hiking/karpati/golden-autumn";
import HikeBorzhava from "../../Pages/hiking/karpati/hike-borzhava";
import MarmarosMontenegrin from "../../Pages/hiking/karpati/marmaros-montenegrin";
import MontenegrinRidge from "../../Pages/hiking/karpati/montenegrin-ridge";
import SvidovetsGorgan from "../../Pages/hiking/karpati/svidovets-gorgan";

import ActiveWeekend from "../../Pages/hiking/ZP/active-weekend";
import GraniteRocks from "../../Pages/hiking/ZP/granite-rocks";
import GreatLea from "../../Pages/hiking/ZP/great-lea";
import Khortitsya from "../../Pages/hiking/ZP/khortitsya";
import Rozumovka from "../../Pages/hiking/ZP/rozumovka";
import Scythe from "../../Pages/hiking/ZP/scythe";

// СТРАНИЦЫ ТУРОВ
import CampCarpathian from "../../Pages/tours/ua-tours/camp-carpathian";
import GoingToTranscarpathia from "../../Pages/tours/ua-tours/going-to-transcarpathia";
import RoundTheUA from "../../Pages/tours/ua-tours/round-the-ua";

// СТРАНИЦА СЕРТИФИКАТА
import CertificatePage from "../../Pages/certificate-page/certificate-page";
// СТРАНИЦА ЗАЯВКИ
import RequestFormPage from "../../Pages/request-form-page/request-form-page";

// СТРАНИЦЫ АКТИВНОГО ОТДЫХА
import NewYear from "../../Pages/active/winter/new-year";
import SkyTour from "../../Pages/active/winter/sky-tour";

import ActiveScythe from "../../Pages/active/summer/active-scythe";
import Island from "../../Pages/active/summer/island";
import Walking from "../../Pages/active/summer/walking";

// СТАНИЦЫ БЛОГА
import ReportRidge from "../../Pages/blog/report-ridge";
import ReportLakes from "../../Pages/blog/report-lakes";
import ReportHeroes from "../../Pages/blog/report-heroes";
import ReportCarpathian from "../../Pages/blog/report-carpathian";
import ReportBorzhava from "../../Pages/blog/report-borzhava";
import Report10Days from "../../Pages/blog/report-10days";

class MyRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hiking" component={Hiking} />
        <Route exact path="/active" component={Active} />
        <Route exact path="/tours" component={Tours} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/employee" component={Employee} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/recomendations" component={Recomendations} />

        <Route exact path="/hiking/hutsul-marmarosi" component={HutsulMarmarosi} />
        <Route exact path="/borzhava-synevir" component={BorzhavaSynevir} />
        <Route exact path="/golden-autumn" component={GoldenAutumn} />
        <Route exact path="/hike-borzhava" component={HikeBorzhava} />
        <Route
          exact
          path="/marmaros-montenegrin"
          component={MarmarosMontenegrin}
        />
        <Route exact path="/montenegrin-ridge" component={MontenegrinRidge} />
        <Route exact path="/svidovets-gorgan" component={SvidovetsGorgan} />

        <Route exact path="/active-weekend" component={ActiveWeekend} />
        <Route exact path="/granite-rocks" component={GraniteRocks} />
        <Route exact path="/great-lea" component={GreatLea} />
        <Route exact path="/khortitsya" component={Khortitsya} />
        <Route exact path="/rozumovka" component={Rozumovka} />
        <Route exact path="/scythe" component={Scythe} />

        <Route exact path="/camp-carpathian" component={CampCarpathian} />
        <Route
          exact
          path="/going-to-transcarpathia"
          component={GoingToTranscarpathia}
        />
        <Route exact path="/round-the-ua" component={RoundTheUA} />

        <Route exact path="/certificate-page" component={CertificatePage} />
        <Route exact path="/request" component={RequestFormPage} />

        <Route exact path="/new-year" component={NewYear} />
        <Route exact path="/sky-tour" component={SkyTour} />
        <Route exact path="/active-scythe" component={ActiveScythe} />
        <Route exact path="/island" component={Island} />
        <Route exact path="/walking" component={Walking} />

        <Route exact path="/report-ridge" component={ReportRidge} />
        <Route exact path="/report-lakes" component={ReportLakes} />
        <Route exact path="/report-heroes" component={ReportHeroes} />
        <Route exact path="/report-carpathian" component={ReportCarpathian} />
        <Route exact path="/report-borzhava" component={ReportBorzhava} />
        <Route exact path="/report-10days" component={Report10Days} />
      </Switch>
    );
  }
}

export default MyRoute;
