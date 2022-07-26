import Cube from "components/global/cube/Cube";


const About = () => {
  return (
    <>
      <section className="about" id='about'>
        <div className="about_container">
          <div className="about_us">

              <div className="heading">

              <Cube/>
              
                <h1 className="f-size-h2 f-weight-bl"
                 data-translation='about_title'>ჩვენ შესახებ</h1>
              </div>

              <div className="paragraph">
                <p className="f-size-p3 f-weight-l"
                  data-translation='about_description'>
                  საფოსტო კომპანია „FSG GROUP” ახორციელებს პერსონალური ამანათების და კომერციული ტვირთების ტრანსპორტირებას ევროპიდან საქართველოში და პირიქით.
                  <br />
                  <br/>
                  ჩვენი მრავალწლიანი გამოცდილება უზრუნველყოფს თქვენი ტვირთის სწრაფ და უსაფრთხო ტრანსპორტირებას. 
                  <br />
                  <br/>
                  მომსახურების გამარტივების მიზნით, FSG ეტაპობრივად ხსნის სხვადასხვა ქვეყანაში ახალ ოფისებს.
                  <br />
                  <br/>
                  კომპანია საკუთარი ფილიალების და საფოსტო აგენტების მეშვეობით სრულად ფარავს საქართველოს ყველა რეგიონს. 
                </p>
              </div>

          </div>

          <div className="picture"></div>

        </div>
      </section>
    </>
  );
};

export default About;
