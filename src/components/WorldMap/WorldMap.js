import "./WorldMap.scss"
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import locationIcon from "../../assets/images/location.svg";
import locationMistakeIcon from "../../assets/images/location-mistake.svg";
import locationSuccsessIcon from "../../assets/images/location-succsess.svg";
import L from 'leaflet';
import { useRef, useState } from "react";

export const WorldMap = ({mobileSize=768, mobileZoom=2.5, mobileCenter=[-35, 80], desktopZoom=2.8, desktopCenter=[-34, 80], data}) => {
    const mapStyles = {
        width: '100%',
        height: '100vh',
    };
    const customIcon = L.icon({
        iconUrl: locationIcon,
        iconSize: [30, 30],
    });
    const customMistakeIcon = L.icon({
        iconUrl: locationMistakeIcon,
        iconSize: [30, 30],
    });
    const customSuccsessIcon = L.icon({
        iconUrl: locationSuccsessIcon,
        iconSize: [30, 30],
    });

    const customMapOptions = {
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true,
        scrollWheelZoom: true,
        zoomControl: true,
    };

    const [locations, setLocations] = useState([...data])

    const mapRef = useRef()



    const hendelSubmit = (e, obj, objIndex) => {
        const updateLocations = [...locations];
        const RadioBoxArr = [...e.target.elements]
        const checkedRadio = RadioBoxArr.find(item => item.checked == true)
        console.log(mapRef.current.querySelector(".leaflet-container").click());
        if(obj.isAnswer == checkedRadio.value) {
            obj.userAnswer = "succsess";
            updateLocations.splice(objIndex, 1, obj);
            setLocations(updateLocations);
        }
        else {
            obj.userAnswer = "mistake";
            updateLocations.splice(objIndex, 1, obj);
            setLocations(updateLocations);
        }

    }
    return (
        <div className="map-wrapper" ref={mapRef} >
            {window.innerWidth <= mobileSize ? (
                <MapContainer  center={mobileCenter} zoom={mobileZoom} style={mapStyles} zoomControl={true} {...customMapOptions} className="leaflet-container">
                    <TileLayer
                        url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png"
                    />
                    {/* <TileLayer
                        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png"
                    /> */}
                    {/* <TileLayer
                        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}.png"
                    /> */}
                    {locations.map((item, i) => (
                        <Marker key={i}  position={item.position} icon={item.userAnswer=="succsess" ? customSuccsessIcon : item.userAnswer=="mistake" ? customMistakeIcon : customIcon}>
                            <Popup  className="popur-bottom" offset={[0, 180]}>
                                <form className="map-form" onSubmit={evt => {
                                    evt.preventDefault()
                                    hendelSubmit(evt, item, i)
                                }}>
                                    {item.questions.map((element, index) => <>
                                        <div className="map-form-box">
                                            <input id={index} className="map-radio visually-hidden" name={item.id} value={element.question} type="radio" required />
                                            <label className="map-label" htmlFor={index}>
                                                <span className="map-label-text">
                                                    {element.question}
                                                </span>
                                            </label>
                                        </div>
                                    </>)}

                                    <button className="map-form-btn"  type="submit">
                                        tekshirish
                                    </button>
                                </form>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            ) : (
                <MapContainer center={desktopCenter} zoom={desktopZoom} style={mapStyles} zoomControl={false} {...customMapOptions} className="leaflet-container">
                    <TileLayer
                        url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png"
                    />
                    {/* <TileLayer
                        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png"
                    /> */}
                    {/* <TileLayer
                        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}.png"
                    /> */}

                    {locations.map((item, i) => (
                        <Marker key={i}  position={item.position} icon={item.userAnswer=="succsess" ? customSuccsessIcon : item.userAnswer=="mistake" ? customMistakeIcon : customIcon}>
                            <Popup  className="popur-bottom" offset={[0, 180]}>
                                <form className="map-form" onSubmit={evt => {
                                    evt.preventDefault()
                                    hendelSubmit(evt, item, i)
                                }}>
                                    {item.questions.map((element, index) => <>
                                        <div className="map-form-box">
                                            <input id={index} className="map-radio visually-hidden" name={item.id} value={element.question} type="radio" required />
                                            <label className="map-label" htmlFor={index}>
                                                <span className="map-label-text">
                                                    {element.question}
                                                </span>
                                            </label>
                                        </div>
                                    </>)}

                                    <button className="map-form-btn"  type="submit">
                                        tekshirish
                                    </button>
                                </form>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            )}
        </div>
    );
}
