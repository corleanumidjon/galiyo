import { useEffect, useRef } from "react";
import "./ArcticOceanContinue.scss"

export const ArcticOceanContinue = () => {
    const inp1 = useRef()
    const inp2 = useRef()
    const inp3 = useRef()
    const inp4 = useRef()
    const inp5 = useRef()



    const hendelSubmit = () => {
        if(inp1.current.value.toLowerCase() == "daryo") {
            inp1.current.classList.remove("mistake")
            inp1.current.classList.add("right")
        }
        else {
            inp1.current.classList.add("mistake")
            inp1.current.classList.remove("right")
        }

        if(inp2.current.value.toLowerCase() == "298") {
            inp2.current.classList.remove("mistake")
            inp2.current.classList.add("right")
        }
        else {
            inp2.current.classList.add("mistake")
            inp2.current.classList.remove("right")
        }

        if(inp3.current.value.toLowerCase() == "30" ) {
            inp3.current.classList.remove("mistake")
            inp3.current.classList.add("right")
        }
        else {
            inp3.current.classList.add("mistake")
            inp3.current.classList.remove("right")
        }

        if(inp4.current.value.toLowerCase() == "292,3" || inp4.current.value.toLowerCase() == "292.3") {
            inp4.current.classList.remove("mistake")
            inp4.current.classList.add("right")
        }
        else {
            inp4.current.classList.add("mistake")
            inp4.current.classList.remove("right")
        }

        if(inp5.current.value.toLowerCase() == "sharqiy grenlandiya") {
            inp5.current.classList.remove("mistake")
            inp5.current.classList.add("right")
        }
        else {
            inp5.current.classList.add("mistake")
            inp5.current.classList.remove("right")
        }

        
    }

    useEffect(() => {
        inp1.current.value = ""
        inp2.current.value = ""
        inp3.current.value = ""
        inp4.current.value = ""
        inp5.current.value = ""
    }, []);
    return <>
        <section>
            <div className="container">
                <form className="arctic-ocean-continue-from" onSubmit={evt => {
                    evt.preventDefault()
                    hendelSubmit()
                }}>
                    <h2 className="arctic-ocean-continue-title">
                        Shimoliy Muz okeani gidrologik rejimi
                    </h2>
                    <div className="arctic-ocean-continue-box">
                        <p className="arctic-ocean-continue-text">
                            Shimoliy Muz okeani gidrologik rejimiga Atlantika va Tinch okeanlarida hamda Shimoliy Amerika va Yevrosiyo materiklari <input className="arctic-ocean-continue-input" type="text" ref={inp1} placeholder="Javob" /> laridan kelib qo’shiladigan suvlar katta ta’sir ko’rsatadi va suv rejimining xarakterli xususiyatlarini belgilaydi. Okeanga har yili Shimoliy Atlantika oqimi orqali <input className="arctic-ocean-continue-input" type="text" ref={inp2} placeholder="Javob" /> ming km3 Atlantika suvi, Bering bo’g’izi orqali <input className="arctic-ocean-continue-input" type="text" ref={inp3} placeholder="Javob" /> ming km3 Tinch okeani suvi va materiklardan 4,5 ming km3 daryo suvi oqib keladi. Okean havzasida to’plangan ortiqcha suvlarning <input className="arctic-ocean-continue-input" type="text" ref={inp4} placeholder="Javob" /> ming km3 Sharqiy Grenlandiya oqimi bilan va 41,7 ming km 3 Kanada-Arktika arxipelagi bo’g’izlari orqali Atlantika okeaniga chiqib ketadi. <input className="arctic-ocean-continue-input" type="text" ref={inp5} placeholder="Javob" /> iliq oqimi yordamida Arktika havzasidan yiliga 8-10 ming km 3 muzlar ham janubga suzib ketadi. Ana shunday gidrologik sharoitlar tufayli Shimoliy Muz okeanining suv balansi tenglashib turadi.
                        </p>
                    </div>

                    <button className="arctic-ocean-continue-btn" type="submit">
                        Yuborish
                    </button>
                </form>
            </div>
        </section>
    </>
}
