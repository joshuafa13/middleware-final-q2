// app.js
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
	const time = new Date().toLocaleString('zh-tw', { timeZone: 'Asia/Taipei', hour12: false })
	const startTime = Date.now()
	next()
	res.once('finish', () => {
		const endTime = Date.now()
		// console.log(startTime, endTime)
		console.log(`${time} | ${req.method} from ${req.url} | total time: ${endTime - startTime}ms`)
	})
})

app.get('/', (req, res) => {
	res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
	res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
	res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
	res.send('新增一筆  Todo')
})

app.listen(port, () => {
	console.log(`App running on port ${port}`)
})
