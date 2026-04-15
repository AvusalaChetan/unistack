import { toggleMode } from '@/feature/ThemeSlice'
import type { RootState } from '@/redux/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export const useThemeSwitcher = () => {
  const dispatch = useDispatch()
  const mode = useSelector((state: RootState) => state.themeSlice.mode)

  const toggle = () => dispatch(toggleMode())
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return { mode, toggle }
}
