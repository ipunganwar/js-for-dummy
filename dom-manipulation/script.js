const body = document.body

//1. ADDING Element
// append vs appendChild
/** 
 * append can add String value to DOM
 * can append multiple String:
 * body.append('Hello World', 'Bye')
 */
 body.append('Hello World', ' Bye')

/**
 * body.appendChild()
 * appendChild can only append element (div, span, etc) 
 */
//  body.appendChild()

// ===================

//2. Creating Element
const div = document.createElement('div')
/**
 * innerText : only visible based on display visibility (display: none), will hidden this text on page when display: none
 * textContent: always visible, if it has been hidden or not if you using console.log
 */
div.innerText = 'Append Div \n'
// div.textContent = 'Append Div 2'
body.append(div)

// =======================
// 3. Modifying Element HTML
/**
 * innerHTML: using innerHTML if you had element that you want be render
 * or for recomendation, create new element to render this new element
 */
const strong = document.createElement('strong')
strong.innerText = 'Hello Inner HTML'
div.append(strong)
// div.innerHTML = '<strong>Hello Inner HTML</strong>'