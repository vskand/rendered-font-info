let everything = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, a, span, i, em, strong') // Add or remove tags to your liking

everything.forEach((element) => {
	let fontFamily = getStyle(element, 'font-family')
	let fontWeight = getStyle(element, 'font-weight')
	let styleInfo = document.createElement('div')
	let fontFamilyInfo = document.createElement('span')
	let fontWeightInfo = document.createElement('span')

	styleInfo.className = 'styleInfo'

	fontFamilyInfo.innerText = `FF: ${fontfamily}`
	fontWeightInfo.innerText = ` W: ${fontWeight}`

	styleInfo.appendChild(fontFamilyInfo)
	styleInfo.appendChild(fontWeightInfo)

	styleInfo.style.width = 'fit-content'
	styleInfo.style.fontSize = '10px'
	styleInfo.style.background = '#adafbb'
	styleInfo.style.color = '#000'
	element.prepend(styleInfo)			
})

function getStyle(element, property) {
	return window.getComputedStyle(element, null).getPropertyValue(property)
}
