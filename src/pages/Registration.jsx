import { Button, FormControl, Grid, MenuItem, Select, Stack, TextField, Typography, colors } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { doRegistration } from '../store/slice/registrationSlice';

const Registration = () => {
    const date = new Date();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        dispatch(doRegistration(data));
        reset();
        // You can handle form submission here
    };

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            sx={{
                height: "100%",
                color: colors.grey[800]
            }}
        >
            <Stack spacing={5} sx={{
                width: "100%",
                maxWidth: "500px"
            }}>
                <form onSubmit={handleSubmit(onSubmit)} method='POST'>
                    <Stack>
                        <Typography variant='h4' fontWeight={600} color={colors.grey[800]} mb={4}>
                            Registration Form
                        </Typography>
                        <Grid container spacing={2} display='flex' justifyContent='space-between'>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth sx={{ my: 1 }}>
                                    <Typography variant='subtitle2'>Select Partner</Typography>
                                    <Select {...register('partnerName', { required: true })} error={!!errors.partnerName} variant='standard'>
                                        <MenuItem value="Adarsh Sewa Samaj">Adarsh Sewa Samaj</MenuItem>
                                        <MenuItem value="Sewa Sarth Samiti">Sewa Sarth Samiti</MenuItem>
                                        <MenuItem value="Self">Self</MenuItem>
                                        <MenuItem value="Jyoti Coaching Center">Jyoti Coaching Center</MenuItem>
                                    </Select>
                                    {errors.partnerName && <Typography color='error' sx={{fontSize: '12px'}}>Partner Name is required</Typography>}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth sx={{ my: 1 }}>
                                    <Typography variant='subtitle2'>Select Course</Typography>
                                    <Select {...register('course', { required: true })} error={!!errors.course} variant='standard'>
                                        <MenuItem value="GDA Home Care">GDA Home Care</MenuItem>
                                        <MenuItem value="Beautician">Beautician</MenuItem>
                                        <MenuItem value="Computer Course">Computer Course</MenuItem>
                                        <MenuItem value="Sewing Course">Sewing Course</MenuItem>
                                        <MenuItem value="Remedial Classes">Remedial Classes</MenuItem>
                                    </Select>
                                    {errors.course && <Typography variant='body2' color='error' sx={{ fontSize: '12px' }}>Course is required</Typography>}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='subtitle2'>Candidate Name</Typography>
                                <TextField {...register('candidateName', { required: true })} error={!!errors.candidateName} fullWidth variant="standard" sx={{ mb: 1 }} helperText={errors.candidateName && "Candidate Name is required"} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='subtitle2'>Father Name</Typography>
                                <TextField {...register('fatherName', { required: true })} error={!!errors.fatherName} fullWidth variant="standard" sx={{ mb: 1 }} helperText={errors.fatherName && "Father Name is required"} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='subtitle2'>Mother Name</Typography>
                                <TextField {...register('motherName', { required: true })} error={!!errors.motherName} fullWidth variant="standard" sx={{ mb: 1 }} helperText={errors.motherName && "Mother Name is required"} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='subtitle2'>Date of Birth</Typography>
                                <TextField {...register('dateofBirth', { required: true })} error={!!errors.dateofBirth} fullWidth type="date" variant="standard" sx={{ mb: 1 }} defaultValue={date.toDateString()} helperText={errors.dateofBirth && "Date of Birth is required"} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='subtitle2'>Aadhar Card No.</Typography>
                                <TextField {...register('adharCard', { required: true })} error={!!errors.adharCard} fullWidth type="number" variant="standard" sx={{ mb: 1 }} helperText={errors.adharCard && "Adhar Card is required"} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='subtitle2'>WhatsApp No.</Typography>
                                <TextField {...register('whatsappNo', { required: true })} error={!!errors.whatsappNo} fullWidth type="number" variant="standard" sx={{ mb: 1 }} helperText={errors.whatsappNo && "Whatsapp Number is required"} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='subtitle2'>Alternate No.</Typography>
                                <TextField {...register('alternate', { required: true })} error={!!errors.alternate} fullWidth type="number" variant="standard" sx={{ mb: 1 }} helperText={errors.alternate && "Alternate Number is required"} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='subtitle2'>Email</Typography>
                                <TextField {...register('email', { required: true })} error={!!errors.email} fullWidth type="email" variant="standard" sx={{ mb: 1 }} helperText={errors.email && "Email is required"} />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Typography variant='subtitle2'>Address</Typography>
                                <TextField {...register('address', { required: true })} error={!!errors.address} fullWidth variant="standard" sx={{ mb: 1 }} helperText={errors.address && "Address is required"} />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Typography variant='subtitle2'>Qualification</Typography>
                                <TextField {...register('qualification', { required: true })} error={!!errors.qualification} fullWidth variant="standard" sx={{ mb: 1 }} helperText={errors.qualification && "Qualification is required"} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 4, }}>
                            <Button
                                type='submit'
                                variant='contained'
                                size='large'
                                sx={{
                                    bgcolor: colors.indigo[600],
                                    "&:hover": {
                                        bgcolor: colors.lightBlue[600]
                                    },
                                    borderRadius: 5,
                                    paddingX: '60px'
                                }}
                            >
                                Registration
                            </Button>
                        </Grid>
                    </Stack>
                </form>
            </Stack>
        </Stack>
    )
}

export default Registration
