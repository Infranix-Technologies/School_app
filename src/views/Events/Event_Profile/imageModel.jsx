

import React, { useState } from 'react'
import { Button, Dialog, FormContainer, Input, FormItem, Card } from 'components/ui'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlinePlusCircle } from 'react-icons/hi'

const ImageModel = (props) => {
    const [dialogIsOpen, setIsOpen] = useState(false)


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "gray", borderRadius: '50%', zIndex: '2', position: 'absolute', right: '15px', }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        console.log(className)
        return (
            <div
                className={className}
                style={{ ...style, background: "gray", borderRadius: '50%', zIndex: '2', position: 'absolute', left: '15px', }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 1,
        slidesToScroll: 1,


    };
    const openDialog = () => {
        setIsOpen(true)
    }

    const onDialogClose = e => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = e => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }

    return (
        <div>


            <Button variant="plain" onClick={props.openDialog} style={{ color: 'blue' }}>Show More</Button>
            <Dialog
                isOpen={props.dialogIsOpen}
                onClose={props.onDialogClose}
                onRequestClose={props.onDialogClose}
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={false}
                width={"50vw"}

            >
                <div ><span style={{ fontSize: '18px', fontWeight: 800 }}> All Images</span></div>
                <div>
                    <div>

                        <Slider {...settings} >
                            <div>
                                <div style={{ display: "flex", width: '100%', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>
                                    <img src='https://www.yakubevents.com/assets/images/college_events/ce1.jpg' alt='Error' style={{ height: '100%', width: '100%' }} />
                                </div>
                            </div>
                            <div>
                                <div style={{ display: "flex", width: '100%', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2xjSh5fWtcNWgNhHg3pdDIjSHVx4hac7y-w&usqp=CAU' alt='Error' style={{ height: '100%', width: '100%' }} />
                                </div>
                            </div>
                            <div>
                                <div style={{ display: "flex", width: '100%', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>
                                    <img src='https://www.yakubevents.com/assets/images/college_events/ce1.jpg' alt='Error' style={{ height: '100%', width: '100%' }} />
                                </div>
                            </div>
                            <div>
                                <div style={{ display: "flex", width: '100%', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>
                                    <img src='https://www.yakubevents.com/assets/images/college_events/ce1.jpg' alt='Error' style={{ height: '100%', width: '100%' }} />
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </Dialog>
        </div >
    )
}

export default ImageModel