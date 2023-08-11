import { useEffect, useRef } from "react"

export const AtmosphereContinue = () => {
    const inp1 = useRef()
    const inp2 = useRef()
    const inp3 = useRef()
    const inp4 = useRef()
    const inp5 = useRef()
    const inp6 = useRef()
    const inp7 = useRef()
    const inp8 = useRef()

    const inputRender = (refNumber) => {
        return <input className="pacific-ocean-continue-input" type="text" ref={refNumber} placeholder="Javob" />
    }

    const hendelSubmit = () => {
        if(inp1.current.value.toLowerCase() == "quyosh") {
            inp1.current.classList.remove("mistake")
            inp1.current.classList.add("right")
        }
        else {
            inp1.current.classList.add("mistake")
            inp1.current.classList.remove("right")
        }

        if(inp2.current.value.toLowerCase() == "1,37x1024" || inp2.current.value.toLowerCase() == "1.37x1024") {
            inp2.current.classList.remove("mistake")
            inp2.current.classList.add("right")
        }
        else {
            inp2.current.classList.add("mistake")
            inp2.current.classList.remove("right")
        }

        if(inp3.current.value.toLowerCase() == "quyosh radiatsiyasi") {
            inp3.current.classList.remove("mistake")
            inp3.current.classList.add("right")
        }
        else {
            inp3.current.classList.add("mistake")
            inp3.current.classList.remove("right")
        }

        if(inp4.current.value.toLowerCase() == "97 %" || inp4.current.value.toLowerCase() == "97%" ||inp4.current.value.toLowerCase() == "97") {
            inp4.current.classList.remove("mistake")
            inp4.current.classList.add("right")
        }
        else {
            inp4.current.classList.add("mistake")
            inp4.current.classList.remove("right")
        }

        if(inp5.current.value.toLowerCase() == "quyosh doimiyligi") {
            inp5.current.classList.remove("mistake")
            inp5.current.classList.add("right")
        }
        else {
            inp5.current.classList.add("mistake")
            inp5.current.classList.remove("right")
        }

        if(inp6.current.value.toLowerCase() == "tarqoq") {
            inp6.current.classList.remove("mistake")
            inp6.current.classList.add("right")
        }
        else {
            inp6.current.classList.add("mistake")
            inp6.current.classList.remove("right")
        }

        if(inp7.current.value.toLowerCase() == "to'g'ri") {
            inp7.current.classList.remove("mistake")
            inp7.current.classList.add("right")
        }
        else {
            inp7.current.classList.add("mistake")
            inp7.current.classList.remove("right")
        }

        if(inp8.current.value.toLowerCase() == "yalpi") {
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
                <form className="pacific-ocean-continue-from" onSubmit={evt => {
                    evt.preventDefault()
                    hendelSubmit()
                }}>
                    <div className="pacific-ocean-continue-box">
                        <p className="pacific-ocean-continue-text">
                            Atmosferaning isishi hamda Yer yuzasida issiqlik va yorug’likni taqsimlanishining asosiy manbayi {inputRender(inp1)}  dir. Yer yuzasi Quyoshdan bir yilda {inputRender(inp2)} J energiya oladi. Bunday energiyani hosil qilishi uchun ikki million tonna toshko’mirni yoqishga to’g'ri keladi. J energiya oladi. Bunday energiyani hosil qilishi uchun ikki million tonna toshko’mirni yoqishga to’g'ri keladi. Quyoshning nur sochishi {inputRender(inp3)} deb ataladi. Fazodan keladigan issiqlikning {inputRender(inp4)} ni Quyoshdan keladigan issiqlik tashkil qiladi. Atmosferaning yuqori qismida Quyosh nurlari perpendikulyar tushganda bir minut ichida har bir sm~ maydon 2 kal/sm" (1,98 kal/snr. min.) issiqlik oladi va bu {inputRender(inp5)} deb ataladi. Atmosfera Quyosh nurining bir qismini tarqatib yuborsa, bir qismini yutadi. Quyosh radiatsiyasi atmosferadan o’tayotganda uni bir qismi har tarafga sochiladi va bu {inputRender(inp6)} radiatsiya deyiladi. Quyosh radiatsiyasining bir qismi atmosfera tomonidan yutiladi, bir qismi atmosferadan o‘tib Yer yuzasiga tushadi va uni {inputRender(inp7)} radiatsiya deyiladi. Quyoshning tarqoq va to‘g‘ri radiatsiyasining yig’indisi {inputRender(inp8)} radiatsiyani hosil qiladi. 
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
