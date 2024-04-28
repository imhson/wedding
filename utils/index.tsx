export function removeElement(element: any) {
  if (typeof element === 'string') {
    element = document.querySelector(element)
  }
  return function () {
    element.parentNode.removeChild(element)
  }
}
export function disableScroll() {
  if (document.readyState === 'complete') {
    if (document.body.scrollHeight > window.innerHeight) {
      document.body.style.marginTop = `-${window.pageYOffset}px`
      document.body.style.position = 'fixed'
      document.body.style.overflowY = 'scroll'
    }
  } else {
    window.addEventListener('load', () => disableScroll())
  }
}

export function enableScroll() {
  if (document.readyState === 'complete') {
    document.body.style.position = ''
    document.body.style.overflowY = ''

    if (document.body.style.marginTop) {
      const scrollTop = -parseInt(document.body.style.marginTop, 10)
      document.body.style.marginTop = ''
      window.scrollTo(window.pageXOffset, scrollTop)
    }
  } else {
    window.addEventListener('load', enableScroll)
  }
}
