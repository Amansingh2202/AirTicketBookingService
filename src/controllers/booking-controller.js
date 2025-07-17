const {BookingService}=require('../services/index.js');
const {StatusCodes}=require('http-status-codes');

const bookingService= new BookingService();


const create=async (req,res)=>{
    try{
        const response=await bookingService.createBooking(req.body);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'Booking created successfully',
            data:response,
            err:{}
        }); 
    }
    catch(error){
        return res.status(error.statusCode|| StatusCodes.INTERNAL_SERVER_ERROR).json({
            message:error.message,
            success:false,
            err:error.explantion,
            data:{}
        })


    }
}



const cancel = async (req, res) => {
    try {
      const bookingId = req.params.id;
      const response = await bookingService.cancelBooking(bookingId);
  
      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Booking cancelled successfully",
        data: response,
        err: {}
      });
    } catch (error) {
      return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: error.message,
        success: false,
        err: error.explanation,
        data: {}
      });
    }
  };


module.exports={
 create,
 cancel
}