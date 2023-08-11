import { useEffect, useRef } from "react"

export const AtlanticContinue = () => {
    const inp1 = useRef()
    const inp2 = useRef()
    const inp3 = useRef()
    const inp4 = useRef()
    const inp5 = useRef()
    const inp6 = useRef()
    const inp7 = useRef()
    const inp8 = useRef()
    const inp9 = useRef()

    const inptRender = (refNumber) => {
        return <input className="pacific-ocean-continue-input" type="text" ref={refNumber} placeholder="Javob" /> 
    }


    const hendelSubmit = () => {
        if(inp1.current.value.toLowerCase() == "2") {
            inp1.current.classList.remove("mistake")
            inp1.current.classList.add("right")
        }
        else {
            inp1.current.classList.add("mistake")
            inp1.current.classList.remove("right")
        }

        if(inp2.current.value.toLowerCase() == "16000") {
            inp2.current.classList.remove("mistake")
            inp2.current.classList.add("right")
        }
        else {
            inp2.current.classList.add("mistake")
            inp2.current.classList.remove("right")
        }

        if(inp3.current.value.toLowerCase() == "13000") {
            inp3.current.classList.remove("mistake")
            inp3.current.classList.add("right")
        }
        else {
            inp3.current.classList.add("mistake")
            inp3.current.classList.remove("right")
        }

        if(inp4.current.value.toLowerCase() == "2830") {
            inp4.current.classList.remove("mistake")
            inp4.current.classList.add("right")
        }
        else {
            inp4.current.classList.add("mistake")
            inp4.current.classList.remove("right")
        }

        if(inp5.current.value.toLowerCase() == "91.5" || inp5.current.value.toLowerCase() == "91,5") {
            inp5.current.classList.remove("mistake")
            inp5.current.classList.add("right")
        }
        else {
            inp5.current.classList.add("mistake")
            inp5.current.classList.remove("right")
        }

        if(inp6.current.value.toLowerCase() == "3597") {
            inp6.current.classList.remove("mistake")
            inp6.current.classList.add("right")
        }
        else {
            inp6.current.classList.add("mistake")
            inp6.current.classList.remove("right")
        }

        if(inp7.current.value.toLowerCase() == "tinch") {
            inp7.current.classList.remove("mistake")
            inp7.current.classList.add("right")
        }
        else {
            inp7.current.classList.add("mistake")
            inp7.current.classList.remove("right")
        }

        if(inp8.current.value.toLowerCase() == "hind") {
            inp8.current.classList.remove("mistake")
            inp8.current.classList.add("right")
        }
        else {
            inp8.current.classList.add("mistake")
            inp8.current.classList.remove("right")
        }

        if(inp9.current.value.toLowerCase() == "norvegiya") {
            inp9.current.classList.remove("mistake")
            inp9.current.classList.add("right")
        }
        else {
            inp9.current.classList.add("mistake")
            inp9.current.classList.remove("right")
        }
    }

    useEffect(() => {
        inp1.current.value = ""
        inp2.current.value = ""
        inp3.current.value = ""
        inp4.current.value = ""
        inp5.current.value = ""
        inp6.current.value = ""
        inp7.current.value = ""
        inp8.current.value = ""
        inp9.current.value = ""
    }, []);
    return <>
        <section>
            <div className="container">
                <form className="pacific-ocean-continue-from" onSubmit={evt => {
                    evt.preventDefault()
                    hendelSubmit()
                }}>
                    <div className="pacific-ocean-continue-box">
                        <p className="pacific-ocean-continue-text">
                            Atlantika okeani barcha okeanlar o’rtasida maydonining kattaligi jihatidan {inptRender(inp1)}  o’rinda turadi. Uning o’ziga xos xususiyatlaridan biri shimoldan janubga tomon {inptRender(inp2)} km masofaga cho’zilganligidir. Okeanning eng keng joyi {inptRender(inp3)} km bo’lib, mo’tadil va subtropik kengliklardagi dengizlarning materiklar ichki qismiga kirib borgan joylariga to’g’ri keladi. Meksika qo’ltig’ining g’arbiy qirg’og’idan Qora dengizning sharqiy qirg’og’igacha bo’lgan oraliqni egallaydi. Eng kambir joyi esa {inptRender(inp4)} km bo’lib, San-Roke burni va Afrika qirg’og’i oralig’ida. Maydoni {inptRender(inp5)} mln. km2 ga teng, o’rtacha huqurligi {inptRender(inp6)}m, suv hajmi 329,7 mln. km3. Atlantika okeanini g’arbda Shimoliy va Janubiy Amerika qirg’oqlari, sharqda Yevropa va Afrika qirg’oqlari o’rab turadi. Janubi-g’arbda {inptRender(inp7)}u okeani bilan va janubi-sharqda {inptRender(inp8)} okeani bilan tutashgan. Shimolda Atlantika okeani Kanada arxipelaglari va {inptRender(inp9)} dengizi orqali Shimoliy Muz okeani bilan bog’langan bo’lsa, janubda Antarktida bilan chegaralanadi.
                        </p>
                    </div>

                    <button className="pacific-ocean-continue-btn" type="submit">
                        Yuborish
                    </button>
                </form>
            </div>
        </section>
    </>
}
