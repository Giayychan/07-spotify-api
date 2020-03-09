const router = require('express').Router()
const db = require('../db')

router.get('/', (req, res) => {
	db.query(
		`SELECT albums.id, albums.name, albums.cover, artists.name AS "artist", artists.cover AS "artist cover" FROM albums
LEFT JOIN artists
ON albums.artist = artists.id`,
		(err, results) => {
			if (err) {
				res.send(err)
			} else {
				res.send(results)
			}
		}
	)
})

router.get('/:id', (req, res) => {
	db.query(
		`SELECT albums.id, albums.name, albums.cover, artists.name AS 'artist', artists.cover AS 'artist cover' FROM albums LEFT JOIN artists ON albums.artist = artists.id WHERE albums.id =${req.params.id}`,
		(err, results) => {
			if (err) {
				res.send(err)
			} else {
				res.send(results)
			}
		}
	)
})

module.exports = router
