import { useEffect, useState } from "react"
import QRCode from 'react-qr-code';
import axios from "axios"
const qrcode = () => {

    const [value, setValue] = useState<any>();
    const [back, setBack] = useState<any>('#FFFFFF');
    const [fore, setFore] = useState<any>('#000000');
    const [size, setSize] = useState<any>(256);
    const [title,setTitle] = useState <any>()

    const fetchGaradge = async()=>{
        await axios.get(`http://localhost:8000/garadge/all-garadge`).then((res) => {
            // const {city, contact, garadgeName, location} = res.data.allGaradge[0]
            const newData = JSON.stringify(res.data.allGaradge[0])
            setValue(`http://192.168.1.96:3000/register/?hhhh=ggg`)  
            setTitle(res.data.allGaradge[0].garadgeName) 

            // setValue(`Garadge Name:${res.data.allGaradge[0].garadgeName}, Location:${res.data.allGaradge[0].location}, city:${res.data.allGaradge[0].city}, Contact:${res.data.allGaradge[0].contact.toString()} `)

        }).catch((error) => {
            console.log(error.response.data);
        });
    }

    useEffect(()=>{
        fetchGaradge()
    },[])
 
    return (
        <div className="App">
            <center>
                <br />
                <br />
                <input className="border" type="text" onChange={(e: any) => setValue(e.target.value)}
                    placeholder="Value of Qr-code"
                />
                <br />
                <br />
                <input
                    type="text" className="border"
                    onChange={(e) => setBack(e.target.value)}
                    placeholder="Background color"
                />
                <br />
                <br />
                <input
                    type="text" className="border"
                    onChange={(e) => setFore(e.target.value)}
                    placeholder="Foreground color"
                />
                <br />
                <br />
                <input
                    type="number" className="border"
                    onChange={(e: any) => setSize(parseInt(e.target.value ===
                        '' ? 0 : e.target.value, 10))}
                    placeholder="Size of Qr-code"
                />
                <br />
                <br />
                <br />
                {value && (
                    <QRCode
                        title={title}
                        value={value}
                        bgColor={back}
                        fgColor={fore}
                        size={size === '' ? 0 : size}

                    />
                )}
            </center>
        </div>
    );
}

export default qrcode