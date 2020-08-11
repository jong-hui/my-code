export /**
 * @example 
  useWhen(
    () => (by == undefined || by != "store" && by != "bundle"),
    () => {
      alert("잘못된 접근입니다.")
      window.location.href = "/"
    },
    [by]
  )
 *
 * @param {() => boolean} conditioner
 * @param {() => void} callback
 * @param {React.DependencyList} [deps]
 */

const useWhen = (conditioner: () => boolean, callback: () => void, deps?: React.DependencyList) => {
  useEffect(() => {
    let active = true

    if (active && conditioner()) {
      callback()
      active = false
    }

    return () => {
      active = false
    }
  }, [deps])
}