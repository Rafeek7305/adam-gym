import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

const RouterContext = createContext({
  pathname: '/',
  navigate: () => {},
  search: '',
  hash: ''
})

export const useRouter = () => useContext(RouterContext)
export const useLocation = () => {
  const { pathname, search, hash } = useContext(RouterContext)
  return { pathname, search, hash }
}
export const useNavigate = () => {
  const { navigate } = useContext(RouterContext)
  return navigate
}

export function Router({ children }) {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname || '/')

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((to, options = {}) => {
    if (typeof to === 'number') {
      window.history.go(to)
      return
    }

    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:') || to.startsWith('tel:')) {
      window.location.href = to
      return
    }

    if (window.location.pathname !== to) {
      if (options.replace) {
        window.history.replaceState(null, '', to)
      } else {
        window.history.pushState(null, '', to)
      }
      setCurrentPath(to)
      window.scrollTo({ top: 0, behavior: 'instant' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  const value = {
    pathname: currentPath,
    navigate,
    search: window.location.search,
    hash: window.location.hash
  }

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function Routes({ children }) {
  const { pathname } = useContext(RouterContext)
  let matched = null

  React.Children.forEach(children, child => {
    if (!matched && React.isValidElement(child)) {
      const { path, element } = child.props
      if (path === '*' || path === pathname || (path !== '/' && pathname.startsWith(path))) {
        matched = element
      }
    }
  })

  return matched || null
}

export function Route({ path, element }) {
  return element
}

export function Link({ to, children, className = '', onClick, ...props }) {
  const { navigate, pathname } = useContext(RouterContext)

  const handleClick = (e) => {
    if (onClick) onClick(e)
    if (!e.defaultPrevented && !props.target && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
      e.preventDefault()
      navigate(to)
    }
  }

  return (
    <a href={to} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

export function NavLink({ to, children, className, activeClassName = 'active', ...props }) {
  const { pathname } = useContext(RouterContext)
  const isActive = to === '/' ? pathname === '/' : pathname.startsWith(to)

  const computedClass = typeof className === 'function' 
    ? className({ isActive }) 
    : `${className || ''} ${isActive ? activeClassName : ''}`.trim()

  return (
    <Link to={to} className={computedClass} {...props}>
      {typeof children === 'function' ? children({ isActive }) : children}
    </Link>
  )
}
