import React from 'react'
import {
    YMaps,
    Map,
    Placemark


} from "react-yandex-maps";

const Adresses = () => {
    return (
        <div className="pt-[100px]">
            <YMaps>

                <Map style={{ height: '460px', width: '100%' }} defaultState={{ center: [56.058586376744714, 93.12641529045462], zoom: 9 }} >
                    <Placemark

                        geometry={[56.058586376744714, 93.12641529045462]}
                        options={{
                            iconLayout: "default#image",
                            iconImageHref: 'https://regionsnab24.ru/static/media/marker.e16d7c925f035986bf9f83960e722f9d.svg',
                            iconImageSize: [78, 77],
                            iconImageOffset: [-50, -60],
                        }}
                    />

                </Map>
            </YMaps>
        </div>
    )
}

export default Adresses