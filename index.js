const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const messages = [
	{ id: 1, name: 'hello', content: 'welcome to REST' },
	{ id: 2, name: 'bye', content: 'goodbye from REST' },
];
app.get('/', (req, res) => {
	res.send('Welcome Jenkins');
});

app.get('/messages/:id', (req, res) => {
	const message = messages.find(c => c.id === parseInt(req.params.id));
	if (!message) res.status(404).send('Requested message not found');
	res.send(message);
});
app.get('/messages', (req, res) => {
	res.send(messages);
});	
app.post('/messages', (req, res) => {
	const message = {
		id: messages.length + 1,
		name: req.body.name,
		content: req.body.content
	};
	messages.push(message);
	res.send(message);
});

app.listen(3030, () => console.log('Listening on port 3030'));
