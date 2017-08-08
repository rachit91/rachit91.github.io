$(function() {
	var now = new Date();
	$('.screen-content')
	.fbMessenger({
			botName: 'Rachit',
			botLogoUrl: 'img/logo-circ.svg',
			loop:false
		})
		.fbMessenger('start', { delay: 0 })
		.fbMessenger('typingIndicator', { delay: 1200 })
		.fbMessenger('message', 'bot', 'Hi, I\'m Rachit - a product focused designer inspired by human emotions.', { timestamp: now, delay: 800 })
		.fbMessenger('message', 'bot', 'Rolling beans at <b>Walmart Labs</b> 😆', { timestamp: now, delay: 1200 })
		.fbMessenger('typingIndicator', { delay: 800 })

		.fbMessenger('showGenericTemplate', [
		{
		imageUrl: 'img/hey.gif',
		title: '',
		subtitle: '',
		buttons: []
		}
		], { delay: 1500 })

		.fbMessenger('message', 'user', 'I\'m only here to see your work bruh, show and tell..', { timestamp: now, delay: 3000 })
		.fbMessenger('typingIndicator', { delay: 2500 })
		.fbMessenger('message', 'bot', 'I knew you would think that. <a href="https://rachit91.github.io/bundles-proto" target="_blank">Product Page - Bundles</a> is my latest project. Not live yet so.. there\'s more', { timestamp: now, delay: 1500 })
		.fbMessenger('message', '', '', { timestamp: now, delay: 0 })
		.fbMessenger('showQuickReplies', [
			'<a href="#scroll-to-work" id="work-link">Work</a>',
			'<a href="https://medium.com/@rachitgupta" target="_blank">Writing</a>',
			'<a href="about.html" target="_blank">About</a>',
			'<a href="resume.pdf" target="_blank">Resume</a>'
		], { timestamp: now, delay: 1500 })
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




