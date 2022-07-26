import { Select, Slider, Input, Spacer } from "@geist-ui/react";
import { useState, useEffect } from "react";

import { fourCountries, defaultPrices,citiesInEng,twoCities,twoNhalfCities,threeCities,fourNhalfCities, zones, zonesEng, zonesRus,citiesInRus,citiesInGeo, everyZone, everyZoneEng, everyZoneRus, fromLocation } from "./feature.data";
import { useCookies } from 'react-cookie';





const GetPackage = ({ toggle }: { toggle: boolean }) => {
    const [cost, setCost] = useState<number>(0)
    const [kilogram, setKilogram] = useState<number>(0)
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [cities,setCities] = useState([]);
    const [city,setCity] = useState("");
    const [zoneIndex, setZoneIndex] = useState<number>(0)

    const [cookies, setCookie, removeCookie] = useCookies(['lang']);
    let fromLang;
    let citiesArr;
    let currentLangZone;
    let everyEveryZone = []
    switch (cookies.lang) {
        case 'eng':
            fromLang = fromLocation[1]
            currentLangZone = zonesEng
            everyEveryZone = everyZoneEng
            citiesArr= citiesInEng;
            break;
        case 'rus':
            fromLang = fromLocation[2]
            currentLangZone = zonesRus
            everyEveryZone = everyZoneRus
            citiesArr= citiesInRus;
            break;

        default:
            fromLang = fromLocation[0]
            currentLangZone = zones
            everyEveryZone = everyZone
            citiesArr= citiesInGeo;
            break;
    }

    
    useEffect(() => {
        if(to && from) {
            if(fourCountries.includes(to)){
                setZoneIndex(defaultPrices[3])
            }
            if(city && !fourCountries.includes(to)) {
                if(twoCities.includes(city)){
                    setZoneIndex(defaultPrices[0])
                } else if(twoNhalfCities.includes(city)){
                    setZoneIndex(defaultPrices[1])
                } else if(threeCities.includes(city)){
                    setZoneIndex(defaultPrices[2])
                } else if(fourNhalfCities.includes(city)){
                    setZoneIndex(defaultPrices[4])
                }
            }
            if(to === 'Germany' || to === 'გერმანია' || to === 'Германия') {
                setZoneIndex(5);
            }
            if(to === 'Germany' || to === 'გერმანია' || to === 'Германия') {
                setZoneIndex(6);
            }
            
        }
        calculate()
    }, [to, from, city])

    useEffect(() => {
        setCities([])
        switch(to) {
            case 'იტალია':
                setCities(citiesArr[1]);
                break;
            case 'ესპანეთი':
                setCities(citiesArr[0]);
                break;
            case 'საფრანგეთი':
                setCities(citiesArr[2]);
                break;
            case 'Италия' : 
                setCities(citiesArr[1]);
                break;
            case 'Франция' : 
                setCities(citiesArr[2]);
                break;
            case 'Испания' : 
                setCities(citiesArr[0]);
                break;
            case 'Italy' : 
                setCities(citiesArr[1]);
                break;
            case 'France' : 
                setCities(citiesArr[2]);
                break;
            case 'Spain' : 
                setCities(citiesArr[0]);
                break;
            default:
                setCities([])
                break;
        }
    }, [to,from,cookies.lang])

    useEffect(() => {
        calculate()
    }, [kilogram,zoneIndex])

    useEffect(()=> {
        setKilogram(0)
        setCost(0)
    },[cookies.lang])


    const sliderHandler = val => {
        setKilogram(val)
    }


    const calculate = () => {
        if (to.length > 0 && from.length > 0 && kilogram > 0) {
            if(zoneIndex === 5){
                if(kilogram >= 1 && kilogram <= 5) {
                    setCost(25)
                } else if (kilogram > 5) {
                    setCost(25 + (5 * (Math.round(kilogram)-5)));
                }
            } else if (zoneIndex === 6) {
                if(kilogram >= 1 && kilogram <= 10) {
                    setCost(60)
                } else if (kilogram > 10) {
                    setCost(60 + (6 * (Math.round(kilogram)-10)));
                }
            }
            else {
            let price = kilogram * zoneIndex;
            setCost(Math.round(price))
            }
        } else if (kilogram === 0) setCost(0)
    }

    return (
        <>
            <div className="get-package">
                <div className={toggle ? "get-package_container display_package_block" : "display_package_none get-package_container"}>
                    <div className="input_from">
                        <p
                            className='f-size-p4 f-weight-r'
                            data-translation='calculator_where'>სად</p>
                        <Spacer y={0.5} />
                        <Select
                            className="get-package_inputs"
                            placeholder={from}
                            value={from}
                            onChange={(value) => {
                                setFrom(`${value}`)
                                setTo(`${currentLangZone[0]}`)
                            }}>
                                <Select.Option value={fromLang}>
                                    <p className="f-size-p5 f-weight-r">{fromLang}</p>
                                </Select.Option>
                        </Select>
                    </div>


                    <div className="input_country">
                        <p
                            className='f-size-p4 f-weight-r'
                            data-translation='calculator_from'>საიდან</p>
                        <Spacer y={0.5} />
                        <Select
                            className="get-package_inputs"
                            placeholder={to}
                            value={to}
                            onChange={(value) => {
                                setTo(`${value}`)
                            }}>
                            {everyEveryZone.map((zone, i) => (
                                <Select.Option key={i} value={zone}>
                                    <p className="f-size-p5 f-weight-l">{zone}</p>
                                </Select.Option>
                            ))}
                        </Select>
                    </div>
                    <div className="input_city">
                        <p
                            className='f-size-p4 f-weight-r'
                            data-translation='calculator_city'>ქალაქი</p>
                        <Spacer y={0.5} />
                        <Select
                            className="get-package_inputs"
                            placeholder={city}
                            value={city}
                            disabled={cities?.length === 0}
                            onChange={(value)=> {setCity(`${value}`)}}>
                            {cities?.map((city, i) => (
                                <Select.Option key={i} value={city.trim()}>
                                    <p className="f-size-p5 f-weight-l">{city}</p>
                                </Select.Option>
                            ))}
                        </Select>
                    </div>


                    <div className="input_kilograms">
                        <p className='f-size-p4 f-weight-r' style={{ marginBottom: '.5rem' }}>{kilogram}kg</p>
                        <Spacer y={0.5} />
                        <Slider
                            step={.1}
                            style={{ width: '100%' }}
                            max={30}
                            value={kilogram}
                            onChange={sliderHandler} />
                    </div>


                    <div className="input_cost">
                        <p
                            className='f-size-p4 f-weight-r'
                            style={{ marginBottom: '.5rem' }}
                            data-translation='calculator_cost'>ხარჯი</p>
                        <Spacer y={0.6} />
                        <Input
                            value={`${cost}₾`}
                            disabled
                            width="100%"
                            className="f-size-p4 f-weight-r input"
                            status="secondary"
                            size="large"
                            placeholder="ფასი"
                        />
                    </div>

                    {/* 
                    <Button size="small" width="100%" color="yellow" className="package_search" onClick={() => handleSend()}>
                        <p className="f-size-p2 f-weight-bo">ძებნა</p>
                    </Button> */}

                </div>

            </div>

        </>
    );
};

export default GetPackage;
