const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_SK)

router.post('/', (req, res) => {
	console.log(req.body.token)
	stripe.charges
		.create({
			amount: 100,
			currency: 'usd',
			description: 'Premium',
			source: req.body.token.id
		})
		.then(data => {
			res.send(data)
		})
		.catch(err => {
			res.send(req.body.error)
		})
})

module.exports = router
