const main = () => {
  const date = new Date()
  const viewBox = 150
  const handX = viewBox / 2
  const handY = viewBox / 2

  const hourHand = document.querySelector(".hourHand")
  const hourHandAnimation = document.querySelector(".hourHand > animatetransform")
  let hours = 360 * date.getHours() / 12 + date.getMinutes() / 2
  let animateHoursFrom = [hours, handX, handY].join(' ')
  let animateHoursTo = [hours + 360, handX, handY].join(' ')
  hourHandAnimation.setAttribute("from", animateHoursFrom)
  hourHandAnimation.setAttribute("to", animateHoursTo)

  const minuteHand = document.querySelector(".miniuteHand")
  const minuteHandAnimation = document.querySelector(".minuteHand > animatetransform")
  let minutes = 360 * date.getMinutes() / 60
  let animateMinutesFrom = [minutes, handX, handY].join(' ')
  let animateMinutesTo = [minutes + 360, handX, handY].join(' ')
  minuteHandAnimation.setAttribute("from", animateMinutesFrom)
  minuteHandAnimation.setAttribute("to", animateMinutesTo)

  const secondHand = document.querySelector(".secondHand")
  const secondHandAnimation = document.querySelector(".secondHand > animatetransform")
  let seconds = 360 * date.getSeconds() / 60
  let animateSecondsFrom = [seconds, handX, handY].join(' ')
  let animateSecondsTo = [seconds + 360, handX, handY].join(' ')
  secondHandAnimation.setAttribute("from", animateSecondsFrom)
  secondHandAnimation.setAttribute("to", animateSecondsTo)
}
main()
