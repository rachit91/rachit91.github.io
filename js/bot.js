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
		.fbMessenger('message', 'bot', 'Yo! I am excited about the fusion of human nature and tech with Chatbots.', { timestamp: now, delay: 1000 })
		.fbMessenger('message', 'bot', 'and this is a little demo I am featuring..', { timestamp: now, delay: 300 })

		.fbMessenger('showGenericTemplate', [
		{
		imageUrl: 'img/hey.gif',
		title: '',
		subtitle: '',
		buttons: []
		}
		], { delay: 200 })

		.fbMessenger('message', 'user', 'And why should a designer spend time on that?', { timestamp: now, delay: 2000 })
		.fbMessenger('typingIndicator', { delay: 800 })
		.fbMessenger('message', 'bot', 'We are witnessing a platform shift. Messaging was already big and bots running inside a messaging app made it bigger!', { timestamp: now, delay: 2500 })
		.fbMessenger('typingIndicator', { delay: 1000 })
		.fbMessenger('message', 'bot', 'and blah blah..', { timestamp: now, delay: 2000 })
		.fbMessenger('message', 'bot', 'Ok choose from the following options:', { timestamp: now, delay: 800 })
		.fbMessenger('showQuickReplies', [
			'My life',
			'My GLA45 AMG',
			'My portfolio',
			'My design process',
			'My bot'
		], { timestamp: now, delay: 200 })
		.fbMessenger('scrollQuickReplies', 3, { delay: 2000 })
		.fbMessenger('scrollQuickReplies', 0, { delay: 1000 })
		.fbMessenger('scrollQuickReplies', 4, { delay: 1000 })
		.fbMessenger('selectQuickReply', 2, { delay: 1200 })
		.fbMessenger('typingIndicator', { delay: 2000 })
		.fbMessenger('message', 'bot', 'Obvious choice, haha', { timestamp: now, delay: 1000 })
		.fbMessenger('typingIndicator', { delay: 200 })
		.fbMessenger('message', 'bot', 'You gotta scroll down now.. DO IT!', { timestamp: now, delay: 800 })
		.fbMessenger('message', '', '', { timestamp: now, delay: 0 })
		.fbMessenger('message', '', '', { timestamp: now, delay: 0 })

		.fbMessenger('run');
});



