import { useEffect, useRef } from "react"

export const AustraliaContinue = () => {
    const inp1 = useRef()
    const inp2 = useRef()
    const inp3 = useRef()
    const inp4 = useRef()
    const inp5 = useRef()
    const inp6 = useRef()
    const inp7 = useRef()
    const inp8 = useRef()

    const inputRender = (refNumber) => {
        return <input className="arctic-ocean-continue-input" type="text" ref={refNumber} placeholder="Javob" />
    }


    const hendelSubmit = () => {
        if(inp1.current.value.toLowerCase() == "1.600" || inp1.current.value.toLowerCase() == "1,600") {
            inp1.current.classList.remove("mistake")
            inp1.current.classList.add("right")
        }
        else {
            inp1.current.classList.add("mistake")
            inp1.current.classList.remove("right")
        }

        if(inp2.current.value.toLowerCase() == "350") {
            inp2.current.classList.remove("mistake")
            inp2.current.classList.add("right")
        }
        else {
            inp2.current.classList.add("mistake")
            inp2.current.classList.remove("right")
        }

        if(inp3.current.value.toLowerCase() == "60" ) {
            inp3.current.classList.remove("mistake")
            inp3.current.classList.add("right")
        }
        else {
            inp3.current.classList.add("mistake")
            inp3.current.classList.remove("right")
        }

        if(inp4.current.value.toLowerCase() == "10") {
            inp4.current.classList.remove("mistake")
            inp4.current.classList.add("right")
        }
        else {
            inp4.current.classList.add("mistake")
            inp4.current.classList.remove("right")
        }

        if(inp5.current.value.toLowerCase() == "murrey") {
            inp5.current.classList.remove("mistake")
            inp5.current.classList.add("right")
        }
        else {
            inp5.current.classList.add("mistake")
            inp5.current.classList.remove("right")
        }

        if(inp6.current.value.toLowerCase() == "2830") {
            inp6.current.classList.remove("mistake")
            inp6.current.classList.add("right")
        }
        else {
            inp6.current.classList.add("mistake")
            inp6.current.classList.remove("right")
        }

        if(inp7.current.value.toLowerCase() == "1072") {
            inp7.current.classList.remove("mistake")
            inp7.current.classList.add("right")
        }
        else {
            inp7.current.classList.add("mistake")
            inp7.current.classList.remove("right")
        }

        if(inp8.current.value.toLowerCase() == "1690") {
            inp8.current.classList.remove("mistake")
            inp8.current.classList.add("right")
        }
        else {
            inp8.current.classList.add("mistake")
            inp8.current.classList.remove("right")
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
    }, []);
    return <>
        <section>
            <div className="container">
                <form className="arctic-ocean-continue-from" onSubmit={evt => {
                    evt.preventDefault()
                    hendelSubmit()
                }}>
                    <div className="arctic-ocean-continue-box">
                        <p className="arctic-ocean-continue-text">
                            Avstraliya materigi va unga yaqin orollardagi gidrografik oqim xususiyatlari turlicha bo’lib, Avstraliya, Tasmaniya, Yangi Gvineya, Yangi Zelandiya daryolarining oqim hajmi {inputRender(inp1)} km 3ga, oqim qalinligi esa 184 mm ga teng bo’lib, Afrika materigidagi oqim qalinligidan salgina ko’p. Birgina Avstraliyaning oqim hajmi atigi {inputRender(inp2)} km 3, oqim qalinligi 46 mm, ya’ni boshqa materiklardagidan bir necha barobar kam. Bunga sabab materikning katta qismiga yog’in kam tushadi, materikda baland tog’lar va doimiy muzliklar kam rivojlangan. Avstraliyaning {inputRender(inp3)}  % maydoni ichki oqim havzasiga qaraydi. Hududining taxminan {inputRender(inp4)}  % maydoni ichki oqim havzasiga qaraydi. Hududining taxminan {inputRender(inp5)}  ning uzunligi 2570 km, Darlingniki {inputRender(inp6)}  km, ikkala daryo havzasining maydoni {inputRender(inp7)}  ming km2, Murreyning Darling quyilganidan quyiroqdagi o’rtacha suv sarfi 270 m 3/sek. Murreyning ikkinchi yirik irmog’i Mirrambijining uzunligi {inputRender(inp8)} km ni tashkil qiladi.
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
