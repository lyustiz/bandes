export const state = () => ({
	show: 		false,
	color: 		'error',
	text: 		'Ha ocurrido un error',
	subText: 	'',
	timeout: 	3000
})

export const getters = {
	msjShow:     state => state.show,
	msjColor:    state => state.color,
	msjText:     state => state.text,
	msjSubtext:  state => state.subText,
	msjTimeout:  state => state.timeout,
}

export const mutations = {

	setMsjShow (state, show)
	{
		state.show 	= show
	},
	setMsjColor(state, color)
	{
		state.color = color
	},
	setMsjText(state, text)
	{
		state.text 	= text || 'Ha ocurrido un error'
	},
	setMsjSubText(state, subText)
	{
		state.subText = subText
	},
	setMsjTimeOut(state, timeout)
	{
		state.timeout = timeout
	},
}