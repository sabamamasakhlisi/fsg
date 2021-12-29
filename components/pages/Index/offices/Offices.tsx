import { useEffect } from "react";


import { mapBox } from "components/util/mapBox";
import Cube from "components/global/cube/Cube";

const Offices = () => {

  useEffect(() => {
    mapBox()
  }, []);

  return (
    <>
      <section className="offices" id='offices'>
        <div className="offices_container">
          <div className="heading">
          <div className='main_header'>
            <Cube />

            <h1 className="f-size-h2 f-weight-bl"
            data-translation='office_title'>ოფისები</h1>
          </div>
          <div className="offices_subtitle">
            <h3 className="offices_subtitle_text" data-translation='office_subQuestion'>რომელ ქვეყნებსა და ქალაქებშია ხელმისაწვდომი კომპანიის სერვისები?</h3>
            <p className="offices_description" data-translation='office_subtitle'>Fast Service Group-ის ოფისები ამჟამად ფუნქციონირებს შემდეგ ქვეყნებში: საქართველო, იტალია, საფრანგეთი, გერმანია, ესპანეთი, ჩეხეთი, პოლონეთი. ცალკეულ ქალაქებში არსებული ოფისების მიღმა, შესაძლებელია დაკავშირება კომპანიის წარმომადგენლებთანაც აღნიშნული ქვეყნების მთელი მასშტაბით.</p>
          </div>
          </div>
          <div className="postagram_map" id="map" />

        </div>
      </section>
    </>
  );
};

export default Offices;
