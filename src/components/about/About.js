import React from "react";
import './about.css'
const About = () => {
  return (
    <div className="container-fluid">
      <div className="about">
        <div className="about-site">
          <h3 className="about-title">Ümumi Məlumat</h3>
          <p className="about-text">
            Bir çox ölkələrdə inkişaf və yaşayış strandartları arasındakı fərq
            kəskin olduqda kəndlərdən şəhərlərə axınlar başlayır. Bakı və
            Abşeron bu kateqoriyaya aid olan şəhərlər sırasındadır. İnsanların
            təməl ehtiyyacı olan gündəlik təbii qida şəhər əhalisinin tələbatını
            necə ödəyir? Təbii məhsul ehtiyyacını insanlar necə qarşılayırlar?
            Bəziləri doğma bölgələrindən bəziləri də güvəndiyi bir neçə şəxsdən
            məhsul alaraq təbii məhsula olan tələbatını ödəməyə çalışır.Bunu
            online şəkildə reallaşdırmaq həm alıcı həm də fermer üçün daha
            əlverişli olar
          </p>
          <h3>Xidmətlərimiz</h3>
          <ul>
            <li>
              Müştəri rəyləri və təsərüfat sahəsini ön plana çəkərək inam
              doğuran sistemlə kənddən şəhərə məhsul çatdırılması.
            </li>
            <li>
              
              Alıci sayta daxil olaraq fermerlər və onların heyvanat sahələrinin
              şəkillərini görür.
            </li>
            <li>
              Satıcı Fermadan ayrılmadan birbaşa topdan satışını elə qapıda
              həyata keçirir.
            </li>
          </ul>
        </div>
        <div className="about-img">
            {/* <div style={{backgroundImage:`url(about/3.jpg)`}}></div> */}
            
            <img src="about/3.jpg" alt=""/>
        </div>

      </div>
    </div>
  );
};

export default About;
