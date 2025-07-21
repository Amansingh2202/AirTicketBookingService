const express = require('express');
const {BookingController}=require('../../controllers/index.js') 
const router = express.Router();

// const {createChannel}= require('../../utils/messageQueue.js')
// const channel= createChannel()

const bookingController= new BookingController()


router.post('/bookings', bookingController.create);
router.patch('/bookings/:id/cancel',bookingController.cancel)
router.post('/publish',bookingController.sendMessageToQueue)



module.exports=router;