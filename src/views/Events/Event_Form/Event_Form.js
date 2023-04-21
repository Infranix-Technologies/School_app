
import React, { useState } from 'react'
import { Input, Button, Checkbox, FormItem, FormContainer, Select, Avatar, Upload, Radio, Table } from 'components/ui'
import { HiOutlinePlus, HiMinus, HiOutlineUser } from 'react-icons/hi'
import { Field, Form, Formik } from 'formik'
import { RichTextEditor } from 'components/shared'

const EventForm = () => {
    const [avatarImg, setAvatarImg] = useState(null)
    const onFileUpload = file => {
        setAvatarImg(URL.createObjectURL(file[0]))
    }

    const beforeUpload = files => {
        let valid = true

        const allowedFileType = ['image/jpeg', 'image/png']

        for (let file of files) {
            if (!allowedFileType.includes(file.type)) {
                valid = 'Please upload a .jpeg or .png file!'
            }
        }

        return valid
    }
    return (
        <div className=''>

            <Formik>
                <Form>
                    <FormContainer className="grid grid-cols-7 ">

                        <FormContainer className=" col-span-4">


                            <FormContainer className="grid grid-cols-4">

                                <FormContainer className="col-span-2 ">
                                    <FormItem
                                        className=""

                                        asterisk
                                        label="Event Name"
                                        style={{ margin: '0', padding: '0' }}

                                    >
                                        <Field size={"sm"} type="text" autoComplete="off" placeholder="Event Name" component={Input} />
                                    </FormItem>
                                </FormContainer>
                                <FormContainer className="col-span-2">


                                    <FormItem
                                        className=" "

                                        asterisk
                                        label="Host Name"
                                        style={{ margin: '0', padding: '0' }}

                                    >


                                        <Field size={"sm"} type="text" autoComplete="off" placeholder="Host Name" component={Input} />


                                    </FormItem>



                                </FormContainer>
                            </FormContainer>

                            <FormContainer className="grid grid-cols-2 gap-1">
                                <FormContainer className="col-span-1">
                                    <FormItem
                                        className=""

                                        asterisk
                                        label="Date"
                                        style={{ margin: '0', padding: '0' }}

                                    >


                                        <Field size={"sm"} type="Date" autoComplete="off" placeholder="Host Name" component={Input} />


                                    </FormItem>
                                </FormContainer >
                                <FormContainer className="col-span-1">
                                    <FormContainer className='grid grid-cols-2 gap-1'>
                                        <FormContainer className="col-span-1 ">
                                            <FormItem
                                                className=" "

                                                asterisk
                                                label="Start"
                                                style={{ margin: '0', padding: '0' }}

                                            >


                                                <Field size={"sm"} type="time" autoComplete="off" placeholder="Host Name" component={Input} />


                                            </FormItem>
                                        </FormContainer>
                                        <FormContainer className="col-span-1  ">
                                            <FormItem
                                                className=""

                                                asterisk
                                                label="End"
                                                style={{ margin: '0', padding: '0' }}

                                            >


                                                <Field size={"sm"} type="time" autoComplete="off" placeholder="Host Name" component={Input} />


                                            </FormItem>
                                        </FormContainer>
                                    </FormContainer>
                                </FormContainer >
                            </FormContainer>

                            <FormContainer>
                                <FormItem
                                    className=""

                                    asterisk
                                    label="About The Event"
                                    style={{ margin: '0', padding: '0' }}

                                >

                                    <RichTextEditor />


                                </FormItem>

                            </FormContainer>


                        </FormContainer>






                        <FormContainer className=" col-span-3 " >
                            <FormItem
                                className="mx-1"

                                asterisk
                                label="Uplode Image"
                                style={{ margin: '0', padding: '0' }}

                            >
                                <Upload
                                    className="cursor-pointer "
                                    style={{ width: '100%', height: '125px' }}
                                    onChange={onFileUpload}
                                    showList={false}
                                    uploadLimit={1}
                                    beforeUpload={beforeUpload}

                                >
                                    <Avatar style={{ width: '100%', height: '100%' }} src={avatarImg} icon={<HiOutlinePlus />} />
                                </Upload>
                            </FormItem>

                        </FormContainer>
                    </FormContainer>
                </Form>
            </Formik>

        </div >

    )
}

export default EventForm;