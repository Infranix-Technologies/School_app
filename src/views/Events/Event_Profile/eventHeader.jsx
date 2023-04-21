import { Avatar, Card } from 'components/ui'
import React from 'react'
import { HiOutlineUser, HiOutlinePhone, HiOutlineMail, HiOutlineGlobeAlt, HiOutlineClock } from 'react-icons/hi'
import { FiMapPin } from "react-icons/fi"
import footballcover from './footballcover.jpeg'
const EventHeader = () => {
    return (
        <div>
            <Card bodyClass="m-0 p-0 pt-14 lg:pt-5 " className=" flex flex-col-reverse mb-0" style={{

                minHeight: '15vw',
                position: 'relative'

            }} >
                <div style={{ height: '100%', width: '100%', position: "absolute", top: '0', borderRadius: ' 0.5rem' }}>
                    <img src={footballcover} alt='' style={{ height: '100%', width: '100%', borderRadius: ' 0.5rem' }} />
                </div>

                <div className='flex flex-col-reverse' style={{ position: "relative", backgroundColor: "#00000069", borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem' }}>
                    <div style={{ top: '-20px', position: "absolute", left: '20px' }}>
                        <div className='flex flex-col justify-center items-center' style={{ border: '1px solid #0d1282', width: '100px', height: '100px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '23px', fontWeight: '600', color: 'white', backgroundColor: '#0d1282', }}><span>20</span><span>Aug</span></div>

                    </div>

                    <div className='py-2 ' style={{ marginLeft: '140px' }} >


                        <div className=''>
                            <h2 style={{ color: "#fff", }} >Football tournament</h2>
                            <p style={{ color: "#fff", display: 'flex', alignItems: "center" }} ><span><HiOutlineClock fontSize={"12px"} /></span> &nbsp;<span>8:30 am</span> &nbsp; - &nbsp; <span> 12:20 pm</span> </p>

                        </div>
                        <div className=' pr-3' >
                            <div className='flex' style={{ color: "#fff", fontSize: "12px" }}>

                                <span className='flex' style={{ alignItems: "center" }}><FiMapPin />&nbsp;School Ground</span>
                            </div>



                        </div>
                    </div>

                </div>

            </Card >
        </div>
    )
}
export default EventHeader
