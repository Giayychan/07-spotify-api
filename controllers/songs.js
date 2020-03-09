const router = require('express').Router()
const db = require('../db')

router.get('/', (req, res) => {
	let where = ''
	if (req.query.album) {
		where = `WHERE albums.id = ${req.query.album}`
	}
	if (req.query.artist) {
		where = `WHERE artists.id = ${req.query.artist}`
	}
	if (req.query.genre) {
		where = `WHERE genres.id = ${req.query.genre}`
	}
	db.query(
		`SELECT
        songs.id,songs.name,
        songs.audio,albums.name AS 'album',
        albums.cover AS 'album cover',
        artists.name AS 'artist',
        artists.cover AS 'artist cover',
        genres.name AS 'genre'
      FROM songs
      LEFT JOIN albums ON songs.album = albums.id
      LEFT JOIN artists ON songs.artist = artists.id
      LEFT JOIN genres ON songs.genre = genres.id ${where}`,
		(err, results) => {
			if (err) {
				res.send(err)
			} else {
				res.send(results)
			}
		}
	)
})

router.get('/', (req, res) => {
	let where = ''
	if (req.query.album) {
		where = `WHERE albums.id = ${req.query.album}`
	}
	if (req.query.artist) {
		where = `WHERE artists.id = ${req.query.artist}`
	}
	if (req.query.genre) {
		where = `WHERE genres.id = ${req.query.genre}`
	}
	db.query(
		`SELECT
        songs.id,songs.name,
        songs.audio,albums.name AS 'album',
        albums.cover AS 'album cover',
        artists.name AS 'artist',
        artists.cover AS 'artist cover',
        genres.name AS 'genre'
      FROM songs
      LEFT JOIN albums ON songs.album = albums.id
      LEFT JOIN artists ON songs.artist = artists.id
      LEFT JOIN genres ON songs.genre = genres.id ${where}`,
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
