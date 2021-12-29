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
                  Fast Service Group საერთაშორისო საკურიერო კომპანიაა, რომელიც ტვირთების ტრანსპორტირებას ევროპაში ახორციელებს.
                  <br />
                  <br/>
                  FSG-ს სერვისი ხელმისაწვდომია მთელი საქართველოს მასშტაბითაც. ჩვენ მომხმარებლებს ვაძლევთ საშუალებას, ოპტიმალურ ვადებში, უსაფრთხოების წესების სრული დაცვით ისარგებლონ ამანათების როგორც საქართველოს ნებისმიერი კუთხიდან გაგზავნის, ისე ევროპის ოფისებიდან გამოგზავნის სერვისით. 
                  <br />
                  <br/>
                  მომსახურების გამარტივების მიზნით, FSG ეტაპობრივად ხსნის სხვადასხვა ქვეყანაში ახალ ოფისებს. 
                  <br />
                  <br/>
                  FSG-ს მიზანია, უზრუნველყოს მომხმარებლისთვის სერვისების ციფრული მიწოდებაც, რაც კომპანიის ოპერატიულობას მეტად უწყობს ხელს. 
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
