$(function() {
	var now = new Date();
	$('.screen-content')
	.fbMessenger({
			botName: 'Rachit',
			botLogoUrl: 'img/logo-circ.svg',
			loop:false
		})
		.fbMessenger('start', { delay: 0 })
		.fbMessenger('typingIndicator', { delay: 500 })
		.fbMessenger('message', 'bot', 'Hey! I\'m Rachit. Welcome to my design portfolio.', { timestamp: now, delay: 2500 })

		.fbMessenger('showGenericTemplate', [
		{
		imageUrl: 'img/hey.gif',
		title: '',
		subtitle: '',
		buttons: []
		}
		], { delay: 600 })

		.fbMessenger('message', 'user', 'Hey Rachit! Tell me about yourself?', { timestamp: now, delay: 3000 })
		.fbMessenger('typingIndicator', { delay: 1000 })
		.fbMessenger('message', 'bot', 'I\'m an engineer passionate about design. Over 2 years of experience in creating engaging and functional products.', { timestamp: now, delay: 4500 })
		.fbMessenger('typingIndicator', { delay: 3000 })
		.fbMessenger('message', 'bot', 'and I\'m <b>looking for interesting opportunities</b> btw.', { timestamp: now, delay: 2000 })
		.fbMessenger('showQuickReplies', [
			'Great!',
			'Isn\'t everyone?',
			'Look at portfolio',
			'You\'re in!',
			'Okay'
		], { timestamp: now, delay: 100 })
		.fbMessenger('scrollQuickReplies', 3, { delay: 3000 })
		.fbMessenger('scrollQuickReplies', 0, { delay: 1000 })
		.fbMessenger('scrollQuickReplies', 4, { delay: 1000 })
		.fbMessenger('selectQuickReply', 2, { delay: 1200 })
		.fbMessenger('typingIndicator', { delay: 2000 })
		.fbMessenger('message', 'bot', 'I can\'t get around that. Can I? Link to my <a href="#scroll-to-work" id="bot-work">work.</a>', { timestamp: now, delay: 1500 })
		.fbMessenger('typingIndicator', { delay: 200 })
		.fbMessenger('message', 'bot', 'I\'d love to hear your thoughts!', { timestamp: now, delay: 1200 })
		.fbMessenger('message', '', '', { timestamp: now, delay: 0 })
		.fbMessenger('message', '', '', { timestamp: now, delay: 0 })

		.fbMessenger('run');
});



