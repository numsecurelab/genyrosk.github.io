import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { useSpring, animated, interpolate } from 'react-spring'

import { ReactComponent as MenuLogo } from '../../assets/img/menu.svg'
import { ReactComponent as CloseLogo } from '../../assets/img/close.svg'
import Contacts from '../Contacts'
import styles from './Sidebar.module.scss'

const SpringButton = ({ toggled, setToggled }) => {
  const { opacity, transform, scale } = useSpring({
    opacity: toggled ? 1 : 0,
    transform: `rotate(${toggled ? 360 : 0}deg)`,
    scale: toggled ? 1 : 0,
    config: { mass: 1, tension: 170, friction: 23 },
  })

  return (
    <div
      onClick={() => setToggled(!toggled)}
      className={styles['spring-btn__container']}
    >
      <animated.div
        className={[styles.btn, styles.animated].join(' ')}
        style={{
          opacity: interpolate(opacity, o => 1 - o),
          transform: interpolate(
            [transform, scale],
            (t, s) => `${t} scale(${1 - s}, ${1 - s})`
          ),
        }}
      >
        <MenuLogo width={27} height={27} />
      </animated.div>
      <animated.div
        className={[styles.btn, styles.animated].join(' ')}
        style={{
          opacity,
          transform: interpolate(
            [transform, scale],
            (t, s) => `${t} scale(${s}, ${s})`
          ),
        }}
      >
      <CloseLogo width={22} height={22} />
      </animated.div>
    </div>
  )
}

const Sidebar = () => {
  // local state
  const [active, setActive] = useState(false)
  // animation config
  const props = useSpring({
    x: active ? -25 : -300,
    config: { mass: 1, tension: 400, friction: 40 },
  })

  // capture outside clicks, except for the open/close button
  const node = useRef()
  const exceptNode = useRef()
  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false)
    return () => document.removeEventListener('mousedown', handleClick, false)
  }, [])
  const handleClick = e => {
    if (
      node.current.contains(e.target) ||
      exceptNode.current.contains(e.target)
    ) {
      return
    }
    setActive(false)
  }

  return (
    <>
      <div className={styles['spring-btn__wrapper']} ref={exceptNode}>
        <SpringButton toggled={active} setToggled={setActive} />
      </div>
      <animated.div
        ref={node}
        className={styles['sidebar']}
        style={{
          right: props.x,
        }}
      >
        {/* <h3>Sidebar bruv</h3> */}
        <Contacts className={styles['contacts__list']} showNames />
        <div className={styles['delimeter']} />
        <Link className={styles.link} to="/">
          home
        </Link>
        <Link className={styles.link} to="/about-me/">
          about me
        </Link>
      </animated.div>
    </>
  )
}

export default Sidebar
