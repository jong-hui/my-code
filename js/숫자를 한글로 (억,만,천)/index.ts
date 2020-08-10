export const numberToKorean = (price: number) => {
  const UCK_UNIT = 100000000
  const MAN_UNIT = 10000
  const CHEON_UNIT = 1000

  const uck = Math.floor(price / UCK_UNIT)
  const man = Math.floor((price % UCK_UNIT) / MAN_UNIT)
  const cheon = Math.floor((price % MAN_UNIT) / CHEON_UNIT)
  const namuji = Math.floor(price % CHEON_UNIT)

  let resultString = ""

  if (uck > 0) {
    resultString += `${uck.toLocaleString()}억`
  }

  if (man > 0) {
    resultString += `${resultString != "" ? " " : ""}${man.toLocaleString()}만`
  }

  if (cheon > 0) {
    resultString += `${resultString != "" ? " " : ""}${cheon.toLocaleString()}천`
  }

  if (namuji > 0) {
    resultString += `${resultString != "" ? " " : ""}${namuji.toLocaleString()}`
  }

  return resultString;
}