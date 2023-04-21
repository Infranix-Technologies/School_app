import { Avatar, Button } from 'components/ui'
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react'
import { HiOutlineUser, HiOutlineUserCircle } from 'react-icons/hi'

const Description = () => {
    const matches = useMediaQuery('(max-width:1279px)');
    return (
        <div>
            <div className='grid xl:grid-cols-10  lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-7 pt-4'>
                <div className='xl:col-span-7 lg:col-span-7 md:col-span-7 sm:col-span-7  xl:pr-3' style={!matches ? { borderRight: '0.5px solid #e5e7eb' } : {}}>

                    <p className='mt-2' style={{ fontSize: "20px", fontWeight: "bold" }}> ABOUT </p>
                    <div className=' mx-1'>
                        <p>
                            <strong >football tournament</strong>
                        </p>
                        <p>Football, also called association football or soccer, is a game involving two teams of 11 players who try to maneuver the ball into the other team's goal without using their hands or arms. The team that scores more goals win into the other team's goal
                            without using their hands or arms. The team that scores more goals wins Football, also called association football or soccer, is a game involving two teams of 11 players who try to maneuver the ball into the other team's goal without using their hands
                            or arms. The team that scores more goals wins into the other team's goal without using their hands or arms. The team that scores more goals wins</p>
                        <p>
                            <strong >Rules And Regulations</strong>
                        </p>
                        <ul className="list-none list-inside">
                            <li>All categories will play 7-a-side. The match will consist of two 12 minute periods, with 2 minute halftime, and using an age appropriate ball.</li>
                            <li>There will be a maximum of 2 minutes of added time, as determined by the referee.</li>
                            <li>Each team must have a minimum of 4 players on the field to play the match. A maximum of 12 registered players allowed per game.</li>

                            <li>The offside law will not apply.</li>
                        </ul>
                        <p>
                            <br />
                        </p>
                    </div>


                </div>
                <div className='xl:col-span-3 lg:col-span-4 md:col-span-5 sm:col-span-6 flex flex-col justify-between pb-2 xl:pl-3  ' style={!matches ? { borderLeft: '0.5px solid #e5e7eb' } : {}}>
                    <div>
                        <p className='mt-2' style={{ fontSize: "20px", fontWeight: "bold" }}> HOST </p>
                        <div className='flex  items-center mx-1'>
                            <div>
                                <Avatar size={50} shape="circle" className="mr-3" icon={<HiOutlineUser />} />
                            </div>
                            <div>
                                <p style={{ fontSize: "13px", fontWeight: "bold" }}>Amit Kumar Yadav</p>
                                <p>Manager</p>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div>

                            <p className='mt-2' style={{ fontSize: "20px", fontWeight: "bold" }}> Who's Goes </p>
                        </div>
                        <div className='mx-1'>
                            <Avatar.Group
                                chained
                                maxCount={4}
                                omittedAvatarProps={{ shape: 'circle' }}
                                omittedAvatarTooltip
                                onOmittedAvatarClick={() => console.log('Omitted Avatar Clicked  Successfully')}
                            >
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />

                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                                <Avatar shape="circle" icon={<HiOutlineUserCircle/>} />
                            </Avatar.Group>
                        </div>

                    </div>
                    <div>
                        <div>

                            <p className='mt-2' style={{ fontSize: "20px", fontWeight: "bold" }}> Who's Goes </p>
                        </div>
                        <div className='flex  mx-1'>
                            <Button className="mx-1" size={"sm"} variant="solid" style={{ width: '85px' }}>May Be</Button>
                            <Button className="mx-1" size={"sm"} variant="solid" style={{ width: '85px' }}>Going</Button>
                            <Button className="mx-1" size={"sm"} variant="solid" style={{ width: '85px' }}>Not Going</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Description