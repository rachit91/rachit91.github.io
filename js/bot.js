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
		.fbMessenger('message', 'bot', 'Hi, I\'m Rachit - a product focused designer inspired by human emotions and curiosity.', { timestamp: now, delay: 500 })
		.fbMessenger('message', 'bot', 'Currently, I\'m working at Walmart Labs.', { timestamp: now, delay: 500 })

		.fbMessenger('showGenericTemplate', [
		{
		imageUrl: 'img/hey.gif',
		title: '',
		subtitle: '',
		buttons: []
		}
		], { delay: 200 })

		.fbMessenger('message', 'user', 'I see that you\'re into chats and messaging.', { timestamp: now, delay: 2000 })
		.fbMessenger('typingIndicator', { delay: 500 })
		.fbMessenger('message', 'bot', 'I sure am! Scroll down for my work or follow the links:', { timestamp: now, delay: 2000 })
		.fbMessenger('message', '', '', { timestamp: now, delay: 0 })
		.fbMessenger('showQuickReplies', [
			'<a href="#scroll-to-work" id="work-link">Work</a>',
			'<a href="https://medium.com/@rachitgupta" target="_blank">Thoughts</a>',
			'<a href="about.html" target="_blank">About</a>',
			'<a href="resume.pdf" target="_blank">Resume</a>'
		], { timestamp: now, delay: 500 })
		// .fbMessenger('scrollQuickReplies', 3, { delay: 2000 })
		// .fbMessenger('scrollQuickReplies', 0, { delay: 1000 })
		// .fbMessenger('scrollQuickReplies', 4, { delay: 1000 })
		// .fbMessenger('selectQuickReply', 2, { delay: 1200 })
		// .fbMessenger('typingIndicator', { delay: 2000 })
		// .fbMessenger('message', 'bot', 'Obvious choice, haha', { timestamp: now, delay: 1000 })
		// .fbMessenger('typingIndicator', { delay: 200 })
		// .fbMessenger('message', 'bot', 'You gotta scroll down now.. DO IT!', { timestamp: now, delay: 800 })
		// .fbMessenger('message', '', '', { timestamp: now, delay: 0 })
		// .fbMessenger('message', '', '', { timestamp: now, delay: 0 })

		.fbMessenger('run');
});




