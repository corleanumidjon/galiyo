import { useEffect, useRef } from "react"
import "./PacificOceanContinue.scss"
export const PacificOceanContinue = () => {
    const inp1 = useRef()
    const inp2 = useRef()
    const inp3 = useRef()
    const inp4 = useRef()
    const inp5 = useRef()
    const inp6 = useRef()
    const inp7 = useRef()
    const inp8 = useRef()
    const inp9 = useRef()


    const hendelSubmit = () => {
        if(inp1.current.value.toLowerCase() == "178,7" || inp1.current.value.toLowerCase() == "178.7") {
            inp1.current.classList.remove("mistake")
            inp1.current.classList.add("right")
        }
        else {
            inp1.current.classList.add("mistake")
            inp1.current.classList.remove("right")
        }

        if(inp2.current.value.toLowerCase() == "29") {
            inp2.current.classList.remove("mistake")
            inp2.current.classList.add("right")
        }
        else {
            inp2.current.classList.add("mistake")
            inp2.current.classList.remove("right")
        }

        if(inp3.current.value.toLowerCase() == "710") {
            inp3.current.classList.remove("mistake")
            inp3.current.classList.add("right")
        }
        else {
            inp3.current.classList.add("mistake")
            inp3.current.classList.remove("right")
        }

        if(inp4.current.value.toLowerCase() == "1752") {
            inp4.current.classList.remove("mistake")
            inp4.current.classList.add("right")
        }
        else {
            inp4.current.classList.add("mistake")
            inp4.current.classList.remove("right")
        }

        if(inp5.current.value.toLowerCase() == "avstarliya") {
            inp5.current.classList.remove("mistake")
            inp5.current.classList.add("right")
        }
        else {
            inp5.current.classList.add("mistake")
            inp5.current.classList.remove("right")
        }

        if(inp6.current.value.toLowerCase() == "antarktida") {
            inp6.current.classList.remove("mistake")
            inp6.current.classList.add("right")
        }
        else {
            inp6.current.classList.add("mistake")
            inp6.current.classList.remove("right")
        }

        if(inp7.current.value.toLowerCase() == "alyaska") {
            inp7.current.classList.remove("mistake")
            inp7.current.classList.add("right")
        }
        else {
            inp7.current.classList.add("mistake")
            inp7.current.classList.remove("right")
        }

        if(inp8.current.value.toLowerCase() == "16000") {
            inp8.current.classList.remove("mistake")
            inp8.current.classList.add("right")
        }
        else {
            inp8.current.classList.add("mistake")
            inp8.current.classList.remove("right")
        }

        if(inp9.current.value.toLowerCase() == "20000") {
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
                            Tinch okeani maydoni <input className="pacific-ocean-continue-input" type="text" ref={inp1} placeholder="Javob" /> mln. km2 bo’lib, Dunyo okeanining 50% va Yer yuzining <input className="pacific-ocean-continue-input" type="text" ref={inp2} placeholder="Javob" /> % maydonini egallagan. Umumiy suv hajmi <input className="pacific-ocean-continue-input" type="text" ref={inp3} placeholder="Javob" /> mln. km3 ga teng. Bu okean kattaligi nuqtai nazaridan Buyuk yoki Ulug’ okean deb ataladi. Buyuk okean degan nomni <input className="pacific-ocean-continue-input" type="text" ref={inp4} placeholder="Javob" /> yilda fransuz geografi J.N.Byuash bergan. Tinch okean g’arbdan Yevrosiyo va <input className="pacific-ocean-continue-input" type="text" ref={inp5} placeholder="Javob" /> materiklari bilan, sharqdan Shimoliy va Janubiy Amerika materiklari bilan o’ralgan, janubda <input className="pacific-ocean-continue-input" type="text" ref={inp6} placeholder="Javob" /> bilan chegaralangan. Shimolda Chukotka va <input className="pacific-ocean-continue-input" type="text" ref={inp7} placeholder="Javob" /> yarim orollarini bir-biridan ajratib turgan Bering bo’g’izi orqali Shimoliy Muz okean bilan tutashib turadi. Okean shimoldan janubga tomon qariyb <input className="pacific-ocean-continue-input" type="text" ref={inp8} placeholder="Javob" /> km va g’arbdan sharqqa <input className="pacific-ocean-continue-input" type="text" ref={inp9} placeholder="Javob" /> km masofaga cho’zilgan. Eng keng joyi ekvator kengligiga to’g’ri keladi, shu sababli u eng issiq okean ham hisoblanadi. 
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
