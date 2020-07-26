import express from 'express';
import { currentUser } from '@duc.q/common';
// import { requireAuth } from '../middlewares/require-auth';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({
    currentUser: req.currentUser || null
  })
})

// router.get('/api/users/currentuser', currentUser, requireAuth, (req, res) => {
//   res.send({
//     currentUser: req.currentUser || null
//   })
// })

export { router as currentUserRouter }