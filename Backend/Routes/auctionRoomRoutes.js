const express = require('express');
const auctionRoomController = require('../controller/auctionRoomController');
const router = express.Router();


router.post('/auction-rooms', auctionRoomController.createAuctionRoom);


router.get('/auction-rooms', auctionRoomController.getAuctionRooms);


router.get('/auction-rooms/:id', auctionRoomController.getAuctionRoomById);

router.put('/auction-rooms/:id', auctionRoomController.updateAuctionRoom);

router.delete('/auction-rooms/:id', auctionRoomController.deleteAuctionRoom);

module.exports = router;
