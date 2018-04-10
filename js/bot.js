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
	// .fbMessenger('message', 'bot', 'When I was 6, my sister was half my age. Now, I\'m 26. How old is she?', { timestamp: now, delay: 800 })
	// .fbMessenger('message', 'user', '🤔 🤔', { timestamp: now, delay: 4000 })
	// .fbMessenger('typingIndicator', { delay: 2000 })
	.fbMessenger('message', 'bot', 'Hello, I\'m <b>Rachit</b> - UX Designer at Google', { timestamp: now, delay: 1500 })
	//.fbMessenger('message', 'bot', 'Rolling beans at <b>Walmart Labs</b> 😆', { timestamp: now, delay: 1200 })

	.fbMessenger('showGenericTemplate', [
	{
	imageUrl: 'img/hey.gif',
	title: '',
	subtitle: '',
	buttons: []
	}
	], { delay: 1500 })

	.fbMessenger('message', 'user', '😸 🤙', { timestamp: now, delay: 3000 })
	.fbMessenger('typingIndicator', { delay: 2500 })
	.fbMessenger('message', 'bot', 'haha', { timestamp: now, delay: 1500 })
	.fbMessenger('typingIndicator', { delay: 1000 })
	.fbMessenger('message', 'bot', 'below is my work, blog and more.. let\'s connect!', { timestamp: now, delay: 1500 })
	.fbMessenger('message', '', '', { timestamp: now, delay: 0 })
	.fbMessenger('showQuickReplies', [
		'<a href="#scroll-to-work" id="work-link">Work</a>',
		'<a href="https://medium.com/@rachitgupta" target="_blank">Writing</a>',
		'<a href="#scroll-to-about">About</a>',
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
