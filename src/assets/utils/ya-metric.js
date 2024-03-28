
export const reachGoal = (action) => {
  if (typeof window != 'undefined' && typeof window.ym != 'undefined') {
    if (import.meta.env.PROD) {
      window.ym(Number(import.meta.env.VITE_YM_ID), 'reachGoal', action)
    } else {
      console.log('reachGoal', action)
    }
  }
}

export const hit = (url) => {
  if (typeof window != 'undefined' && typeof window.ym != 'undefined') {
    if (import.meta.env.PROD) {
      window.ym(Number(import.meta.env.VITE_YM_ID), 'hit', url)
    } else {
      console.log('hit', url)
    }
  }
}
