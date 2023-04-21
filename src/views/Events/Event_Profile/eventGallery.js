import { Card, Button } from 'components/ui'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, } from 'react-icons/hi'
import ImageModel from './imageModel';

const EventGallery = () => {
    const [dialogIsOpen, setIsOpen] = useState(false)
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

            <div>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}> Event gallery</p>

            </div>
            <div className=' grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-3  grid-cols-2'>
                <div className='col-span-1'>
                    <motion.div
                        // className="box"

                        whileHover={{ scale: 1.03 }}
                        // whileTap={{ scale: 0.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    >
                        <div onClick={openDialog} className='m-1' style={{ height: '25vh' }}>
                            <img src='https://www.yakubevents.com/assets/images/college_events/ce1.jpg' alt='Error' style={{ height: '100%', width: '100%' }} />
                        </div>
                    </motion.div>
                </div>
                <div className='col-span-1 '>
                    <motion.div
                        // className="box"

                        whileHover={{ scale: 1.03 }}
                        // whileTap={{ scale: 0.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    >
                        <div onClick={openDialog} className='m-1' style={{ height: '25vh' }}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2xjSh5fWtcNWgNhHg3pdDIjSHVx4hac7y-w&usqp=CAU' alt='Error' style={{ height: '100%', width: '100%' }} />
                        </div>
                    </motion.div>
                </div>
                <div className='col-span-1 '>
                    <motion.div
                        // className="box"

                        whileHover={{ scale: 1.03 }}
                        // whileTap={{ scale: 0.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    >
                        <div onClick={openDialog} className='m-1' style={{ height: '25vh' }}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HRNR8FajYTVg3xwW5Jt_-z4T-94DFGP2DQ&usqp=CAU' alt='Error' style={{ height: '100%', width: '100%' }} />
                        </div>
                    </motion.div>
                </div>
                <div className='col-span-1 '>
                    <motion.div
                        // className="box"

                        whileHover={{ scale: 1.03 }}
                        // whileTap={{ scale: 0.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    >
                        <div onClick={openDialog} className='m-1' style={{ height: '25vh' }}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMszZESEIgnPPN8ftH59p0kX4r2s6Q-iuhw&usqp=CAU' alt='Error' style={{ height: '100%', width: '100%' }} />
                        </div>
                    </motion.div>
                </div>
                <div className='col-span-1 '>
                    <motion.div
                        // className="box"

                        whileHover={{ scale: 1.03 }}
                        // whileTap={{ scale: 0.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    >
                        <div onClick={openDialog} className='m-1' style={{ height: '25vh' }}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXU4ZS5LzDAjhIlU7rvhksIIIkPNb7Vki0g&usqp=CAU' alt='Error' style={{ height: '100%', width: '100%' }} />
                        </div>
                    </motion.div>
                </div>
                <div className='col-span-1 '>
                    <motion.div
                        // className="box"

                        whileHover={{ scale: 1.03 }}
                        // whileTap={{ scale: 0.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    >
                        <div onClick={openDialog} className='m-1' style={{ height: '25vh' }}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxj75HNPpbWj7FB7Ngd2C8LtpV_9zNuABxg&usqp=CAU' alt='Error' style={{ height: '100%', width: '100%' }} />
                        </div>
                    </motion.div>
                </div>
                <div className='col-span-1 '>
                    <motion.div
                        // className="box"

                        whileHover={{ scale: 1.03 }}
                        // whileTap={{ scale: 0.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    >
                        <div onClick={openDialog} className='m-1' style={{ height: '25vh' }}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ027XrRv5An29FwIS0Av6DQmiQt1Ti2o-MA&usqp=CAU' alt='Error' style={{ height: '100%', width: '100%' }} />
                        </div>
                    </motion.div>
                </div>
                <div className='col-span-1 '>
                    <motion.div
                        // className="box"

                        whileHover={{ scale: 1.03 }}
                        // whileTap={{ scale: 0.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    >
                        <div onClick={openDialog} className='m-1' style={{ height: '25vh' }}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTdVAtRLQEIvvYX-UFNiLk80mIQ-DJz-q2g&usqp=CAU' alt='Error' style={{ height: '100%', width: '100%' }} />
                        </div>
                    </motion.div>

                </div>
                <div className='col-span-1 '>
                    <motion.div
                        // className="box"

                        whileHover={{ scale: 1.03 }}
                        // whileTap={{ scale: 0.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    >
                        <div onClick={openDialog} className='m-1' style={{ height: '25vh' }}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13VHGe7QBYtZq5waKXNENoa2BFk4zBe2Hvg&usqp=CAU' alt='Error' style={{ height: '100%', width: '100%' }} />
                        </div>
                    </motion.div>

                </div>
                <div className='col-span-1 '>
                    <motion.div
                        // className="box"

                        whileHover={{ scale: 1.03 }}
                        // whileTap={{ scale: 0.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    >
                        <div onClick={openDialog} className='m-1' style={{ height: '25vh' }}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9f7jxUIFqeNP3YLSIvOGESBkHGUdjGXOMOBqlrkGoxLgG6Ocar1_oAV1hOe2eKa2UTQ&usqp=CAU' alt='Error' style={{ height: '100%', width: '100%' }} />
                        </div>
                    </motion.div>

                </div>

            </div>
            <div className='float-right'>
                <ImageModel openDialog={openDialog} onDialogClose={onDialogClose} onDialogOk={onDialogOk} dialogIsOpen={dialogIsOpen} /></div>
        </div>
    )
}
export default EventGallery
